(function () {
  const data = window.LEDGER;
  if (!data) return;

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const WATCH_KEY = "usd-ledger-watch";

  const state = {
    q: "",
    type: "all",
    platform: "all",
    free: "all",
    status: "all",
    verify: "all",
    view: "cards",
    sort: "type",
    group: "off",
    watch: "off",
    compare: []
  };

  const FREE_LABEL = {
    full: "Free USD path",
    amoes: "Free + AMOE",
    partial: "Some free events",
    "paid-cash": "Cash needs entry fee"
  };
  const FREE_RANK = { full: 0, amoes: 1, partial: 2, "paid-cash": 3 };
  const STATUS_LABEL = {
    live: "Active",
    mixed: "Mixed",
    caution: "Caution",
    inactive: "Inactive / closed"
  };
  const VERIFY_LABEL = {
    account: "Account only",
    eligibility: "Eligibility check",
    kyc: "Full KYC",
    tax: "Tax paperwork"
  };
  const VERIFY_RANK = { account: 0, eligibility: 1, kyc: 2, tax: 3 };

  function loadWatch() {
    try { return JSON.parse(localStorage.getItem(WATCH_KEY) || "[]"); } catch (e) { return []; }
  }
  function saveWatch(ids) {
    localStorage.setItem(WATCH_KEY, JSON.stringify(ids));
  }
  function isWatched(id) { return loadWatch().includes(id); }
  function toggleWatch(id) {
    const cur = loadWatch();
    const next = cur.includes(id) ? cur.filter((x) => x !== id) : cur.concat(id);
    saveWatch(next);
  }

  function applyHash() {
    const p = new URLSearchParams(location.hash.replace(/^#/, ""));
    ["q", "type", "platform", "free", "status", "verify", "view", "sort", "group", "watch"].forEach((k) => {
      if (p.has(k)) state[k] = p.get(k);
    });
    if (p.get("compare")) state.compare = p.get("compare").split(",").filter(Boolean).slice(0, 3);
  }

  function writeHash() {
    const p = new URLSearchParams();
    Object.entries(state).forEach(([k, v]) => {
      if (k === "compare") {
        if (v.length) p.set("compare", v.join(","));
        return;
      }
      if (v && v !== "all" && v !== "off" && !(k === "q" && !v) && !(k === "view" && v === "cards") && !(k === "sort" && v === "type")) {
        p.set(k, v);
      }
    });
    const next = p.toString();
    history.replaceState(null, "", next ? "#" + next : location.pathname + location.search);
  }

  function typeName(id) {
    return (data.types.find((t) => t.id === id) || { name: id }).name;
  }

  function matches(item) {
    if (state.watch === "on" && !isWatched(item.id)) return false;
    if (state.type !== "all" && item.type !== state.type) return false;
    if (state.platform !== "all" && !item.platforms.includes(state.platform)) return false;
    if (state.free !== "all" && item.freePath !== state.free) return false;
    if (state.status !== "all" && item.status !== state.status) return false;
    if (state.verify !== "all" && item.verification.level !== state.verify) return false;
    if (state.q) {
      const blob = [
        item.name, item.short, item.eligibility, item.prizeUsd, item.prizeNote,
        item.payoutMethods.join(" "), item.restricted, ...(item.tosNotes || []),
        ...(item.redFlags || [])
      ].join(" ").toLowerCase();
      if (!blob.includes(state.q.toLowerCase())) return false;
    }
    return true;
  }

  function sorted(list) {
    const copy = list.slice();
    copy.sort((a, b) => {
      if (state.sort === "name") return a.name.localeCompare(b.name);
      if (state.sort === "free") return FREE_RANK[a.freePath] - FREE_RANK[b.freePath] || a.name.localeCompare(b.name);
      if (state.sort === "verify") return VERIFY_RANK[a.verification.level] - VERIFY_RANK[b.verification.level] || a.name.localeCompare(b.name);
      if (state.sort === "status") return a.status.localeCompare(b.status) || a.name.localeCompare(b.name);
      return a.type.localeCompare(b.type) || FREE_RANK[a.freePath] - FREE_RANK[b.freePath] || a.name.localeCompare(b.name);
    });
    return copy;
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function isNew(id) {
    return (data.addedThisPass || []).includes(id);
  }

  function card(item, opts) {
    const el = document.createElement("article");
    el.className = "card";
    el.id = item.id;
    const comparing = state.compare.includes(item.id);
    const watched = isWatched(item.id);
    el.innerHTML = `
      <div class="card-head">
        <div>
          <h3>${esc(item.name)}</h3>
          <p class="short">${esc(item.short)}</p>
        </div>
        <div class="card-tools">
          <button type="button" class="icon-btn" data-act="watch" data-id="${item.id}" aria-pressed="${watched}">${watched ? "★ Watch" : "☆ Watch"}</button>
          <button type="button" class="icon-btn" data-act="compare" data-id="${item.id}" aria-pressed="${comparing}">${comparing ? "In compare" : "Compare"}</button>
          <button type="button" class="icon-btn" data-act="copy" data-id="${item.id}">Copy notes</button>
        </div>
      </div>
      <div class="badges">
        ${isNew(item.id) ? `<span class="badge badge-new">New this pass</span>` : ""}
        ${(data.featured || []).includes(item.id) ? `<span class="badge badge-start">Start here</span>` : ""}
        <span class="badge status-${item.status}">${STATUS_LABEL[item.status]}</span>
        <span class="badge free-${item.freePath}">${FREE_LABEL[item.freePath]}</span>
        <span class="badge">${typeName(item.type)}</span>
        ${item.platforms.map((p) => `<span class="badge">${p === "ios" ? "iOS app" : "Browser"}</span>`).join("")}
        <span class="badge">${VERIFY_LABEL[item.verification.level]}</span>
      </div>
      <div class="meta">
        <div><b>USD prize</b>${esc(item.prizeUsd)}</div>
        <div><b>Cash-out floor</b>${esc(item.minCashout)}</div>
        <div><b>Pays via</b>${esc(item.payoutMethods.join(", "))}</div>
        <div><b>Who can enter</b>${esc(item.eligibility)}</div>
        <div><b>Blocked / limits</b>${esc(item.restricted)}</div>
        <div><b>Last checked</b>${esc(item.lastChecked)}</div>
      </div>
      <p>${esc(item.prizeNote)}</p>
      <details class="block" ${opts && opts.open ? "open" : ""}>
        <summary>How to sign up</summary>
        <ol>${item.signupSteps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      </details>
      <details class="block">
        <summary>How the competition works</summary>
        <ul>${item.howToWin.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </details>
      <details class="block">
        <summary>How to obtain prize money</summary>
        <ul>${item.howToGetMoney.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        <ul>${item.verification.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </details>
      <details class="block">
        <summary>Terms, verification, red flags</summary>
        <ul>${item.tosNotes.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        ${item.redFlags.length ? `<p><b>Watch-outs</b></p><ul>${item.redFlags.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}
      </details>
      <div class="links">
        ${item.signupUrl ? `<a class="btn primary" href="${item.signupUrl}" rel="noopener noreferrer">Official signup</a>` : ""}
        ${item.iosUrl ? `<a class="btn" href="${item.iosUrl}" rel="noopener noreferrer">iOS App Store</a>` : ""}
        ${item.rulesUrl ? `<a class="btn" href="${item.rulesUrl}" rel="noopener noreferrer">Rules</a>` : ""}
        ${item.tosUrl && item.tosUrl !== item.rulesUrl ? `<a class="btn" href="${item.tosUrl}" rel="noopener noreferrer">Terms</a>` : ""}
        ${item.sources.map((s) => `<a class="btn" href="${s.url}" rel="noopener noreferrer">${esc(s.title)}</a>`).join("")}
      </div>
    `;
    return el;
  }

  function notesText(item) {
    return [
      item.name,
      `Type: ${typeName(item.type)} | ${STATUS_LABEL[item.status]} | ${FREE_LABEL[item.freePath]}`,
      `Platforms: ${item.platforms.join(", ")}`,
      `Prize: ${item.prizeUsd}`,
      `Cash-out: ${item.minCashout}`,
      `Pays: ${item.payoutMethods.join(", ")}`,
      `Eligibility: ${item.eligibility}`,
      `Restricted: ${item.restricted}`,
      `Verify: ${VERIFY_LABEL[item.verification.level]}`,
      "",
      "Signup:",
      ...item.signupSteps.map((s, i) => `${i + 1}. ${s}`),
      "",
      "Prize money:",
      ...item.howToGetMoney.map((s) => `- ${s}`),
      "",
      "ToS:",
      ...item.tosNotes.map((s) => `- ${s}`),
      "",
      "Red flags:",
      ...item.redFlags.map((s) => `- ${s}`),
      "",
      `Signup: ${item.signupUrl}`,
      `Rules: ${item.rulesUrl}`,
      `Checked: ${item.lastChecked}`
    ].join("\n");
  }

  function renderFeatured() {
    const box = $("#featured");
    if (!box) return;
    const ids = data.featured || [];
    box.innerHTML = ids.map((id) => {
      const item = data.listings.find((l) => l.id === id);
      if (!item) return "";
      return `<a class="feat" href="#${id}">
        <b>${esc(item.name)}</b>
        <span>${esc(FREE_LABEL[item.freePath])}</span>
        <small>${esc(item.minCashout)}</small>
      </a>`;
    }).join("");
  }

  function renderCompareBar() {
    const bar = $("#compareBar");
    if (!bar) return;
    if (!state.compare.length) {
      bar.hidden = true;
      return;
    }
    bar.hidden = false;
    const names = state.compare.map((id) => {
      const item = data.listings.find((l) => l.id === id);
      return item ? `<button type="button" class="chip" data-act="uncompare" data-id="${id}">${esc(item.name)} ×</button>` : "";
    }).join("");
    bar.querySelector(".compare-picks").innerHTML = names;
    bar.querySelector("[data-act='open-compare']").disabled = state.compare.length < 2;
  }

  function renderCompare() {
    const wrap = $("#compareWrap");
    wrap.hidden = false;
    $("#cards").hidden = true;
    $("#tableWrap").hidden = true;
    const items = state.compare.map((id) => data.listings.find((l) => l.id === id)).filter(Boolean);
    if (items.length < 2) {
      wrap.innerHTML = `<div class="empty">Pick at least two listings to compare.</div>`;
      return;
    }
    const rows = [
      ["Name", (i) => i.name],
      ["Type", (i) => typeName(i.type)],
      ["Status", (i) => STATUS_LABEL[i.status]],
      ["Free path", (i) => FREE_LABEL[i.freePath]],
      ["Signup", (i) => i.platforms.map((p) => p === "ios" ? "iOS" : "Web").join(", ")],
      ["Verification", (i) => VERIFY_LABEL[i.verification.level]],
      ["USD prize", (i) => i.prizeUsd],
      ["Cash-out floor", (i) => i.minCashout],
      ["Pays via", (i) => i.payoutMethods.join(", ")],
      ["Who can enter", (i) => i.eligibility],
      ["Blocked / limits", (i) => i.restricted],
      ["Signup step 1", (i) => i.signupSteps[0] || ""],
      ["How money leaves", (i) => i.howToGetMoney[0] || ""],
      ["Top red flag", (i) => i.redFlags[0] || "—"],
      ["Last checked", (i) => i.lastChecked]
    ];
    wrap.innerHTML = `
      <div class="table-wrap compare-table">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              ${items.map((i) => `<th>${esc(i.name)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${rows.map((row) => `<tr><th>${esc(row[0])}</th>${items.map((i) => `<td>${esc(row[1](i))}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="links" style="margin-top:12px">
        ${items.map((i) => i.signupUrl ? `<a class="btn primary" href="${i.signupUrl}" rel="noopener noreferrer">${esc(i.name)} signup</a>` : "").join("")}
        <button type="button" class="btn" data-act="clear-compare">Clear compare</button>
      </div>
    `;
  }

  function render() {
    const list = sorted(data.listings.filter(matches));
    $("#count").textContent = String(list.length);
    const cards = $("#cards");
    const tableWrap = $("#tableWrap");
    const compareWrap = $("#compareWrap");
    cards.innerHTML = "";
    compareWrap.hidden = true;

    if (state.view === "compare") {
      renderCompare();
    } else if (state.view === "table") {
      cards.hidden = true;
      tableWrap.hidden = false;
      $("#tableBody").innerHTML = list.map((item) => `
        <tr data-id="${item.id}">
          <td><b>${esc(item.name)}</b><br><small>${esc(STATUS_LABEL[item.status])} · ${esc(FREE_LABEL[item.freePath])}${isNew(item.id) ? " · new" : ""}</small></td>
          <td>${esc(typeName(item.type))}</td>
          <td>${item.platforms.map((p) => p === "ios" ? "iOS" : "Web").join(", ")}</td>
          <td>${esc(VERIFY_LABEL[item.verification.level])}</td>
          <td>${esc(item.minCashout)}</td>
          <td>${esc(item.payoutMethods.join(", "))}</td>
        </tr>
      `).join("");
      $$("#tableBody tr").forEach((row) => {
        row.addEventListener("click", () => {
          state.view = "cards";
          writeHash();
          render();
          const target = document.getElementById(row.dataset.id);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    } else {
      tableWrap.hidden = true;
      cards.hidden = false;
      if (!list.length) {
        cards.innerHTML = `<div class="empty">Nothing matches those filters. Clear a chip and look again.</div>`;
      } else if (state.group === "on") {
        const byType = {};
        list.forEach((item) => {
          (byType[item.type] = byType[item.type] || []).push(item);
        });
        data.types.forEach((t) => {
          const chunk = byType[t.id];
          if (!chunk) return;
          const h = document.createElement("h3");
          h.className = "group-h";
          h.textContent = `${t.name} · ${chunk.length}`;
          cards.appendChild(h);
          chunk.forEach((item) => cards.appendChild(card(item, { open: false })));
        });
      } else {
        list.forEach((item) => cards.appendChild(card(item, { open: false })));
      }
    }

    $$(".chip").forEach((btn) => {
      const group = btn.dataset.group;
      const value = btn.dataset.value;
      if (!group) return;
      btn.classList.toggle("is-on", state[group] === value);
    });
    $("#search").value = state.q;
    renderCompareBar();
  }

  function byId(id) {
    return data.listings.find((l) => l.id === id);
  }

  function onAction(e) {
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const act = btn.dataset.act;
    const id = btn.dataset.id;
    if (act === "watch") {
      toggleWatch(id);
      writeHash();
      render();
    } else if (act === "compare") {
      if (state.compare.includes(id)) state.compare = state.compare.filter((x) => x !== id);
      else if (state.compare.length < 3) state.compare = state.compare.concat(id);
      writeHash();
      render();
    } else if (act === "uncompare") {
      state.compare = state.compare.filter((x) => x !== id);
      if (state.view === "compare" && state.compare.length < 2) state.view = "cards";
      writeHash();
      render();
    } else if (act === "open-compare") {
      state.view = "compare";
      writeHash();
      render();
      $("#compareWrap").scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (act === "clear-compare") {
      state.compare = [];
      state.view = "cards";
      writeHash();
      render();
    } else if (act === "copy") {
      const item = byId(id);
      if (!item) return;
      navigator.clipboard.writeText(notesText(item)).then(() => {
        btn.textContent = "Copied";
        setTimeout(() => { btn.textContent = "Copy notes"; }, 1200);
      });
    } else if (act === "expand") {
      $$("#cards details.block").forEach((d) => { d.open = true; });
    } else if (act === "collapse") {
      $$("#cards details.block").forEach((d) => { d.open = false; });
    }
  }

  function bind() {
    $$(".chip[data-group]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state[btn.dataset.group] = btn.dataset.value;
        writeHash();
        render();
      });
    });
    $("#search").addEventListener("input", (e) => {
      state.q = e.target.value.trim();
      writeHash();
      render();
    });
    document.addEventListener("click", onAction);
    $("#featured").addEventListener("click", (e) => {
      const a = e.target.closest("a.feat");
      if (!a) return;
      e.preventDefault();
      const id = a.getAttribute("href").slice(1);
      state.view = "cards";
      writeHash();
      render();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function fillStats() {
    $("#statTotal").textContent = String(data.listings.length);
    $("#statFree").textContent = String(data.listings.filter((i) => i.freePath === "full" || i.freePath === "amoes").length);
    $("#statIos").textContent = String(data.listings.filter((i) => i.platforms.includes("ios") && i.status !== "inactive").length);
    $("#statNew").textContent = String((data.addedThisPass || []).length);
  }

  applyHash();
  fillStats();
  renderFeatured();
  bind();
  render();

  if (location.hash && location.hash.length > 1 && !location.hash.includes("=")) {
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView();
  }
})();
