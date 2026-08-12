(function () {
  const data = window.LEDGER;
  if (!data) return;

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const state = {
    q: "",
    type: "all",
    platform: "all",
    free: "all",
    status: "all",
    verify: "all",
    view: "cards"
  };

  const FREE_LABEL = {
    full: "Free USD path",
    amoes: "Free + AMOE",
    partial: "Some free events",
    "paid-cash": "Cash needs entry fee"
  };

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

  function applyHash() {
    const p = new URLSearchParams(location.hash.replace(/^#/, ""));
    ["q", "type", "platform", "free", "status", "verify", "view"].forEach((k) => {
      if (p.has(k)) state[k] = p.get(k);
    });
  }

  function writeHash() {
    const p = new URLSearchParams();
    Object.entries(state).forEach(([k, v]) => {
      if (v && v !== "all" && !(k === "q" && !v) && !(k === "view" && v === "cards")) p.set(k, v);
    });
    const next = p.toString();
    history.replaceState(null, "", next ? "#" + next : location.pathname + location.search);
  }

  function matches(item) {
    if (state.type !== "all" && item.type !== state.type) return false;
    if (state.platform !== "all" && !item.platforms.includes(state.platform)) return false;
    if (state.free !== "all" && item.freePath !== state.free) return false;
    if (state.status !== "all" && item.status !== state.status) return false;
    if (state.verify !== "all" && item.verification.level !== state.verify) return false;
    if (state.q) {
      const blob = [
        item.name, item.short, item.eligibility, item.prizeUsd, item.prizeNote,
        item.payoutMethods.join(" "), item.restricted, ...(item.tosNotes || [])
      ].join(" ").toLowerCase();
      if (!blob.includes(state.q.toLowerCase())) return false;
    }
    return true;
  }

  function countBy(key, value) {
    return data.listings.filter((item) => {
      if (key === "platform") return item.platforms.includes(value);
      if (key === "free") return item.freePath === value;
      if (key === "verify") return item.verification.level === value;
      return item[key] === value;
    }).length;
  }

  function card(item) {
    const el = document.createElement("article");
    el.className = "card";
    el.id = item.id;
    el.innerHTML = `
      <div class="card-head">
        <div>
          <h3>${esc(item.name)}</h3>
          <p class="short">${esc(item.short)}</p>
        </div>
      </div>
      <div class="badges">
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
      <details open>
        <summary>How to sign up</summary>
        <ol>${item.signupSteps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      </details>
      <details>
        <summary>How the competition works</summary>
        <ul>${item.howToWin.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </details>
      <details>
        <summary>How to obtain prize money</summary>
        <ul>${item.howToGetMoney.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        <ul>${item.verification.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </details>
      <details>
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

  function typeName(id) {
    return (data.types.find((t) => t.id === id) || { name: id }).name;
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render() {
    const list = data.listings.filter(matches);
    $("#count").textContent = String(list.length);
    const cards = $("#cards");
    const tableWrap = $("#tableWrap");
    cards.innerHTML = "";
    if (state.view === "table") {
      cards.hidden = true;
      tableWrap.hidden = false;
      const tb = $("#tableBody");
      tb.innerHTML = list.map((item) => `
        <tr data-id="${item.id}">
          <td><b>${esc(item.name)}</b><br><small>${esc(STATUS_LABEL[item.status])} · ${esc(FREE_LABEL[item.freePath])}</small></td>
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
      } else {
        list.forEach((item) => cards.appendChild(card(item)));
      }
    }
    $$(".chip").forEach((btn) => {
      const group = btn.dataset.group;
      const value = btn.dataset.value;
      btn.classList.toggle("is-on", state[group] === value);
    });
    $("#search").value = state.q;
  }

  function bind() {
    $$(".chip").forEach((btn) => {
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
  }

  function fillStats() {
    $("#statTotal").textContent = String(data.listings.length);
    $("#statFree").textContent = String(data.listings.filter((i) => i.freePath === "full" || i.freePath === "amoes").length);
    $("#statIos").textContent = String(data.listings.filter((i) => i.platforms.includes("ios") && i.status !== "inactive").length);
    $("#statDate").textContent = data.reviewed.slice(5);
  }

  window.LedgerApp = { countBy, typeName, FREE_LABEL, STATUS_LABEL };

  applyHash();
  fillStats();
  bind();
  render();

  if (location.hash && location.hash.length > 1 && !location.hash.includes("=")) {
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView();
  }
})();
