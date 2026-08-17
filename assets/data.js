/* USD Contest Ledger — compiled 2026-08-12
   Each listing is sourced from official rules/ToS plus recent public reporting.
   Terms change. Always open the official rules before you enter. */
window.LEDGER = {
  reviewed: "2026-08-17",
  pass: "C",
  featured: ["pch", "aarp", "lucktastic", "kaggle", "online-sweepstakes", "pulsz"],
  addedThisPass: [
    "aarp", "hgtv", "iheart", "meredith", "mcluck", "wowvegas", "realprize",
    "drivendata", "herox", "xprize", "topcoder", "sweeps-fanatics",
    "contest-girl", "ultracontest", "sweepsadvantage", "freebieshark",
    "sweepwidget", "solitaire-smash", "bingo-billions"
  ],
  addedThisPassC: ["espn-pickem", "espn-survivor", "espn-wintotals", "espn-playoff", "espn-pigskin", "espn-cfb", "cbs-pro-pickem", "cbs-cfb-pickem", "fox-super6", "fanatics-survivor", "prizepicks-jackpot", "usatoday-survivor", "yahoo-survival", "pickwatch", "beat-the-geek", "tsg-playoff", "football-nation", "favorites-pickem", "thelines-survivor", "rams-pickem", "fanduel-shuffle", "betmgm-survivor", "dk-f2p", "draft-pro", "splash-mock", "fftoday-draft", "rotoballer", "apex-fantasy", "fpl-official", "fpl-second-chance", "fpl-draft", "fantasy-efl", "telegraph-ff", "ucl-fantasy", "pl-predictor", "pooltracker-epl", "ffs-fpl", "ffs-ucl", "ffs-efl", "ffs-tattico", "football-mad", "fantasy-arena", "lazyfpl", "fplhub", "bona-fide", "olka", "fplmanager-india", "fplstore", "pitchbooking", "sky-super6", "bet365-6scores", "betmgm-goldengoals", "paddypower-drop", "dirty-dozen", "the-special-one", "andys-predictor", "verse-gaming", "lockmypicks", "pickem-sports", "sports-predictor", "goaloracle", "oddspedia", "streak-for-cash", "gamersaloon", "playerslounge", "officepoolstop", "funofficepools", "mysurvivorpool", "gridirongames", "squarespool", "myfantasyleague", "trofeo", "dabble", "parlayplay"],
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
    },
    {
      id: "pools",
      name: "Free pool & league platforms",
      blurb: "Free tools for running your own pick’em, survivor, squares, or fantasy league. The platform is free; the prize pot is funded by your group."
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
      id: "aarp",
      name: "AARP Sweepstakes",
      short: "Recurring no-purchase cash drawings. A free AARP.org account is enough; paid membership is not required.",
      type: "sweepstakes",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://www.aarp.org/benefits-discounts/sweepstakes/",
      iosUrl: "https://apps.apple.com/us/app/aarp/id333180431",
      tosUrl: "https://www.aarp.org/about-aarp/company/terms-of-service/",
      rulesUrl: "https://www.aarp.org/benefits-discounts/sweepstakes/",
      prizeUsd: "Weekly and campaign checks commonly $1,500–$10,000; some pots higher",
      prizeNote: "Campaigns rotate (cash weeks, Invest in Your Nest, VIP experiences). Official rules for the live campaign control the prize table. Membership does not improve odds.",
      minCashout: "Winner claim only — typically a check",
      payoutMethods: ["Check", "Sometimes electronic funds"],
      eligibility: "Usually US + DC, 18+ unless a specific campaign is 50+. One entry per person per rules.",
      restricted: "Void where prohibited. Employees and household members ineligible. Some campaigns are 50+ only.",
      verification: {
        level: "eligibility",
        steps: [
          "Create a free AARP.org account with legal name, email, ZIP, DOB.",
          "Winners are emailed or called.",
          "Sign an affidavit of eligibility, liability waiver, and publicity release.",
          "Complete a W-9 or equivalent before the check is cut."
        ]
      },
      signupSteps: [
        "Open aarp.org sweepstakes (browser) or the AARP iOS app.",
        "Register a free account — you do not need to buy membership.",
        "Enter the live campaign. Read that campaign’s official rules PDF.",
        "Some weekly series give you one entry that carries into later weekly drawings."
      ],
      howToWin: ["Random drawing among eligible entries for that period."],
      howToGetMoney: [
        "Respond to official AARP/administrator contact within the stated window.",
        "Return affidavit + tax forms.",
        "Receive a check. Taxes are yours."
      ],
      tosNotes: [
        "NO PURCHASE OR PAYMENT NECESSARY. Membership will not increase chances of winning.",
        "Each campaign has its own official rules and administrator (sometimes ePrize / Cvent)."
      ],
      redFlags: ["Ignore anyone who DMs claiming you won and asking for a processing fee."],
      sources: [
        { title: "AARP sweepstakes hub", url: "https://www.aarp.org/benefits-discounts/sweepstakes/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "hgtv",
      name: "HGTV / Food Network Giveaways",
      short: "Annual Dream Home and seasonal Urban Oasis drawings. Free daily entries on two sites; cash option is real USD.",
      type: "sweepstakes",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.hgtv.com/sweepstakes",
      iosUrl: "",
      tosUrl: "https://www.hgtv.com/sweepstakes/hgtv-dream-home/sweepstakes/rules",
      rulesUrl: "https://www.hgtv.com/sweepstakes/hgtv-dream-home/sweepstakes/rules",
      prizeUsd: "Dream Home 2026: house + $100,000 EFT, or $750,000 cash option + $100,000",
      prizeNote: "Dream Home 2026 entry closed 13 Feb 2026. Urban Oasis and other Discovery giveaways typically reopen later in the year. Always confirm the live hub.",
      minCashout: "Winner claim only",
      payoutMethods: ["Electronic funds transfer", "Title transfer if you take the house"],
      eligibility: "US + DC (incl. territories on some years), 21+ at start date.",
      restricted: "Background check. Winner has 5 days to respond. Taxes and carrying costs on the house are the winner’s.",
      verification: {
        level: "tax",
        steps: [
          "Complete the online form with legal name and street address (no P.O. box).",
          "Winner notification + background check.",
          "Return all requested forms or the prize is forfeited and an alternate is drawn.",
          "1099 issued for the actual prize value."
        ]
      },
      signupSteps: [
        "Open hgtv.com/sweepstakes and foodnetwork.com sponsored sweeps.",
        "Enter once per site per day while a giveaway is open.",
        "Use the official reminder email if offered — do not pay a ‘entry service’."
      ],
      howToWin: ["One random grand-prize drawing among eligible entries."],
      howToGetMoney: [
        "If you take the cash option, Discovery pays by EFT after paperwork.",
        "If you take the house you still get the cash prize portion, plus a tax bill on the full ARV."
      ],
      tosNotes: [
        "NO PURCHASE NECESSARY. A purchase will not increase chance of winning.",
        "Prize cannot be transferred except at sponsor’s discretion.",
        "Odds depend on number of eligible entries."
      ],
      redFlags: ["Dream Home windows are seasonal. Fake ‘you won the HGTV house’ emails are a perennial scam."],
      sources: [
        { title: "HGTV Dream Home 2026 Official Rules", url: "https://www.hgtv.com/sweepstakes/hgtv-dream-home/sweepstakes/rules" },
        { title: "HGTV sweepstakes hub", url: "https://www.hgtv.com/sweepstakes" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "iheart",
      name: "iHeartRadio Contests",
      short: "National and local radio sweeps with cash and flyaways. Enter in the iOS app or on station sites; keywords are free.",
      type: "sweepstakes",
      status: "live",
      freePath: "full",
      platforms: ["ios", "web"],
      signupUrl: "https://www.iheart.com/promotions/",
      iosUrl: "https://apps.apple.com/us/app/iheart-radio-music-podcasts/id290638154",
      tosUrl: "https://www.iheart.com/legal/",
      rulesUrl: "https://www.iheart.com/promotions/",
      prizeUsd: "Rotating — e.g. 2026 USA Cash: 100 × $2,500; other pots are trips + prepaid cards",
      prizeNote: "Each promotion has its own Aptivada/official-rules link. Listen or open the app for the daily keyword during the designated playtime, or use the online AMOE if the rules provide one.",
      minCashout: "Winner claim only",
      payoutMethods: ["Check or prepaid card", "Travel vouchers on flyaways"],
      eligibility: "Usually US + DC (+ PR on some national pots), 18+ or 21+ by promo.",
      restricted: "One entry per person/phone/email per playtime. Local station contests may be DMA-limited.",
      verification: {
        level: "eligibility",
        steps: [
          "Register in the iHeart app or on the station site.",
          "Winners selected at random and contacted by the station/administrator.",
          "Affidavit + tax forms on cash prizes."
        ]
      },
      signupSteps: [
        "Install iHeartRadio or open iheart.com/promotions.",
        "Create a free account.",
        "During a live contest, submit the designated keyword in the app or on the station page.",
        "If you do not want to listen live, read that promo’s rules for the online/mail alternate."
      ],
      howToWin: ["Random among eligible keyword entries for that playtime or campaign."],
      howToGetMoney: ["Station/administrator pays after winner paperwork. Cash contests pay a check or card, not app credit."],
      tosNotes: [
        "Each promo’s official rules control. National pots and local pots are different legal documents.",
        "Text-to-enter, if offered, must also have a free online path to stay a legal sweep."
      ],
      redFlags: ["Premium-rate texts and ‘claim your prize’ Facebook clones. Stay on iheart.com or the official app."],
      sources: [
        { title: "iHeart promotions", url: "https://www.iheart.com/promotions/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "meredith",
      name: "People / BHG / Meredith magazine sweeps",
      short: "Dotdash Meredith titles run daily-entry cash drawings (BHG $25k and siblings). Free web form, no purchase.",
      type: "sweepstakes",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.bhg.com/sweepstakes/",
      iosUrl: "",
      tosUrl: "https://www.dotdashmeredith.com/brands-terms",
      rulesUrl: "https://www.bhg.com/sweepstakes/",
      prizeUsd: "Recurring magazine pots — BHG has advertised $25,000 cash; other titles vary",
      prizeNote: "People, Better Homes & Gardens, Allrecipes, Travel + Leisure and sisters rotate daily-entry sweeps. Open the current official rules on that title’s site.",
      minCashout: "Winner claim only",
      payoutMethods: ["Check or EFT per that official rules PDF"],
      eligibility: "Typically US 18+ or 21+. One entry per email per day.",
      restricted: "Magazine subscription is optional and must not improve odds.",
      verification: {
        level: "eligibility",
        steps: [
          "Submit the official form with legal name and address.",
          "Winner affidavit + W-9 on cash prizes of $600+."
        ]
      },
      signupSteps: [
        "Open the title’s sweepstakes page (start at bhg.com/sweepstakes or people.com promotions).",
        "Enter daily. Decline any paid club upsell.",
        "Save the official rules URL for that entry period."
      ],
      howToWin: ["Random drawing after the entry deadline."],
      howToGetMoney: ["Administrator pays after affidavit. Taxes on you."],
      tosNotes: ["NO PURCHASE NECESSARY is required on every legitimate Meredith sweep.", "Multiple brands share a corporate legal stack but each sweep is its own promotion."],
      redFlags: ["Lookalike ‘People magazine winner’ texts. Only trust the brand domain."],
      sources: [
        { title: "BHG sweepstakes", url: "https://www.bhg.com/sweepstakes/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "mcluck",
      name: "McLuck",
      short: "Sweeps casino with native iOS app. Free SC via login/AMOE; cash redemption from about 75 SC after KYC.",
      type: "sweeps-casino",
      status: "live",
      freePath: "amoes",
      platforms: ["ios", "web"],
      signupUrl: "https://www.mcluck.com/",
      iosUrl: "https://apps.apple.com/us/app/mcluck-social-casino/id1618338918",
      tosUrl: "https://www.mcluck.com/",
      rulesUrl: "https://www.mcluck.com/",
      prizeUsd: "1 SC ≈ $1",
      prizeNote: "Gift cards from ~10 SC; cash via ACH from ~75 SC. First-time KYC is ID + same-day selfie + proof of address ≤90 days.",
      minCashout: "About 10 SC gift cards / 75 SC cash",
      payoutMethods: ["ACH bank transfer", "Digital gift cards"],
      eligibility: "US, age gate, eligible states only.",
      restricted: "Long block list in 2026 reviews includes AL, CA, CT, DE, GA, ID, KY, LA, MD, MI, MT, NV, NJ, NY, OH, TN, WA, WV — confirm on the live gate.",
      verification: {
        level: "kyc",
        steps: [
          "Register one account in your legal name.",
          "Upload photo ID, selfie, and recent proof of address before the first redeem.",
          "1x playthrough on promotional SC.",
          "Redeem from the cashier."
        ]
      },
      signupSteps: [
        "Create an account at mcluck.com or in the McLuck iOS app.",
        "Claim no-purchase welcome / daily SC.",
        "Use the Sweeps Rules mail-in AMOE for extra free SC."
      ],
      howToWin: ["Play in Sweeps Coin mode. Gold Coins never redeem."],
      howToGetMoney: [
        "Gift cards are the realistic free-player exit.",
        "Cash ACH can take several business days; first redemption waits on KYC."
      ],
      tosNotes: ["No purchase necessary. SC cannot be bought.", "Dormant coins may expire."],
      redFlags: ["State list is aggressive. Do not bother if you live in a blocked state."],
      sources: [
        { title: "McLuck", url: "https://www.mcluck.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "wowvegas",
      name: "WOW Vegas",
      short: "Browser/PWA sweeps casino. Daily login + mail-in AMOE. Cash from ~100 SC; gift cards lower.",
      type: "sweeps-casino",
      status: "live",
      freePath: "amoes",
      platforms: ["web"],
      signupUrl: "https://www.wowvegas.com/",
      iosUrl: "",
      tosUrl: "https://www.wowvegas.com/",
      rulesUrl: "https://www.wowvegas.com/",
      prizeUsd: "1 SC = $1",
      prizeNote: "No native iOS app in mid-2026 reviews — install the PWA from Safari if you want it on the home screen.",
      minCashout: "About 25–50 SC gift cards / 50–100 SC cash (confirm cashier)",
      payoutMethods: ["ACH / Trustly", "Skrill", "Prizeout gift cards"],
      eligibility: "US eligible states, 18+/21+.",
      restricted: "Commonly blocked: WA, ID, NV, MI and territories. 1099-MISC at $600+.",
      verification: {
        level: "kyc",
        steps: [
          "KYC once: government ID + proof of address (24–72 hours).",
          "1x playthrough.",
          "Redeem at or above the method minimum."
        ]
      },
      signupSteps: [
        "Register at wowvegas.com.",
        "Claim daily free SC.",
        "Follow Sweeps Rules for the handwritten AMOE."
      ],
      howToWin: ["SC gameplay only."],
      howToGetMoney: ["Cashier after KYC. Gift cards are faster than ACH."],
      tosNotes: ["Standard dual-currency sweeps model. No purchase necessary."],
      redFlags: ["No App Store listing — do not download a similarly named iOS clone."],
      sources: [
        { title: "WOW Vegas", url: "https://www.wowvegas.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "realprize",
      name: "RealPrize",
      short: "Sweeps casino with a relatively fat no-deposit SC package in 2026 promos. Browser signup; KYC before cash.",
      type: "sweeps-casino",
      status: "live",
      freePath: "amoes",
      platforms: ["web"],
      signupUrl: "https://www.realprize.com/",
      iosUrl: "",
      tosUrl: "https://www.realprize.com/",
      rulesUrl: "https://www.realprize.com/",
      prizeUsd: "1 SC ≈ $1",
      prizeNote: "Welcome packages advertised with large GC + bonus SC. Only SC won after playthrough redeem.",
      minCashout: "Confirm in cashier (commonly 50–100 SC)",
      payoutMethods: ["Bank transfer", "Skrill", "Gift cards"],
      eligibility: "US eligible states, age gate, one account.",
      restricted: "State gate on first visit. VPN banned.",
      verification: {
        level: "kyc",
        steps: ["Government ID before first redemption.", "Playthrough on bonus SC."]
      },
      signupSteps: [
        "Create a free RealPrize account.",
        "Claim the no-purchase coins.",
        "Use AMOE in the Sweeps Rules for extra SC without buying GC."
      ],
      howToWin: ["Play SC mode."],
      howToGetMoney: ["Redeem eligible SC after KYC."],
      tosNotes: ["Purchase of Gold Coins is optional and does not buy SC directly."],
      redFlags: ["Promo pages inflate welcome SC. Read the live cashier, not the banner."],
      sources: [
        { title: "RealPrize", url: "https://www.realprize.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "drivendata",
      name: "DrivenData",
      short: "Social-impact data-science contests with published USD purses. Free to enter; winners paid by check or wire after tax forms.",
      type: "tech",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.drivendata.org/competitions/",
      iosUrl: "",
      tosUrl: "https://www.drivendata.org/competitions/",
      rulesUrl: "https://www.drivendata.org/competitions/",
      prizeUsd: "Per contest — often $10,000–$200,000 total purses",
      prizeNote: "Not every competition pays cash. Filter for prize competitions. Winning code is usually open-sourced under MIT.",
      minCashout: "Winner claim only",
      payoutMethods: ["Check", "Wire / electronic transfer"],
      eligibility: "Set per contest. Teams allowed. Some US-person limits on federal challenges.",
      restricted: "Employees of the sponsor are typically banned. Export-control and data-use rules apply.",
      verification: {
        level: "tax",
        steps: [
          "DrivenData account.",
          "On win: eligibility packet + W-9 (US) within the stated days.",
          "Team prize split is even unless the team files a written allocation."
        ]
      },
      signupSteps: [
        "Create a free account at drivendata.org.",
        "Open Competitions and read that contest’s full rules (they say NO PURCHASE NECESSARY).",
        "Accept the data license and submit before the UTC deadline."
      ],
      howToWin: ["Private leaderboard / judged criteria in the problem statement."],
      howToGetMoney: [
        "DrivenData notifies winners by email.",
        "After verification, check or wire in about 30 days.",
        "US winners get a 1099. You pay the tax."
      ],
      tosNotes: [
        "Winning model documentation template is mandatory for prize eligibility.",
        "Failure to return verification docs can forfeit the purse."
      ],
      redFlags: ["Warm-up / practice tracks often pay $0. Read the prize table."],
      sources: [
        { title: "DrivenData competitions", url: "https://www.drivendata.org/competitions/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "herox",
      name: "HeroX / Challenge.gov",
      short: "Marketplace of judged innovation prizes, including US federal Challenge.gov pots paid by EFT.",
      type: "tech",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.herox.com/challenges",
      iosUrl: "",
      tosUrl: "https://www.herox.com/terms",
      rulesUrl: "https://www.challenge.gov/",
      prizeUsd: "Per challenge — federal pots often $25,000–$500,000+",
      prizeNote: "HeroX hosts many sponsor challenges. Challenge.gov is the official US government index; some of those are also on HeroX.",
      minCashout: "Winner claim only",
      payoutMethods: ["Electronic funds transfer to the team captain or entity"],
      eligibility: "Federal cash prizes usually require a US citizen/permanent-resident captain or a US-incorporated entity.",
      restricted: "Federal employees and sponsor staff typically ineligible. International solvers may compete but cannot take the cash.",
      verification: {
        level: "tax",
        steps: [
          "Register on HeroX and/or Challenge.gov.",
          "Identify a team captain who can legally receive the purse.",
          "Winners return verification and payment documents within ~10 business days.",
          "IRS withholding may apply."
        ]
      },
      signupSteps: [
        "Browse herox.com/challenges or challenge.gov.",
        "Open Official Rules before you build.",
        "Submit through the listed platform by the deadline."
      ],
      howToWin: ["Expert or agency judging on published criteria. Not a random sweep."],
      howToGetMoney: ["Sponsor/agency pays the captain or the entity in full. The captain must split the team."],
      tosNotes: ["Each challenge is its own legal promotion.", "IP and open-source conditions vary wildly — read them."],
      redFlags: ["Some HeroX listings are awareness campaigns with no cash. Confirm the prize table."],
      sources: [
        { title: "HeroX challenges", url: "https://www.herox.com/challenges" },
        { title: "Challenge.gov", url: "https://www.challenge.gov/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "xprize",
      name: "XPRIZE",
      short: "Large multi-year incentive prizes and occasional hackathons with seven-figure USD pools.",
      type: "tech",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.xprize.org/",
      iosUrl: "",
      tosUrl: "https://www.xprize.org/",
      rulesUrl: "https://www.xprize.org/",
      prizeUsd: "Flagship prizes in the millions; 2026 Google-backed hackathon advertised a $2M pool",
      prizeNote: "These are multi-month or multi-year team efforts, not daily apps. Competitor agreements are long and specific.",
      minCashout: "Winner claim only",
      payoutMethods: ["As stated in that prize’s competitor agreement"],
      eligibility: "Per prize. Teams, labs, and companies. Sanctions and export rules apply.",
      restricted: "Some tracks require open results, field tests, or US presence.",
      verification: {
        level: "tax",
        steps: [
          "Register a team on xprize.org.",
          "Execute the competitor agreement.",
          "Milestone and grand-prize payments follow verification and judging."
        ]
      },
      signupSteps: [
        "Open the live prize on xprize.org.",
        "Read the guidelines and competitor agreement before paying any optional team fee — many tracks are free to register.",
        "Submit on the published milestone calendar."
      ],
      howToWin: ["Judged against published technical thresholds."],
      howToGetMoney: ["XPRIZE / sponsor pays per the agreement after judges certify the result."],
      tosNotes: ["Guidelines override marketing pages.", "IP assignment or license terms are the whole game — read them twice."],
      redFlags: ["Not a casual contest. Budget time in months, not evenings."],
      sources: [
        { title: "XPRIZE", url: "https://www.xprize.org/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "topcoder",
      name: "Topcoder",
      short: "Long-running design, development, and data-science tournaments. Many challenges pay USD to verified members.",
      type: "tech",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.topcoder.com/challenges",
      iosUrl: "",
      tosUrl: "https://www.topcoder.com/policy",
      rulesUrl: "https://www.topcoder.com/challenges",
      prizeUsd: "Per challenge — hundreds to tens of thousands; TCO finals add extra purses",
      prizeNote: "Create a free member account. Cash is paid through Topcoder’s payment stack after tax profile setup. Not every listed item is a cash challenge.",
      minCashout: "Per Topcoder payment policy (complete tax profile first)",
      payoutMethods: ["Topcoder payment / Payoneer-style rails as currently offered"],
      eligibility: "18+ typical. Some challenges are region- or skill-gated. Employees of the client are ineligible.",
      restricted: "Payment may be blocked in sanctioned countries. You must pass member verification to get paid.",
      verification: {
        level: "tax",
        steps: [
          "Topcoder member account.",
          "Complete identity and tax profile before a payout will release.",
          "TCO cash is paid within the stated window after finals."
        ]
      },
      signupSteps: [
        "Register at topcoder.com.",
        "Open Challenges and filter for prize > $0.",
        "Submit before the challenge deadline. Read that challenge’s spec — it is the contract."
      ],
      howToWin: ["Score / review board / provisional + final tests, depending on track."],
      howToGetMoney: ["Winnings hit your Topcoder account, then you withdraw after tax setup."],
      tosNotes: ["Work product licensing is defined per challenge.", "Late or non-passing submissions earn $0."],
      redFlags: ["Some ‘challenges’ are copilot or QA tasks, not contests. Check the type badge."],
      sources: [
        { title: "Topcoder challenges", url: "https://www.topcoder.com/challenges" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "sweeps-fanatics",
      name: "Sweepstakes Fanatics",
      short: "High-traffic US directory of no-purchase sweeps. Not a payer — click through to the sponsor.",
      type: "directory",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.sweepstakesfanatics.com/",
      iosUrl: "",
      tosUrl: "https://www.sweepstakesfanatics.com/",
      rulesUrl: "https://www.sweepstakesfanatics.com/",
      prizeUsd: "Varies by listed sponsor; cash listings are common",
      prizeNote: "r/beermoney-era staple alongside Online-Sweepstakes. Prefer listings that link official rules.",
      minCashout: "n/a — directory",
      payoutMethods: ["Paid by each sponsor"],
      eligibility: "Per listing, usually US.",
      restricted: "Affiliate wrappers exist. Confirm the sponsor domain.",
      verification: {
        level: "eligibility",
        steps: ["Enter on the sponsor form. The directory does not pay you."]
      },
      signupSteps: [
        "Open sweepstakesfanatics.com.",
        "Filter or scan for cash / daily entry.",
        "Enter on the official sponsor page and save that rules URL."
      ],
      howToWin: ["Whatever the sponsor’s official rules say."],
      howToGetMoney: ["Sponsor affidavit / check."],
      tosNotes: ["Directories are not the sponsor of listed giveaways."],
      redFlags: ["Skip any outbound link that asks you to pay to enter."],
      sources: [
        { title: "Sweepstakes Fanatics", url: "https://www.sweepstakesfanatics.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "contest-girl",
      name: "Contest Girl",
      short: "Long-running US/Canada contest listing blog. Good for daily cash and instant-win hunting.",
      type: "directory",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.contestgirl.com/",
      iosUrl: "",
      tosUrl: "https://www.contestgirl.com/",
      rulesUrl: "https://www.contestgirl.com/",
      prizeUsd: "Varies — many cash and prepaid-card listings",
      prizeNote: "Blog format. Check end dates; expired posts linger.",
      minCashout: "n/a — directory",
      payoutMethods: ["Sponsor"],
      eligibility: "Posted per contest (US, US+CA, or WW).",
      restricted: "Canadian eligibility is marked when it exists — do not assume.",
      verification: {
        level: "eligibility",
        steps: ["Enter on the sponsor site."]
      },
      signupSteps: [
        "Open contestgirl.com.",
        "Use category or search for ‘cash’.",
        "Click through and read official rules."
      ],
      howToWin: ["Sponsor drawing or instant win."],
      howToGetMoney: ["Sponsor pays winners."],
      tosNotes: ["Independent blog, not a prize administrator."],
      redFlags: ["Old posts. Always verify the end date on the sponsor page."],
      sources: [
        { title: "Contest Girl", url: "https://www.contestgirl.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "ultracontest",
      name: "UltraContest",
      short: "Directory biased toward cash and instant-win brand games. Useful daily-entry list.",
      type: "directory",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.ultracontest.com/",
      iosUrl: "",
      tosUrl: "https://www.ultracontest.com/",
      rulesUrl: "https://www.ultracontest.com/",
      prizeUsd: "Varies — site markets cash-first listings",
      prizeNote: "2026 roundups cite dozens of live instant wins from national CPG brands.",
      minCashout: "n/a — directory",
      payoutMethods: ["Sponsor"],
      eligibility: "Per brand rules. Many are 21+ alcohol promotions.",
      restricted: "Tobacco/alcohol instant wins require age + sometimes smoker status.",
      verification: {
        level: "eligibility",
        steps: ["Enter on the brand’s official game. Keep a screenshot of the official rules."]
      },
      signupSteps: [
        "Open ultracontest.com.",
        "Sort by cash or instant win.",
        "Enter only on the brand domain."
      ],
      howToWin: ["Brand RNG or random draw."],
      howToGetMoney: ["Brand / prize house (often a prepaid card or Venmo credit)."],
      tosNotes: ["Alcohol and tobacco games are 21+ and state-restricted."],
      redFlags: ["Pack-code games must still offer AMOE. If they do not, skip."],
      sources: [
        { title: "UltraContest", url: "https://www.ultracontest.com/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "sweepsadvantage",
      name: "Sweepstakes Advantage",
      short: "Daily-updated directory with a dedicated cash-sweeps view. Forum culture similar to Online-Sweepstakes.",
      type: "directory",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.sweepsadvantage.com/cash-sweepstakes",
      iosUrl: "",
      tosUrl: "https://www.sweepsadvantage.com/",
      rulesUrl: "https://www.sweepsadvantage.com/cash-sweepstakes",
      prizeUsd: "Hundreds of live cash listings at a time (site claim, mid-2026)",
      prizeNote: "Use the cash filter. Community winner reports exist but are not audited by this ledger.",
      minCashout: "n/a — directory",
      payoutMethods: ["Sponsor"],
      eligibility: "Per listing.",
      restricted: "US-centric. Read each official rules page.",
      verification: {
        level: "eligibility",
        steps: ["Sponsor verifies winners, not this directory."]
      },
      signupSteps: [
        "Open sweepsadvantage.com/cash-sweepstakes.",
        "Enter daily listings first if you want volume.",
        "Keep a spreadsheet of what you entered — the site will not do it for you."
      ],
      howToWin: ["Sponsor rules."],
      howToGetMoney: ["Sponsor payout after affidavit."],
      tosNotes: ["Directory only."],
      redFlags: ["Affiliate casino modules on some sweep sites. Stay on the cash-listing view."],
      sources: [
        { title: "SweepsAdvantage cash", url: "https://www.sweepsadvantage.com/cash-sweepstakes" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "freebieshark",
      name: "FreebieShark",
      short: "Daily instant-win and sweep tracker. Strong for brand cash, Venmo credits, and prepaid cards.",
      type: "directory",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.freebieshark.com/sweepstakes",
      iosUrl: "",
      tosUrl: "https://www.freebieshark.com/",
      rulesUrl: "https://www.freebieshark.com/sweepstakes",
      prizeUsd: "Varies — Casamigos-style Venmo instants and $5k–$15k brand cash appear regularly",
      prizeNote: "Updated daily. Alcohol/tobacco games are age-gated.",
      minCashout: "n/a — directory",
      payoutMethods: ["Sponsor (Venmo, prepaid, check)"],
      eligibility: "Per brand. Many 21+.",
      restricted: "State exclusions on alcohol promotions (often MA, MI, etc.).",
      verification: {
        level: "eligibility",
        steps: ["Brand winner verification."]
      },
      signupSteps: [
        "Open freebieshark.com/sweepstakes.",
        "Use Instant Win vs Sweepstakes sections.",
        "Enter on the official brand URL."
      ],
      howToWin: ["Instant reveal or end-of-period draw."],
      howToGetMoney: ["Brand prize fulfillment."],
      tosNotes: ["FreebieShark is a tracker, not a sponsor."],
      redFlags: ["21+ games that still ask for a purchase without AMOE are illegal lotteries — skip."],
      sources: [
        { title: "FreebieShark sweepstakes", url: "https://www.freebieshark.com/sweepstakes" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "sweepwidget",
      name: "SweepWidget Giveaways",
      short: "Hosted giveaway directory. Every listed item is supposed to be no-purchase; prizes include cash and cards.",
      type: "directory",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://sweepwidget.com/giveaways/",
      iosUrl: "",
      tosUrl: "https://sweepwidget.com/terms",
      rulesUrl: "https://sweepwidget.com/giveaways/",
      prizeUsd: "Varies by host — some cash, many products",
      prizeNote: "SweepWidget is also the software brands use. The public directory is only as clean as the hosts. Prefer verified-brand rows.",
      minCashout: "n/a — directory",
      payoutMethods: ["Each host"],
      eligibility: "Per giveaway widget.",
      restricted: "Worldwide mix. Filter country.",
      verification: {
        level: "eligibility",
        steps: ["Host selects a winner in the widget and pays per that giveaway’s rules."]
      },
      signupSteps: [
        "Open sweepwidget.com/giveaways.",
        "Open a listing and complete only the free actions.",
        "Skip extra paid ‘boost’ actions."
      ],
      howToWin: ["Usually random among completed entries."],
      howToGetMoney: ["The hosting brand emails the winner."],
      tosNotes: ["SweepWidget is the platform, not the sponsor of every pot."],
      redFlags: ["Creator giveaways can vanish. Screenshot the rules and prize."],
      sources: [
        { title: "SweepWidget giveaways", url: "https://sweepwidget.com/giveaways/" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "solitaire-smash",
      name: "Solitaire Smash",
      short: "iOS head-to-head solitaire. Prize pools can exceed $100 — but cash seats take an entry fee.",
      type: "skill",
      status: "mixed",
      freePath: "paid-cash",
      platforms: ["ios"],
      signupUrl: "https://apps.apple.com/us/app/solitaire-smash-win-real-cash/id6444781403",
      iosUrl: "https://apps.apple.com/us/app/solitaire-smash-win-real-cash/id6444781403",
      tosUrl: "https://apps.apple.com/us/app/solitaire-smash-win-real-cash/id6444781403",
      rulesUrl: "https://apps.apple.com/us/app/solitaire-smash-win-real-cash/id6444781403",
      prizeUsd: "Head-to-head and event pools; reviews cite $100+ tables",
      prizeNote: "2026 roundups list PayPal, Apple Pay, and bank transfer. Free practice is not a USD competition.",
      minCashout: "Confirm in-app (PayPal / Apple Pay / bank)",
      payoutMethods: ["PayPal", "Apple Pay", "Bank transfer"],
      eligibility: "18+, enabled jurisdictions.",
      restricted: "Skill-cash geo blocks similar to other tournament apps.",
      verification: {
        level: "kyc",
        steps: ["Payment method + ID on cashout."]
      },
      signupSteps: [
        "Install Solitaire Smash from the App Store.",
        "Play free/practice first.",
        "Only buy a cash seat if you accept losing the fee."
      ],
      howToWin: ["Higher score in the timed match."],
      howToGetMoney: ["Withdrawable cash only from cash-entry wins."],
      tosNotes: ["Read in-app Terms before depositing. This ledger stamps it paid-cash on purpose."],
      redFlags: ["Ads imply free money. The free path does not pay USD."],
      sources: [
        { title: "App Store listing", url: "https://apps.apple.com/us/app/solitaire-smash-win-real-cash/id6444781403" }
      ],
      lastChecked: "2026-08-12"
    },
    {
      id: "bingo-billions",
      name: "Bingo Billions",
      short: "iOS bingo tournaments for cash. Same skill-cash pattern: free rooms for practice, USD behind an entry fee.",
      type: "skill",
      status: "mixed",
      freePath: "paid-cash",
      platforms: ["ios"],
      signupUrl: "https://apps.apple.com/us/app/bingo-billions-win-real-money/id6446250848",
      iosUrl: "https://apps.apple.com/us/app/bingo-billions-win-real-money/id6446250848",
      tosUrl: "https://apps.apple.com/us/app/bingo-billions-win-real-money/id6446250848",
      rulesUrl: "https://apps.apple.com/us/app/bingo-billions-win-real-money/id6446250848",
      prizeUsd: "Cash tournament prize tables",
      prizeNote: "Penny Hoarder 2026 lists iOS + Samsung, PayPal and Apple Pay. Treat free chips as practice.",
      minCashout: "PayPal / Apple Pay — confirm in-app",
      payoutMethods: ["PayPal", "Apple Pay"],
      eligibility: "18+, enabled states.",
      restricted: "Confirm geo at install.",
      verification: {
        level: "kyc",
        steps: ["Identity / payment match before withdrawal."]
      },
      signupSteps: [
        "Install Bingo Billions.",
        "Open the room list and read Entry vs Prize.",
        "Stay in free rooms if you want zero financial risk."
      ],
      howToWin: ["Skill-speed bingo vs the field."],
      howToGetMoney: ["Cash-room winnings only."],
      tosNotes: ["Not a sweepstakes. Entry fees fund the pool minus rake."],
      redFlags: ["Same ad pattern as Papaya/Skillz. Free ≠ USD."],
      sources: [
        { title: "App Store listing", url: "https://apps.apple.com/us/app/bingo-billions-win-real-money/id6446250848" }
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
    },
/* ================= PASS C — sports, fantasy, prediction, esports, pools (2026-08-17) ================= */
    {
      id: "espn-pickem",
      name: "ESPN NFL Pick'em",
      short: "Free season-long pick'em. Ten free entries a week; 58 prizes split the six-figure pot.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://fantasy.espn.com/games/nfl-pickem-2026/make-picks",
      rulesUrl: "https://fantasy.espn.com/games/nfl-pickem-2026/make-picks",
      prizeUsd: "$102,000 total across 58 prizes",
      prizeNote: "Free ESPN account. Weekly and season prizes; the grand prize is the headline number.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout", "Check or ACH after verification"],
      eligibility: "US, 18+ (21+ where required), free ESPN account.",
      restricted: "Void where prohibited. Employees of ESPN/Disney typically ineligible.",
      verification: {
        level: "eligibility",
        steps: ["Free ESPN account.", "Winners verified and notified by ESPN before payout."]
      },
      sources: [
        { title: "ESPN NFL Pick'em", url: "https://fantasy.espn.com/games/nfl-pickem-2026/make-picks" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "espn-survivor",
      name: "ESPN NFL Survivor",
      short: "Pick one winning team a week, no repeats. Outlast everyone for the grand prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://fantasy.espn.com/games/nfl-survivor-2026/make-picks",
      rulesUrl: "https://fantasy.espn.com/games/nfl-survivor-2026/make-picks",
      prizeUsd: "$25,000 grand prize",
      prizeNote: "Up to 25 free entries. One wrong pick eliminates that entry.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+ (21+ where required), free ESPN account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free ESPN account.", "Winner verification on claim."]
      },
      sources: [
        { title: "ESPN NFL Survivor", url: "https://fantasy.espn.com/games/nfl-survivor-2026/make-picks" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "espn-wintotals",
      name: "ESPN NFL Win Totals",
      short: "Predict every team's regular-season win total. Free to enter.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://fantasy.espn.com/games/nfl-win-totals-2026/make-picks",
      rulesUrl: "https://fantasy.espn.com/games/nfl-win-totals-2026/make-picks",
      prizeUsd: "$5,000",
      prizeNote: "Free ESPN account. One set of predictions per rules.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free ESPN account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free ESPN account.", "Winner verification on claim."]
      },
      sources: [
        { title: "ESPN NFL Win Totals", url: "https://fantasy.espn.com/games/nfl-win-totals-2026/make-picks" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "espn-playoff",
      name: "ESPN NFL Playoff Predictor",
      short: "Predict the playoff field before the season. Free entry.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://fantasy.espn.com/games/nfl-playoff-predictor-2026/make-picks",
      rulesUrl: "https://fantasy.espn.com/games/nfl-playoff-predictor-2026/make-picks",
      prizeUsd: "$10,000",
      prizeNote: "Free ESPN account. Accuracy on playoff teams and seeding decides the winner.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free ESPN account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free ESPN account.", "Winner verification on claim."]
      },
      sources: [
        { title: "ESPN NFL Playoff Predictor", url: "https://fantasy.espn.com/games/nfl-playoff-predictor-2026/make-picks" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "espn-pigskin",
      name: "ESPN Pigskin Bracket Challenge",
      short: "Bracket every playoff game. Free to enter; big grand prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://fantasy.espn.com/games/nfl-playoff-football-challenge-2026/make-picks",
      rulesUrl: "https://fantasy.espn.com/games/nfl-playoff-football-challenge-2026/make-picks",
      prizeUsd: "$50,000",
      prizeNote: "Free ESPN account. Opens near the postseason.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free ESPN account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free ESPN account.", "Winner verification on claim."]
      },
      sources: [
        { title: "ESPN Pigskin Bracket Challenge", url: "https://fantasy.espn.com/games/nfl-playoff-football-challenge-2026/make-picks" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "espn-cfb",
      name: "ESPN College Football Pick'em",
      short: "College version of ESPN Pick'em with 46 prizes across the season.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://fantasy.espn.com/games/college-football-pickem-2026/make-picks",
      rulesUrl: "https://fantasy.espn.com/games/college-football-pickem-2026/make-picks",
      prizeUsd: "$86,000 total (46 prizes)",
      prizeNote: "Free ESPN account. Same format as the NFL game, college slates.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free ESPN account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free ESPN account.", "Winner verification on claim."]
      },
      sources: [
        { title: "ESPN College Football Pick'em", url: "https://fantasy.espn.com/games/college-football-pickem-2026/make-picks" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "cbs-pro-pickem",
      name: "CBS Sports Pro Football Pick'em",
      short: "Weekly and season-long pick'em with a six-figure perfect-week jackpot.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.cbssports.com/fantasy/football/games/pickem/rules",
      rulesUrl: "https://www.cbssports.com/fantasy/football/games/pickem/rules",
      prizeUsd: "$1K/week + $5K season + $100K perfect",
      prizeNote: "Free CBS Sports account. Perfect-week prize requires a flawless slate.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free CBS Sports account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free CBS Sports account.", "Winner verification on claim."]
      },
      sources: [
        { title: "CBS Sports Pro Football Pick'em rules", url: "https://www.cbssports.com/fantasy/football/games/pickem/rules" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "cbs-cfb-pickem",
      name: "CBS Sports College Football Pick'em",
      short: "College football pick'em with weekly, season, and perfect-week prizes.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.cbssports.com/fantasy/college-football/games/pickem/rules",
      rulesUrl: "https://www.cbssports.com/fantasy/college-football/games/pickem/rules",
      prizeUsd: "$1K/wk + $5K season + $100K perfect",
      prizeNote: "Free CBS Sports account. College slates each week.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free CBS Sports account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free CBS Sports account.", "Winner verification on claim."]
      },
      sources: [
        { title: "CBS Sports College Football Pick'em", url: "https://www.cbssports.com/fantasy/college-football/games/pickem/rules" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fox-super6",
      name: "FOX Super 6",
      short: "Predict six outcomes for a shot at weekly five-figure cash. Free to play in 49 states.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://www.foxsports.com/fox-super-6",
      rulesUrl: "https://www.foxsports.com/fox-super-6",
      prizeUsd: "$10K–$100K weekly",
      prizeNote: "Free FOX Sports account. Different contests (NFL, CFB, soccer) run weekly.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free FOX Sports account (49 states).",
      restricted: "Not available in Washington state.",
      verification: {
        level: "eligibility",
        steps: ["Free FOX Sports account.", "Winner verification on claim."]
      },
      sources: [
        { title: "FOX Super 6", url: "https://www.foxsports.com/fox-super-6" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fanatics-survivor",
      name: "Fanatics NFL Survivor League",
      short: "Free survivor league inside the Fanatics app. $1M guaranteed, grows with each player.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://betfanatics.com/",
      rulesUrl: "https://www.legalsportsreport.com/240860/fanatics-nfl-survivor-league/",
      prizeUsd: "$1M+ guaranteed (up to $10M)",
      prizeNote: "One team per week, no repeats. Prize splits if multiple players survive. Open to all 50 states.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free Fanatics account.",
      restricted: "One entry per person. See the live app for the current prize table.",
      verification: {
        level: "eligibility",
        steps: ["Free Fanatics account.", "Winner verification before payout."]
      },
      sources: [
        { title: "Fanatics NFL Survivor League", url: "https://www.legalsportsreport.com/240860/fanatics-nfl-survivor-league/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "prizepicks-jackpot",
      name: "PrizePicks Free NFL Jackpot",
      short: "Weekly free-to-play game: pick the first touchdown scorer in eight games for a share of $1M.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://www.prizepicks.com/",
      rulesUrl: "https://www.prizepicks.com/press-news/prizepicks-launches-1-million-free-to-play-jackpot-contest",
      prizeUsd: "$1,000,000 weekly (split among perfect entries)",
      prizeNote: "All eight first-touchdown picks must hit to share the jackpot. Partial correct picks earn boosts or free lineups.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+/21+ by state, free PrizePicks account.",
      restricted: "Runs weekly during the NFL season. Confirm live entry window in the app.",
      verification: {
        level: "kyc",
        steps: ["Free PrizePicks account.", "Identity verification for cash withdrawal."]
      },
      sources: [
        { title: "PrizePicks $1M free-to-play jackpot", url: "https://www.prizepicks.com/press-news/prizepicks-launches-1-million-free-to-play-jackpot-contest" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "usatoday-survivor",
      name: "USA TODAY Pro Football Survivor",
      short: "Season-long survivor game with a $5,000 prize. Free USA TODAY account.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.usatoday.com/sports/contests/survivor-pool",
      rulesUrl: "https://www.usatoday.com/sports/contests/survivor-pool",
      prizeUsd: "$5,000",
      prizeNote: "Pick one team to win each week without repeating. Free to enter.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free USA TODAY account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free USA TODAY account.", "Winner verification on claim."]
      },
      sources: [
        { title: "USA TODAY Pro Football Survivor", url: "https://www.usatoday.com/sports/contests/survivor-pool" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "yahoo-survival",
      name: "Yahoo Survival Football",
      short: "Yahoo's free survivor game with cash prizes for the last players standing.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://football.fantasysports.yahoo.com/",
      rulesUrl: "https://football.fantasysports.yahoo.com/",
      prizeUsd: "Cash prizes (historically $6K+)",
      prizeNote: "Free Yahoo account. Confirm the current season prize table before playing.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free Yahoo account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free Yahoo account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Yahoo Survival Football", url: "https://football.fantasysports.yahoo.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "pickwatch",
      name: "NFL Pickwatch Contest",
      short: "Pick every game against the spread. Free season contest with weekly prizes.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://nflpickwatch.com/contest/nfl/2026",
      rulesUrl: "https://nflpickwatch.com/contest/nfl/2026",
      prizeUsd: "$1,000 season / $100 weekly",
      prizeNote: "Free Pickwatch account. Weekly and season-long leaderboards.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "Open to eligible jurisdictions. Free account.",
      restricted: "Check contest terms for residency limits.",
      verification: {
        level: "eligibility",
        steps: ["Free Pickwatch account.", "Winner verification on claim."]
      },
      sources: [
        { title: "NFL Pickwatch Contest", url: "https://nflpickwatch.com/contest/nfl/2026" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "beat-the-geek",
      name: "Beat The Geek",
      short: "Weekly pick'em with cash and season prizes, including an NFL trip.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.thesportsgeek.com/contests/beat-the-geek/",
      rulesUrl: "https://www.thesportsgeek.com/contests/beat-the-geek/",
      prizeUsd: "NFL trip + $500/wk + $2,500 season",
      prizeNote: "Free TheSportsGeek account, 21+. Weekly winners plus season-long prizes.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 21+, free TSG account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free TSG account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Beat The Geek", url: "https://www.thesportsgeek.com/contests/beat-the-geek/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "tsg-playoff",
      name: "TheSportsGeek NFL Playoff Pick'em",
      short: "Postseason pick'em with an Amazon gift card prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.thesportsgeek.com/contests/nfl-playoff-pickem/",
      rulesUrl: "https://www.thesportsgeek.com/contests/nfl-playoff-pickem/",
      prizeUsd: "$500 Amazon gift card",
      prizeNote: "Free TSG account. Opens near the playoffs.",
      minCashout: "Winner claim only",
      payoutMethods: ["Gift card"],
      eligibility: "US, free TSG account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free TSG account.", "Winner verification on claim."]
      },
      sources: [
        { title: "TheSportsGeek NFL Playoff Pick'em", url: "https://www.thesportsgeek.com/contests/nfl-playoff-pickem/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "football-nation",
      name: "Football Nation USA Weekly Pick'Em",
      short: "Weekly pick'em with a guaranteed $100 weekly prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.footballnationusa.com/pickems",
      rulesUrl: "https://www.footballnationusa.com/pickems",
      prizeUsd: "$100 every week",
      prizeNote: "Free account. Weekly winner takes the cash.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Football Nation USA Pick'Em", url: "https://www.footballnationusa.com/pickems" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "favorites-pickem",
      name: "The Favorites Podcast Pick'em",
      short: "Action Network's free pick'em with a six-figure pool and weekly payouts.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.actionnetwork.com/nfl/the-favorites-podcast-free-100k-pro-football-pick-em-contest",
      rulesUrl: "https://www.actionnetwork.com/nfl/the-favorites-podcast-free-100k-pro-football-pick-em-contest",
      prizeUsd: "$120,000 prize pool",
      prizeNote: "Free Action Network account, 21+. Top entries paid weekly plus season pool.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 21+, free Action Network account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free Action Network account.", "Winner verification on claim."]
      },
      sources: [
        { title: "The Favorites Podcast Pick'em", url: "https://www.actionnetwork.com/nfl/the-favorites-podcast-free-100k-pro-football-pick-em-contest" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "thelines-survivor",
      name: "TheLines Free NFL Survivor",
      short: "Free survivor pool run by TheLines with a five-figure prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.thelines.com/free-nfl-contest-pools-games-week-1-2024/",
      rulesUrl: "https://www.thelines.com/free-nfl-contest-pools-games-week-1-2024/",
      prizeUsd: "$10,000",
      prizeNote: "Free TheLines account. Also runs weekly NFL challenge pools.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "TheLines Free NFL Survivor", url: "https://www.thelines.com/free-nfl-contest-pools-games-week-1-2024/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "rams-pickem",
      name: "LA Rams Pick'em",
      short: "Team-run pick'em with resort stays, signed gear, and season tickets on offer.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.therams.com/news/rams-pick-em-launching-2026-season-season-tickets-player-signed-merchandise-more-prizes-for-predictions",
      rulesUrl: "https://www.therams.com/news/rams-pick-em-launching-2026-season-season-tickets-player-signed-merchandise-more-prizes-for-predictions",
      prizeUsd: "Resort stay + signed merch + season tickets",
      prizeNote: "Free Rams account. Prizes are experiences/merchandise, not cash.",
      minCashout: "Winner claim only",
      payoutMethods: ["Prize fulfillment"],
      eligibility: "US, 18+, free Rams account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free Rams account.", "Winner verification on claim."]
      },
      sources: [
        { title: "LA Rams Pick'em", url: "https://www.therams.com/news/rams-pick-em-launching-2026-season-season-tickets-player-signed-merchandise-more-prizes-for-predictions" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fanduel-shuffle",
      name: "FanDuel Daily Shuffle",
      short: "FanDuel's free-to-play weekly game. Six daily picks can win a share of $100,000.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://www.fanduel.com/",
      rulesUrl: "https://www.bleachernation.com/betting/2026/05/31/fanduel-contests-529/",
      prizeUsd: "$100,000 weekly prize pool",
      prizeNote: "Free with a FanDuel Sportsbook account. 3-5 correct picks earn profit-boost tokens instead of cash.",
      minCashout: "Winner claim only",
      payoutMethods: ["Sportsbook wallet", "Withdrawal after verification"],
      eligibility: "US, 21+, FanDuel Sportsbook account in an eligible state.",
      restricted: "State list changes. Six correct picks required for a cash share.",
      verification: {
        level: "kyc",
        steps: ["FanDuel Sportsbook account.", "Identity verification before withdrawal."]
      },
      sources: [
        { title: "FanDuel Daily Shuffle", url: "https://www.bleachernation.com/betting/2026/05/31/fanduel-contests-529/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "betmgm-survivor",
      name: "BetMGM Football Survivor",
      short: "Free-to-enter survivor pool with a $100,000 grand prize. No wager required.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://sports.betmgm.com/en/blog/nfl/win-betmgm-free-football-survivor-challenge-bm03/",
      rulesUrl: "https://sports.betmgm.com/en/blog/nfl/win-betmgm-free-football-survivor-challenge-bm03/",
      prizeUsd: "$100,000",
      prizeNote: "No entry fee or wager. KYC-verified BetMGM account in an eligible state required.",
      minCashout: "Winner claim only",
      payoutMethods: ["Sportsbook wallet", "Withdrawal after verification"],
      eligibility: "US, 21+, KYC-verified BetMGM Sports account in an eligible state.",
      restricted: "Limited to specific states. Prize splits if multiple survivors remain.",
      verification: {
        level: "kyc",
        steps: ["BetMGM account with KYC.", "Winner verification before payout."]
      },
      sources: [
        { title: "BetMGM Free Survivor Challenge", url: "https://sports.betmgm.com/en/blog/nfl/win-betmgm-free-football-survivor-challenge-bm03/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "dk-f2p",
      name: "DraftKings Free-to-Play contests",
      short: "Rotating free pools in the DraftKings Sportsbook promotions tab. Some pay cash or bonus bets.",
      type: "sports",
      status: "mixed",
      freePath: "partial",
      platforms: ["web", "ios"],
      signupUrl: "https://www.draftkings.com/",
      rulesUrl: "https://sportsbooksonline.com/articles/draftkings-pick-em",
      prizeUsd: "Free pools rotate; up to $500,000 top-prize pick'em historically",
      prizeNote: "Open the Promotions tab and filter for free entry. Many free plays award bonus bets rather than withdrawable cash.",
      minCashout: "Varies; identity verification required to withdraw",
      payoutMethods: ["Sportsbook wallet", "Bonus bets", "Withdrawal after verification"],
      eligibility: "US, 21+, DraftKings account in an eligible state.",
      restricted: "State list changes. Read each pool's terms before entering.",
      verification: {
        level: "kyc",
        steps: ["DraftKings account.", "Identity verification before withdrawal."]
      },
      sources: [
        { title: "DraftKings free pick'em (roundup)", url: "https://sportsbooksonline.com/articles/draftkings-pick-em" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "draft-pro",
      name: "Draft Pro Perfect Draft Challenge",
      short: "Predict all 32 first-round NFL Draft picks for a million-dollar prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://www.prnewswire.com/news-releases/the-draft-pro-launches-free-1-000-000-perfect-draft-challenge-ahead-of-the-2026-nfl-draft-302736409.html",
      rulesUrl: "https://www.prnewswire.com/news-releases/the-draft-pro-launches-free-1-000-000-perfect-draft-challenge-ahead-of-the-2026-nfl-draft-302736409.html",
      prizeUsd: "$1,000,000 (perfect 32/32)",
      prizeNote: "Free app download. Perfect draft required for the headline prize; other prizes may exist.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free app account.",
      restricted: "Perfect 32/32 required for the top prize.",
      verification: {
        level: "eligibility",
        steps: ["Free app account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Draft Pro Perfect Draft Challenge", url: "https://www.prnewswire.com/news-releases/the-draft-pro-launches-free-1-000-000-perfect-draft-challenge-ahead-of-the-2026-nfl-draft-302736409.html" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "splash-mock",
      name: "Splash Sports NFL Mock Draft",
      short: "Mock the NFL Draft for a share of $10,000 in prizes.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://nflmockdraft.app.splashsports.com/nfl-mock-draft/my-entry",
      rulesUrl: "https://nflmockdraft.app.splashsports.com/nfl-mock-draft/my-entry",
      prizeUsd: "$10,000 in prizes",
      prizeNote: "Free Splash account. Opens before the NFL Draft.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free Splash account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free Splash account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Splash Sports NFL Mock Draft", url: "https://nflmockdraft.app.splashsports.com/nfl-mock-draft/my-entry" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fftoday-draft",
      name: "FFToday NFL Draft Contest",
      short: "Mock the first round of the NFL Draft for cash and prizes.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.fftoday.com/contests/draftcontest.php?o=3",
      rulesUrl: "https://www.fftoday.com/contests/draftcontest.php?o=3",
      prizeUsd: "$100 cash + prizes",
      prizeNote: "Free FFToday account. Draft-season contest.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free FFToday account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free FFToday account.", "Winner verification on claim."]
      },
      sources: [
        { title: "FFToday NFL Draft Contest", url: "https://www.fftoday.com/contests/draftcontest.php?o=3" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "rotoballer",
      name: "RotoBaller Challenge",
      short: "Free season-long fantasy football tournament with cash and premium prizes.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.rotoballer.com/free-fantasy-football-tournament-rotoballer-challenge-2026/1900460",
      rulesUrl: "https://www.rotoballer.com/free-fantasy-football-tournament-rotoballer-challenge-2026/1900460",
      prizeUsd: "$500 + 50x Premium",
      prizeNote: "Free Fleaflicker account. Draft before the deadline.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free Fleaflicker account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free Fleaflicker account.", "Winner verification on claim."]
      },
      sources: [
        { title: "RotoBaller Challenge", url: "https://www.rotoballer.com/free-fantasy-football-tournament-rotoballer-challenge-2026/1900460" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "apex-fantasy",
      name: "Apex Fantasy Free League Entry",
      short: "Free league entry (worth $125) via email signup.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://apexfantasyleagues.com/",
      rulesUrl: "https://apexfantasyleagues.com/",
      prizeUsd: "$125 league entry",
      prizeNote: "Free email signup. Prize is a free paid-league entry, not direct cash.",
      minCashout: "Winner claim only",
      payoutMethods: ["League entry credit"],
      eligibility: "US, 18+, free account.",
      restricted: "Void where prohibited.",
      verification: {
        level: "eligibility",
        steps: ["Free email signup.", "Winner verification on claim."]
      },
      sources: [
        { title: "Apex Fantasy", url: "https://apexfantasyleagues.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fpl-official",
      name: "Official FPL (Premier League)",
      short: "The free Premier League fantasy game with VIP trips, hardware, and gear for top finishers.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://fantasy.premierleague.com/help/rules",
      prizeUsd: "VIP trip + Surface Laptop + Puma gear",
      prizeNote: "Free FPL account. Prizes are experiences and merchandise, not cash.",
      minCashout: "Winner claim only",
      payoutMethods: ["Prize fulfillment"],
      eligibility: "Global (some prize eligibility limits), free FPL account.",
      restricted: "See official rules for prize eligibility by region.",
      verification: {
        level: "eligibility",
        steps: ["Free FPL account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Official Fantasy Premier League", url: "https://fantasy.premierleague.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fpl-second-chance",
      name: "FPL Second Chance League",
      short: "Official FPL side competition with Puma gear and an EA FC 26 prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://www.premierleague.com/en/news/4220308/the-second-chance-league-is-live-in-fantasy",
      rulesUrl: "https://www.premierleague.com/en/news/4220308/the-second-chance-league-is-live-in-fantasy",
      prizeUsd: "Puma gear + EA FC 26 + FPL bundle",
      prizeNote: "Free FPL account. Prize is gear, not cash.",
      minCashout: "Winner claim only",
      payoutMethods: ["Prize fulfillment"],
      eligibility: "Free FPL account, eligible regions.",
      restricted: "See official rules.",
      verification: {
        level: "eligibility",
        steps: ["Free FPL account.", "Winner verification on claim."]
      },
      sources: [
        { title: "FPL Second Chance League", url: "https://www.premierleague.com/en/news/4220308/the-second-chance-league-is-live-in-fantasy" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fpl-draft",
      name: "FPL Draft",
      short: "Premier League's free draft game. Compete in head-to-head leagues.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://draft.premierleague.com/",
      rulesUrl: "https://draft.premierleague.com/",
      prizeUsd: "Prizes (league-dependent)",
      prizeNote: "Free FPL account. Most draft leagues are free with friends.",
      minCashout: "Winner claim only",
      payoutMethods: ["Prize fulfillment"],
      eligibility: "Free FPL account.",
      restricted: "See official rules.",
      verification: {
        level: "eligibility",
        steps: ["Free FPL account.", "Winner verification on claim."]
      },
      sources: [
        { title: "FPL Draft", url: "https://draft.premierleague.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fantasy-efl",
      name: "Fantasy EFL",
      short: "The EFL's official free fantasy game with published prizes.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.efl.com/prizes",
      rulesUrl: "https://fantasy.efl.com/prizes",
      prizeUsd: "Prizes (see official prize page)",
      prizeNote: "Free EFL account.",
      minCashout: "Winner claim only",
      payoutMethods: ["Prize fulfillment"],
      eligibility: "Free EFL account, eligible regions.",
      restricted: "See official rules.",
      verification: {
        level: "eligibility",
        steps: ["Free EFL account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Fantasy EFL prizes", url: "https://fantasy.efl.com/prizes" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "telegraph-ff",
      name: "Telegraph Fantasy Football",
      short: "Free UK fantasy football with a cash first prize (5 free teams).",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasyfootball.telegraph.co.uk/",
      rulesUrl: "https://fantasyfootball.telegraph.co.uk/",
      prizeUsd: "£3,000 first place",
      prizeNote: "Free account (up to 5 free teams). UK-focused.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "UK, 18+, free account.",
      restricted: "See official rules.",
      verification: {
        level: "eligibility",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Telegraph Fantasy Football", url: "https://fantasyfootball.telegraph.co.uk/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "ucl-fantasy",
      name: "UCL Fantasy",
      short: "UEFA's free Champions League fantasy game with a final trip and a PS5.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://gaming.uefa.com/en/uclfantasy",
      rulesUrl: "https://gaming.uefa.com/en/uclfantasy",
      prizeUsd: "UCL Final trip + PS5",
      prizeNote: "Free UEFA account. Prizes are experiences and hardware, not cash.",
      minCashout: "Winner claim only",
      payoutMethods: ["Prize fulfillment"],
      eligibility: "Global, free UEFA account.",
      restricted: "See official rules.",
      verification: {
        level: "eligibility",
        steps: ["Free UEFA account.", "Winner verification on claim."]
      },
      sources: [
        { title: "UCL Fantasy", url: "https://gaming.uefa.com/en/uclfantasy" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "pl-predictor",
      name: "Premier League Predictor",
      short: "Free UK predictor with weekly cash prizes.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://premierleaguepredictor.co.uk/",
      rulesUrl: "https://premierleaguepredictor.co.uk/",
      prizeUsd: "Weekly cash prizes",
      prizeNote: "Free account. UK-focused.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "UK, 18+, free account.",
      restricted: "See official rules.",
      verification: {
        level: "eligibility",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Premier League Predictor", url: "https://premierleaguepredictor.co.uk/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "pooltracker-epl",
      name: "Pooltracker EPL Predictor",
      short: "Free EPL score predictor for private pools with friends.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.pooltracker.com/game_info/english-premier-league-predictor.asp",
      rulesUrl: "https://www.pooltracker.com/game_info/english-premier-league-predictor.asp",
      prizeUsd: "Pools with friends",
      prizeNote: "Free Pooltracker account. Prizes decided by your group.",
      minCashout: "n/a — group prize",
      payoutMethods: ["Group-determined"],
      eligibility: "Free account.",
      restricted: "See site.",
      verification: {
        level: "account",
        steps: ["Free Pooltracker account."]
      },
      sources: [
        { title: "Pooltracker EPL Predictor", url: "https://www.pooltracker.com/game_info/english-premier-league-predictor.asp" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "ffs-fpl",
      name: "Fantasy Football Scout FPL league",
      short: "Free-to-join FPL mini-league with a £1,200 cash pool plus memberships.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://www.fantasyfootballscout.co.uk/2026/08/14/win-5000-worth-of-prizes-with-fantasy-football-scout-in-2026-27",
      code: "eikrq4",
      prizeUsd: "£1,200 cash + memberships",
      prizeNote: "Join in FPL via Leagues > Join Private League with the code. Free to join.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "FPL account, eligible regions.",
      restricted: "Follow the organizer's entry rules.",
      verification: {
        level: "account",
        steps: ["FPL account.", "Enter league code. Organizer verifies winners."]
      },
      sources: [
        { title: "Fantasy Football Scout league", url: "https://www.fantasyfootballscout.co.uk/2026/08/14/win-5000-worth-of-prizes-with-fantasy-football-scout-in-2026-27" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "ffs-ucl",
      name: "FFScout UCL Fantasy league",
      short: "FFScout's free Champions League fantasy league with a £150 prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://www.fantasyfootballscout.co.uk/mini-leagues",
      code: "TyhVfm",
      prizeUsd: "£150 + Mega Bundle",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "UCL Fantasy account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["UCL Fantasy account.", "Enter league code."]
      },
      sources: [
        { title: "FFScout mini-leagues", url: "https://www.fantasyfootballscout.co.uk/mini-leagues" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "ffs-efl",
      name: "FFScout Fantasy EFL league",
      short: "FFScout's free Fantasy EFL league with a Mega Bundle prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.efl.com/",
      rulesUrl: "https://www.fantasyfootballscout.co.uk/mini-leagues",
      code: "FFSCOUT1",
      prizeUsd: "Mega Bundle",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "Fantasy EFL account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["Fantasy EFL account.", "Enter league code."]
      },
      sources: [
        { title: "FFScout mini-leagues", url: "https://www.fantasyfootballscout.co.uk/mini-leagues" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "ffs-tattico",
      name: "FFScout Tattico Serie A league",
      short: "FFScout's free Serie A fantasy league with a £750 prize pool.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasyfootballscout.co.uk/2026/08/15/join-our-tattico-fantasy-serie-a-league-win-750-in-prizes",
      rulesUrl: "https://fantasyfootballscout.co.uk/2026/08/15/join-our-tattico-fantasy-serie-a-league-win-750-in-prizes",
      prizeUsd: "£750 total",
      prizeNote: "Free to join via the organizer's link.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "Tattico Fantasy account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["Tattico account.", "Join via organizer link."]
      },
      sources: [
        { title: "FFScout Tattico Serie A league", url: "https://fantasyfootballscout.co.uk/2026/08/15/join-our-tattico-fantasy-serie-a-league-win-750-in-prizes" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "football-mad",
      name: "Football Mad FPL league",
      short: "Free FPL mini-league with a £5,000 prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://fpltips.com/fpl-leagues-with-prizes/",
      code: "u7vy7w",
      prizeUsd: "£5,000",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "FPL account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["FPL account.", "Enter league code."]
      },
      sources: [
        { title: "FPL leagues with prizes", url: "https://fpltips.com/fpl-leagues-with-prizes/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fantasy-arena",
      name: "Fantasy Arena FPL league",
      short: "Free FPL mini-league with a $1,500 prize across season and monthly.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/",
      code: "hs3v95",
      prizeUsd: "$1,500 (season + monthly)",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "FPL account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["FPL account.", "Enter league code."]
      },
      sources: [
        { title: "Free-to-join FPL prize leagues", url: "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "lazyfpl",
      name: "LazyFPL league",
      short: "Free FPL mini-league with a £750 prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://www.lazyfpl.com/p/fpl-leagues-with-prizes",
      code: "ni3o0l",
      prizeUsd: "£750",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "FPL account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["FPL account.", "Enter league code."]
      },
      sources: [
        { title: "LazyFPL prize leagues", url: "https://www.lazyfpl.com/p/fpl-leagues-with-prizes" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fplhub",
      name: "FPL Hub league",
      short: "Free FPL mini-league with a £1,250 prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://fpltips.com/fpl-leagues-with-prizes/",
      code: "00ul99",
      prizeUsd: "£1,250",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "FPL account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["FPL account.", "Enter league code."]
      },
      sources: [
        { title: "FPL leagues with prizes", url: "https://fpltips.com/fpl-leagues-with-prizes/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "bona-fide",
      name: "Bona Fide Sports league",
      short: "Free FPL mini-league with a $200 first prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://www.reddit.com/r/FantasyPL/comments/1v4h6th/fpl_202627_minileagues_thread/",
      code: "c7blsu",
      prizeUsd: "$200 first",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "FPL account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["FPL account.", "Enter league code."]
      },
      sources: [
        { title: "r/FantasyPL minileagues thread", url: "https://www.reddit.com/r/FantasyPL/comments/1v4h6th/fpl_202627_minileagues_thread/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "olka",
      name: "OLKA Express league",
      short: "Free FPL mini-league with a €1,000 first prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://www.reddit.com/r/FantasyPL/comments/1m6naoy/league_codes_megathread/",
      code: "5nysyw",
      prizeUsd: "€1,000 first / €500 second",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "FPL account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["FPL account.", "Enter league code."]
      },
      sources: [
        { title: "r/FantasyPL league codes megathread", url: "https://www.reddit.com/r/FantasyPL/comments/1m6naoy/league_codes_megathread/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fplmanager-india",
      name: "FPLManagerIndia league",
      short: "Free FPL mini-league with a PS5 and £200.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/",
      code: "10ev25",
      prizeUsd: "PS5 + £200",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "FPL account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["FPL account.", "Enter league code."]
      },
      sources: [
        { title: "Free-to-join FPL prize leagues", url: "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "fplstore",
      name: "fplStore_ league",
      short: "Free FPL mini-league with a £500 voucher.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://fpltips.com/fpl-leagues-with-prizes/",
      code: "ijuoh4",
      prizeUsd: "£500 voucher",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "FPL account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["FPL account.", "Enter league code."]
      },
      sources: [
        { title: "FPL leagues with prizes", url: "https://fpltips.com/fpl-leagues-with-prizes/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "pitchbooking",
      name: "Pitchbooking.com league",
      short: "Free FPL mini-league with a £150 gift card.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://fantasy.premierleague.com/",
      rulesUrl: "https://www.reddit.com/r/FantasyPL/comments/wecme0/list_of_free_to_enter_fpl_leagues_with_prizes/",
      code: "5hwilh",
      prizeUsd: "£150 gift card",
      prizeNote: "Free to join with the league code.",
      minCashout: "Winner claim only",
      payoutMethods: ["League organizer payout"],
      eligibility: "FPL account.",
      restricted: "Organizer's rules apply.",
      verification: {
        level: "account",
        steps: ["FPL account.", "Enter league code."]
      },
      sources: [
        { title: "Free FPL leagues with prizes", url: "https://www.reddit.com/r/FantasyPL/comments/wecme0/list_of_free_to_enter_fpl_leagues_with_prizes/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "sky-super6",
      name: "Sky Bet Super 6",
      short: "Free-to-play score prediction game. Six correct scores win £250,000 (rollovers to £1M).",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://super6.skysports.com/",
      rulesUrl: "https://super6.skysports.com/",
      prizeUsd: "£250,000 (up to £1M rollovers)",
      prizeNote: "Free to play. Requires a free Sky Bet account with UK identity verification.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "UK/Ireland, 18+, free Sky Bet account.",
      restricted: "KYC (ID + address) required for the account.",
      verification: {
        level: "kyc",
        steps: ["Free Sky Bet account.", "UK identity verification.", "Winner verification on claim."]
      },
      sources: [
        { title: "Sky Bet Super 6", url: "https://super6.skysports.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "bet365-6scores",
      name: "bet365 6 Scores Challenge",
      short: "Predict six Premier League scores weekly for a share of £250,000.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://www.bet365.com/",
      rulesUrl: "https://www.bettingodds.com/news/bet365-6-scores-challenge-predictions-premier-league-matchweek-29-2026",
      prizeUsd: "£250,000",
      prizeNote: "Free to play with a bet365 account. UK KYC applies.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "UK/Ireland, 18+, bet365 account.",
      restricted: "KYC required.",
      verification: {
        level: "kyc",
        steps: ["bet365 account.", "UK identity verification.", "Winner verification on claim."]
      },
      sources: [
        { title: "bet365 6 Scores Challenge", url: "https://www.bettingodds.com/news/bet365-6-scores-challenge-predictions-premier-league-matchweek-29-2026" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "betmgm-goldengoals",
      name: "BetMGM Golden Goals",
      short: "Predict six Premier League scores weekly for £250,000.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://www.bettingodds.com/news/betmgm-golden-goals-premier-league-gw-31-march-2026",
      rulesUrl: "https://www.bettingodds.com/news/betmgm-golden-goals-premier-league-gw-31-march-2026",
      prizeUsd: "£250,000",
      prizeNote: "Free to play with a BetMGM UK account. KYC applies.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "UK, 18+, BetMGM account.",
      restricted: "KYC required.",
      verification: {
        level: "kyc",
        steps: ["BetMGM UK account.", "Identity verification.", "Winner verification on claim."]
      },
      sources: [
        { title: "BetMGM Golden Goals", url: "https://www.bettingodds.com/news/betmgm-golden-goals-premier-league-gw-31-march-2026" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "paddypower-drop",
      name: "Paddy Power Beat The Drop",
      short: "Answer 15 yes/no questions to hold the pot. Free version pays £5,000 daily.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://www.paddypower.com/",
      rulesUrl: "https://mybettingsites.com/articles/paddy-power-beat-the-drop-how-it-works",
      prizeUsd: "£5,000 daily (free version)",
      prizeNote: "Free to play; a free Paddy Power account with full KYC is required.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "UK/Ireland, 18+, Paddy Power account.",
      restricted: "Full KYC (ID + address).",
      verification: {
        level: "kyc",
        steps: ["Paddy Power account.", "Full KYC.", "Winner verification on claim."]
      },
      sources: [
        { title: "Paddy Power Beat The Drop", url: "https://mybettingsites.com/articles/paddy-power-beat-the-drop-how-it-works" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "dirty-dozen",
      name: "Dirty Dozen (Gambling.com)",
      short: "Predict yellow and red cards for 12 players to win £12,000 weekly.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.gambling.com/games/dirty-dozen",
      rulesUrl: "https://www.gambling.com/games/dirty-dozen",
      prizeUsd: "£12,000 weekly",
      prizeNote: "Free Gambling.com account (email only, no KYC).",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "UK/Ireland, 18+, free account.",
      restricted: "Email signup; no KYC for most players.",
      verification: {
        level: "account",
        steps: ["Free Gambling.com account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Dirty Dozen", url: "https://www.gambling.com/games/dirty-dozen" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "the-special-one",
      name: "The Special One",
      short: "Last-man-standing knockout game with prizes. Email signup.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://thespecialone.co.uk/",
      rulesUrl: "https://thespecialone.co.uk/",
      prizeUsd: "Prizes (last-man-standing)",
      prizeNote: "Free account (email). UK-focused.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "UK/Ireland, 18+, free account.",
      restricted: "See official rules.",
      verification: {
        level: "account",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "The Special One", url: "https://thespecialone.co.uk/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "andys-predictor",
      name: "Andy's Bet Club £1M Predictor",
      short: "Predict the final Premier League table 1-20 for a £1,000,000 prize.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://andysbetclub.co.uk/predictor-game/",
      rulesUrl: "https://andysbetclub.co.uk/predictor-game/",
      prizeUsd: "£1,000,000",
      prizeNote: "Free account (email, UK/Ireland). Perfect table required for the top prize.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "UK/Ireland, 18+, free account.",
      restricted: "See official rules.",
      verification: {
        level: "account",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Andy's Bet Club Predictor", url: "https://andysbetclub.co.uk/predictor-game/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "verse-gaming",
      name: "Verse Gaming",
      short: "Free prediction platform with cash prizes paid in VerseCash.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.versegaming.com/",
      rulesUrl: "https://www.versegaming.com/",
      prizeUsd: "Cash prizes (VerseCash)",
      prizeNote: "Free account (email). Confirm redemption terms for VerseCash.",
      minCashout: "Confirm in-app",
      payoutMethods: ["VerseCash / platform payout"],
      eligibility: "18+, free account.",
      restricted: "See site terms.",
      verification: {
        level: "account",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Verse Gaming", url: "https://www.versegaming.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "lockmypicks",
      name: "LockMyPicks",
      short: "Free pick'em platform with coins and leaderboards. Confirm cash prizes before playing.",
      type: "sports",
      status: "mixed",
      freePath: "partial",
      platforms: ["web"],
      signupUrl: "https://lockmypicks.com/",
      rulesUrl: "https://lockmypicks.com/",
      prizeUsd: "Coins/leaderboards",
      prizeNote: "Free account. Prize currency and cash conversion unverified in 2026 reviews.",
      minCashout: "Confirm in-app",
      payoutMethods: ["Platform currency"],
      eligibility: "18+, free account.",
      restricted: "See site terms.",
      verification: {
        level: "account",
        steps: ["Free account."]
      },
      sources: [
        { title: "LockMyPicks", url: "https://lockmypicks.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "pickem-sports",
      name: "Pick 'Em Sports (iOS)",
      short: "Free NFL/CFB pick'em app with sponsored prizes.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["ios"],
      signupUrl: "https://apps.apple.com/us/app/pick-em-sports-nfl-cfb/id6737177213",
      rulesUrl: "https://apps.apple.com/us/app/pick-em-sports-nfl-cfb/id6737177213",
      prizeUsd: "Sponsored prizes",
      prizeNote: "Free account (email). Prizes are sponsor-funded.",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "US, 18+, free account.",
      restricted: "See app terms.",
      verification: {
        level: "account",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Pick 'Em Sports (App Store)", url: "https://apps.apple.com/us/app/pick-em-sports-nfl-cfb/id6737177213" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "sports-predictor",
      name: "Sports Predictor (iOS)",
      short: "Free fantasy/sports prediction game with cash paid via PayPal.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["ios"],
      signupUrl: "https://apps.apple.com/us/app/sports-predictor-fantasy-game/id1445043792",
      rulesUrl: "https://apps.apple.com/us/app/sports-predictor-fantasy-game/id1445043792",
      prizeUsd: "Cash via PayPal",
      prizeNote: "Free account (email). Confirm current prize structure in-app.",
      minCashout: "Confirm in-app",
      payoutMethods: ["PayPal"],
      eligibility: "18+, free account.",
      restricted: "See app terms.",
      verification: {
        level: "account",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Sports Predictor (App Store)", url: "https://apps.apple.com/us/app/sports-predictor-fantasy-game/id1445043792" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "goaloracle",
      name: "GoalOracle",
      short: "Skill-based football prediction game with prizes for top finishers.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://goaloracle.io/",
      rulesUrl: "https://goaloracle.io/",
      prizeUsd: "Prizes for top finishers",
      prizeNote: "Free to play. Confirm prize currency on the site.",
      minCashout: "Confirm on site",
      payoutMethods: ["Platform payout"],
      eligibility: "18+, free account.",
      restricted: "See site terms.",
      verification: {
        level: "account",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "GoalOracle", url: "https://goaloracle.io/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "oddspedia",
      name: "Oddspedia Handicapping Contests",
      short: "Free capper/pick contests with a cash prize pool.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://oddspedia.com/us/picks/capper-contests/wc2026-competition",
      rulesUrl: "https://oddspedia.com/us/picks/capper-contests/wc2026-competition",
      prizeUsd: "€2,000 prize pool",
      prizeNote: "Free to enter. Runs around major events (e.g., World Cup).",
      minCashout: "Winner claim only",
      payoutMethods: ["Operator payout"],
      eligibility: "18+, free account.",
      restricted: "See contest terms.",
      verification: {
        level: "account",
        steps: ["Free account.", "Winner verification on claim."]
      },
      sources: [
        { title: "Oddspedia capper contests", url: "https://oddspedia.com/us/picks/capper-contests/wc2026-competition" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "streak-for-cash",
      name: "Streak for the Cash",
      short: "Streak-based prediction game. Site live but prize structure unverified in 2026.",
      type: "sports",
      status: "caution",
      freePath: "partial",
      platforms: ["web"],
      signupUrl: "https://www.streakforthecash.com/",
      rulesUrl: "https://www.streakforthecash.com/",
      prizeUsd: "Unverified",
      prizeNote: "Included for completeness. Confirm current prizes and ownership before relying on it.",
      minCashout: "Unknown",
      payoutMethods: ["Unknown"],
      eligibility: "Unknown.",
      restricted: "Prize structure unverified.",
      verification: {
        level: "account",
        steps: ["Confirm the live site before entering."]
      },
      sources: [
        { title: "Streak for the Cash", url: "https://www.streakforthecash.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "gamersaloon",
      name: "GamerSaloon 1-Rounders",
      short: "Free single-round esports brackets (Madden, EA FC, NBA 2K) paying $10 as bonus cash.",
      type: "skill",
      status: "live",
      freePath: "partial",
      platforms: ["web"],
      signupUrl: "https://www.gamersaloon.com/promos/1rounder/",
      rulesUrl: "https://www.gamersaloon.com/promos/1rounder/",
      prizeUsd: "$10 cash per bracket",
      prizeNote: "Free entry; the $10 is paid as bonus cash usable for further entries (winnable via more play).",
      minCashout: "Bonus cash, not direct withdrawal",
      payoutMethods: ["Bonus cash"],
      eligibility: "18+, free GamerSaloon account.",
      restricted: "Bonus-cash prize, not a direct USD withdrawal.",
      verification: {
        level: "eligibility",
        steps: ["Free GamerSaloon account.", "Winner verification for withdrawals."]
      },
      sources: [
        { title: "GamerSaloon 1-Rounders", url: "https://www.gamersaloon.com/promos/1rounder/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "playerslounge",
      name: "Players' Lounge Free Tournaments",
      short: "Free Madden and EA FC tournaments with cash prizes.",
      type: "skill",
      status: "live",
      freePath: "partial",
      platforms: ["web", "ios"],
      signupUrl: "https://www.playerslounge.com/madden",
      rulesUrl: "https://www.playerslounge.com/madden",
      prizeUsd: "Cash",
      prizeNote: "Free tournaments pay cash; confirm the specific lobby and payout before entering.",
      minCashout: "Confirm in-app",
      payoutMethods: ["Operator payout"],
      eligibility: "18+, free Players' Lounge account.",
      restricted: "See platform rules.",
      verification: {
        level: "eligibility",
        steps: ["Free account.", "Winner verification for withdrawal."]
      },
      sources: [
        { title: "Players' Lounge", url: "https://www.playerslounge.com/madden" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "officepoolstop",
      name: "OfficePoolStop",
      short: "Free platform to run pick'em, survivor, confidence, squares, and bookie pools.",
      type: "pools",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://officepoolstop.com/",
      rulesUrl: "https://officepoolstop.com/",
      prizeUsd: "Prizes decided by your group",
      prizeNote: "Platform is free; the prize pool is funded by your group, not the site.",
      minCashout: "n/a — group prize",
      payoutMethods: ["Group-determined"],
      eligibility: "Free account (commissioner).",
      restricted: "See site terms.",
      verification: {
        level: "account",
        steps: ["Free account to run a pool."]
      },
      sources: [
        { title: "OfficePoolStop", url: "https://officepoolstop.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "funofficepools",
      name: "FunOfficePools",
      short: "Free pick'em, survivor, and squares pools for offices since 2007.",
      type: "pools",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://www.funofficepools.com/",
      rulesUrl: "https://www.funofficepools.com/",
      prizeUsd: "Prizes decided by your group",
      prizeNote: "Free platform. Group-funded prizes.",
      minCashout: "n/a — group prize",
      payoutMethods: ["Group-determined"],
      eligibility: "Free account.",
      restricted: "See site terms.",
      verification: {
        level: "account",
        steps: ["Free account to run a pool."]
      },
      sources: [
        { title: "FunOfficePools", url: "https://www.funofficepools.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "mysurvivorpool",
      name: "MySurvivorPool",
      short: "Free survivor and football squares hosting.",
      type: "pools",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://mysurvivorpool.com/",
      rulesUrl: "https://mysurvivorpool.com/",
      prizeUsd: "Prizes decided by your group",
      prizeNote: "Free (preseason). Group-funded prizes.",
      minCashout: "n/a — group prize",
      payoutMethods: ["Group-determined"],
      eligibility: "Free account.",
      restricted: "See site terms.",
      verification: {
        level: "account",
        steps: ["Free account to run a pool."]
      },
      sources: [
        { title: "MySurvivorPool", url: "https://mysurvivorpool.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "gridirongames",
      name: "Gridiron Games",
      short: "Survivor pools for offices. Free for players.",
      type: "pools",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://gridirongames.com/football-pools/nfl-survivor/",
      rulesUrl: "https://gridirongames.com/football-pools/nfl-survivor/",
      prizeUsd: "Prizes decided by your group",
      prizeNote: "Free for players. Group-funded prizes.",
      minCashout: "n/a — group prize",
      payoutMethods: ["Group-determined"],
      eligibility: "Free account.",
      restricted: "See site terms.",
      verification: {
        level: "account",
        steps: ["Free account."]
      },
      sources: [
        { title: "Gridiron Games", url: "https://gridirongames.com/football-pools/nfl-survivor/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "squarespool",
      name: "SquaresPool.com",
      short: "Free Super Bowl and any-game football squares hosting.",
      type: "pools",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "http://www.squarespool.com/",
      rulesUrl: "http://www.squarespool.com/",
      prizeUsd: "Prizes decided by your group",
      prizeNote: "Free platform. Group-funded prizes.",
      minCashout: "n/a — group prize",
      payoutMethods: ["Group-determined"],
      eligibility: "Free account.",
      restricted: "See site terms.",
      verification: {
        level: "account",
        steps: ["Free account."]
      },
      sources: [
        { title: "SquaresPool", url: "http://www.squarespool.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "myfantasyleague",
      name: "MyFantasyLeague",
      short: "Custom fantasy league hosting. Free trial through Week 4.",
      type: "pools",
      status: "live",
      freePath: "partial",
      platforms: ["web"],
      signupUrl: "https://home.myfantasyleague.com/",
      rulesUrl: "https://home.myfantasyleague.com/",
      prizeUsd: "Prizes decided by your league",
      prizeNote: "Free trial through Week 4, then paid. League-funded prizes.",
      minCashout: "n/a — league prize",
      payoutMethods: ["League-determined"],
      eligibility: "Free account.",
      restricted: "Paid after the free trial.",
      verification: {
        level: "account",
        steps: ["Free account."]
      },
      sources: [
        { title: "MyFantasyLeague", url: "https://home.myfantasyleague.com/" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "trofeo",
      name: "Trofeo.live",
      short: "Free NFL confidence and pick'em pools. Players do not even need an account.",
      type: "pools",
      status: "live",
      freePath: "full",
      platforms: ["web"],
      signupUrl: "https://trofeo.live/nfl-confidence-pool",
      rulesUrl: "https://trofeo.live/nfl-confidence-pool",
      prizeUsd: "Pools with friends",
      prizeNote: "Free to use. Group-decided prizes.",
      minCashout: "n/a — group prize",
      payoutMethods: ["Group-determined"],
      eligibility: "No account required for players.",
      restricted: "See site terms.",
      verification: {
        level: "account",
        steps: ["No account required to join a pool."]
      },
      sources: [
        { title: "Trofeo.live", url: "https://trofeo.live/nfl-confidence-pool" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "dabble",
      name: "Dabble Fantasy",
      short: "DFS signup bonus: $10 free with code ALARM. No deposit; 1x playthrough to withdraw.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://dabble.com/",
      rulesUrl: "https://www.fantasyalarm.com/articles/promotions/best-free-dabble-promo-code-10-bonus-no-deposit/192437",
      prizeUsd: "$10 free credit (code ALARM)",
      prizeNote: "No deposit. Winnings withdraw after a 1x playthrough. Promo terms can change.",
      minCashout: "After 1x playthrough",
      payoutMethods: ["Withdrawal after playthrough"],
      eligibility: "18+/21+, eligible region, free account.",
      restricted: "Promo may require new-account status and geo eligibility.",
      verification: {
        level: "kyc",
        steps: ["Free Dabble account.", "Enter code ALARM.", "KYC before withdrawal."]
      },
      sources: [
        { title: "Dabble", url: "https://dabble.com/" },
        { title: "Dabble $10 no-deposit (FantasyAlarm)", url: "https://www.fantasyalarm.com/articles/promotions/best-free-dabble-promo-code-10-bonus-no-deposit/192437" }
      ],
      lastChecked: "2026-08-17"
    },
    {
      id: "parlayplay",
      name: "ParlayPlay",
      short: "DFS signup: $5 free entry. No deposit required; 1x playthrough to withdraw.",
      type: "sports",
      status: "live",
      freePath: "full",
      platforms: ["web", "ios"],
      signupUrl: "https://parlayplay.io/",
      rulesUrl: "https://www.thelines.com/fantasy-sports/parlayplay/",
      prizeUsd: "$5 free entry",
      prizeNote: "No deposit. Winnings withdraw after playthrough. Promo terms can change.",
      minCashout: "After playthrough",
      payoutMethods: ["Withdrawal after playthrough"],
      eligibility: "18+/21+, eligible region, free account.",
      restricted: "Promo may require new-account status and geo eligibility.",
      verification: {
        level: "kyc",
        steps: ["Free ParlayPlay account.", "KYC before withdrawal."]
      },
      sources: [
        { title: "ParlayPlay", url: "https://parlayplay.io/" },
        { title: "ParlayPlay (TheLines)", url: "https://www.thelines.com/fantasy-sports/parlayplay/" }
      ],
      lastChecked: "2026-08-17"
    }
  ]
};
