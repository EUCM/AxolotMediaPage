export const siteContent = {
  nav: {
    logoText: "Axolotl Media",
    links: [
      { label: "How we help", href: "/#how" },
      { label: "Build Your Setup", href: "/#mix-your-own" },
      { label: "Say Hi!", href: "/contact" }
    ],
    cta: "Let's Grow"
  },
  hero: {
    title: "Let's Make Your",
    titleHighlight: "Passion",
    titleEnd: "Your Livelihood.",
    subtitle: "From furries, for furries, to furries. We'll help you turn your passion into a business or make your business more successful. Whether you make fursuits, are an influencer, create art, or sell any kind of product, you put in a lot of hours and you deserve more money. We handle everything so you can keep doing what you love.",
    primaryButton: "Build Your Setup",
    secondaryButton: "Let's chat",
    badgeTitle: "100% HUMAN-POWERED",
    badgeSubtitle: "Strictly No AI. Ever."
  },
  howWeHelp: {
    title: "We know the",
    titleHighlight: "hustle",
    subtitle: "We know how difficult it is. Building a brand, finding clients, managing them, and above all, making money is a huge undertaking, especially in this oversaturated niche. Driven 100% by our love of money, we'll handle all the marketing and give you the freedom to focus solely on what you love... because let's be frank, no artist likes dealing with clients.",
    cards: [
      {
        title: "Fursuit creators and artist",
        description: "Buried in foam and DMs? We'll handle your queue, filter out the window-shoppers, and manage your inbox so you only talk to clients with cash in hand.",
        cta: "Manage clients"
      },
      {
        title: "Furry Content Creators",
        description: "Trying to beat the algorithm? We'll edit your stream clips, scripts, thumbnails, and even create your Discord server for you.",
        cta: "Grow your platform"
      },
      {
        title: "Furry Indie Brands",
        description: "Ready to launch that merch line or Patreon? We help you set up your Patreon and your shop, and we'll promote your products so you can keep creating.",
        cta: "Increase your earnings"
      }
    ]
  },
  mixYourOwn: {
    title: "Create your setup",
    subtitle: "Pick exactly what you need to get your business off the ground. We focus heavily on monthly plans, but we also have one-time services.",
    categories: [
      {
        name: "Artist and fursuits.",
        options: [
          { id: "fs1", label: "Premium Client Gatekeeping & Vetting (We filter out window-shoppers; you only talk to ready buyers)", priceMin: 150, priceMax: 400, isMonthly: true },
          { id: "fs2", label: "Client Communication & Invoice Management", priceMin: 200, priceMax: 800, isMonthly: true },
          { id: "fs3", label: "Monthly Material Sourcing & Restock Management", priceMin: 100, priceMax: 300, isMonthly: true },
          { id: "fs4", label: "Shipping Label & Customs Form Generation", priceMin: 50, priceMax: 250, isMonthly: true },
          { id: "fs5", label: "WIP Photo Scheduling & Posting", priceMin: 50, priceMax: 200, isMonthly: true },
          { id: "fs6", label: "Trello/Notion Queue Setup & Automation", priceMin: 100, priceMax: 350, isMonthly: false },
          { id: "fs7", label: "Auction Setup (TheDealersDen/Twitter) & Management", priceMin: 100, priceMax: 300, isMonthly: false }
        ]
      },
      {
        name: "Community & DMs",
        options: [
          { id: "cm1", label: "Active DM Moderation & Ticket Handling", priceMin: 200, priceMax: 600, isMonthly: true },
          { id: "cm2", label: "Monthly Community Event Hosting (Game nights, VRChat meetups)", priceMin: 150, priceMax: 400, isMonthly: true },
          { id: "cm3", label: "Monthly Patreon Reward Fulfillment (Digital)", priceMin: 100, priceMax: 400, isMonthly: true },
          { id: "cm4", label: "Community Platform From-Scratch Setup (Channels, Roles, Perms)", priceMin: 150, priceMax: 500, isMonthly: false },
          { id: "cm5", label: "Patreon/Ko-fi Tier Restructuring & Setup", priceMin: 100, priceMax: 300, isMonthly: false }
        ]
      },
      {
        name: "Social Media & Growth",
        options: [
          { id: "sm1", label: "Omnichannel Social Media Syndication (Daily)", priceMin: 200, priceMax: 600, isMonthly: true },
          { id: "sm2", label: "Short-form Video Editing (TikTok/Reels) & Posting", priceMin: 300, priceMax: 800, isMonthly: true },
          { id: "sm3", label: "VTuber/Stream VOD Clipping & Highlight Management", priceMin: 250, priceMax: 700, isMonthly: true },
          { id: "sm4", label: "Copywriting & Thread Generation", priceMin: 100, priceMax: 300, isMonthly: true },
          { id: "sm5", label: "Basic DM Filtering & Triage", priceMin: 50, priceMax: 150, isMonthly: true }
        ]
      },
      {
        name: "Custom Art & Brand Assets",
        options: [
          { id: "art1", label: "Telegram Sticker Packs (Custom Art)", priceMin: 150, priceMax: 500, isMonthly: false },
          { id: "art2", label: "Promotional Illustration & Banner Art (For sales/Patreon)", priceMin: 200, priceMax: 800, isMonthly: false },
          { id: "art3", label: "Merch Design (Enamel Pins, Lanyards, Apparel)", priceMin: 100, priceMax: 400, isMonthly: false },
          { id: "art4", label: "VTuber Assets & Stream Overlay Design", priceMin: 150, priceMax: 600, isMonthly: false },
          { id: "art5", label: "Custom Emotes & Sub Badges (Twitch)", priceMin: 50, priceMax: 200, isMonthly: false },
          { id: "art6", label: "Logo & Brand Mascot Design", priceMin: 200, priceMax: 800, isMonthly: false }
        ]
      },
      {
        name: "Conventions & E-Commerce",
        options: [
          { id: "ev1", label: "Ongoing E-commerce Storefront Management & Updates", priceMin: 300, priceMax: 800, isMonthly: true },
          { id: "ev2", label: "Monthly Merch Inventory Tracking & Reordering", priceMin: 150, priceMax: 400, isMonthly: true },
          { id: "ev3", label: "Dealer's Den Booth Design & Banner Printing Prep", priceMin: 200, priceMax: 600, isMonthly: false },
          { id: "ev4", label: "Pre-convention Hype Campaign & Commission Openings", priceMin: 150, priceMax: 400, isMonthly: false },
          { id: "ev5", label: "Business Card, Badge & Sticker Design", priceMin: 100, priceMax: 350, isMonthly: false }
        ]
      }
    ],
    adBudgetLabel: "Ad Boost Budget (USD)",
    adBudgetDescription: "Want to run ads on Twitter, Instagram, or furry sites? Enter your monthly ad spend. We charge a flat 20% fee to manage them so you get the most bang for your buck. (If your budget is over $1,000, we can talk about a discount!)",
    summaryTitle: "Your Custom Setup",
    monthlyLabel: "Estimated Monthly",
    oneTimeLabel: "Estimated One-Time",
    cta: "Request This Setup",
    disclaimer: "These are estimated ranges. We will review your specific needs and give you a fair, exact quote before any commitment. If you need a service not listed here, let us know during our chat and we'll see if we can make it happen!",
    helpTitle: "Not sure what you need?",
    helpText: "Don't worry. Let's talk about your goals and we'll find out what's best for you :3",
    helpCta: "Get a Custom Recommendation"
  },
  contact: {
    title: "Ready to level",
    titleHighlight: "Up",
    subtitle: "We're real furs who want to see you succeed. Let's talk about your goals and how we can get your passion paying the bills.",
    cta: "Get in Touch"
  },
  footer: {
    copyright: "© 2026 Axolotl Media. We are serious, serious businessmen owo",
    badge: "Hand-made with 💚 and zero AI."
  }
};
