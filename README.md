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

- Sweepstakes & instant win (PCH, Lucktastic, AARP, HGTV, iHeart, magazine titles)
- Sweepstakes casinos with AMOE (High 5, Pulsz, Chumba, LuckyLand, Crown Coins, Stake.us, McLuck, WOW Vegas, RealPrize)
- Skill tournament apps (Papaya, Skillz, Pocket7, Backspin, Solitaire Smash, Bingo Billions) — listed as paid-cash
- Trivia (Givling, closed HQ Trivia file)
- Fantasy / sports picks (DraftKings freerolls, FanDuel, Fliff)
- Creative contests (Vocal)
- Tech & data prizes (Kaggle, Devpost, ARC Prize, DrivenData, HeroX/Challenge.gov, XPRIZE, Topcoder)
- Directories & forums (Online-Sweepstakes, Reedsy, r/sweepstakes, Sweepstakes Fanatics, Contest Girl, UltraContest, SweepsAdvantage, FreebieShark, SweepWidget)

Research passes: 12 August 2026 (A + B). Sources include official rules/ToS, App Store listings, and threads on r/beermoney, r/sweepstakes, r/Sweepstake, and r/EarnExtraIncome.

## Review the ledger quickly

1. Open `index.html` (or the Pages URL).
2. Use **Start here** for the lowest-friction free paths.
3. Use **Review table**, sort, and **Group cards**.
4. Star a **watchlist** and **compare** up to three listings.
5. **Copy notes** for an offline briefing.
6. Click through to the official rules before you enter anything.

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
