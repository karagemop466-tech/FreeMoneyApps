/* USD Contest Ledger — compiled 2026-08-12
   Each listing is sourced from official rules/ToS plus recent public reporting.
   Terms change. Always open the official rules before you enter. */
window.LEDGER = {
  reviewed: "2026-08-12",
  types: [
    {
      id: "sweepstakes",
      name: "Sweepstakes & instant win",
      blurb: "Chance drawings and scratch-style instant wins. Legitimate US sweeps must offer a free entry path and cannot require a purchase."
    },
    {
      id: "sweeps-casino",
      name: "Sweepstakes casinos",
      blurb: "Social casinos that award Sweeps Coins redeemable for USD. Purchase is optional. Free path is daily bonuses plus mail-in AMOE."
    },
    {
      id: "skill",
      name: "Skill tournaments",
      blurb: "Head-to-head or multiplayer skill games. Free rooms usually pay gems, not cash. Real USD almost always requires an entry fee."
    },
    {
      id: "trivia",
      name: "Trivia competitions",
      blurb: "Live or async quiz contests. Free daily plays exist on some apps. Prize pools are split among remaining winners."
    },
    {
      id: "sports",
      name: "Fantasy & sports picks",
      blurb: "Daily fantasy freerolls and sweepstakes sportsbooks. Free tickets or free coins can win USD; most large pools are paid-entry."
    },
    {
      id: "creative",
      name: "Creative contests",
      blurb: "Writing, photo, and brand challenges judged on a submission. Some are free; some lock cash prizes behind a membership."
    },
    {
      id: "tech",
      name: "Tech & data competitions",
      blurb: "Hackathons and machine-learning contests with published USD prize pools. Free to enter; winners complete tax and identity checks."
    },
    {
      id: "directory",
      name: "Directories & forums",
      blurb: "Places that list many current contests. Use them to find new promotions, then verify each contest’s own official rules."
    }
  ],
  verificationLevels: [
    {
      id: "account",
      name: "Account only",
      meaning: "Email or social login is enough to play. Prize claims usually still require a matching name and contact info."
    },
    {
      id: "eligibility",
      name: "Eligibility check",
      meaning: "Age, residency, and one-account rules are enforced. Winners sign an affidavit or confirm identity before payment."
    },
    {
      id: "kyc",
      name: "Full KYC",
      meaning: "Government photo ID, proof of address, and sometimes a selfie or source-of-funds check before any USD redemption."
    },
    {
      id: "tax",
      name: "Tax paperwork",
      meaning: "US prizes of $600+ typically require a W-9. Non-US winners may need a W-8BEN. Taxes are the winner’s responsibility."
    }
  ],
  listings: [
    {
      id: "pch",
      name: "Publishers Clearing House",
      short: "Long-running US sweepstakes with advertised cash giveaways and a free web + iOS entry path.",
      type: "sweepstakes",
      status: "live",
      freePath: "full",
      platforms: ["ios", "web"],
      signupUrl: "https://www.pch.com/",
      iosUrl: "https://apps.apple.com/us/app/pch-win-money-prizes/id429046678",
      tosUrl: "https://www.pch.com/pages/official-rules",
      rulesUrl: "https://www.pch.com/pages/official-rules",
      prizeUsd: "Up to advertised multi-million giveaways",
      prizeNote: "Most players win nothing. Promoted prize amounts vary by giveaway. PCH may pay merchandise as cash at stated value.",
      minCashout: "Winner claim only",
      payoutMethods: ["Check / prize payout", "Annuity or lump sum on some large prizes"],
      eligibility: "US residents 18+, physically in the US, valid residential street address.",
      restricted: "Void where prohibited. Employees and household members of PCH are ineligible.",
      verification: {
        level: "eligibility",
        steps: [
          "Keep a valid PCH account with a real name and street address.",
          "Winners are notified by mail, email, or in person.",
          "Winner must be located and sign an Affidavit of Eligibility before any prize is paid.",
          "Identity and eligibility are verified. Taxes are the winner’s responsibility."
        ]
      },
      signupSteps: [
        "Open pch.com in a browser or install the PCH iOS app.",
        "Create a free account with your legal name, email, and US street address.",
        "Enter the current giveaways from the home page. No purchase is required.",
        "For any giveaway, use the Free Alternate Method of Entry linked in that giveaway’s official rules if you do not want to browse or shop."
      ],
      howToWin: [
        "Entries are chance drawings. A purchase does not improve odds.",
        "You may receive multiple entry opportunities into ongoing giveaways.",
        "Late entries after a giveaway deadline are invalid."
      ],
      howToGetMoney: [
        "If selected, wait for official PCH contact. PCH never asks you to pay a fee, tax, or shipping charge to collect a prize.",
        "Complete the Affidavit of Eligibility and any ID requests.",
        "Choose lump sum or annuity when that option is offered (written election within 60 days, or lump sum is default).",
        "Prize is paid after verification. Keep records for taxes."
      ],
      tosNotes: [
        "Official rules state: NO PURCHASE OR FEE NECESSARY. A purchase will not improve chances of winning.",
        "Scam warning is written into the rules: PCH will never require money to claim a prize.",
        "Apple is not a sponsor of PCH contests.",
        "Entering grants PCH publicity rights in your name and likeness unless prohibited by law."
      ],
      redFlags: [
        "Anyone who emails or calls claiming you won and asking for a prepaid card or fee is not PCH."
      ],
      sources: [
        { title: "PCH Official Rules", url: "https://www.pch.com/pages/official-rules" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "lucktastic",
      name: "Lucktastic",
      short: "Free daily digital scratch cards and token contests with small cash and gift-card prizes.",
      type: "sweepstakes",
      status: "live",
      freePath: "full",
      platforms: ["ios", "web"],
      signupUrl: "https://www.lucktastic.com/",
      iosUrl: "https://apps.apple.com/us/app/lucktastic-win-real-rewards/id588283050",
      tosUrl: "https://m.lucktastic.com/terms-conditions",
      rulesUrl: "https://m.lucktastic.com/terms-conditions",
      prizeUsd: "Instant cash from $0.01; advertised cards up to thousands",
      prizeNote: "Most cards win tokens or nothing. Large cash hits are rare. Tokens are not cash.",
      minCashout: "$5 cash wallet (ToS). Gift cards require a large token balance.",
      payoutMethods: ["Cash wallet / check", "Dwolla (historically)", "Retail gift cards via tokens"],
      eligibility: "Typically US only. Must register to keep a wallet and redeem.",
      restricted: "Confirm current geo-restrictions inside the app. One account per person.",
      verification: {
        level: "account",
        steps: [
          "You can scratch without registering, but you must register to keep tokens and redeem.",
          "Register with email, name, or Facebook.",
          "Claim prizes from the in-app notification or Claim Prize button.",
          "Large wins ($100+) have a short claim window (ToS: 7 days) or the prize returns to the pool."
        ]
      },
      signupSteps: [
        "Install Lucktastic from the App Store or open lucktastic.com.",
        "Watch the required ad, then scratch the daily free cards.",
        "Create an account before redeeming so winnings are saved.",
        "Use earned tokens to enter in-app contests if you want extra drawings."
      ],
      howToWin: [
        "Instant-win scratch outcomes are chance.",
        "Tokens can enter separate random contests. Confirm winners within the stated window (reviews often cite 48 hours)."
      ],
      howToGetMoney: [
        "Accumulate at least $5 in the cash wallet, then tap Redeem cash.",
        "Follow the payout instructions in the app (check or linked wallet).",
        "Do not expect tokens to convert 1:1 to USD — tokens redeem as gift cards or contest entries only."
      ],
      tosNotes: [
        "Jump Ramp Games Terms (incl. Official Rules): you must register to play cash/real-prize games and redeem.",
        "Minimum $5 to cash out the wallet.",
        "Virtual tokens are licensed, not owned, and can be cancelled.",
        "Prizes may be fulfilled as cash, gift card, or comparable merchandise."
      ],
      redFlags: [
        "Users commonly report gift cards out of stock and wallets stuck just under $5.",
        "Treat advertised jackpots as marketing, not expected value."
      ],
      sources: [
        { title: "Lucktastic Terms & Official Rules", url: "https://m.lucktastic.com/terms-conditions" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "high5",
      name: "High 5 Casino",
      short: "US sweepstakes casino with a native iOS app. Free Sweeps Coins from signup, daily login, and mail-in AMOE redeem for USD.",
      type: "sweeps-casino",
      status: "live",
      freePath: "amoes",
      platforms: ["ios", "web"],
      signupUrl: "https://www.high5casino.com/",
      iosUrl: "https://apps.apple.com/us/app/high-5-casino-slots-games/id1477749341",
      tosUrl: "https://www.high5casino.com/",
      rulesUrl: "https://www.high5casino.com/",
      prizeUsd: "1 Sweeps Coin ≈ $1 USD once eligible",
      prizeNote: "Welcome packages often include tens of SC. Cash redemption typically starts at 100 SC.",
      minCashout: "About 50 SC gift cards / 100 SC cash (confirm in cashier)",
      payoutMethods: ["PayPal / cash prize", "Prizeout gift cards"],
      eligibility: "US, usually 21+, physically in an eligible state. Geolocation is enforced.",
      restricted: "Commonly listed as unavailable in ID, KY, MI, NV, WA and other states that change — check the live site. Not a licensed sportsbook/casino.",
      verification: {
        level: "kyc",
        steps: [
          "Create one account with your legal name and real address.",
          "Before first redemption, upload government photo ID, a selfie if asked, and proof of address.",
          "Play through promotional SC at least 1x.",
          "Request redemption from the website cashier (some reports say the app cannot redeem — use the browser if the button is missing)."
        ]
      },
      signupSteps: [
        "Open high5casino.com or the High 5 Casino iOS app.",
        "Register with email, DOB, and address. Accept Sweeps Rules.",
        "Claim the no-purchase welcome coins and the daily login SC.",
        "For extra free SC, follow the current mail-in AMOE card instructions in the Sweeps Rules (handwritten index card, exact wording, one request per period)."
      ],
      howToWin: [
        "Play slots/table games in Sweeps Coin mode. Outcomes are RNG.",
        "Gold/Game Coins are entertainment only and never redeem.",
        "Only eligible SC winnings can be requested as prizes."
      ],
      howToGetMoney: [
        "Reach the cashier minimum after 1x playthrough.",
        "Pass KYC.",
        "Choose gift card (faster, lower minimum) or cash (higher minimum, slower).",
        "Typical processing after approval: several business days."
      ],
      tosNotes: [
        "No purchase necessary. SC cannot be bought directly.",
        "Standard sweeps model: purchase of Gold/Game Coins may include bonus SC, but AMOE is the free legal path.",
        "One account. VPN and multi-accounting are ban/forfeiture risks."
      ],
      redFlags: [
        "High cash minimum ($100) makes free-only redemption slow.",
        "Restricted-state list is long and changes."
      ],
      sources: [
        { title: "High 5 Casino", url: "https://www.high5casino.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "pulsz",
      name: "Pulsz",
      short: "Sweepstakes casino with daily streak SC, mail-in AMOE, and a relatively low gift-card redemption floor.",
      type: "sweeps-casino",
      status: "live",
      freePath: "amoes",
      platforms: ["ios", "web"],
      signupUrl: "https://www.pulsz.com/",
      iosUrl: "https://apps.apple.com/us/app/pulsz-slots-casino-games/id1552481677",
      tosUrl: "https://www.pulsz.com/sweepstakes-rules",
      rulesUrl: "https://www.pulsz.com/sweepstakes-rules",
      prizeUsd: "1 SC ≈ $1",
      prizeNote: "New accounts typically receive a few SC after email verify. Daily streaks can add more SC over time.",
      minCashout: "About 10 SC gift cards / 50–100 SC cash depending on method",
      payoutMethods: ["ACH / online banking", "Skrill (if previously used)", "Gift cards"],
      eligibility: "US 18+ or 21+ by state, eligible jurisdictions only.",
      restricted: "Blocked in several states. Confirm geolocation on first login.",
      verification: {
        level: "kyc",
        steps: [
          "Verify email on signup.",
          "Complete KYC (photo ID, selfie, proof of address dated within the stated window) before first prize claim.",
          "Wager promotional SC 1x.",
          "Redeem from My Account."
        ]
      },
      signupSteps: [
        "Create a free account at pulsz.com or via the iOS app.",
        "Confirm email to receive the no-deposit GC + SC package.",
        "Claim daily login / streak rewards.",
        "Optional free path: mail the AMOE postcard exactly as the current Sweeps Rules specify."
      ],
      howToWin: [
        "Play in Sweeps Coin mode. GC play cannot be redeemed.",
        "SC won in game after playthrough are the redeemable balance."
      ],
      howToGetMoney: [
        "Hit the method minimum (gift cards are the realistic free-player exit).",
        "Finish KYC (often 48–72 hours on first request).",
        "Gift cards: about 1–2 days after approval. ACH: a few business days."
      ],
      tosNotes: [
        "AMOE exists so purchase is never required.",
        "Unused coins may expire after inactivity (commonly 60 days — check live rules).",
        "Payment method used to buy GC may be required for cash redemption."
      ],
      redFlags: [
        "First redemption is gated on KYC even if you never bought coins.",
        "Daily free SC amounts are small versus the cash minimum."
      ],
      sources: [
        { title: "Pulsz Sweepstakes Rules", url: "https://www.pulsz.com/sweepstakes-rules" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "chumba",
      name: "Chumba Casino",
      short: "Largest-name sweeps casino. Browser-first. Mail-in AMOE for free SC; 100 SC cash minimum after KYC.",
      type: "sweeps-casino",
      status: "live",
      freePath: "amoes",
      platforms: ["web"],
      signupUrl: "https://www.chumbacasino.com/",
      iosUrl: "",
      tosUrl: "https://www.chumbacasino.com/sweepstakes-rules",
      rulesUrl: "https://www.chumbacasino.com/sweepstakes-rules",
      prizeUsd: "1 SC = $1",
      prizeNote: "Operator VGW. Long track record of prize redemptions. NY/FL often have $5,000 redemption caps.",
      minCashout: "100 SC cash; gift cards often from 10 SC",
      payoutMethods: ["Bank transfer", "Skrill", "Gift cards"],
      eligibility: "18+ (21+ some states), eligible US jurisdictions, one account.",
      restricted: "Typically WA, MI, MT, CT, ID and others. Always confirm on login.",
      verification: {
        level: "kyc",
        steps: [
          "Register with legal name matching your ID and bank account.",
          "Upload government ID and a recent utility bill / proof of address.",
          "Play through SC 1x within the stated window (often 60 days).",
          "Submit a redemption of at least the cashier minimum."
        ]
      },
      signupSteps: [
        "Create an account at chumbacasino.com (desktop or mobile browser).",
        "Claim any no-purchase daily/login SC.",
        "To enter free: copy the current Postal Request Code from Sweeps Rules, hand-write the required statement on an index card, and mail it to the published address.",
        "Credit appears after the request is processed — formatting errors void the entry."
      ],
      howToWin: [
        "Use SC on slots or table games. Only SC won through play (after the 1x) are redeemable."
      ],
      howToGetMoney: [
        "Reach 100 eligible SC for cash, or the lower gift-card floor.",
        "Pass KYC. First redemption is slower.",
        "Prizes go to a bank/wallet in your verified name."
      ],
      tosNotes: [
        "No purchase necessary. SC are promotional sweepstakes entries, not a casino chip buy-in.",
        "This is not state-licensed real-money gambling.",
        "Automated play and multi-accounts are prohibited."
      ],
      redFlags: [
        "Mail-in is slow and picky about handwriting/format.",
        "100 SC cash floor is steep if you never purchase GC packages."
      ],
      sources: [
        { title: "Chumba Casino", url: "https://www.chumbacasino.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "luckyland",
      name: "LuckyLand Slots",
      short: "Sister site to Chumba (VGW). Same dual-currency sweeps model, 50 SC prize floor on many methods.",
      type: "sweeps-casino",
      status: "live",
      freePath: "amoes",
      platforms: ["web"],
      signupUrl: "https://www.luckylandslots.com/",
      iosUrl: "",
      tosUrl: "https://www.luckylandslots.com/sweepstakes-rules",
      rulesUrl: "https://www.luckylandslots.com/sweepstakes-rules",
      prizeUsd: "1 SC = $1",
      prizeNote: "Mail-in AMOE commonly awards a few SC per valid envelope. Playthrough 1x (sponsor may raise up to 20x on some promos).",
      minCashout: "About 50 SC for cash or gift cards",
      payoutMethods: ["Bank account", "Skrill", "Prizeout gift cards"],
      eligibility: "Same family of rules as Chumba: age, location, one account.",
      restricted: "Overlaps Chumba restricted states. FL/NY $5,000 caps often apply.",
      verification: {
        level: "kyc",
        steps: [
          "KYC: photo ID, proof of address, and source of funds if asked.",
          "1x playthrough on free/bonus SC.",
          "Redeem at or above 50 SC."
        ]
      },
      signupSteps: [
        "Register at luckylandslots.com.",
        "Collect daily no-purchase SC if offered.",
        "Use the Sweeps Rules mail-in for extra free SC (often ~5 SC per valid request — confirm current amount)."
      ],
      howToWin: ["Play SC mode. GC never redeem."],
      howToGetMoney: [
        "Verify identity first to avoid a hold when you finally hit 50 SC.",
        "If you ever bought GC, redemption may have to return to that same payment method."
      ],
      tosNotes: [
        "Failure to verify can close the account.",
        "SC from Section 6-style giveaways usually must be played before they count."
      ],
      redFlags: ["Same family as Chumba — do not run duplicate accounts across brands if rules forbid it. Read both ToS."],
      sources: [
        { title: "LuckyLand Slots", url: "https://www.luckylandslots.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "crowncoins",
      name: "Crown Coins Casino",
      short: "Highly rated iOS sweeps casino. Free daily coins plus AMOE; SC redeem for USD after KYC.",
      type: "sweeps-casino",
      status: "live",
      freePath: "amoes",
      platforms: ["ios", "web"],
      signupUrl: "https://crowncoinscasino.com/",
      iosUrl: "https://apps.apple.com/us/app/crown-coins-casino-social/id6444786898",
      tosUrl: "https://crowncoinscasino.com/",
      rulesUrl: "https://crowncoinscasino.com/",
      prizeUsd: "1 SC ≈ $1",
      prizeNote: "App Store ratings are among the highest in the sweeps-casino category as of 2026 reviews.",
      minCashout: "Confirm in cashier (commonly 50–100 SC)",
      payoutMethods: ["Bank / card", "Gift cards"],
      eligibility: "US, eligible states, 18+ or 21+.",
      restricted: "State list is on the site gate. VPNs prohibited.",
      verification: {
        level: "kyc",
        steps: [
          "Register with legal identity.",
          "Complete KYC before redemption.",
          "Meet playthrough and minimum SC."
        ]
      },
      signupSteps: [
        "Download Crown Coins from the App Store or use the website.",
        "Create one account and claim the no-deposit package.",
        "Read Sweeps Rules for the current mail-in AMOE."
      ],
      howToWin: ["SC gameplay only for redeemable prizes."],
      howToGetMoney: ["Cashier → redeem eligible SC after KYC."],
      tosNotes: ["Standard dual-currency sweeps framework. No purchase necessary."],
      redFlags: ["Treat any ‘guaranteed income’ YouTube pitch as a scam. This is chance play."],
      sources: [
        { title: "Crown Coins Casino", url: "https://crowncoinscasino.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "stakeus",
      name: "Stake.us",
      short: "Sweepstakes version of Stake. Browser and iOS. Free daily Super Spin / AMOE path to redeemable Stake Cash.",
      type: "sweeps-casino",
      status: "live",
      freePath: "amoes",
      platforms: ["ios", "web"],
      signupUrl: "https://stake.us/",
      iosUrl: "https://apps.apple.com/us/app/stake-us-social-casino/id6446300467",
      tosUrl: "https://stake.us/policies/sweepstakes-rules",
      rulesUrl: "https://stake.us/policies/sweepstakes-rules",
      prizeUsd: "Stake Cash redeemable 1:1 for USD prizes",
      prizeNote: "Gold Coins are fun play. Stake Cash is the prize currency.",
      minCashout: "Check cashier (commonly around $50 equivalent)",
      payoutMethods: ["Bank / Skrill / crypto prize options as offered"],
      eligibility: "US eligible states, age gate, one account.",
      restricted: "Several states blocked. Not available as a real-money casino in the US.",
      verification: {
        level: "kyc",
        steps: [
          "KYC before first prize redemption.",
          "Playthrough on promotional Stake Cash.",
          "Redeem only from a verified account in your name."
        ]
      },
      signupSteps: [
        "Sign up at stake.us or the Stake.us iOS app.",
        "Claim daily free GC / Stake Cash drops and any Super Spin.",
        "Use the published AMOE if you want additional free Stake Cash without buying GC."
      ],
      howToWin: ["Play games using Stake Cash. GC wins are not prizes."],
      howToGetMoney: ["Hit the redemption minimum, pass KYC, choose an offered prize method."],
      tosNotes: ["Sweepstakes rules, not a US gaming license.", "Employee and affiliate accounts are typically ineligible."],
      redFlags: ["Crypto-adjacent branding attracts impersonator sites. Type the URL yourself."],
      sources: [
        { title: "Stake.us Sweepstakes Rules", url: "https://stake.us/policies/sweepstakes-rules" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "fliff",
      name: "Fliff",
      short: "Social sportsbook iOS app. Free daily Fliff Coins plus redeemable Fliff Cash from signup, drips, and mail-in.",
      type: "sports",
      status: "live",
      freePath: "amoes",
      platforms: ["ios", "web"],
      signupUrl: "https://www.getfliff.com/",
      iosUrl: "https://apps.apple.com/us/app/fliff-social-sportsbook/id1458213872",
      tosUrl: "https://www.getfliff.com/",
      rulesUrl: "https://www.getfliff.com/",
      prizeUsd: "1 Fliff Cash ≈ $1 prize credit",
      prizeNote: "You can play forever on free Fliff Coins, but only Fliff Cash winnings redeem. Daily drips exist when your FC balance is low.",
      minCashout: "About 50 Fliff Cash",
      payoutMethods: ["Cash-equivalent prizes", "Gift cards"],
      eligibility: "US, generally 18+. Prize play blocked in a long list of states.",
      restricted: "Recent roundups list prize restrictions in AL, CO, CT, GA, HI, ID, IA, KY, LA, MI, MN, MS, MT, NV, NY, OH, TN, WA, WV — verify in-app.",
      verification: {
        level: "kyc",
        steps: [
          "Play is available before KYC.",
          "Identity and age documents are required to redeem Fliff Cash.",
          "One account. No VPNs."
        ]
      },
      signupSteps: [
        "Install Fliff from the App Store or sign up on the web.",
        "Claim the no-deposit Fliff Coins and starter Fliff Cash.",
        "Each day, claim free coins from the Cashier.",
        "If your Fliff Cash is under the stated cap, mail the #10 envelope AMOE exactly as the current rules describe (often $5 FC)."
      ],
      howToWin: [
        "Make sports picks with Fliff Cash. Winning picks return more Fliff Cash.",
        "Picks made only with Fliff Coins do not redeem."
      ],
      howToGetMoney: [
        "Build at least ~50 redeemable Fliff Cash.",
        "Complete KYC.",
        "Request a prize from the cashier."
      ],
      tosNotes: [
        "No purchase necessary. This is a sweepstakes sportsbook, not a licensed sportsbook.",
        "Purchasing Fliff Coins may include bonus Fliff Cash but is optional."
      ],
      redFlags: [
        "Prize states are limited. The app can look national while cash-out is not.",
        "Odds shopping against a real sportsbook is not the point — expect a house edge."
      ],
      sources: [
        { title: "Fliff", url: "https://www.getfliff.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "draftkings",
      name: "DraftKings Fantasy",
      short: "Daily fantasy sports. Free (freeroll) contests sometimes pay real USD; most advertised millions require a paid entry.",
      type: "sports",
      status: "mixed",
      freePath: "partial",
      platforms: ["ios", "web"],
      signupUrl: "https://www.draftkings.com/",
      iosUrl: "https://apps.apple.com/us/app/draftkings-sportsbook-casino/id417936832",
      tosUrl: "https://www.draftkings.com/help/terms",
      rulesUrl: "https://www.draftkings.com/help/how-to-play",
      prizeUsd: "Freerolls: typically small cash or tickets. Paid GPPs: up to advertised millions",
      prizeNote: "Look in the lobby for $0 entry contests that pay cash or tickets. Weekly freerolls appear around NFL and other seasons.",
      minCashout: "Varies; identity must be verified to withdraw",
      payoutMethods: ["Bank", "PayPal", "check / other methods by state"],
      eligibility: "18+ or 21+ by state. Legal resident of a DFS-enabled US state or Canada (with exceptions).",
      restricted: "Cash DFS historically blocked in AZ, IA, LA, MT, WA and others — the live list changes. One account only.",
      verification: {
        level: "kyc",
        steps: [
          "Register with legal name, DOB, address, SSN last-4 as requested.",
          "Pass identity verification before a withdrawal.",
          "W-9 / tax forms when annual winnings require them."
        ]
      },
      signupSteps: [
        "Create an account on draftkings.com or the iOS app.",
        "Complete the identity form accurately (name must match your bank).",
        "Open the lobby → filter entry fee $0.",
        "Enter freerolls. Read that contest’s rules and scoring."
      ],
      howToWin: [
        "Build a salary-cap lineup. Highest fantasy points win.",
        "This is skill-contested under DFS statutes in enabled states, not a sweepstake."
      ],
      howToGetMoney: [
        "Cash prizes credit to your DK balance.",
        "Withdraw to a verified method after KYC.",
        "Tickets and DK Dollars are usually not directly withdrawable until won through as cash."
      ],
      tosNotes: [
        "New-user ‘free ticket’ promos often require a first deposit — that is not a free competition.",
        "Employees and pro athletes in that sport are typically ineligible.",
        "Location checks apply."
      ],
      redFlags: [
        "Do not confuse the Sportsbook product with free fantasy contests.",
        "Most lobby volume is paid entry. You can lose money if you leave freerolls."
      ],
      sources: [
        { title: "DraftKings", url: "https://www.draftkings.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "fanduel",
      name: "FanDuel Fantasy",
      short: "DFS competitor to DraftKings. Free-to-play contests appear in the lobby; cash contests need an entry fee.",
      type: "sports",
      status: "mixed",
      freePath: "partial",
      platforms: ["ios", "web"],
      signupUrl: "https://www.fanduel.com/",
      iosUrl: "https://apps.apple.com/us/app/fanduel-sportsbook-casino/id756164830",
      tosUrl: "https://www.fanduel.com/terms",
      rulesUrl: "https://www.fanduel.com/fantasy",
      prizeUsd: "Freeroll prizes vary by slate",
      prizeNote: "Filter the fantasy lobby for $0 entry. Prize may be cash or tickets into paid games.",
      minCashout: "After identity verification",
      payoutMethods: ["Bank", "PayPal", "other regional methods"],
      eligibility: "Enabled US states, age 18+/21+, one account.",
      restricted: "State DFS map changes. Sportsbook availability is a separate license.",
      verification: {
        level: "kyc",
        steps: [
          "SSN / ID verification to withdraw.",
          "Geolocation on each session for cash play."
        ]
      },
      signupSteps: [
        "Sign up at fanduel.com or in the FanDuel iOS app.",
        "Open Fantasy (not Sportsbook).",
        "Sort contests by $0 entry and enter before lock."
      ],
      howToWin: ["Salary-cap or best-ball scoring as published for that contest."],
      howToGetMoney: ["Winning cash hits the account wallet. Withdraw after KYC."],
      tosNotes: ["Official rules for each contest control prize tables.", "Duplicate accounts are forfeited."],
      redFlags: ["The same app upsells sportsbook and casino — stay in Fantasy if you want free contests."],
      sources: [
        { title: "FanDuel Fantasy", url: "https://www.fanduel.com/fantasy" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "solitaire-cash",
      name: "Solitaire Cash (Papaya)",
      short: "iOS skill solitaire. Free Gem tournaments exist. USD prizes sit in separate cash rooms that charge an entry fee.",
      type: "skill",
      status: "mixed",
      freePath: "paid-cash",
      platforms: ["ios"],
      signupUrl: "https://www.papaya.com/",
      iosUrl: "https://apps.apple.com/us/app/solitaire-cash-win-real-money/id1252281551",
      tosUrl: "https://www.papaya.com/terms-of-use",
      rulesUrl: "https://www.papaya.com/faq",
      prizeUsd: "Cash rooms advertise prizes up to tens of dollars per event",
      prizeNote: "Papaya FAQ: free competitions use Gems; cash competitions use money. Platform takes a fee from the entry pool.",
      minCashout: "PayPal withdrawal; $1 processing fee reported. Bonus Cash cannot be withdrawn.",
      payoutMethods: ["PayPal", "Apple Pay (some Papaya titles)"],
      eligibility: "18+, not in a Prohibited Jurisdiction under Papaya Gaming Laws section.",
      restricted: "Papaya blocks cash competitions where skill-game-for-cash is illegal. IA often unavailable; several states Bonus-Cash-only.",
      verification: {
        level: "kyc",
        steps: [
          "Account email + payment method.",
          "Larger withdrawals trigger ID and proof of address.",
          "One account. Multi-accounting is a ban reason.",
          "Claim prizes within 60 days or Papaya may forfeit them."
        ]
      },
      signupSteps: [
        "Install Solitaire Cash from the App Store.",
        "Create an account with a real email.",
        "Play Gem (free) rooms to learn scoring — those prizes are gems, not USD.",
        "Only enter Cash rooms if you accept losing the entry fee."
      ],
      howToWin: [
        "Every player in a tournament gets the same seeded deck, timer, and rules.",
        "Skill-matched lobbies. No bots per Papaya FAQ / FTI memo.",
        "Highest score wins the published table."
      ],
      howToGetMoney: [
        "Win a Cash Competition. Entry paid with Bonus Funds is refunded as bonus; extra winnings pay in cash (ToS §14).",
        "Withdraw to PayPal. Withdrawing forfeits remaining Bonus Cash.",
        "If you skip cash play for 90 days, Bonus Funds can be forfeited."
      ],
      tosNotes: [
        "ToS effective 2026-02-12: Services may not be used for gambling; money is not required to play (Gems path).",
        "Cash competitions are withheld in Prohibited Jurisdictions.",
        "Extra Play can automatically enter follow-on tournaments using your score for up to 30 days."
      ],
      redFlags: [
        "This is not a free-USD competition. Free rooms do not pay dollars.",
        "House rake on cash rooms. Bonus Cash traps are a frequent Reddit complaint.",
        "Highly promotional ads overstate typical winnings."
      ],
      sources: [
        { title: "Papaya FAQ", url: "https://www.papaya.com/faq" },
        { title: "Papaya Terms of Use", url: "https://www.papaya.com/terms-of-use" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "bingo-cash",
      name: "Bingo Cash (Papaya)",
      short: "Same Papaya engine as Solitaire Cash, bingo format. Free Gem rooms; cash rooms need an entry fee.",
      type: "skill",
      status: "mixed",
      freePath: "paid-cash",
      platforms: ["ios"],
      signupUrl: "https://www.papaya.com/",
      iosUrl: "https://apps.apple.com/us/app/bingo-cash-win-real-money/id1263102011",
      tosUrl: "https://www.papaya.com/terms-of-use",
      rulesUrl: "https://www.papaya.com/faq",
      prizeUsd: "Cash-room prize tables vary",
      prizeNote: "Finder 2026: free Gems tournaments; cash tournaments from about $0.50. Restricted: IA unavailable; AZ, LA, ME Bonus Cash only (confirm live).",
      minCashout: "About $5 via PayPal / Apple Pay (reviews)",
      payoutMethods: ["PayPal", "Apple Pay"],
      eligibility: "18+, Papaya permitted jurisdictions.",
      restricted: "See Papaya prohibited list. Same Bonus-Cash forfeiture rules as Solitaire Cash.",
      verification: {
        level: "kyc",
        steps: ["Same Papaya stack: payment method + ID on larger cashouts."]
      },
      signupSteps: [
        "Install Bingo Cash on iOS.",
        "Play free Gem rooms first.",
        "Link PayPal only if you later play cash rooms and win withdrawable cash."
      ],
      howToWin: ["Speed and accuracy on identical bingo cards / clocks for the room."],
      howToGetMoney: ["Win cash rooms → withdrawable balance → PayPal. Bonus Cash is not withdrawable."],
      tosNotes: ["Governed by the same Papaya Terms of Use as other Papaya titles."],
      redFlags: ["Do not install expecting free USD. Gems ≠ dollars."],
      sources: [
        { title: "Papaya FAQ", url: "https://www.papaya.com/faq" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "skillz",
      name: "Skillz / Blackout Bingo / Skillz Arena",
      short: "Largest US skill-cash platform. Free practice with Z/Gemz. Cash prizes require a cash entry in enabled states.",
      type: "skill",
      status: "mixed",
      freePath: "paid-cash",
      platforms: ["ios"],
      signupUrl: "https://www.skillz.com/",
      iosUrl: "https://apps.apple.com/us/app/skillz-arena/id6761981587",
      tosUrl: "https://www.skillz.com/terms-of-service/",
      rulesUrl: "https://www.skillz.com/",
      prizeUsd: "Cash match prizes vary by entry; platform has paid out large historical totals",
      prizeNote: "Skillz Arena (2026) markets Solitaire and Puzzle Blockz with Gemz practice and a shared cash wallet.",
      minCashout: "Varies by title; PayPal / Apple Pay / bank",
      payoutMethods: ["PayPal", "Apple Pay", "bank / debit"],
      eligibility: "18+, cash play in ~45 US states.",
      restricted: "Cash commonly unavailable in AR, CT, DE, LA, SD. Card titles may also block ME and IN.",
      verification: {
        level: "kyc",
        steps: [
          "Skillz account inside the individual game or Skillz Arena.",
          "Identity checks before cash-out.",
          "One account across the Skillz network."
        ]
      },
      signupSteps: [
        "Install Skillz Arena or a Skillz title such as Blackout Bingo.",
        "Create an 18+ account.",
        "Use free Gemz / Z / Ticketz to practice.",
        "Only deposit if you intend to enter cash matches."
      ],
      howToWin: ["Higher score vs a matched opponent or field wins the prize table."],
      howToGetMoney: [
        "Cash winnings settle to the Skillz wallet.",
        "Bonus Cash cannot be withdrawn and is usually a fraction of each entry.",
        "Withdraw to PayPal or the original payment method."
      ],
      tosNotes: [
        "Z coins are entertainment and have no cash value.",
        "Cash gameplay is geo-fenced.",
        "Welcome cash matches are time-limited and are not a free prize."
      ],
      redFlags: [
        "Free tournaments almost never pay USD.",
        "You can lose every cash entry fee."
      ],
      sources: [
        { title: "Skillz", url: "https://www.skillz.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "pocket7",
      name: "Pocket7Games",
      short: "iOS multi-game skill venue (solitaire, bingo, 21, pool). Free tickets exist; cash events need an entry.",
      type: "skill",
      status: "mixed",
      freePath: "paid-cash",
      platforms: ["ios"],
      signupUrl: "https://www.pocket7games.com/",
      iosUrl: "https://apps.apple.com/us/app/pocket7games-win-money/id1076225744",
      tosUrl: "https://www.pocket7games.com/",
      rulesUrl: "https://www.pocket7games.com/",
      prizeUsd: "Cash tournament prize pools",
      prizeNote: "Daily free-ticket events are for practice or non-cash currency unless a specific promo says otherwise.",
      minCashout: "PayPal / Venmo / Visa as offered",
      payoutMethods: ["PayPal", "Venmo", "Visa"],
      eligibility: "18+, enabled US jurisdictions.",
      restricted: "State blocks similar to other skill-cash apps.",
      verification: {
        level: "kyc",
        steps: ["Account + payment verification before withdrawal."]
      },
      signupSteps: [
        "Install Pocket7Games from the App Store.",
        "Register and collect daily free tickets.",
        "Read each event card: Ticket vs Cash."
      ],
      howToWin: ["Place on the event leaderboard."],
      howToGetMoney: ["Only cash-event winnings withdraw."],
      tosNotes: ["Entry fees fund the prize pool minus the operator cut."],
      redFlags: ["Free tickets ≠ free USD."],
      sources: [
        { title: "Pocket7Games", url: "https://www.pocket7games.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "backspin",
      name: "Backspin Games",
      short: "Newer iOS skill suite (solitaire, bingo, bubble, cooking). Markets real cash and bank deposit cashouts.",
      type: "skill",
      status: "mixed",
      freePath: "paid-cash",
      platforms: ["ios"],
      signupUrl: "https://apps.apple.com/us/app/backspin-games-win-real-money/id6740766965",
      iosUrl: "https://apps.apple.com/us/app/backspin-games-win-real-money/id6740766965",
      tosUrl: "https://apps.apple.com/us/app/backspin-games-win-real-money/id6740766965",
      rulesUrl: "https://apps.apple.com/us/app/backspin-games-win-real-money/id6740766965",
      prizeUsd: "Cash tournaments; also redeemable spins/gems for merchandise",
      prizeNote: "App Store listing (Backspin Games SL) advertises skill competitions and instant bank deposit. Confirm whether any listed event is $0 entry for USD.",
      minCashout: "Direct deposit — confirm in-app",
      payoutMethods: ["Bank direct deposit"],
      eligibility: "Check in-app geo and age gate (iOS 13+).",
      restricted: "Unknown / confirm at install. Newer operator — read ToS inside the app before depositing.",
      verification: {
        level: "kyc",
        steps: ["Expect identity and bank-account matching before a first cashout."]
      },
      signupSteps: [
        "Install Backspin Games: Win Real Money from the App Store.",
        "Create an account and open the tournament list.",
        "Filter for free events and read the prize column before playing."
      ],
      howToWin: ["Skill score vs real players, per the listing."],
      howToGetMoney: ["Withdraw via the advertised bank deposit after any KYC."],
      tosNotes: ["Listing says no bots and skill-based matchups. Still verify the in-app Terms before sending money."],
      redFlags: [
        "Newer than Papaya/Skillz. Smaller public ToS footprint.",
        "App Store category is Casino — treat cash features cautiously."
      ],
      sources: [
        { title: "App Store listing", url: "https://apps.apple.com/us/app/backspin-games-win-real-money/id6740766965" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "givling",
      name: "Givling",
      short: "iOS/Android trivia. Two free plays per day. Weekly team jackpots in USD plus a controversial student-loan queue.",
      type: "trivia",
      status: "caution",
      freePath: "partial",
      platforms: ["ios", "web"],
      signupUrl: "https://www.givling.com/",
      iosUrl: "https://apps.apple.com/us/app/givling/id966107040",
      tosUrl: "https://www.givling.com/",
      rulesUrl: "https://www.givling.com/",
      prizeUsd: "Weekly team jackpot (historically four figures, split three ways); queue prizes marketed up to $50k debt paydown",
      prizeNote: "Truth in Advertising has criticized queue economics. Minnesota previously treated a random-drawing feature as an illegal lottery. Extra plays cost money and do not guarantee a win.",
      minCashout: "PayPal for cash-team prizes; loan prizes pay a servicer, not you",
      payoutMethods: ["PayPal", "Direct to loan/mortgage servicer"],
      eligibility: "US-focused. Cash availability may vary by state.",
      restricted: "Review current state availability. Do not spend to chase the queue.",
      verification: {
        level: "eligibility",
        steps: [
          "Account + PayPal for cash prizes.",
          "Loan/mortgage prizes require servicer details and may have extra documentation."
        ]
      },
      signupSteps: [
        "Install Givling and create an account.",
        "Play the two free daily games only.",
        "Ignore coin packages unless you fully understand the queue is pay-to-climb."
      ],
      howToWin: [
        "Your score is teamed with other recent players. Highest team splits the weekly cash pot.",
        "A separate points queue funds debt-payoff prizes and is dominated by spenders."
      ],
      howToGetMoney: [
        "Cash-team winners are paid via PayPal.",
        "Queue ‘wins’ may never hit your bank account — they go to a servicer."
      ],
      tosNotes: [
        "Company historically said no purchase is required to win.",
        "TINA.org: big queue prizes effectively require heavy spending.",
        "Prize-pool size depends on ad and coin revenue — it is not a fixed house bank."
      ],
      redFlags: [
        "People have spent hundreds chasing the $50k queue.",
        "Treat this as a free trivia toy, not a debt plan."
      ],
      sources: [
        { title: "Givling", url: "https://www.givling.com/" },
        { title: "TINA.org Givling investigation", url: "https://truthinadvertising.org/articles/what-you-should-know-about-the-trivia-game-app-givling/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "vocal",
      name: "Vocal Challenges",
      short: "Browser writing contests with USD prizes. Some challenges are free; many large pots require paid Vocal+.",
      type: "creative",
      status: "mixed",
      freePath: "partial",
      platforms: ["web"],
      signupUrl: "https://vocal.media/challenges",
      iosUrl: "",
      tosUrl: "https://vocal.media/resources/challenges-frequently-asked-questions",
      rulesUrl: "https://vocal.media/resources/challenges-frequently-asked-questions",
      prizeUsd: "Open challenges often $200; specials have gone to $5,000–$20,000",
      prizeNote: "FAQ: you are not required to pay to enter, but Vocal+-only challenges exist. As of the 2026 challenge board, many $200 prompts remain Vocal+ gated.",
      minCashout: "Stripe payout of the prize; no store-credit conversion",
      payoutMethods: ["Stripe (local currency)"],
      eligibility: "Generally 13+. Must live in a Stripe-supported country to be paid.",
      restricted: "Non-Stripe countries cannot win cash. Stories must meet community guidelines and word counts.",
      verification: {
        level: "tax",
        steps: [
          "Free Vocal account (or Vocal+ if the challenge requires it).",
          "Winners get email + a request for tax and Stripe details.",
          "Connect Stripe. Cash is sent after tax info is complete."
        ]
      },
      signupSteps: [
        "Create a free account at vocal.media.",
        "Open Challenges and read whether the challenge is All creators or Vocal+ only.",
        "Write or select a story in the required word range and submit via the challenge dropdown."
      ],
      howToWin: ["Editors/judges pick winners. Not a random sweepstakes (unless a specific challenge says otherwise)."],
      howToGetMoney: [
        "If selected, reply to Vocal with tax/shipping info.",
        "Receive USD (or converted currency) on Stripe."
      ],
      tosNotes: [
        "Official rules are linked on each challenge page.",
        "Multiple entries are allowed on most challenges.",
        "Previously published Vocal stories can often be re-entered."
      ],
      redFlags: [
        "A $99/year Vocal+ fee is not a free competition.",
        "Filter for challenges that do not say Vocal+ exclusive."
      ],
      sources: [
        { title: "Vocal Challenges FAQ", url: "https://vocal.media/resources/challenges-frequently-asked-questions" },
        { title: "Vocal Challenges board", url: "https://vocal.media/challenges" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "kaggle",
      name: "Kaggle Competitions",
      short: "Browser data-science contests. Featured competitions publish USD prize pools. Getting Started tracks usually pay $0.",
      type: "tech",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.kaggle.com/competitions",
      iosUrl: "",
      tosUrl: "https://www.kaggle.com/legal/terms",
      rulesUrl: "https://www.kaggle.com/competitions",
      prizeUsd: "Featured pots commonly $5,000–$100,000+; specials exceed $1M",
      prizeNote: "Most competitors earn $0. Beginner competitions explicitly have no cash prize.",
      minCashout: "Winner claim only",
      payoutMethods: ["Wire / Stripe to the verified winner"],
      eligibility: "Each competition has its own rules (age, export control, team size, employee bans).",
      restricted: "Some competitions bar residents of sanctioned countries or sponsor employees.",
      verification: {
        level: "tax",
        steps: [
          "Kaggle account.",
          "On winning: KYC + W-9 or W-8BEN + bank/Stripe.",
          "Team prizes are paid to the team lead to split."
        ]
      },
      signupSteps: [
        "Create a free Kaggle account.",
        "Open Competitions and filter Prize > $0.",
        "Accept that competition’s rules before submitting.",
        "Submit predictions before the deadline. Final rank uses the private test set."
      ],
      howToWin: ["Leaderboard on a hidden test set. Ties and team merges have specific rules."],
      howToGetMoney: ["Sponsor/Kaggle pays after verification. Taxes withheld if required."],
      tosNotes: [
        "Competition rules override the general site ToS on IP, licensing, and eligibility.",
        "Using extra data or leaking the test set is a disqualification."
      ],
      redFlags: ["Weeks of work for a winner-take-most outcome.", "Read whether the prize requires open-sourcing your solution."],
      sources: [
        { title: "Kaggle Competitions", url: "https://www.kaggle.com/competitions" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "devpost",
      name: "Devpost Hackathons",
      short: "Browser directory of judged hackathons. Many are free to enter and pay winners in USD via the event’s official rules.",
      type: "tech",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://devpost.com/hackathons",
      iosUrl: "",
      tosUrl: "https://info.devpost.com/terms",
      rulesUrl: "https://devpost.com/hackathons",
      prizeUsd: "Per-event; challenge winners often $500–$25,000",
      prizeNote: "Each hackathon has its own sponsor and rules. Filter for online + open + prize.",
      minCashout: "Winner claim only",
      payoutMethods: ["Paid to the submitting individual, team rep, or organization"],
      eligibility: "Set per event (age, student-only, country, team size).",
      restricted: "US tax withholding may apply. Some events exclude sponsor countries or employees.",
      verification: {
        level: "tax",
        steps: [
          "Devpost account.",
          "Submit a public project page before the deadline.",
          "Winners complete sponsor tax paperwork. A portion may be withheld."
        ]
      },
      signupSteps: [
        "Create a free Devpost account.",
        "Browse hackathons. Open Rules before you build.",
        "Register, build, and submit through Devpost."
      ],
      howToWin: ["Judged on the published criteria. Not random."],
      howToGetMoney: [
        "Sponsor pays the entrant or team representative.",
        "The representative must split the prize inside the team."
      ],
      tosNotes: [
        "Official Rules on each event page control prizes.",
        "You usually keep IP except for a license the rules describe."
      ],
      redFlags: ["Some ‘prizes’ are only credits or swag. Confirm USD in the prize table."],
      sources: [
        { title: "Devpost Hackathons", url: "https://devpost.com/hackathons" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "arcprize",
      name: "ARC Prize (via Kaggle)",
      short: "High-dollar abstraction-and-reasoning competition hosted with Kaggle. Free to submit; open-source requirements apply.",
      type: "tech",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://arcprize.org/",
      iosUrl: "",
      tosUrl: "https://arcprize.org/",
      rulesUrl: "https://www.kaggle.com/competitions/arc-prize-2026-paper-track",
      prizeUsd: "2026 tracks advertise hundreds of thousands to $1M+ across prizes",
      prizeNote: "Grand prizes may require a perfect score and open-sourcing. Paper track is a separate pot.",
      minCashout: "Winner claim only",
      payoutMethods: ["As published by ARC Prize / Kaggle"],
      eligibility: "See the live Kaggle rules (open source, compute limits, no internet at eval).",
      restricted: "Must follow the Kaggle submission constraints.",
      verification: {
        level: "tax",
        steps: ["Kaggle + ARC eligibility + tax docs on award."]
      },
      signupSteps: [
        "Read arcprize.org for the current year structure.",
        "Enter through the designated Kaggle competition.",
        "Open-source if you want prize eligibility."
      ],
      howToWin: ["Score on held-out ARC-AGI tasks under the compute rules."],
      howToGetMoney: ["Prize committee / Kaggle payout after verification."],
      tosNotes: ["Hardware and internet limits are strict. Read them before investing compute."],
      redFlags: ["Research-grade difficulty. Not a casual contest."],
      sources: [
        { title: "ARC Prize", url: "https://arcprize.org/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "online-sweepstakes",
      name: "Online-Sweepstakes.com",
      short: "Independent directory of current sweepstakes. Used for years in r/beermoney. Not a prize payer itself.",
      type: "directory",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.online-sweepstakes.com/",
      iosUrl: "",
      tosUrl: "https://www.online-sweepstakes.com/",
      rulesUrl: "https://www.online-sweepstakes.com/",
      prizeUsd: "Varies by listed sponsor",
      prizeNote: "Filter for cash prizes and no-purchase entries. Always open the sponsor’s official rules.",
      minCashout: "n/a — directory",
      payoutMethods: ["Paid by each sponsor, not by this site"],
      eligibility: "Each listed sweep has its own eligibility.",
      restricted: "US-centric. Read each listing.",
      verification: {
        level: "eligibility",
        steps: ["Create a free forum/directory account if you want tracking.", "Enter on the sponsor site, not here."]
      },
      signupSteps: [
        "Open online-sweepstakes.com.",
        "Sort by ending soon or prize value.",
        "Click through and enter on the official sponsor form."
      ],
      howToWin: ["Whatever the sponsor’s official rules say (usually random draw)."],
      howToGetMoney: ["The sponsor pays winners after its own affidavit/KYC."],
      tosNotes: ["Directories can list expired or affiliate-wrapped pages. Trust the sponsor URL."],
      redFlags: ["Skip any listing that asks you to pay to enter or to text a premium number."],
      sources: [
        { title: "Online-Sweepstakes", url: "https://www.online-sweepstakes.com/" },
        { title: "r/beermoney directory thread", url: "https://www.reddit.com/r/beermoney/comments/60cm2e/is_there_a_site_that_collects_free_contests_for/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "reedsy-dir",
      name: "Reedsy Writing Contest List",
      short: "Curated list of living writing contests with prize and entry-fee fields. Use the $0 fee filter.",
      type: "directory",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://reedsy.com/resources/writing-contests",
      iosUrl: "",
      tosUrl: "https://reedsy.com/privacy",
      rulesUrl: "https://reedsy.com/resources/writing-contests",
      prizeUsd: "Listed per contest (hundreds to tens of thousands)",
      prizeNote: "Reedsy’s own Prompts contest charges a small fee. Prefer third-party listings marked $0.",
      minCashout: "n/a — directory",
      payoutMethods: ["Each contest sponsor"],
      eligibility: "Per contest (often 18+, original unpublished work).",
      restricted: "Many are country-limited.",
      verification: {
        level: "tax",
        steps: ["Winners deal with the contest sponsor’s affidavit and tax forms."]
      },
      signupSteps: [
        "Open the Reedsy contest index.",
        "Filter entry fee $0 and confirm the prize is cash USD (not ‘publication only’).",
        "Enter on the sponsor’s official form."
      ],
      howToWin: ["Judged literary contests, unless the listing says sweepstakes."],
      howToGetMoney: ["Sponsor pays after winner verification."],
      tosNotes: ["Always keep a copy of the official rules PDF."],
      redFlags: ["Reading-fee contests are not free competitions."],
      sources: [
        { title: "Reedsy writing contests", url: "https://reedsy.com/resources/writing-contests" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "reddit-sweeps",
      name: "r/sweepstakes & r/Sweepstake",
      short: "Reddit feeds of current giveaways. High noise, some real USD brand sweeps. Verify every link.",
      type: "directory",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://www.reddit.com/r/sweepstakes/",
      iosUrl: "https://apps.apple.com/us/app/reddit/id1064216828",
      tosUrl: "https://www.redditinc.com/policies/user-agreement",
      rulesUrl: "https://www.reddit.com/r/sweepstakes/",
      prizeUsd: "Varies — brand cash sweeps are regularly posted",
      prizeNote: "Also see r/Sweepstake and r/giveaways. Mods try to flag US-only vs worldwide.",
      minCashout: "n/a",
      payoutMethods: ["Sponsor"],
      eligibility: "Posted per thread (US ONLY is common).",
      restricted: "Many Gleam/ViralSweep actions require social follows. Still must be no-purchase to be a legal US sweep.",
      verification: {
        level: "eligibility",
        steps: ["Enter on the sponsor form. Winners are contacted by the brand, not by Reddit."]
      },
      signupSteps: [
        "Open r/sweepstakes in the Reddit iOS app or browser.",
        "Prefer posts that link to ViralSweep/Gleam/brand domains and state a cash prize + end date.",
        "Read the official rules on that form before you enter."
      ],
      howToWin: ["Almost always random among eligible entries."],
      howToGetMoney: ["Brand emails the winner and pays after affidavit."],
      tosNotes: ["Reddit is not the sponsor.", "Giveaway bots and referral spam are common."],
      redFlags: [
        "Never pay a ‘winner’s fee’.",
        "Skip crypto DM ‘admins’.",
        "Skip Kickr-style casino affiliate spam if you want true free contests."
      ],
      sources: [
        { title: "r/sweepstakes", url: "https://www.reddit.com/r/sweepstakes/" },
        { title: "r/Sweepstake", url: "https://www.reddit.com/r/Sweepstake/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "luckyday",
      name: "Lucky Day",
      short: "Once a major free scratch/tournament app. Removed from iOS. Community cashout complaints are widespread.",
      type: "sweepstakes",
      status: "inactive",
      freePath: "partial",
      platforms: ["web"],
      signupUrl: "https://luckyday.com/",
      iosUrl: "",
      tosUrl: "https://luckyday.com/terms-of-use.html",
      rulesUrl: "https://luckyday.com/terms-of-use.html",
      prizeUsd: "ToS still describe Cash Competitions and PayPal withdrawals",
      prizeNote: "Not a recommended iOS path in 2026. Included so reviewers can see why it dropped off.",
      minCashout: "PayPal withdrawal with a service fee (ToS)",
      payoutMethods: ["PayPal"],
      eligibility: "ToS historically: age gate; employees ineligible for cash prizes.",
      restricted: "Not on the App Store. Android-only in later reviews.",
      verification: {
        level: "kyc",
        steps: [
          "ToS: Lucky Day may demand government ID, proof of address, and payment-method proof.",
          "Withdrawals cancelled if verification is not received within 5 days."
        ]
      },
      signupSteps: [
        "Do not treat this as a current iOS option.",
        "If the site is still live, read the Terms of Use before creating an account."
      ],
      howToWin: ["ToS describe cash competitions and tournaments. Practical cashout reliability is disputed."],
      howToGetMoney: ["PayPal email + verification. Service fee deducted."],
      tosNotes: [
        "Account investigation rights are broad.",
        "Closed accounts may forfeit deposits and winnings."
      ],
      redFlags: [
        "Removed from iOS.",
        "r/beermoney: gift cards never in stock, puzzle-piece cashout walls.",
        "Do not send money."
      ],
      sources: [
        { title: "Lucky Day Terms of Use", url: "https://luckyday.com/terms-of-use.html" },
        { title: "r/beermoney cashout thread", url: "https://www.reddit.com/r/beermoney/comments/12k4gfp/lucky_day_app_cashout_legit/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "hqtrivia",
      name: "HQ Trivia",
      short: "The original live-trivia cash app. No regular games reported since November 2022. Kept as a closed file.",
      type: "trivia",
      status: "inactive",
      freePath: "full",
      platforms: ["ios"],
      signupUrl: "https://hqtrivia.com/",
      iosUrl: "",
      tosUrl: "",
      rulesUrl: "https://wiki.archiveteam.org/index.php/HQ_Trivia",
      prizeUsd: "Historically $1,000–$20,000 pots split among perfect games, paid via PayPal",
      prizeNote: "ArchiveTeam: no games held since Nov 2022. Do not download look-alike apps.",
      minCashout: "Historically PayPal; $20 minimum was later dropped",
      payoutMethods: ["PayPal (historical)"],
      eligibility: "Historical: app account, show up live.",
      restricted: "Service is off-air.",
      verification: {
        level: "account",
        steps: ["Historical winners linked PayPal inside the app."]
      },
      signupSteps: ["Do not sign up. The product is not running scheduled cash games."],
      howToWin: ["Was: 12 live questions, 10 seconds each, split the pot."],
      howToGetMoney: ["Was: PayPal. Outstanding balances after shutdowns were a known problem."],
      tosNotes: ["Revived briefly in 2020, then went dark again."],
      redFlags: ["Clone apps using the HQ name. Ignore them."],
      sources: [
        { title: "ArchiveTeam HQ Trivia", url: "https://wiki.archiveteam.org/index.php/HQ_Trivia" }
      ],
      lastChecked: "2026-08-12"
    }
  ]
};
