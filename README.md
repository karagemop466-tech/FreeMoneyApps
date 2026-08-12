# USD Contest Ledger

A reviewed catalog of **iOS apps and websites** that run **free-entry competitions awarding real USD**.

Live site (GitHub Pages): once Pages is enabled, this branch serves the static files from the repo root.

## Why this exists

“Apps that pay real money” mixes four different products:

| Stamp | Meaning |
| --- | --- |
| **Free USD path** | Enter and, if you win, get dollars without buying anything |
| **Free + AMOE** | Daily free coins plus a mail-in alternative (US sweepstakes law) |
| **Some free events** | A $0 lobby exists next to paid inventory |
| **Cash needs entry fee** | Free rooms pay gems, not dollars |

This repo keeps those stamps on every card, with signup steps, verification rules, and how prize money is actually paid.

## What’s in the catalog

- Sweepstakes & instant win (PCH, Lucktastic)
- Sweepstakes casinos with AMOE (High 5, Pulsz, Chumba, LuckyLand, Crown Coins, Stake.us)
- Skill tournament apps (Papaya, Skillz, Pocket7, Backspin) — listed as paid-cash
- Trivia (Givling, closed HQ Trivia file)
- Fantasy / sports picks (DraftKings freerolls, FanDuel, Fliff)
- Creative contests (Vocal)
- Tech & data prizes (Kaggle, Devpost, ARC Prize)
- Directories & forums (Online-Sweepstakes, Reedsy list, r/sweepstakes)

Research pass: 12 August 2026. Sources include official rules/ToS, App Store listings, and threads on r/beermoney, r/sweepstakes, r/Sweepstake, and r/EarnExtraIncome.

## Review the ledger quickly

1. Open `index.html` (or the Pages URL).
2. Use **Review table** for a one-screen scan.
3. Filter by type, iOS vs browser, free path, and KYC level.
4. Expand **How to sign up**, **How to obtain prize money**, and **Terms**.
5. Click through to the official rules before you enter anything.

Protocol and inclusion rules: [review.html](review.html). Taxonomy: [types.html](types.html).

## Edit a listing

All cards live in [`assets/data.js`](assets/data.js). Each object has:

- `type`, `status`, `freePath`, `platforms`
- `signupSteps`, `howToWin`, `howToGetMoney`
- `verification.level` + `verification.steps`
- `tosNotes`, `redFlags`, `sources`, `lastChecked`

After you change a card, bump `lastChecked` and `window.LEDGER.reviewed`.

## Local preview

Any static server from the repo root:

```bash
python3 -m http.server 8080
```

Then open `/index.html`.

## Disclaimer

Independent research desk. Not affiliated with listed operators. Not legal or tax advice. Contest and sweepstakes law is state-specific. 18+/21+. Nobody legitimate charges a fee to collect a prize.
