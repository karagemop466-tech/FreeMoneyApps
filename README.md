# Free Contest Ledger

A curated, audited list of **free-to-enter competitions that can pay real money** — skill and
prediction games, trivia, fantasy and pick'em, sportsbook free-to-play, judged prizes, tech and
data competitions, and pool-hosting tools.

**[View the live list →](https://karagemop466-tech.github.io/FreeMoneyApps/)**

## What's here

- **84 listings** across 8 categories, rendered as one easy-to-read, grouped list.
- Every entry has an **official link** (signup or official rules) plus supporting sources.
- Honest stamps: **free USD path**, **some free events**, or **cash needs entry fee** — so gems,
  tickets, gift cards and bonus bets are never dressed up as dollars.
- Verification stack shown per entry (account only → eligibility → full KYC → tax forms).
- No search box, no filter stack — just scroll or tap a section to jump.

## What's deliberately *not* here

**Sweepstakes, casinos and gambling-operator products were removed on 2026-08-19.** That means no Publishers
Clearing House, no HGTV/iHeart/AARP/BHG-style brand giveaways, no Chumba / High 5 / Pulsz /
Stake.us / McLuck / WOW Vegas / LuckyLand / RealPrize / Crown Coins, no Fliff, and no
sweepstakes directories. Reasons:

Also removed: every contest that requires an account with a **gambling operator** — Sky Bet
Super 6, bet365 6 Scores Challenge, BetMGM Golden Goals and Survivor, Paddy Power Beat The Drop,
FanDuel Daily Shuffle, DraftKings free-to-play — and the real-money **DFS** operators
(PrizePicks, Dabble, ParlayPlay). Plus the DraftKings and FanDuel apps themselves (both ship as
"Sportsbook & Casino"), Backspin Games (App Store Casino category), Verse Gaming (VerseCash is a
promotional sweepstakes currency), and LockMyPicks (cosmetics only, no cash path).

Reasons:

1. Sweepstakes are **chance draws, not competitions** — nothing you do changes the odds.
2. The sweeps-casino model requires **full KYC** and a mail-in AMOE, the opposite of a free path.
3. Bookmaker and DFS free-to-play games are **customer-acquisition funnels**. Several pay in
   bonus bets rather than cash, and all of them require an account with a company whose main
   business is taking bets.
4. It removes a standing contradiction: the project described itself as skill-first while a
   third of the ledger was sweepstakes, casinos or gambling-operator promos.

**What that leaves:** competitions you can enter with a free account at a media company, a
league, a software platform or a research organisation — MLB, ESPN, CBS, Fanatics, the Premier
League and UEFA, Fantasy Football Scout, Kaggle, Devpost, DrivenData, AIcrowd, Zindi, Metaculus,
XPRIZE, and free pool hosts.

## Added 2026-08-19 (pass G) — 10 new entries

Ten passes of searching, each candidate verified against the operator's own page:

| Entry | Prize, per the operator | Status |
|---|---|---|
| **MLB Beat the Streak** | $5.6M headline (≈$3.0M lump sum); $10,000 Top Streak | live |
| **Metaculus Tournaments** | $3,000–$50,000 per tournament, 20 live | live |
| **AIcrowd** | up to $150,000+ (ARC White-Box 2026) | live |
| **Zindi** | $1,500–$25,000 per challenge | live |
| **Codabench / CodaLab** | varies; 1,471 public competitions | live |
| **Grand Challenge** | $2,000–$10,000 typical, 264 challenges | live |
| **CrunchDAO / ADIA Lab** | not stated on the overview page — flagged | live |
| **ML Contests** | directory | live |
| **ESPN Men's Tournament Challenge** | $125,000 | ended, returns Mar 2027 |
| **ESPN TC Eliminator** | $10,000 | ended, returns Mar 2027 |

New category: **Forecasting tournaments** — judgement contests scored on calibrated accuracy,
where you submit probability estimates rather than wagers.

**Rejected during verification** (recorded so they don't get re-added): NFL.com Playoff Challenge
(discontinued), Reedsy short-story contest (could not reach an official contest page),
Meta Hacker Cup (official site returns 403; 2026 schedule unannounced), Google AI Challenges
(404). Each was a plausible candidate that did not survive checking.

`assets/data.js` records all **45** removals with a reason in `LEDGER.removedThisPass`.

## Sourcing rule

**Any listing that states a specific prize figure must cite the operator's own rules or game
page.** Each source carries a `tier`:

| tier | meaning |
|---|---|
| `official` | operator's own domain — rules page, game page, or press release |
| `affiliate` | review/SEO site. Allowed as *secondary* colour, never as the sole basis for a figure |
| `forum` | Reddit/X. Context only |

This rule exists because it was tested: in the 19 Aug 2026 audit, **9 of 12 confirmed factual
errors traced to an affiliate source**, while entries citing operator rules were near-exact.

## Status values

| status | meaning |
|---|---|
| `live` | running now, verified this pass |
| `mixed` | free and paid paths coexist; read the note |
| `caution` | works, but something material is unconfirmed |
| `ended` | **out of season or finished.** Kept so you can see why, with the date it closed |
| `inactive` | operator gone |

Eleven entries are `ended` rather than deleted — playoff brackets, NFL-draft contests and
World Cup games that will return. They are labelled, not quietly listed as active.

## Where the data lives

- `index.html` — the page.
- `assets/data.js` — the single source of truth (`window.LEDGER.listings`).
- `assets/js/app.js` — renders the grouped list.
- `assets/css/style.css` — styling.

Audit trail: `AUDIT_2026-08-19.md`, `AUDIT_2026-08-19_PASS2.md`, `AUDIT_2026-08-19_PASS3.md`.
Earlier research: `index.md`, `100_VERIFIED_CONTESTS.md` (both superseded — see their headers).

## Re-review checklist

Before adding or re-opening an entry in `assets/data.js`:

1. Is this a **skill or prediction** contest? If the outcome is a random draw, it does not belong.
2. Does the **operator's own page** state the prize figure? If only an affiliate says it, don't publish it.
3. Is the source page for the **current season**? Check the date on the article and in the URL slug.
4. Today's cash minimum, playthrough, and payout method — and is the prize cash, gift card, or bonus bet?
5. Age floor and blocked states/countries, from the rules page, not a review.
6. Did KYC or tax forms change?
7. Fresh, specific cashout complaints (not generic "rigged" posts)?
8. Update `lastChecked`, the source list, and each source's `tier`.

---

*Independent compilation. Not affiliated with any listed operator. Play only where legal. 18+/21+.*
