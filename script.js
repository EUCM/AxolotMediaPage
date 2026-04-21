const mixYourOwn = {
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
    },
    {
      name: "Growth & Acquisition",
      options: [
        { id: "ga1", label: "Artist Hub! (Web portafolio)", priceMin: 500, priceMax: 1200, isMonthly: false },
        { id: "ga2", label: "Active Dealer Representation", priceMin: 150, priceMax: 300, isMonthly: true },
        { id: "ga3", label: "Launch Campaign", priceMin: 600, priceMax: 1500, isMonthly: false },
        { id: "ga4", label: "Brand & Pricing Audit", priceMin: 200, priceMax: 450, isMonthly: false }
      ]
    }
  ]
};

const selectedOptions = {};
let adBudget = 0;
const expandedCategories = {};

function updateTotals() {
  let monthlyMin = 0, monthlyMax = 0, oneTimeMin = 0, oneTimeMax = 0;
  mixYourOwn.categories.forEach(cat => {
    cat.options.forEach(opt => {
      if (selectedOptions[opt.id]) {
        if (opt.isMonthly) { monthlyMin += opt.priceMin; monthlyMax += opt.priceMax; }
        else               { oneTimeMin += opt.priceMin; oneTimeMax += opt.priceMax; }
      }
    });
  });
  const totalAdSpend = adBudget + adBudget * 0.2;
  monthlyMin += totalAdSpend; monthlyMax += totalAdSpend;

  document.getElementById('monthly-total').innerHTML =
    `$${monthlyMin.toLocaleString()} <span class="text-2xl text-on-surface/50">-</span> $${monthlyMax.toLocaleString()}`;
  document.getElementById('onetime-total').innerHTML =
    `$${oneTimeMin.toLocaleString()} <span class="text-xl text-on-surface/50">-</span> $${oneTimeMax.toLocaleString()}`;
}

function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;
  container.innerHTML = '';

  mixYourOwn.categories.forEach((category, idx) => {
    const isOpen = !!expandedCategories[idx];

    // Wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'bg-white sketch-border overflow-hidden';

    // Header button
    const btn = document.createElement('button');
    btn.className = 'w-full p-6 flex justify-between items-center bg-paper hover:bg-primary/5 transition-colors text-left';
    btn.innerHTML = `
      <h3 class="text-2xl font-black font-headline">${category.name}</h3>
      <i data-lucide="chevron-down" class="transition-transform duration-300" style="width:24px;height:24px;${isOpen ? 'transform:rotate(180deg)' : ''}"></i>
    `;
    btn.addEventListener('click', () => {
      expandedCategories[idx] = !expandedCategories[idx];
      renderCategories();
    });

    // Content panel
    const content = document.createElement('div');
    content.style.cssText = isOpen
      ? 'overflow:hidden;'
      : 'overflow:hidden;height:0;';
    content.className = 'border-t-2 border-on-surface/10';

    const inner = document.createElement('div');
    inner.className = 'p-6 bg-white space-y-4';

    category.options.forEach(opt => {
      const isChecked = !!selectedOptions[opt.id];

      const label = document.createElement('label');
      label.className = `flex items-start gap-4 p-4 cursor-pointer sketch-border transition-colors ${isChecked ? 'bg-primary/10' : 'bg-background hover:bg-on-surface/5'}`;
      if (isChecked) label.style.borderColor = '#00d084';

      // Badge colour
      const badgeBg = opt.isMonthly ? 'background:#bfefff;color:#0369a1;' : 'background:#ccfaf4;color:#0d9488;';
      const badgeIcon = opt.isMonthly ? 'calendar' : 'zap';
      const badgeText = opt.isMonthly ? 'Monthly' : 'One-time';

      label.innerHTML = `
        <div class="mt-1 w-6 h-6 shrink-0 rounded border-2 flex items-center justify-center"
             style="${isChecked ? 'background:#00d084;border-color:#00d084;color:white;' : 'border-color:#0f172a;background:white;'}">
          ${isChecked ? '<i data-lucide="check" style="width:14px;height:14px;stroke-width:4;"></i>' : ''}
        </div>
        <div class="flex-grow flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <span class="font-bold leading-tight">${opt.label}</span>
          <div class="flex items-center gap-2 shrink-0">
            <span class="text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1" style="${badgeBg}">
              <i data-lucide="${badgeIcon}" style="width:12px;height:12px;"></i>
              ${badgeText}
            </span>
            <span class="font-sketch text-on-surface/80 text-lg whitespace-nowrap">
              $${opt.priceMin} - $${opt.priceMax}
            </span>
          </div>
        </div>
      `;

      label.addEventListener('click', () => {
        selectedOptions[opt.id] = !selectedOptions[opt.id];
        renderCategories();
        updateTotals();
      });

      inner.appendChild(label);
    });

    content.appendChild(inner);
    wrapper.appendChild(btn);
    wrapper.appendChild(content);
    container.appendChild(wrapper);
  });

  // Re-init lucide icons for dynamically inserted elements
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  updateTotals();

  const budgetInput = document.getElementById('ad-budget-input');
  if (budgetInput) {
    budgetInput.addEventListener('input', e => {
      adBudget = parseFloat(e.target.value) || 0;
      updateTotals();
    });
  }
});
