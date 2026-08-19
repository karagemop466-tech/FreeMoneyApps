/* USD Contest Ledger — pass G, 2026-08-19
   Excluded by policy: sweepstakes, sweepstakes casinos, casino products, and any contest that
   requires an account with a gambling operator (bookmaker, sportsbook or real-money DFS).

   Sourcing rule: any listing that states a specific prize figure must cite the operator's
   own rules or game page. Each source carries a "tier" of official | affiliate | forum.
   Affiliate sources may be listed as secondary colour, never as the sole basis for a figure. */
window.LEDGER = {
  "reviewed": "2026-08-19",
  "pass": "G",
  "featured": [
    "kaggle",
    "espn-pickem",
    "fanatics-survivor",
    "cbs-pro-pickem",
    "dirty-dozen",
    "espn-cfb"
  ],
  "addedThisPass": [
    "drivendata",
    "herox",
    "xprize",
    "topcoder"
  ],
  "addedThisPassC": [
    "espn-pickem",
    "espn-survivor",
    "espn-wintotals",
    "espn-playoff",
    "espn-pigskin",
    "espn-cfb",
    "cbs-pro-pickem",
    "cbs-cfb-pickem",
    "fox-super6",
    "fanatics-survivor",
    "yahoo-survival",
    "pickwatch",
    "beat-the-geek",
    "tsg-playoff",
    "favorites-pickem",
    "thelines-survivor",
    "rams-pickem",
    "draft-pro",
    "splash-mock",
    "fftoday-draft",
    "rotoballer",
    "apex-fantasy",
    "fpl-official",
    "fpl-second-chance",
    "fpl-draft",
    "fantasy-efl",
    "telegraph-ff",
    "ucl-fantasy",
    "pl-predictor",
    "pooltracker-epl",
    "ffs-fpl",
    "ffs-ucl",
    "ffs-efl",
    "ffs-tattico",
    "football-mad",
    "fantasy-arena",
    "lazyfpl",
    "fplhub",
    "bona-fide",
    "olka",
    "fplmanager-india",
    "fplstore",
    "pitchbooking",
    "dirty-dozen",
    "the-special-one",
    "andys-predictor",
    "pickem-sports",
    "sports-predictor",
    "goaloracle",
    "oddspedia",
    "streak-for-cash",
    "gamersaloon",
    "playerslounge",
    "officepoolstop",
    "funofficepools",
    "mysurvivorpool",
    "gridirongames",
    "squarespool",
    "myfantasyleague",
    "trofeo"
  ],
  "types": [
    {
      "id": "skill",
      "name": "Skill tournaments",
      "blurb": "Head-to-head or multiplayer skill games. Free rooms usually pay gems, not cash. Real USD almost always requires an entry fee."
    },
    {
      "id": "trivia",
      "name": "Trivia competitions",
      "blurb": "Live or async quiz contests. Free daily plays exist on some apps. Prize pools are split among remaining winners."
    },
    {
      "id": "sports",
      "name": "Fantasy & sports picks",
      "blurb": "Daily fantasy freerolls and sweepstakes sportsbooks. Free tickets or free coins can win USD; most large pools are paid-entry."
    },
    {
      "id": "creative",
      "name": "Creative contests",
      "blurb": "Writing, photo, and brand challenges judged on a submission. Some are free; some lock cash prizes behind a membership."
    },
    {
      "id": "forecasting",
      "name": "Forecasting tournaments",
      "blurb": "Judgement competitions scored on calibrated accuracy. You submit probability estimates, not wagers — nothing is staked and prizes come from sponsors."
    },
    {
      "id": "tech",
      "name": "Tech & data competitions",
      "blurb": "Hackathons and machine-learning contests with published USD prize pools. Free to enter; winners complete tax and identity checks."
    },
    {
      "id": "directory",
      "name": "Directories & forums",
      "blurb": "Places that list many current contests. Use them to find new promotions, then verify each contest’s own official rules."
    },
    {
      "id": "pools",
      "name": "Free pool & league platforms",
      "blurb": "Free tools for running your own pick’em, survivor, squares, or fantasy league. The platform is free; the prize pot is funded by your group."
    }
  ],
  "verificationLevels": [
    {
      "id": "account",
      "name": "Account only",
      "meaning": "Email or social login is enough to play. Prize claims usually still require a matching name and contact info."
    },
    {
      "id": "eligibility",
      "name": "Eligibility check",
      "meaning": "Age, residency, and one-account rules are enforced. Winners sign an affidavit or confirm identity before payment."
    },
    {
      "id": "kyc",
      "name": "Full KYC",
      "meaning": "Government photo ID, proof of address, and sometimes a selfie or source-of-funds check before any USD redemption."
    },
    {
      "id": "tax",
      "name": "Tax paperwork",
      "meaning": "US prizes of $600+ typically require a W-9. Non-US winners may need a W-8BEN. Taxes are the winner’s responsibility."
    }
  ],
  "listings": [
    {
      "id": "solitaire-cash",
      "name": "Solitaire Cash (Papaya)",
      "short": "iOS skill solitaire. Free Gem tournaments exist. USD prizes sit in separate cash rooms that charge an entry fee.",
      "type": "skill",
      "status": "mixed",
      "freePath": "paid-cash",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://www.papaya.com/",
      "iosUrl": "https://apps.apple.com/us/app/solitaire-cash-win-real-money/id1252281551",
      "tosUrl": "https://www.papaya.com/terms-of-use",
      "rulesUrl": "https://www.papaya.com/faq",
      "prizeUsd": "Cash rooms advertise prizes up to tens of dollars per event",
      "prizeNote": "Papaya FAQ: free competitions use Gems; cash competitions use money. Platform takes a fee from the entry pool.",
      "minCashout": "PayPal withdrawal; $1 processing fee reported. Bonus Cash cannot be withdrawn.",
      "payoutMethods": [
        "PayPal",
        "Apple Pay (some Papaya titles)"
      ],
      "eligibility": "18+, not in a Prohibited Jurisdiction under Papaya Gaming Laws section.",
      "restricted": "Papaya blocks cash competitions where skill-game-for-cash is illegal. IA often unavailable; several states Bonus-Cash-only.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Account email + payment method.",
          "Larger withdrawals trigger ID and proof of address.",
          "One account. Multi-accounting is a ban reason.",
          "Claim prizes within 60 days or Papaya may forfeit them."
        ]
      },
      "signupSteps": [
        "Install Solitaire Cash from the App Store.",
        "Create an account with a real email.",
        "Play Gem (free) rooms to learn scoring — those prizes are gems, not USD.",
        "Only enter Cash rooms if you accept losing the entry fee."
      ],
      "howToWin": [
        "Every player in a tournament gets the same seeded deck, timer, and rules.",
        "Skill-matched lobbies. No bots per Papaya FAQ / FTI memo.",
        "Highest score wins the published table."
      ],
      "howToGetMoney": [
        "Win a Cash Competition. Entry paid with Bonus Funds is refunded as bonus; extra winnings pay in cash (ToS §14).",
        "Withdraw to PayPal. Withdrawing forfeits remaining Bonus Cash.",
        "If you skip cash play for 90 days, Bonus Funds can be forfeited."
      ],
      "tosNotes": [
        "ToS effective 2026-02-12: Services may not be used for gambling; money is not required to play (Gems path).",
        "Cash competitions are withheld in Prohibited Jurisdictions.",
        "Extra Play can automatically enter follow-on tournaments using your score for up to 30 days."
      ],
      "redFlags": [
        "This is not a free-USD competition. Free rooms do not pay dollars.",
        "House rake on cash rooms. Bonus Cash traps are a frequent Reddit complaint.",
        "Highly promotional ads overstate typical winnings."
      ],
      "sources": [
        {
          "title": "Papaya FAQ",
          "url": "https://www.papaya.com/faq",
          "tier": "official"
        },
        {
          "title": "Papaya Terms of Use",
          "url": "https://www.papaya.com/terms-of-use",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "bingo-cash",
      "name": "Bingo Cash (Papaya)",
      "short": "Same Papaya engine as Solitaire Cash, bingo format. Free Gem rooms; cash rooms need an entry fee.",
      "type": "skill",
      "status": "mixed",
      "freePath": "paid-cash",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://www.papaya.com/",
      "iosUrl": "https://apps.apple.com/us/app/bingo-cash-win-real-money/id1263102011",
      "tosUrl": "https://www.papaya.com/terms-of-use",
      "rulesUrl": "https://www.papaya.com/faq",
      "prizeUsd": "Cash-room prize tables vary",
      "prizeNote": "Finder 2026: free Gems tournaments; cash tournaments from about $0.50. Restricted: IA unavailable; AZ, LA, ME Bonus Cash only (confirm live).",
      "minCashout": "About $5 via PayPal / Apple Pay (reviews)",
      "payoutMethods": [
        "PayPal",
        "Apple Pay"
      ],
      "eligibility": "18+, Papaya permitted jurisdictions.",
      "restricted": "See Papaya prohibited list. Same Bonus-Cash forfeiture rules as Solitaire Cash.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Same Papaya stack: payment method + ID on larger cashouts."
        ]
      },
      "signupSteps": [
        "Install Bingo Cash on iOS.",
        "Play free Gem rooms first.",
        "Link PayPal only if you later play cash rooms and win withdrawable cash."
      ],
      "howToWin": [
        "Speed and accuracy on identical bingo cards / clocks for the room."
      ],
      "howToGetMoney": [
        "Win cash rooms → withdrawable balance → PayPal. Bonus Cash is not withdrawable."
      ],
      "tosNotes": [
        "Governed by the same Papaya Terms of Use as other Papaya titles."
      ],
      "redFlags": [
        "Do not install expecting free USD. Gems ≠ dollars."
      ],
      "sources": [
        {
          "title": "Papaya FAQ",
          "url": "https://www.papaya.com/faq",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "skillz",
      "name": "Skillz / Blackout Bingo / Skillz Arena",
      "short": "Largest US skill-cash platform. Free practice with Z/Gemz. Cash prizes require a cash entry in enabled states.",
      "type": "skill",
      "status": "mixed",
      "freePath": "paid-cash",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://www.skillz.com/",
      "iosUrl": "https://apps.apple.com/us/app/skillz-arena/id6761981587",
      "tosUrl": "https://www.skillz.com/terms-of-service/",
      "rulesUrl": "https://www.skillz.com/",
      "prizeUsd": "Cash match prizes vary by entry; platform has paid out large historical totals",
      "prizeNote": "Skillz Arena (2026) markets Solitaire and Puzzle Blockz with Gemz practice and a shared cash wallet.",
      "minCashout": "Varies by title; PayPal / Apple Pay / bank",
      "payoutMethods": [
        "PayPal",
        "Apple Pay",
        "bank / debit"
      ],
      "eligibility": "18+, cash play in ~45 US states.",
      "restricted": "Cash commonly unavailable in AR, CT, DE, LA, SD. Card titles may also block ME and IN.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Skillz account inside the individual game or Skillz Arena.",
          "Identity checks before cash-out.",
          "One account across the Skillz network."
        ]
      },
      "signupSteps": [
        "Install Skillz Arena or a Skillz title such as Blackout Bingo.",
        "Create an 18+ account.",
        "Use free Gemz / Z / Ticketz to practice.",
        "Only deposit if you intend to enter cash matches."
      ],
      "howToWin": [
        "Higher score vs a matched opponent or field wins the prize table."
      ],
      "howToGetMoney": [
        "Cash winnings settle to the Skillz wallet.",
        "Bonus Cash cannot be withdrawn and is usually a fraction of each entry.",
        "Withdraw to PayPal or the original payment method."
      ],
      "tosNotes": [
        "Z coins are entertainment and have no cash value.",
        "Cash gameplay is geo-fenced.",
        "Welcome cash matches are time-limited and are not a free prize."
      ],
      "redFlags": [
        "Free tournaments almost never pay USD.",
        "You can lose every cash entry fee."
      ],
      "sources": [
        {
          "title": "Skillz",
          "url": "https://www.skillz.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pocket7",
      "name": "Pocket7Games",
      "short": "iOS multi-game skill venue (solitaire, bingo, 21, pool). Free tickets exist; cash events need an entry.",
      "type": "skill",
      "status": "mixed",
      "freePath": "paid-cash",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://www.pocket7games.com/",
      "iosUrl": "https://apps.apple.com/us/app/pocket7games-win-money/id1076225744",
      "tosUrl": "https://www.pocket7games.com/",
      "rulesUrl": "https://www.pocket7games.com/",
      "prizeUsd": "Cash tournament prize pools",
      "prizeNote": "Daily free-ticket events are for practice or non-cash currency unless a specific promo says otherwise.",
      "minCashout": "PayPal / Venmo / Visa as offered",
      "payoutMethods": [
        "PayPal",
        "Venmo",
        "Visa"
      ],
      "eligibility": "18+, enabled US jurisdictions.",
      "restricted": "State blocks similar to other skill-cash apps.",
      "verification": {
        "level": "kyc",
        "steps": [
          "Account + payment verification before withdrawal."
        ]
      },
      "signupSteps": [
        "Install Pocket7Games from the App Store.",
        "Register and collect daily free tickets.",
        "Read each event card: Ticket vs Cash."
      ],
      "howToWin": [
        "Place on the event leaderboard."
      ],
      "howToGetMoney": [
        "Only cash-event winnings withdraw."
      ],
      "tosNotes": [
        "Entry fees fund the prize pool minus the operator cut."
      ],
      "redFlags": [
        "Free tickets ≠ free USD."
      ],
      "sources": [
        {
          "title": "Pocket7Games",
          "url": "https://www.pocket7games.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "givling",
      "name": "Givling",
      "short": "iOS/Android trivia. Two free plays per day. Weekly team jackpots in USD plus a controversial student-loan queue.",
      "type": "trivia",
      "status": "ended",
      "freePath": "partial",
      "platforms": [
        "ios",
        "web"
      ],
      "signupUrl": "https://www.givling.com/",
      "iosUrl": "https://apps.apple.com/us/app/givling/id966107040",
      "tosUrl": "https://www.givling.com/",
      "rulesUrl": "https://www.givling.com/",
      "prizeUsd": "Trivia removed — no longer a trivia contest",
      "prizeNote": "Givling removed trivia (app v3.0.1, Oct 2025) and removed the free queues (v3.0.0, Sep 2025). The trivia jackpot this entry described no longer exists.",
      "minCashout": "PayPal for cash-team prizes; loan prizes pay a servicer, not you",
      "payoutMethods": [
        "PayPal",
        "Direct to loan/mortgage servicer"
      ],
      "eligibility": "US-focused. Cash availability may vary by state.",
      "restricted": "Review current state availability. Do not spend to chase the queue.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Account + PayPal for cash prizes.",
          "Loan/mortgage prizes require servicer details and may have extra documentation."
        ]
      },
      "signupSteps": [
        "Install Givling and create an account.",
        "Play the two free daily games only.",
        "Ignore coin packages unless you fully understand the queue is pay-to-climb."
      ],
      "howToWin": [
        "Your score is teamed with other recent players. Highest team splits the weekly cash pot.",
        "A separate points queue funds debt-payoff prizes and is dominated by spenders."
      ],
      "howToGetMoney": [
        "Cash-team winners are paid via PayPal.",
        "Queue ‘wins’ may never hit your bank account — they go to a servicer."
      ],
      "tosNotes": [
        "Company historically said no purchase is required to win.",
        "TINA.org: big queue prizes effectively require heavy spending.",
        "Prize-pool size depends on ad and coin revenue — it is not a fixed house bank."
      ],
      "redFlags": [
        "People have spent hundreds chasing the $50k queue.",
        "Treat this as a free trivia toy, not a debt plan."
      ],
      "sources": [
        {
          "title": "Givling",
          "url": "https://www.givling.com/",
          "tier": "official"
        },
        {
          "title": "TINA.org Givling investigation",
          "url": "https://truthinadvertising.org/articles/what-you-should-know-about-the-trivia-game-app-givling/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "vocal",
      "name": "Vocal Challenges",
      "short": "Browser writing contests with USD prizes. Some challenges are free; many large pots require paid Vocal+.",
      "type": "creative",
      "status": "mixed",
      "freePath": "partial",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://vocal.media/challenges",
      "iosUrl": "",
      "tosUrl": "https://vocal.media/resources/challenges-frequently-asked-questions",
      "rulesUrl": "https://vocal.media/resources/challenges-frequently-asked-questions",
      "prizeUsd": "Open challenges often $200; specials have gone to $5,000–$20,000",
      "prizeNote": "FAQ: you are not required to pay to enter, but Vocal+-only challenges exist. As of the 2026 challenge board, many $200 prompts remain Vocal+ gated.",
      "minCashout": "Stripe payout of the prize; no store-credit conversion",
      "payoutMethods": [
        "Stripe (local currency)"
      ],
      "eligibility": "Generally 13+. Must live in a Stripe-supported country to be paid.",
      "restricted": "Non-Stripe countries cannot win cash. Stories must meet community guidelines and word counts.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free Vocal account (or Vocal+ if the challenge requires it).",
          "Winners get email + a request for tax and Stripe details.",
          "Connect Stripe. Cash is sent after tax info is complete."
        ]
      },
      "signupSteps": [
        "Create a free account at vocal.media.",
        "Open Challenges and read whether the challenge is All creators or Vocal+ only.",
        "Write or select a story in the required word range and submit via the challenge dropdown."
      ],
      "howToWin": [
        "Editors/judges pick winners. Not a random sweepstakes (unless a specific challenge says otherwise)."
      ],
      "howToGetMoney": [
        "If selected, reply to Vocal with tax/shipping info.",
        "Receive USD (or converted currency) on Stripe."
      ],
      "tosNotes": [
        "Official rules are linked on each challenge page.",
        "Multiple entries are allowed on most challenges.",
        "Previously published Vocal stories can often be re-entered."
      ],
      "redFlags": [
        "A $99/year Vocal+ fee is not a free competition.",
        "Filter for challenges that do not say Vocal+ exclusive."
      ],
      "sources": [
        {
          "title": "Vocal Challenges FAQ",
          "url": "https://vocal.media/resources/challenges-frequently-asked-questions",
          "tier": "official"
        },
        {
          "title": "Vocal Challenges board",
          "url": "https://vocal.media/challenges",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "kaggle",
      "name": "Kaggle Competitions",
      "short": "Browser data-science contests. Featured competitions publish USD prize pools. Getting Started tracks usually pay $0.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.kaggle.com/competitions",
      "iosUrl": "",
      "tosUrl": "https://www.kaggle.com/legal/terms",
      "rulesUrl": "https://www.kaggle.com/competitions",
      "prizeUsd": "Featured pots commonly $5,000–$100,000+; specials exceed $1M",
      "prizeNote": "Most competitors earn $0. Beginner competitions explicitly have no cash prize.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Wire / Stripe to the verified winner"
      ],
      "eligibility": "Each competition has its own rules (age, export control, team size, employee bans).",
      "restricted": "Some competitions bar residents of sanctioned countries or sponsor employees.",
      "verification": {
        "level": "tax",
        "steps": [
          "Kaggle account.",
          "On winning: KYC + W-9 or W-8BEN + bank/Stripe.",
          "Team prizes are paid to the team lead to split."
        ]
      },
      "signupSteps": [
        "Create a free Kaggle account.",
        "Open Competitions and filter Prize > $0.",
        "Accept that competition’s rules before submitting.",
        "Submit predictions before the deadline. Final rank uses the private test set."
      ],
      "howToWin": [
        "Leaderboard on a hidden test set. Ties and team merges have specific rules."
      ],
      "howToGetMoney": [
        "Sponsor/Kaggle pays after verification. Taxes withheld if required."
      ],
      "tosNotes": [
        "Competition rules override the general site ToS on IP, licensing, and eligibility.",
        "Using extra data or leaking the test set is a disqualification."
      ],
      "redFlags": [
        "Weeks of work for a winner-take-most outcome.",
        "Read whether the prize requires open-sourcing your solution."
      ],
      "sources": [
        {
          "title": "Kaggle Competitions",
          "url": "https://www.kaggle.com/competitions",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "devpost",
      "name": "Devpost Hackathons",
      "short": "Browser directory of judged hackathons. Many are free to enter and pay winners in USD via the event’s official rules.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://devpost.com/hackathons",
      "iosUrl": "",
      "tosUrl": "https://info.devpost.com/terms",
      "rulesUrl": "https://devpost.com/hackathons",
      "prizeUsd": "Per event — currently $10,000 to $685,000 per hackathon",
      "prizeNote": "Live examples on the hackathons index: RevenueCat Shipaton $685,000; All Things Agentic $180,000; Agentic Cinema $75,000; Agents for Humans $40,000. Smaller community events run to a few thousand. The previous \"$500–$25,000\" range understated this.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Paid to the submitting individual, team rep, or organization"
      ],
      "eligibility": "Set per event (age, student-only, country, team size).",
      "restricted": "US tax withholding may apply. Some events exclude sponsor countries or employees.",
      "verification": {
        "level": "tax",
        "steps": [
          "Devpost account.",
          "Submit a public project page before the deadline.",
          "Winners complete sponsor tax paperwork. A portion may be withheld."
        ]
      },
      "signupSteps": [
        "Create a free Devpost account.",
        "Browse hackathons. Open Rules before you build.",
        "Register, build, and submit through Devpost."
      ],
      "howToWin": [
        "Judged on the published criteria. Not random."
      ],
      "howToGetMoney": [
        "Sponsor pays the entrant or team representative.",
        "The representative must split the prize inside the team."
      ],
      "tosNotes": [
        "Official Rules on each event page control prizes.",
        "You usually keep IP except for a license the rules describe."
      ],
      "redFlags": [
        "Some ‘prizes’ are only credits or swag. Confirm USD in the prize table."
      ],
      "sources": [
        {
          "title": "Devpost Hackathons",
          "url": "https://devpost.com/hackathons",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "arcprize",
      "name": "ARC Prize (via Kaggle)",
      "short": "High-dollar abstraction-and-reasoning competition hosted with Kaggle. Free to submit; open-source requirements apply.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://arcprize.org/",
      "iosUrl": "",
      "tosUrl": "https://arcprize.org/",
      "rulesUrl": "https://www.kaggle.com/competitions/arc-prize-2026-paper-track",
      "prizeUsd": "$2,000,000 across three 2026 tracks",
      "prizeNote": "Verified on arcprize.org and each Kaggle track: ARC-AGI-3 $850,000, ARC-AGI-2 $700,000 (Progress $275k + Grand $275k + Bonus $150k), Paper Prize $450,000. Submissions due 2 Nov 2026; winners announced 4 Dec 2026. All prizes require open-sourcing the solution.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "As published by ARC Prize / Kaggle"
      ],
      "eligibility": "See the live Kaggle rules (open source, compute limits, no internet at eval).",
      "restricted": "Must follow the Kaggle submission constraints.",
      "verification": {
        "level": "tax",
        "steps": [
          "Kaggle + ARC eligibility + tax docs on award."
        ]
      },
      "signupSteps": [
        "Read arcprize.org for the current year structure.",
        "Enter through the designated Kaggle competition.",
        "Open-source if you want prize eligibility."
      ],
      "howToWin": [
        "Score on held-out ARC-AGI tasks under the compute rules."
      ],
      "howToGetMoney": [
        "Prize committee / Kaggle payout after verification."
      ],
      "tosNotes": [
        "Hardware and internet limits are strict. Read them before investing compute."
      ],
      "redFlags": [
        "Research-grade difficulty. Not a casual contest."
      ],
      "sources": [
        {
          "title": "ARC Prize 2026 (official)",
          "url": "https://arcprize.org/competitions/2026",
          "tier": "official"
        },
        {
          "title": "ARC-AGI-2 on Kaggle — prize breakdown",
          "url": "https://www.kaggle.com/competitions/arc-prize-2026-arc-agi-2/overview",
          "tier": "official"
        },
        {
          "title": "ARC-AGI-3 on Kaggle",
          "url": "https://www.kaggle.com/competitions/arc-prize-2026-arc-agi-3",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "reedsy-dir",
      "name": "Reedsy Writing Contest List",
      "short": "Curated list of living writing contests with prize and entry-fee fields. Use the $0 fee filter.",
      "type": "directory",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://reedsy.com/resources/writing-contests",
      "iosUrl": "",
      "tosUrl": "https://reedsy.com/privacy",
      "rulesUrl": "https://reedsy.com/resources/writing-contests",
      "prizeUsd": "Listed per contest (hundreds to tens of thousands)",
      "prizeNote": "Reedsy’s own Prompts contest charges a small fee. Prefer third-party listings marked $0.",
      "minCashout": "n/a — directory",
      "payoutMethods": [
        "Each contest sponsor"
      ],
      "eligibility": "Per contest (often 18+, original unpublished work).",
      "restricted": "Many are country-limited.",
      "verification": {
        "level": "tax",
        "steps": [
          "Winners deal with the contest sponsor’s affidavit and tax forms."
        ]
      },
      "signupSteps": [
        "Open the Reedsy contest index.",
        "Filter entry fee $0 and confirm the prize is cash USD (not ‘publication only’).",
        "Enter on the sponsor’s official form."
      ],
      "howToWin": [
        "Judged literary contests, unless the listing says sweepstakes."
      ],
      "howToGetMoney": [
        "Sponsor pays after winner verification."
      ],
      "tosNotes": [
        "Always keep a copy of the official rules PDF."
      ],
      "redFlags": [
        "Reading-fee contests are not free competitions."
      ],
      "sources": [
        {
          "title": "Reedsy writing contests",
          "url": "https://reedsy.com/resources/writing-contests",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "drivendata",
      "name": "DrivenData",
      "short": "Social-impact data-science contests with published USD purses. Free to enter; winners paid by check or wire after tax forms.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.drivendata.org/competitions/",
      "iosUrl": "",
      "tosUrl": "https://www.drivendata.org/competitions/",
      "rulesUrl": "https://www.drivendata.org/competitions/",
      "prizeUsd": "Per contest — often $10,000–$200,000 total purses",
      "prizeNote": "Not every competition pays cash. Filter for prize competitions. Winning code is usually open-sourced under MIT.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Check",
        "Wire / electronic transfer"
      ],
      "eligibility": "Set per contest. Teams allowed. Some US-person limits on federal challenges.",
      "restricted": "Employees of the sponsor are typically banned. Export-control and data-use rules apply.",
      "verification": {
        "level": "tax",
        "steps": [
          "DrivenData account.",
          "On win: eligibility packet + W-9 (US) within the stated days.",
          "Team prize split is even unless the team files a written allocation."
        ]
      },
      "signupSteps": [
        "Create a free account at drivendata.org.",
        "Open Competitions and read that contest’s full rules (they say NO PURCHASE NECESSARY).",
        "Accept the data license and submit before the UTC deadline."
      ],
      "howToWin": [
        "Private leaderboard / judged criteria in the problem statement."
      ],
      "howToGetMoney": [
        "DrivenData notifies winners by email.",
        "After verification, check or wire in about 30 days.",
        "US winners get a 1099. You pay the tax."
      ],
      "tosNotes": [
        "Winning model documentation template is mandatory for prize eligibility.",
        "Failure to return verification docs can forfeit the purse."
      ],
      "redFlags": [
        "Warm-up / practice tracks often pay $0. Read the prize table."
      ],
      "sources": [
        {
          "title": "DrivenData competitions",
          "url": "https://www.drivendata.org/competitions/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "herox",
      "name": "HeroX / Challenge.gov",
      "short": "Marketplace of judged innovation prizes, including US federal Challenge.gov pots paid by EFT.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.herox.com/challenges",
      "iosUrl": "",
      "tosUrl": "https://www.herox.com/terms",
      "rulesUrl": "https://www.challenge.gov/",
      "prizeUsd": "Per challenge — federal pots often $25,000–$500,000+",
      "prizeNote": "HeroX hosts many sponsor challenges. Challenge.gov is the official US government index; some of those are also on HeroX.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Electronic funds transfer to the team captain or entity"
      ],
      "eligibility": "Federal cash prizes usually require a US citizen/permanent-resident captain or a US-incorporated entity.",
      "restricted": "Federal employees and sponsor staff typically ineligible. International solvers may compete but cannot take the cash.",
      "verification": {
        "level": "tax",
        "steps": [
          "Register on HeroX and/or Challenge.gov.",
          "Identify a team captain who can legally receive the purse.",
          "Winners return verification and payment documents within ~10 business days.",
          "IRS withholding may apply."
        ]
      },
      "signupSteps": [
        "Browse herox.com/challenges or challenge.gov.",
        "Open Official Rules before you build.",
        "Submit through the listed platform by the deadline."
      ],
      "howToWin": [
        "Expert or agency judging on published criteria. Not a random sweep."
      ],
      "howToGetMoney": [
        "Sponsor/agency pays the captain or the entity in full. The captain must split the team."
      ],
      "tosNotes": [
        "Each challenge is its own legal promotion.",
        "IP and open-source conditions vary wildly — read them."
      ],
      "redFlags": [
        "Some HeroX listings are awareness campaigns with no cash. Confirm the prize table."
      ],
      "sources": [
        {
          "title": "HeroX challenges",
          "url": "https://www.herox.com/challenges",
          "tier": "forum"
        },
        {
          "title": "Challenge.gov",
          "url": "https://www.challenge.gov/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "xprize",
      "name": "XPRIZE",
      "short": "Large multi-year incentive prizes and occasional hackathons with seven-figure USD pools.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.xprize.org/",
      "iosUrl": "",
      "tosUrl": "https://www.xprize.org/",
      "rulesUrl": "https://www.xprize.org/",
      "prizeUsd": "Flagship prizes in the millions; 2026 Google-backed hackathon advertised a $2M pool",
      "prizeNote": "These are multi-month or multi-year team efforts, not daily apps. Competitor agreements are long and specific.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "As stated in that prize’s competitor agreement"
      ],
      "eligibility": "Per prize. Teams, labs, and companies. Sanctions and export rules apply.",
      "restricted": "Some tracks require open results, field tests, or US presence.",
      "verification": {
        "level": "tax",
        "steps": [
          "Register a team on xprize.org.",
          "Execute the competitor agreement.",
          "Milestone and grand-prize payments follow verification and judging."
        ]
      },
      "signupSteps": [
        "Open the live prize on xprize.org.",
        "Read the guidelines and competitor agreement before paying any optional team fee — many tracks are free to register.",
        "Submit on the published milestone calendar."
      ],
      "howToWin": [
        "Judged against published technical thresholds."
      ],
      "howToGetMoney": [
        "XPRIZE / sponsor pays per the agreement after judges certify the result."
      ],
      "tosNotes": [
        "Guidelines override marketing pages.",
        "IP assignment or license terms are the whole game — read them twice."
      ],
      "redFlags": [
        "Not a casual contest. Budget time in months, not evenings."
      ],
      "sources": [
        {
          "title": "XPRIZE",
          "url": "https://www.xprize.org/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "topcoder",
      "name": "Topcoder",
      "short": "Long-running design, development, and data-science tournaments. Many challenges pay USD to verified members.",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.topcoder.com/challenges",
      "iosUrl": "",
      "tosUrl": "https://www.topcoder.com/policy",
      "rulesUrl": "https://www.topcoder.com/challenges",
      "prizeUsd": "Per challenge — hundreds to tens of thousands; TCO finals add extra purses",
      "prizeNote": "Create a free member account. Cash is paid through Topcoder’s payment stack after tax profile setup. Not every listed item is a cash challenge.",
      "minCashout": "Per Topcoder payment policy (complete tax profile first)",
      "payoutMethods": [
        "Topcoder payment / Payoneer-style rails as currently offered"
      ],
      "eligibility": "18+ typical. Some challenges are region- or skill-gated. Employees of the client are ineligible.",
      "restricted": "Payment may be blocked in sanctioned countries. You must pass member verification to get paid.",
      "verification": {
        "level": "tax",
        "steps": [
          "Topcoder member account.",
          "Complete identity and tax profile before a payout will release.",
          "TCO cash is paid within the stated window after finals."
        ]
      },
      "signupSteps": [
        "Register at topcoder.com.",
        "Open Challenges and filter for prize > $0.",
        "Submit before the challenge deadline. Read that challenge’s spec — it is the contract."
      ],
      "howToWin": [
        "Score / review board / provisional + final tests, depending on track."
      ],
      "howToGetMoney": [
        "Winnings hit your Topcoder account, then you withdraw after tax setup."
      ],
      "tosNotes": [
        "Work product licensing is defined per challenge.",
        "Late or non-passing submissions earn $0."
      ],
      "redFlags": [
        "Some ‘challenges’ are copilot or QA tasks, not contests. Check the type badge."
      ],
      "sources": [
        {
          "title": "Topcoder challenges",
          "url": "https://www.topcoder.com/challenges",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-pickem",
      "name": "ESPN NFL Pick'em",
      "short": "Free season-long pick'em. Ten free entries a week; 58 prizes split the six-figure pot.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nfl-pickem-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/nfl-pickem-2026/make-picks",
      "prizeUsd": "$102,000 total across 58 prizes",
      "prizeNote": "Free ESPN account. Weekly and season prizes; the grand prize is the headline number.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout",
        "Check or ACH after verification"
      ],
      "eligibility": "US, 18+ (21+ where required), free ESPN account.",
      "restricted": "Void where prohibited. Employees of ESPN/Disney typically ineligible.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winners verified and notified by ESPN before payout."
        ]
      },
      "sources": [
        {
          "title": "ESPN NFL Pick'em",
          "url": "https://fantasy.espn.com/games/nfl-pickem-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-survivor",
      "name": "ESPN NFL Survivor",
      "short": "Pick one winning team a week, no repeats. Outlast everyone for the grand prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nfl-survivor-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/nfl-survivor-2026/make-picks",
      "prizeUsd": "$25,000 grand prize",
      "prizeNote": "Up to 25 free entries. One wrong pick eliminates that entry.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+ (21+ where required), free ESPN account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN NFL Survivor",
          "url": "https://fantasy.espn.com/games/nfl-survivor-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-wintotals",
      "name": "ESPN NFL Win Totals",
      "short": "Predict every team's regular-season win total. Free to enter.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nfl-win-totals-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/nfl-win-totals-2026/make-picks",
      "prizeUsd": "$5,000",
      "prizeNote": "Free ESPN account. One set of predictions per rules.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN NFL Win Totals",
          "url": "https://fantasy.espn.com/games/nfl-win-totals-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-playoff",
      "name": "ESPN NFL Playoff Predictor",
      "short": "Predict the playoff field before the season. Free entry.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nfl-playoff-predictor-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/nfl-playoff-predictor-2026/make-picks",
      "prizeUsd": "$10,000",
      "prizeNote": "Free ESPN account. Accuracy on playoff teams and seeding decides the winner.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN NFL Playoff Predictor",
          "url": "https://fantasy.espn.com/games/nfl-playoff-predictor-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-pigskin",
      "name": "ESPN Pigskin Bracket Challenge",
      "short": "Bracket every playoff game. Free to enter; big grand prize.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/nfl-playoff-football-challenge-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/nfl-playoff-football-challenge-2026/make-picks",
      "prizeUsd": "$50,000",
      "prizeNote": "Playoff bracket. Ran 10 Jan – 8 Feb 2026; ESPN page reads \"The NFL Playoffs have ended.\" Reopens near the 2026-27 postseason.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN Pigskin Bracket Challenge",
          "url": "https://fantasy.espn.com/games/nfl-playoff-football-challenge-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-cfb",
      "name": "ESPN College Football Pick'em",
      "short": "College version of ESPN Pick'em with 46 prizes across the season.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/college-football-pickem-2026/make-picks",
      "rulesUrl": "https://fantasy.espn.com/games/college-football-pickem-2026/make-picks",
      "prizeUsd": "$86,000 total (46 prizes)",
      "prizeNote": "Free ESPN account. Same format as the NFL game, college slates.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free ESPN account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "ESPN College Football Pick'em",
          "url": "https://fantasy.espn.com/games/college-football-pickem-2026/make-picks",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "cbs-pro-pickem",
      "name": "CBS Sports Pro Football Pick'em",
      "short": "Weekly and season-long pick'em with a six-figure perfect-week jackpot.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.cbssports.com/fantasy/football/games/pickem/rules",
      "rulesUrl": "https://www.cbssports.com/fantasy/football/games/pickem/rules",
      "prizeUsd": "$1K/week + $5K season + $100K perfect",
      "prizeNote": "Free CBS Sports account. Perfect-week prize requires a flawless slate.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free CBS Sports account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free CBS Sports account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "CBS Sports Pro Football Pick'em rules",
          "url": "https://www.cbssports.com/fantasy/football/games/pickem/rules",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "cbs-cfb-pickem",
      "name": "CBS Sports College Football Pick'em",
      "short": "College football pick'em with weekly, season, and perfect-week prizes.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.cbssports.com/fantasy/college-football/games/pickem/rules",
      "rulesUrl": "https://www.cbssports.com/fantasy/college-football/games/pickem/rules",
      "prizeUsd": "$1K/wk + $5K season + $100K perfect",
      "prizeNote": "Free CBS Sports account. College slates each week.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free CBS Sports account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free CBS Sports account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "CBS Sports College Football Pick'em",
          "url": "https://www.cbssports.com/fantasy/college-football/games/pickem/rules",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fox-super6",
      "name": "FOX Super 6",
      "short": "Predict six outcomes for a shot at weekly five-figure cash. Free to play in 49 states.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.foxsports.com/fox-super-6",
      "rulesUrl": "https://www.foxsports.com/fox-super-6",
      "prizeUsd": "Not currently published — confirm on the live game page",
      "prizeNote": "FOX Sports shows \"Super 6 returns soon\" and \"No active games.\" Prize range is not currently published.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free FOX Sports account (49 states).",
      "restricted": "Not available in Washington state.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free FOX Sports account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "FOX Super 6",
          "url": "https://www.foxsports.com/fox-super-6",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fanatics-survivor",
      "name": "Fanatics NFL Survivor League",
      "short": "Free survivor league inside the Fanatics app. $1M guaranteed, grows with each player.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://betfanatics.com/",
      "rulesUrl": "https://www.legalsportsreport.com/240860/fanatics-nfl-survivor-league/",
      "prizeUsd": "$1M+ guaranteed (up to $10M)",
      "prizeNote": "One team per week, no repeats. Prize splits if multiple players survive. Open to all 50 states.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 21+, free FanaticsID account. Open in all 50 states and DC.",
      "restricted": "One entry per person. See the live app for the current prize table.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Fanatics account.",
          "Winner verification before payout."
        ]
      },
      "sources": [
        {
          "title": "Fanatics Sportsbook (official)",
          "url": "https://betfanatics.com/",
          "tier": "official"
        },
        {
          "title": "Legal Sports Report — contest explainer",
          "url": "https://www.legalsportsreport.com/240860/fanatics-nfl-survivor-league/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "yahoo-survival",
      "name": "Yahoo Survival Football",
      "short": "Yahoo's free survivor game with cash prizes for the last players standing.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://football.fantasysports.yahoo.com/",
      "rulesUrl": "https://football.fantasysports.yahoo.com/",
      "prizeUsd": "Historically $6,000 total — $5,000 in MGM resort credits plus $1,000 cash",
      "prizeNote": "Per Yahoo’s official contest rules, the grand prize is a Las Vegas getaway awarded as MGM resort credits ($5,000) plus $1,000 cash. Only the $1,000 is withdrawable. The 2026/27 prize table had not been published at time of review.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free Yahoo account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Yahoo account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Yahoo Survival Football",
          "url": "https://football.fantasysports.yahoo.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pickwatch",
      "name": "NFL Pickwatch Contest",
      "short": "Pick every game against the spread. Free season contest with weekly prizes.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://nflpickwatch.com/contest/nfl/2026",
      "rulesUrl": "https://nflpickwatch.com/contest/nfl/2026",
      "prizeUsd": "Not running for 2026",
      "prizeNote": "Pickwatch states \"The NFL contest isn’t running for the 2026 season.\"",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "Open to eligible jurisdictions. Free account.",
      "restricted": "Check contest terms for residency limits.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Pickwatch account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "NFL Pickwatch Contest",
          "url": "https://nflpickwatch.com/contest/nfl/2026",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "beat-the-geek",
      "name": "Beat The Geek",
      "short": "Weekly pick'em with cash and season prizes, including an NFL trip.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.thesportsgeek.com/contests/beat-the-geek/",
      "rulesUrl": "https://www.thesportsgeek.com/contests/beat-the-geek/",
      "prizeUsd": "NFL trip for 2 + $500/wk gift card + $2,500 season gift card",
      "prizeNote": "Weekly and season prizes are issued as Giftogram gift cards, not cash. The grand prize is a 2027 NFL game trip for two including flights and two nights’ hotel.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "Contiguous US or Canada excluding Quebec, 21+, free TheSportsGeek account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free TSG account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Beat The Geek",
          "url": "https://www.thesportsgeek.com/contests/beat-the-geek/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "tsg-playoff",
      "name": "TheSportsGeek NFL Playoff Pick'em",
      "short": "Postseason pick'em with an Amazon gift card prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.thesportsgeek.com/contests/nfl-playoff-pickem/",
      "rulesUrl": "https://www.thesportsgeek.com/contests/nfl-playoff-pickem/",
      "prizeUsd": "$500 Amazon gift card",
      "prizeNote": "Free TSG account. Opens near the playoffs.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Gift card"
      ],
      "eligibility": "US, free TSG account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free TSG account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "TheSportsGeek NFL Playoff Pick'em",
          "url": "https://www.thesportsgeek.com/contests/nfl-playoff-pickem/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "favorites-pickem",
      "name": "The Favorites Podcast Pick'em",
      "short": "Action Network's free pick'em with a six-figure pool and weekly payouts.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.actionnetwork.com/nfl/the-favorites-podcast-free-100k-pro-football-pick-em-contest",
      "rulesUrl": "https://www.actionnetwork.com/nfl/the-favorites-podcast-free-100k-pro-football-pick-em-contest",
      "prizeUsd": "$100,000+ prize pool",
      "prizeNote": "Operator game page is titled \"The Favorites $100K Pro Football Pick’em Contest\": $40,000 grand prize, then $10,000 / $5,000 / $3,000 / $2,500 / $1,500 / $1,000 / $1,000 / $500 / $500, plus weekly top-five prizes. An affiliate figure of $120,000 was not supported.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 21+, free Action Network account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Action Network account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "The Favorites contest (official game page)",
          "url": "https://favorites.actionnetwork.com/games/the-favorites",
          "tier": "official"
        },
        {
          "title": "Action Network — contest FAQ",
          "url": "https://www.actionnetwork.com/nfl/the-favorites-podcast-free-100k-pro-football-pick-em-contest",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "thelines-survivor",
      "name": "TheLines Free NFL Survivor",
      "short": "Free survivor pool run by TheLines with a five-figure prize.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.thelines.com/free-nfl-contest-pools-games-week-1-2024/",
      "rulesUrl": "https://www.thelines.com/free-nfl-contest-pools-games-week-1-2024/",
      "prizeUsd": "Not confirmed for 2026",
      "prizeNote": "Cited article is from September 2024 and covers the 2024 Week 1 contest. No 2026 equivalent confirmed.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US and Canada, 21+, excluding Quebec and Washington DC.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "TheLines Free NFL Survivor",
          "url": "https://www.thelines.com/free-nfl-contest-pools-games-week-1-2024/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "rams-pickem",
      "name": "LA Rams Pick'em",
      "short": "Team-run pick'em with resort stays, signed gear, and season tickets on offer.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.therams.com/news/rams-pick-em-launching-2026-season-season-tickets-player-signed-merchandise-more-prizes-for-predictions",
      "rulesUrl": "https://www.therams.com/news/rams-pick-em-launching-2026-season-season-tickets-player-signed-merchandise-more-prizes-for-predictions",
      "prizeUsd": "Pechanga resort stay + $250 credit; weekly tickets and signed merchandise",
      "prizeNote": "Season grand prize is a 2-night Pechanga stay, $250 resort credit and a hot-air balloon ride for two. Weekly: single-game tickets, signed jersey / football / mini helmet, $75 resort credit. No cash and no season tickets.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "US, 18+, free Rams account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Rams account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "LA Rams Pick'em",
          "url": "https://www.therams.com/news/rams-pick-em-launching-2026-season-season-tickets-player-signed-merchandise-more-prizes-for-predictions",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "draft-pro",
      "name": "The Draft Pro — Perfect Draft Challenge",
      "short": "Predict all 32 first-round NFL Draft picks for a million-dollar prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.prnewswire.com/news-releases/the-draft-pro-launches-free-1-000-000-perfect-draft-challenge-ahead-of-the-2026-nfl-draft-302736409.html",
      "rulesUrl": "https://www.prnewswire.com/news-releases/the-draft-pro-launches-free-1-000-000-perfect-draft-challenge-ahead-of-the-2026-nfl-draft-302736409.html",
      "prizeUsd": "$10,000 (perfect 32/32) — current NBA/NHL game",
      "prizeNote": "The $1,000,000 Perfect Draft was a one-off for the 2026 NFL Draft (closed 23 Apr 2026). thedraftpro.com now runs NBA and NHL draft contests with a $10,000 perfect-draft prize. Free to play, no purchase necessary.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free app account.",
      "restricted": "Perfect 32/32 required for the top prize.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free app account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "The Draft Pro (official)",
          "url": "https://www.thedraftpro.com/",
          "tier": "official"
        },
        {
          "title": "Perfect Draft LLC press release",
          "url": "https://www.prnewswire.com/news-releases/the-draft-pro-launches-free-1-000-000-perfect-draft-challenge-ahead-of-the-2026-nfl-draft-302736409.html",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "splash-mock",
      "name": "Splash Sports NFL Mock Draft",
      "short": "Mock the NFL Draft for a share of $10,000 in prizes.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://nflmockdraft.app.splashsports.com/nfl-mock-draft/my-entry",
      "rulesUrl": "https://nflmockdraft.app.splashsports.com/nfl-mock-draft/my-entry",
      "prizeUsd": "Not verified outside the entry window",
      "prizeNote": "NFL Mock Draft contest, runs pre-draft in April. Prize table not public outside the entry window.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free Splash account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Splash account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Splash Sports NFL Mock Draft",
          "url": "https://nflmockdraft.app.splashsports.com/nfl-mock-draft/my-entry",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fftoday-draft",
      "name": "FFToday NFL Draft Contest",
      "short": "Mock the first round of the NFL Draft for cash and prizes.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.fftoday.com/contests/draftcontest.php?o=3",
      "rulesUrl": "https://www.fftoday.com/contests/draftcontest.php?o=3",
      "prizeUsd": "$100 cash + prizes",
      "prizeNote": "NFL Draft contest. 2026 entry deadline was 23 Apr 2026; returns for the 2027 draft.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free FFToday account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free FFToday account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "FFToday NFL Draft Contest",
          "url": "https://www.fftoday.com/contests/draftcontest.php?o=3",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "rotoballer",
      "name": "RotoBaller Challenge",
      "short": "Free season-long fantasy football tournament with cash and premium prizes.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.rotoballer.com/free-fantasy-football-tournament-rotoballer-challenge-2026/1900460",
      "rulesUrl": "https://www.rotoballer.com/free-fantasy-football-tournament-rotoballer-challenge-2026/1900460",
      "prizeUsd": "$500 + 50x Premium",
      "prizeNote": "Free Fleaflicker account. Draft before the deadline.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free Fleaflicker account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free Fleaflicker account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "RotoBaller Challenge",
          "url": "https://www.rotoballer.com/free-fantasy-football-tournament-rotoballer-challenge-2026/1900460",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "apex-fantasy",
      "name": "Apex Fantasy Free League Entry",
      "short": "Free league entry (worth $125) via email signup.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://apexfantasyleagues.com/",
      "rulesUrl": "https://apexfantasyleagues.com/",
      "prizeUsd": "$125 league entry",
      "prizeNote": "Free email signup. Prize is a free paid-league entry, not direct cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League entry credit"
      ],
      "eligibility": "US, 18+, free account.",
      "restricted": "Void where prohibited.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free email signup.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Apex Fantasy",
          "url": "https://apexfantasyleagues.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fpl-official",
      "name": "Official FPL (Premier League)",
      "short": "The free Premier League fantasy game with VIP trips, hardware, and gear for top finishers.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://fantasy.premierleague.com/help/rules",
      "prizeUsd": "VIP trip + Surface Laptop + Puma gear",
      "prizeNote": "Free FPL account. Prizes are experiences and merchandise, not cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Global (some prize eligibility limits), free FPL account.",
      "restricted": "See official rules for prize eligibility by region.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free FPL account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Official Fantasy Premier League",
          "url": "https://fantasy.premierleague.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fpl-second-chance",
      "name": "FPL Second Chance League",
      "short": "Official FPL side competition with Puma gear and an EA FC 26 prize.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.premierleague.com/en/news/4220308/the-second-chance-league-is-live-in-fantasy",
      "rulesUrl": "https://www.premierleague.com/en/news/4220308/the-second-chance-league-is-live-in-fantasy",
      "prizeUsd": "Puma gear + EA FC 26 + FPL bundle",
      "prizeNote": "The cited article is the 2025/26 Second Chance league, which began at Gameweek 21 on 6 Jan 2026. A 2026/27 edition is expected mid-season.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free FPL account, eligible regions.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free FPL account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "FPL Second Chance League",
          "url": "https://www.premierleague.com/en/news/4220308/the-second-chance-league-is-live-in-fantasy",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fpl-draft",
      "name": "FPL Draft",
      "short": "Premier League's free draft game. Compete in head-to-head leagues.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://draft.premierleague.com/",
      "rulesUrl": "https://draft.premierleague.com/",
      "prizeUsd": "Prizes (league-dependent)",
      "prizeNote": "Free FPL account. Most draft leagues are free with friends.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free FPL account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free FPL account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "FPL Draft",
          "url": "https://draft.premierleague.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fantasy-efl",
      "name": "Fantasy EFL",
      "short": "The EFL's official free fantasy game with published prizes.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.efl.com/prizes",
      "rulesUrl": "https://fantasy.efl.com/prizes",
      "prizeUsd": "Prizes (see official prize page)",
      "prizeNote": "Free EFL account.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Free EFL account, eligible regions.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free EFL account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Fantasy EFL prizes",
          "url": "https://fantasy.efl.com/prizes",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "telegraph-ff",
      "name": "Telegraph Fantasy Football",
      "short": "Free UK fantasy football with a cash first prize (5 free teams).",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasyfootball.telegraph.co.uk/",
      "rulesUrl": "https://fantasyfootball.telegraph.co.uk/",
      "prizeUsd": "£5,000 prize pool (2026/27)",
      "prizeNote": "Free to play, up to five teams per account, no Telegraph subscription required. Figure taken from the game’s own landing page.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "UK, 18+, free account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Telegraph Fantasy Football (official)",
          "url": "https://fantasyfootball.telegraph.co.uk/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ucl-fantasy",
      "name": "UCL Fantasy",
      "short": "UEFA's free Champions League fantasy game with a final trip and a PS5.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://gaming.uefa.com/en/uclfantasy",
      "rulesUrl": "https://gaming.uefa.com/en/uclfantasy",
      "prizeUsd": "UCL Final trip + PS5",
      "prizeNote": "Free UEFA account. Prizes are experiences and hardware, not cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Prize fulfillment"
      ],
      "eligibility": "Global, free UEFA account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free UEFA account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "UCL Fantasy",
          "url": "https://gaming.uefa.com/en/uclfantasy",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pl-predictor",
      "name": "Premier League Predictor",
      "short": "Free UK predictor with weekly cash prizes.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://premierleaguepredictor.co.uk/",
      "rulesUrl": "https://premierleaguepredictor.co.uk/",
      "prizeUsd": "Weekly cash prizes",
      "prizeNote": "Free account. UK-focused.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "UK, 18+, free account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Premier League Predictor",
          "url": "https://premierleaguepredictor.co.uk/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pooltracker-epl",
      "name": "Pooltracker EPL Predictor",
      "short": "Free EPL score predictor for private pools with friends.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.pooltracker.com/game_info/english-premier-league-predictor.asp",
      "rulesUrl": "https://www.pooltracker.com/game_info/english-premier-league-predictor.asp",
      "prizeUsd": "Pools with friends",
      "prizeNote": "Free Pooltracker account. Prizes decided by your group.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "See site.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Pooltracker account."
        ]
      },
      "sources": [
        {
          "title": "Pooltracker EPL Predictor",
          "url": "https://www.pooltracker.com/game_info/english-premier-league-predictor.asp",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ffs-fpl",
      "name": "Fantasy Football Scout FPL league",
      "short": "Free-to-join FPL mini-league with a £1,200 cash pool plus memberships.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://www.fantasyfootballscout.co.uk/2026/08/14/win-5000-worth-of-prizes-with-fantasy-football-scout-in-2026-27",
      "code": "eikrq4",
      "prizeUsd": "£1,200 cash + memberships",
      "prizeNote": "Join in FPL via Leagues > Join Private League with the code. Free to join.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account, eligible regions.",
      "restricted": "Follow the organizer's entry rules.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code. Organizer verifies winners."
        ]
      },
      "sources": [
        {
          "title": "Fantasy Football Scout league",
          "url": "https://www.fantasyfootballscout.co.uk/2026/08/14/win-5000-worth-of-prizes-with-fantasy-football-scout-in-2026-27",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ffs-ucl",
      "name": "FFScout UCL Fantasy league",
      "short": "FFScout's free Champions League fantasy league with a £150 prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://gaming.uefa.com/en/uclfantasy",
      "rulesUrl": "https://www.fantasyfootballscout.co.uk/mini-leagues",
      "code": "TyhVfm",
      "prizeUsd": "£150 + Mega Bundle",
      "prizeNote": "Code TyhVfm is a UEFA Champions League Fantasy code and is entered at gaming.uefa.com, not fantasy.premierleague.com.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "UCL Fantasy account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "UCL Fantasy account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "FFScout mini-leagues",
          "url": "https://www.fantasyfootballscout.co.uk/mini-leagues",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ffs-efl",
      "name": "FFScout Fantasy EFL league",
      "short": "FFScout's free Fantasy EFL league with a Mega Bundle prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.efl.com/",
      "rulesUrl": "https://www.fantasyfootballscout.co.uk/mini-leagues",
      "code": "FFSCOUT1",
      "prizeUsd": "Mega Bundle",
      "prizeNote": "Free to join with the league code.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "Fantasy EFL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "Fantasy EFL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "FFScout mini-leagues",
          "url": "https://www.fantasyfootballscout.co.uk/mini-leagues",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "ffs-tattico",
      "name": "FFScout Tattico Serie A league",
      "short": "FFScout's free Serie A fantasy league with a £750 prize pool.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasyfootballscout.co.uk/2026/08/15/join-our-tattico-fantasy-serie-a-league-win-750-in-prizes",
      "rulesUrl": "https://fantasyfootballscout.co.uk/2026/08/15/join-our-tattico-fantasy-serie-a-league-win-750-in-prizes",
      "prizeUsd": "£750 total",
      "prizeNote": "Free to join via the organizer's link.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "Tattico Fantasy account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "Tattico account.",
          "Join via organizer link."
        ]
      },
      "sources": [
        {
          "title": "FFScout Tattico Serie A league",
          "url": "https://fantasyfootballscout.co.uk/2026/08/15/join-our-tattico-fantasy-serie-a-league-win-750-in-prizes",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "football-mad",
      "name": "Football Mad FPL league",
      "short": "Free FPL mini-league with a £5,000 prize.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://fpltips.com/fpl-leagues-with-prizes/",
      "code": "u7vy7w",
      "prizeUsd": "Prize pool not confirmed for 2026/27",
      "prizeNote": "The host advertised a £5,000 pool for 2025/26 (£150/75/25 monthly, £1,000 top season prize) with an overall-prize deadline of 31 Aug 2025. No 2026/27 announcement found. Code u7vy7w is the 2025/26 code and is very likely dead.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "Football Mad — host’s own league announcement (2025/26)",
          "url": "https://www.footballmad.co.uk/think-youre-a-fantasy-football-genius-prove-it-5-000-in-cash-prizes-up-for-grabs/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "fantasy-arena",
      "name": "Fantasy Arena FPL league",
      "short": "Free FPL mini-league with a $1,500 prize across season and monthly.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/",
      "code": "hs3v95",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at $1,500 (season + monthly) in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "Free-to-join FPL prize leagues",
          "url": "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "lazyfpl",
      "name": "LazyFPL league",
      "short": "Free FPL mini-league with a £750 prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://www.lazyfpl.com/p/fpl-leagues-with-prizes",
      "code": "ni3o0l",
      "prizeUsd": "£500 prize pool (top six)",
      "prizeNote": "Host’s own page: £500 across £150/120/90/60/45/35. Eligibility requires opening at least 50% of LazyFPL emails (minimum 10) and entering the LazyFPL Cup. An affiliate round-up listed £750 — the operator page supersedes it.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "LazyFPL readers’ mini-league (host’s own page)",
          "url": "https://www.lazyfpl.com/readers-mini-league",
          "tier": "official"
        },
        {
          "title": "FPLTips league round-up",
          "url": "https://fpltips.com/fpl-leagues-with-prizes/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "fplhub",
      "name": "FPL Hub league",
      "short": "Free FPL mini-league with a £1,250 prize.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://fpltips.com/fpl-leagues-with-prizes/",
      "code": "00ul99",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at £1,250 in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "FPL leagues with prizes",
          "url": "https://fpltips.com/fpl-leagues-with-prizes/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "bona-fide",
      "name": "Bona Fide Sports league",
      "short": "Free FPL mini-league with a $200 first prize.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://www.reddit.com/r/FantasyPL/comments/1v4h6th/fpl_202627_minileagues_thread/",
      "code": "c7blsu",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at $200 first place in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "r/FantasyPL minileagues thread",
          "url": "https://www.reddit.com/r/FantasyPL/comments/1v4h6th/fpl_202627_minileagues_thread/",
          "tier": "forum"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "olka",
      "name": "OLKA Express league",
      "short": "Free FPL mini-league with a €1,000 first prize.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://www.reddit.com/r/FantasyPL/comments/1m6naoy/league_codes_megathread/",
      "code": "5nysyw",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at €1,000 first / €500 second in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "r/FantasyPL league codes megathread",
          "url": "https://www.reddit.com/r/FantasyPL/comments/1m6naoy/league_codes_megathread/",
          "tier": "forum"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "fplmanager-india",
      "name": "FPLManagerIndia league",
      "short": "Free FPL mini-league with a PS5 and £200.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/",
      "code": "10ev25",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at PS5 + £200 in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "Free-to-join FPL prize leagues",
          "url": "https://allaboutfpl.com/2025/07/list-of-free-to-join-prize-fpl-mini-leagues-ahead-of-25-26-season/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "fplstore",
      "name": "fplStore_ league",
      "short": "Free FPL mini-league with a £500 voucher.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://fpltips.com/fpl-leagues-with-prizes/",
      "code": "ijuoh4",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at £500 voucher in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "FPL leagues with prizes",
          "url": "https://fpltips.com/fpl-leagues-with-prizes/",
          "tier": "affiliate"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "pitchbooking",
      "name": "Pitchbooking.com league",
      "short": "Free FPL mini-league with a £150 gift card.",
      "type": "sports",
      "status": "caution",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://fantasy.premierleague.com/",
      "rulesUrl": "https://www.reddit.com/r/FantasyPL/comments/wecme0/list_of_free_to_enter_fpl_leagues_with_prizes/",
      "code": "5hwilh",
      "prizeUsd": "Prize not confirmed for 2026/27",
      "prizeNote": "Listed at £150 gift card in 2025/26 round-ups. No operator page confirms this for 2026/27 and FPL codes normally change between seasons. Treat the code as unverified and check with the host before entering.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "League organizer payout"
      ],
      "eligibility": "FPL account.",
      "restricted": "Organizer's rules apply.",
      "verification": {
        "level": "account",
        "steps": [
          "FPL account.",
          "Enter league code."
        ]
      },
      "sources": [
        {
          "title": "Free FPL leagues with prizes",
          "url": "https://www.reddit.com/r/FantasyPL/comments/wecme0/list_of_free_to_enter_fpl_leagues_with_prizes/",
          "tier": "forum"
        }
      ],
      "lastChecked": "2026-08-19",
      "codeVerified": false
    },
    {
      "id": "dirty-dozen",
      "name": "Dirty Dozen (Gambling.com)",
      "short": "Predict yellow and red cards for 12 players to win £12,000 weekly.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.gambling.com/games/dirty-dozen",
      "rulesUrl": "https://www.gambling.com/games/dirty-dozen",
      "prizeUsd": "£12,000 weekly",
      "prizeNote": "Free Gambling.com account (email only, no KYC).",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "UK/Ireland, 18+, free account.",
      "restricted": "Email signup; no KYC for most players.",
      "verification": {
        "level": "account",
        "steps": [
          "Free Gambling.com account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Dirty Dozen",
          "url": "https://www.gambling.com/games/dirty-dozen",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "the-special-one",
      "name": "The Special One",
      "short": "Last-man-standing knockout game with prizes. Email signup.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://thespecialone.co.uk/",
      "rulesUrl": "https://thespecialone.co.uk/",
      "prizeUsd": "Paused",
      "prizeNote": "Redirects to a holding page: \"UNDERGOING MEDICAL — rebrand and relaunch.\"",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "UK/Ireland, 18+, free account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "The Special One",
          "url": "https://thespecialone.co.uk/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "andys-predictor",
      "name": "Andy's Bet Club £1M Predictor",
      "short": "Predict the final Premier League table 1-20 for a £1,000,000 prize.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://andysbetclub.co.uk/predictor-game/",
      "rulesUrl": "https://andysbetclub.co.uk/predictor-game/",
      "prizeUsd": "£1,000,000",
      "prizeNote": "Free account (email, UK/Ireland). Perfect table required for the top prize.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "UK/Ireland, 18+, free account.",
      "restricted": "See official rules.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Andy's Bet Club Predictor",
          "url": "https://andysbetclub.co.uk/predictor-game/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "pickem-sports",
      "name": "Pick 'Em Sports (iOS)",
      "short": "Free NFL/CFB pick'em app with sponsored prizes.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://apps.apple.com/us/app/pick-em-sports-nfl-cfb/id6737177213",
      "rulesUrl": "https://apps.apple.com/us/app/pick-em-sports-nfl-cfb/id6737177213",
      "prizeUsd": "Sponsored prizes",
      "prizeNote": "Free account (email). Prizes are sponsor-funded.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "US, 18+, free account.",
      "restricted": "See app terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Pick 'Em Sports (App Store)",
          "url": "https://apps.apple.com/us/app/pick-em-sports-nfl-cfb/id6737177213",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "sports-predictor",
      "name": "Sports Predictor (iOS)",
      "short": "Free fantasy/sports prediction game with cash paid via PayPal.",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "ios"
      ],
      "signupUrl": "https://apps.apple.com/us/app/sports-predictor-fantasy-game/id1445043792",
      "rulesUrl": "https://apps.apple.com/us/app/sports-predictor-fantasy-game/id1445043792",
      "prizeUsd": "Cash via PayPal",
      "prizeNote": "Free account (email). Confirm current prize structure in-app.",
      "minCashout": "Confirm in-app",
      "payoutMethods": [
        "PayPal"
      ],
      "eligibility": "18+, free account.",
      "restricted": "See app terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Sports Predictor (App Store)",
          "url": "https://apps.apple.com/us/app/sports-predictor-fantasy-game/id1445043792",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "goaloracle",
      "name": "GoalOracle",
      "short": "Skill-based football prediction game with prizes for top finishers.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://goaloracle.io/",
      "rulesUrl": "https://goaloracle.io/",
      "prizeUsd": "Contest complete",
      "prizeNote": "World Cup 2026 contest is complete — \"Prizes paid, records frozen.\"",
      "minCashout": "Confirm on site",
      "payoutMethods": [
        "Platform payout"
      ],
      "eligibility": "18+, free account.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "GoalOracle",
          "url": "https://goaloracle.io/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "oddspedia",
      "name": "Oddspedia Handicapping Contests",
      "short": "Free capper/pick contests with a cash prize pool.",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://oddspedia.com/us/picks/capper-contests/wc2026-competition",
      "rulesUrl": "https://oddspedia.com/us/picks/capper-contests/wc2026-competition",
      "prizeUsd": "€2,000 prize pool",
      "prizeNote": "World Cup contest ran 20 May – 20 Jul 2026; final ranking confirmed and paid. Oddspedia runs rolling monthly/yearly contests — check the contests hub.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "18+, free account.",
      "restricted": "See contest terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Winner verification on claim."
        ]
      },
      "sources": [
        {
          "title": "Oddspedia capper contests",
          "url": "https://oddspedia.com/us/picks/capper-contests/wc2026-competition",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "streak-for-cash",
      "name": "Streak for the Cash",
      "short": "Streak-based prediction game. Site live but prize structure unverified in 2026.",
      "type": "sports",
      "status": "caution",
      "freePath": "partial",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.streakforthecash.com/",
      "rulesUrl": "https://www.streakforthecash.com/",
      "prizeUsd": "Unverified",
      "prizeNote": "Included for completeness. Confirm current prizes and ownership before relying on it.",
      "minCashout": "Unknown",
      "payoutMethods": [
        "Unknown"
      ],
      "eligibility": "Unknown.",
      "restricted": "Prize structure unverified.",
      "verification": {
        "level": "account",
        "steps": [
          "Confirm the live site before entering."
        ]
      },
      "sources": [
        {
          "title": "Streak for the Cash",
          "url": "https://www.streakforthecash.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "gamersaloon",
      "name": "GamerSaloon 1-Rounders",
      "short": "Free single-round esports brackets (Madden, EA FC, NBA 2K) paying $10 as bonus cash.",
      "type": "skill",
      "status": "live",
      "freePath": "partial",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.gamersaloon.com/promos/1rounder/",
      "rulesUrl": "https://www.gamersaloon.com/promos/1rounder/",
      "prizeUsd": "$10 cash per bracket",
      "prizeNote": "Free entry; the $10 is paid as bonus cash usable for further entries (winnable via more play).",
      "minCashout": "Bonus cash, not direct withdrawal",
      "payoutMethods": [
        "Bonus cash"
      ],
      "eligibility": "18+, free GamerSaloon account.",
      "restricted": "Bonus-cash prize, not a direct USD withdrawal.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free GamerSaloon account.",
          "Winner verification for withdrawals."
        ]
      },
      "sources": [
        {
          "title": "GamerSaloon 1-Rounders",
          "url": "https://www.gamersaloon.com/promos/1rounder/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "playerslounge",
      "name": "Players' Lounge Free Tournaments",
      "short": "Free Madden and EA FC tournaments with cash prizes.",
      "type": "skill",
      "status": "live",
      "freePath": "partial",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.playerslounge.com/madden",
      "rulesUrl": "https://www.playerslounge.com/madden",
      "prizeUsd": "Cash",
      "prizeNote": "Free tournaments pay cash; confirm the specific lobby and payout before entering.",
      "minCashout": "Confirm in-app",
      "payoutMethods": [
        "Operator payout"
      ],
      "eligibility": "18+, free Players' Lounge account.",
      "restricted": "See platform rules.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner verification for withdrawal."
        ]
      },
      "sources": [
        {
          "title": "Players' Lounge",
          "url": "https://www.playerslounge.com/madden",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "officepoolstop",
      "name": "OfficePoolStop",
      "short": "Free platform to run pick'em, survivor, confidence, squares, and bookie pools.",
      "type": "pools",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://officepoolstop.com/",
      "rulesUrl": "https://officepoolstop.com/",
      "prizeUsd": "Prizes decided by your group",
      "prizeNote": "Platform is free; the prize pool is funded by your group, not the site.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account (commissioner).",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account to run a pool."
        ]
      },
      "sources": [
        {
          "title": "OfficePoolStop",
          "url": "https://officepoolstop.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "funofficepools",
      "name": "FunOfficePools",
      "short": "Free pick'em, survivor, and squares pools for offices since 2007.",
      "type": "pools",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.funofficepools.com/",
      "rulesUrl": "https://www.funofficepools.com/",
      "prizeUsd": "Prizes decided by your group",
      "prizeNote": "Free platform. Group-funded prizes.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account to run a pool."
        ]
      },
      "sources": [
        {
          "title": "FunOfficePools",
          "url": "https://www.funofficepools.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "mysurvivorpool",
      "name": "MySurvivorPool",
      "short": "Free survivor and football squares hosting.",
      "type": "pools",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://mysurvivorpool.com/",
      "rulesUrl": "https://mysurvivorpool.com/",
      "prizeUsd": "Prizes decided by your group",
      "prizeNote": "Free (preseason). Group-funded prizes.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account to run a pool."
        ]
      },
      "sources": [
        {
          "title": "MySurvivorPool",
          "url": "https://mysurvivorpool.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "gridirongames",
      "name": "Gridiron Games",
      "short": "Survivor pools for offices. Free for players.",
      "type": "pools",
      "status": "live",
      "freePath": "partial",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://gridirongames.com/football-pools/nfl-survivor/",
      "rulesUrl": "https://gridirongames.com/football-pools/nfl-survivor/",
      "prizeUsd": "Prizes decided by your group — commissioner pays a hosting fee",
      "prizeNote": "Gridiron Games uses pay-as-you-go pricing: the commissioner buys entries and the hosting fee covers the season. Players join free once the commissioner has paid. Previously listed here as fully free, which was wrong.",
      "minCashout": "n/a — group prize; platform charges the commissioner",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account."
        ]
      },
      "sources": [
        {
          "title": "Gridiron Games",
          "url": "https://gridirongames.com/football-pools/nfl-survivor/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "squarespool",
      "name": "SquaresPool.com",
      "short": "Free Super Bowl and any-game football squares hosting.",
      "type": "pools",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "http://www.squarespool.com/",
      "rulesUrl": "http://www.squarespool.com/",
      "prizeUsd": "Prizes decided by your group",
      "prizeNote": "Free platform. Group-funded prizes.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account."
        ]
      },
      "sources": [
        {
          "title": "SquaresPool",
          "url": "http://www.squarespool.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "myfantasyleague",
      "name": "MyFantasyLeague",
      "short": "Custom fantasy league hosting. Free trial through Week 4.",
      "type": "pools",
      "status": "live",
      "freePath": "partial",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://home.myfantasyleague.com/",
      "rulesUrl": "https://home.myfantasyleague.com/",
      "prizeUsd": "Prizes decided by your league",
      "prizeNote": "League hosting is paid: Custom $109.95, Deluxe $219.90, Chop $44.95 for the 2026 season. Free trial runs through preseason and must be purchased before week 4. Free Draft Only leagues and mock drafts are available. Any prize pot is funded by your league.",
      "minCashout": "n/a — league prize",
      "payoutMethods": [
        "League-determined"
      ],
      "eligibility": "Free account.",
      "restricted": "Paid after the free trial.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account."
        ]
      },
      "sources": [
        {
          "title": "MyFantasyLeague",
          "url": "https://home.myfantasyleague.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "trofeo",
      "name": "Trofeo.live",
      "short": "Free NFL confidence and pick'em pools. Players do not even need an account.",
      "type": "pools",
      "status": "live",
      "freePath": "full",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://trofeo.live/nfl-confidence-pool",
      "rulesUrl": "https://trofeo.live/nfl-confidence-pool",
      "prizeUsd": "Pools with friends",
      "prizeNote": "Free to use. Group-decided prizes.",
      "minCashout": "n/a — group prize",
      "payoutMethods": [
        "Group-determined"
      ],
      "eligibility": "No account required for players.",
      "restricted": "See site terms.",
      "verification": {
        "level": "account",
        "steps": [
          "No account required to join a pool."
        ]
      },
      "sources": [
        {
          "title": "Trofeo.live",
          "url": "https://trofeo.live/nfl-confidence-pool",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "mlb-beat-the-streak",
      "name": "MLB Beat the Streak",
      "type": "sports",
      "status": "live",
      "freePath": "full",
      "short": "Official MLB game. Pick one hitter a day; a 57-game streak pays $5.6 million.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://www.mlb.com/apps/beat-the-streak",
      "rulesUrl": "https://www.mlb.com/apps/beat-the-streak/official-rules",
      "iosUrl": "https://apps.apple.com/us/app/mlb/id493619333",
      "prizeUsd": "$5,600,000 headline (≈$3,000,000 lump sum); $10,000 Top Streak prize",
      "prizeNote": "Official rules: the $5,600,000 Grand Prize is awarded only if an entrant reaches a 57-game streak. Read the payout terms — it is a 30-year annuity of $186,667/yr, or a lump sum of the present value, which MLB states equals about $3,000,000 as of 12 Mar 2026. If nobody reaches 57, the longest streak of at least 20 games wins $10,000. If nobody reaches 20, no prize is awarded at all. No purchase necessary. Sponsored by BetMGM, but you play with a free MLB.com account — no bookmaker account is involved.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "30-year annuity of $186,667/yr, or ~$3,000,000 lump sum",
        "Check for the $10,000 Top Streak prize"
      ],
      "eligibility": "US (incl. territories) and Canada excluding Quebec, 21+, registered MLB.com user.",
      "restricted": "Void in Quebec and where prohibited. Binding arbitration and class-action waiver apply. MLB/Genius Sports employees ineligible.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner identity and eligibility verified before payout."
        ]
      },
      "sources": [
        {
          "title": "Beat the Streak 2026 Official Rules (MLB)",
          "url": "https://www.mlb.com/apps/beat-the-streak/official-rules",
          "tier": "official"
        },
        {
          "title": "Beat the Streak hub — abbreviated rules and payout terms (MLB)",
          "url": "https://www.mlb.com/apps/beat-the-streak",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "metaculus",
      "name": "Metaculus Tournaments",
      "type": "forecasting",
      "status": "live",
      "freePath": "full",
      "short": "Free forecasting tournaments with sponsor-funded cash prizes. Not a prediction market — nothing is staked.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.metaculus.com/tournaments/",
      "rulesUrl": "https://www.metaculus.com/help/scores-faq/",
      "prizeUsd": "Per tournament — $3,000 to $50,000 prize pools",
      "prizeNote": "Live pools verified on the tournaments page: Summer 2026 FutureEval Bot $50,000; Labor Automation $35,000; Forecasting Our World in Data $20,000; POTUS Predictions $15,000; US Midterms 2026, ACX 2026 and U.S. Democracy Threat Index $10,000 each; Market Pulse 26Q3 $7,500; Metaculus Cup Summer 2026 $5,000. Several tournaments carry no prize pool — check each one. Prizes are funded by sponsoring organisations, not by Metaculus.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Bank transfer / PayPal on tournament payout"
      ],
      "eligibility": "Free account, worldwide. No deposit, no KYC to participate.",
      "restricted": "Prize eligibility and payment method vary by sponsoring organisation. Scoring uses proper scoring rules — read the scores FAQ.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner identity and eligibility verified before payout."
        ]
      },
      "sources": [
        {
          "title": "Metaculus Tournaments (official)",
          "url": "https://www.metaculus.com/tournaments/",
          "tier": "official"
        },
        {
          "title": "Metaculus scores & prize distribution FAQ",
          "url": "https://www.metaculus.com/help/scores-faq/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "aicrowd",
      "name": "AIcrowd Challenges",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Open ML challenge platform hosting research contests for ARC, Sony, Meta and Amazon.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.aicrowd.com/challenges",
      "prizeUsd": "Per challenge — currently up to $150,000+",
      "prizeNote": "The ARC White-Box Estimation Challenge 2026, run with the Alignment Research Center, states a $150,000+ prize pool on its own page (Phase 1 complete, Phase 2 upcoming; 751 participants). Past pools: Meta CRAG $33,000, Sony dialogue $20,000, Global Chess Challenge $17,000. Note: ML Contests lists the same ARC challenge at $100,000 — the operator page is the figure used here.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Bank transfer after winner verification"
      ],
      "eligibility": "Free account, worldwide unless a specific challenge restricts entry.",
      "restricted": "Per-challenge rules govern licensing and open-sourcing. AIcrowd’s public tag index carries a large amount of SEO spam — ignore it and use the challenge listings.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free account.",
          "Winners complete tax paperwork (W-9 / W-8BEN) before payment.",
          "Prizes paid by bank transfer or PayPal."
        ]
      },
      "sources": [
        {
          "title": "AIcrowd Challenges (official)",
          "url": "https://www.aicrowd.com/challenges",
          "tier": "official"
        },
        {
          "title": "ARC White-Box Estimation Challenge 2026 — $150,000+ pool",
          "url": "https://www.aicrowd.com/challenges/arc-white-box-estimation-challenge-2026",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "zindi",
      "name": "Zindi",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Africa-focused data science competition platform. Free entry, cash prizes paid by bank transfer or PayPal.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://zindi.world/competitions",
      "rulesUrl": "https://zindi.world/rules",
      "prizeUsd": "Per challenge — typically $1,500 to $25,000",
      "prizeNote": "Live examples: R.O.A.D. Barbados Historic Handwriting Challenge $25,000; Wishlist Marine Vision Challenge $1,500. ML Contests recorded 28 Zindi competitions and $226,000 in prizes across 2025. Zindi covers international transfer fees on prizes under $500; above that the fee is deducted.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Bank transfer",
        "PayPal",
        "International money transfer"
      ],
      "eligibility": "Free account, open worldwide. Teams of up to four.",
      "restricted": "Top three must provide ID, proof of residence and bank confirmation. Cheating carries a six-month ban on first offence, permanent on second. Note zindi.africa now redirects to zindi.world.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free account.",
          "Winners complete tax paperwork (W-9 / W-8BEN) before payment.",
          "Prizes paid by bank transfer or PayPal."
        ]
      },
      "sources": [
        {
          "title": "Zindi Challenges (official)",
          "url": "https://zindi.world/competitions",
          "tier": "official"
        },
        {
          "title": "Zindi competition rules (official)",
          "url": "https://zindi.world/rules",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "codabench",
      "name": "Codabench / CodaLab",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Open-source academic benchmark platform. 1,471 public competitions, free to enter and to host.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://www.codabench.org/",
      "prizeUsd": "Per benchmark — many are unpaid; ML Contests logged $248,000 across 2025",
      "prizeNote": "Operator page reports 1,471 public competitions, 77,084 users and 692,319 submissions. Most benchmarks are academic and carry no cash prize; sponsored ones do. Live examples routed through Codabench: AIMO Interpretability $10,000, RealPDE $21,000, Fair Universe weak lensing $4,000. Run by LISN / Université Paris-Saclay, originally a Microsoft–Stanford project.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Paid by the sponsoring organiser, not the platform"
      ],
      "eligibility": "Free account, worldwide.",
      "restricted": "Default public compute queue caps execution at 20 minutes. Prize terms are set by each benchmark organiser.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Prize terms and any tax paperwork are handled by the individual benchmark organiser."
        ]
      },
      "sources": [
        {
          "title": "Codabench (official)",
          "url": "https://www.codabench.org/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "grand-challenge",
      "name": "Grand Challenge (medical imaging)",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Medical image analysis challenges from MICCAI, RSNA and university hospitals. 264 hosted to date.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://grand-challenge.org/challenges/",
      "prizeUsd": "Per challenge — commonly $2,000 to $10,000",
      "prizeNote": "264 challenges listed; live 2026 events accepting submissions include TopAneu 2026, ISLES 2026, Surgical Visual Understanding 2026 and Airway Tree Modeling 26. Verified prize examples: RARE26 endoscopy $2,200, autoPET-V $6,600. Many challenges are prestige-only with no cash.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Paid by the challenge organiser"
      ],
      "eligibility": "Free account, worldwide. Algorithm-submission format — you submit a container, not predictions.",
      "restricted": "Most challenges require a paper or open-source release. Clinical data licences apply per challenge.",
      "verification": {
        "level": "account",
        "steps": [
          "Free account.",
          "Prize and authorship terms set by each challenge organiser."
        ]
      },
      "sources": [
        {
          "title": "Grand Challenge — challenge index (official)",
          "url": "https://grand-challenge.org/challenges/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "crunchdao",
      "name": "CrunchDAO / ADIA Lab Challenges",
      "type": "tech",
      "status": "live",
      "freePath": "full",
      "short": "Quantitative ML competitions run with ADIA Lab. Free entry, notebook submissions.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://hub.crunchdao.com/competitions/structural-break-real-time",
      "prizeUsd": "Prize pool not stated on the competition overview — confirm before entering",
      "prizeNote": "The ADIA Lab Structural Break Challenge: Real-Time Edition is live — started 6 May 2026, closes 17 September 2026, final evaluation end of October, winners announced at the ADIA Lab Symposium 26–28 Oct 2026. ML Contests lists the pool at $100,000, but that figure does not appear on the competition overview page, so it is not stated here as fact. Check the competition’s own rules tab.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Paid by the sponsoring organisation"
      ],
      "eligibility": "Free account, worldwide.",
      "restricted": "Submissions run in the platform cloud against a private test set. CrunchDAO has a crypto-token history — confirm how any prize is denominated before relying on it.",
      "verification": {
        "level": "tax",
        "steps": [
          "Free account.",
          "Winners complete tax paperwork (W-9 / W-8BEN) before payment.",
          "Prizes paid by bank transfer or PayPal."
        ]
      },
      "sources": [
        {
          "title": "ADIA Lab Structural Break Challenge: Real-Time Edition (official)",
          "url": "https://hub.crunchdao.com/competitions/structural-break-real-time",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "mlcontests",
      "name": "ML Contests",
      "type": "directory",
      "status": "live",
      "freePath": "full",
      "short": "The best index of live machine-learning competitions, filterable by prize pool and platform.",
      "platforms": [
        "web"
      ],
      "signupUrl": "https://mlcontests.com/",
      "prizeUsd": "n/a — directory",
      "prizeNote": "Aggregates live competitions across Kaggle, AIcrowd, DrivenData, Zindi, Codabench, CrunchDAO, Hugging Face, Tianchi, EvalAI and others, with prize pool and deadline on each. Showed 34 active competitions at review. Also publishes an annual State of ML Competitions report with per-platform prize totals.",
      "minCashout": "n/a — directory",
      "payoutMethods": [
        "n/a"
      ],
      "eligibility": "Free to browse, no account needed. Optional mailing list.",
      "restricted": "A directory, not an operator — always open the underlying competition’s own rules before entering.",
      "verification": {
        "level": "account",
        "steps": [
          "No account required to browse."
        ]
      },
      "sources": [
        {
          "title": "ML Contests (official)",
          "url": "https://mlcontests.com/",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-tourney-challenge",
      "name": "ESPN Men’s Tournament Challenge",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "ESPN’s March Madness bracket game. Free, up to 25 brackets, $125,000 in prizes.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/bracket",
      "rulesUrl": "https://fantasy.espn.com/games/tournament-challenge-bracket-2026/howtoplay#CompleteRules",
      "prizeUsd": "$125,000 (men’s bracket)",
      "prizeNote": "Ran 19 Mar – 6 Apr 2026; the page now reads \"Thank you for playing!\". Returns for March 2027. ESPN runs four bracket games — Men’s, Women’s, and a Second Chance edition of each — with more than $370,000 in prizes across all four per ESPN’s own app listing.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout after verification"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited. Up to 25 brackets per entrant.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner identity and eligibility verified before payout."
        ]
      },
      "sources": [
        {
          "title": "ESPN Men’s Tournament Challenge (official)",
          "url": "https://fantasy.espn.com/games/bracket",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    },
    {
      "id": "espn-tc-eliminator",
      "name": "ESPN Tournament Challenge Eliminator",
      "type": "sports",
      "status": "ended",
      "freePath": "full",
      "short": "March Madness survivor game — pick one team a day, never repeat. $10,000 grand prize.",
      "platforms": [
        "web",
        "ios"
      ],
      "signupUrl": "https://fantasy.espn.com/games/mens-tournament-challenge-eliminator-2026/howtoplay",
      "rulesUrl": "https://fantasy.espn.com/games/mens-tournament-challenge-eliminator-2026/howtoplay#CompleteRules",
      "prizeUsd": "$10,000 grand prize",
      "prizeNote": "Ran 19 Mar – 6 Apr 2026; page now reads \"Congrats to everyone who survived the entire tournament!\". Free, up to 25 entries. Returns for March 2027.",
      "minCashout": "Winner claim only",
      "payoutMethods": [
        "Operator payout after verification"
      ],
      "eligibility": "US, 18+, free ESPN account.",
      "restricted": "Void where prohibited. Each team may be used only once.",
      "verification": {
        "level": "eligibility",
        "steps": [
          "Free account.",
          "Winner identity and eligibility verified before payout."
        ]
      },
      "sources": [
        {
          "title": "ESPN Tournament Challenge Eliminator (official)",
          "url": "https://fantasy.espn.com/games/mens-tournament-challenge-eliminator-2026/howtoplay",
          "tier": "official"
        }
      ],
      "lastChecked": "2026-08-19"
    }
  ],
  "removedThisPass": [
    {
      "id": "pch",
      "name": "Publishers Clearing House",
      "why": "sweepstakes category removed"
    },
    {
      "id": "lucktastic",
      "name": "Lucktastic",
      "why": "sweepstakes category removed"
    },
    {
      "id": "high5",
      "name": "High 5 Casino",
      "why": "sweepstakes category removed"
    },
    {
      "id": "pulsz",
      "name": "Pulsz",
      "why": "sweepstakes category removed"
    },
    {
      "id": "chumba",
      "name": "Chumba Casino",
      "why": "sweepstakes category removed"
    },
    {
      "id": "luckyland",
      "name": "LuckyLand Slots",
      "why": "sweepstakes category removed"
    },
    {
      "id": "crowncoins",
      "name": "Crown Coins Casino",
      "why": "sweepstakes category removed"
    },
    {
      "id": "stakeus",
      "name": "Stake.us",
      "why": "sweepstakes category removed"
    },
    {
      "id": "fliff",
      "name": "Fliff",
      "why": "sweepstakes/AMOE model removed"
    },
    {
      "id": "online-sweepstakes",
      "name": "Online-Sweepstakes.com",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "reddit-sweeps",
      "name": "r/sweepstakes & r/Sweepstake",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "aarp",
      "name": "AARP Sweepstakes",
      "why": "sweepstakes category removed"
    },
    {
      "id": "hgtv",
      "name": "HGTV / Food Network Giveaways",
      "why": "sweepstakes category removed"
    },
    {
      "id": "iheart",
      "name": "iHeartRadio Contests",
      "why": "sweepstakes category removed"
    },
    {
      "id": "meredith",
      "name": "People / BHG / Meredith magazine sweeps",
      "why": "sweepstakes category removed"
    },
    {
      "id": "mcluck",
      "name": "McLuck",
      "why": "sweepstakes category removed"
    },
    {
      "id": "wowvegas",
      "name": "WOW Vegas",
      "why": "sweepstakes category removed"
    },
    {
      "id": "realprize",
      "name": "RealPrize",
      "why": "sweepstakes category removed"
    },
    {
      "id": "sweeps-fanatics",
      "name": "Sweepstakes Fanatics",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "contest-girl",
      "name": "Contest Girl",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "ultracontest",
      "name": "UltraContest",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "sweepsadvantage",
      "name": "Sweepstakes Advantage",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "freebieshark",
      "name": "FreebieShark",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "sweepwidget",
      "name": "SweepWidget Giveaways",
      "why": "sweepstakes directory removed"
    },
    {
      "id": "solitaire-smash",
      "name": "Solitaire Smash",
      "why": "DEAD: App Store ID 6444781403 does not render a listing; unverifiable"
    },
    {
      "id": "bingo-billions",
      "name": "Bingo Billions",
      "why": "DEAD: App Store ID 6446250848 returns \"page cannot be found\"; sole source unreachable"
    },
    {
      "id": "luckyday",
      "name": "Lucky Day",
      "why": "sweepstakes category removed"
    },
    {
      "id": "hqtrivia",
      "name": "HQ Trivia",
      "why": "DEAD: Service dissolved February 2020"
    },
    {
      "id": "usatoday-survivor",
      "name": "USA TODAY Pro Football Survivor",
      "why": "DEAD: usatoday.com/sports/contests/survivor-pool redirects to the USA TODAY homepage"
    },
    {
      "id": "football-nation",
      "name": "Football Nation USA Weekly Pick'Em",
      "why": "DEAD: footballnationusa.com/pickems contains no pick’em and no prize"
    },
    {
      "id": "draftkings",
      "name": "DraftKings Fantasy",
      "why": "Casino product — iOS listing is \"DraftKings Sportsbook & Casino\""
    },
    {
      "id": "fanduel",
      "name": "FanDuel Fantasy",
      "why": "Casino product — iOS listing is \"FanDuel Sportsbook & Casino\""
    },
    {
      "id": "backspin",
      "name": "Backspin Games",
      "why": "Casino product — listed in the App Store Casino category (chart #35 Casino), 18+, slots/bingo suite"
    },
    {
      "id": "verse-gaming",
      "name": "Verse Gaming",
      "why": "Sweepstakes model — operator FAQ states \"VerseCash is a promotional sweepstakes currency\" and contests are sweepstakes-style ($50 min redemption after 1x playthrough)"
    },
    {
      "id": "lockmypicks",
      "name": "LockMyPicks",
      "why": "No cash path — site states \"No fees · No paywalls\" and prizes are coins/cosmetics only. Also sells $1–$5 cosmetic packs and currently exposes admin controls (password reset, streak recalculation) on its public homepage."
    },
    {
      "id": "prizepicks-jackpot",
      "name": "PrizePicks Free NFL Jackpot",
      "why": "Real-money DFS operator — free jackpot is an acquisition funnel"
    },
    {
      "id": "fanduel-shuffle",
      "name": "FanDuel Daily Shuffle",
      "why": "Requires a FanDuel Sportsbook account; prize is Bonus Bets, not cash"
    },
    {
      "id": "betmgm-survivor",
      "name": "BetMGM Football Survivor",
      "why": "Requires a BetMGM account (bookmaker and casino operator)"
    },
    {
      "id": "dk-f2p",
      "name": "DraftKings Free-to-Play contests",
      "why": "Requires a DraftKings account (Sportsbook & Casino)"
    },
    {
      "id": "sky-super6",
      "name": "Sky Bet Super 6",
      "why": "Requires a Sky Bet account (licensed bookmaker operating Sky Vegas / Sky Casino)"
    },
    {
      "id": "bet365-6scores",
      "name": "bet365 6 Scores Challenge",
      "why": "Requires a bet365 account (licensed bookmaker and casino operator)"
    },
    {
      "id": "betmgm-goldengoals",
      "name": "BetMGM Golden Goals",
      "why": "Requires a BetMGM UK account (LeoVegas Gaming plc — bookmaker and casino operator)"
    },
    {
      "id": "paddypower-drop",
      "name": "Paddy Power Beat The Drop",
      "why": "Requires a Paddy Power account (Flutter — bookmaker and casino operator)"
    },
    {
      "id": "dabble",
      "name": "Dabble Fantasy",
      "why": "Real-money DFS operator — $10 no-deposit credit is an acquisition funnel"
    },
    {
      "id": "parlayplay",
      "name": "ParlayPlay",
      "why": "Real-money DFS operator — $5 free entry is an acquisition funnel"
    }
  ],
  "addedThisPassG": [
    "mlb-beat-the-streak",
    "metaculus",
    "aicrowd",
    "zindi",
    "codabench",
    "grand-challenge",
    "crunchdao",
    "mlcontests",
    "espn-tourney-challenge",
    "espn-tc-eliminator"
  ]
};
