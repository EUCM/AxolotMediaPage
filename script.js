const mixYourOwn = {
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
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const categoriesContainer = document.getElementById('categories-container');
  if (!categoriesContainer) return;

  let selectedOptions = {};
  let adBudget = 0;

  function renderCategories() {
    categoriesContainer.innerHTML = '';
    
    mixYourOwn.categories.forEach((category, idx) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'bg-white sketch-border overflow-hidden';
      
      const headerBtn = document.createElement('button');
      headerBtn.className = 'w-full p-6 flex justify-between items-center bg-paper hover:bg-primary/5 transition-colors text-left';
      headerBtn.innerHTML = `
        <h3 class="text-2xl font-black font-headline">${category.name}</h3>
        <span class="material-symbols-outlined transition-transform duration-300" id="icon-${idx}">expand_more</span>
      `;

      const contentDiv = document.createElement('div');
      contentDiv.className = 'p-6 border-t-2 border-on-surface/10 bg-white space-y-4 hidden';
      contentDiv.id = `content-${idx}`;

      category.options.forEach(opt => {
        const isSelected = !!selectedOptions[opt.id];
        
        const label = document.createElement('label');
        label.className = `flex items-start gap-4 p-4 cursor-pointer sketch-border transition-colors ${isSelected ? 'bg-primary/10 border-primary' : 'bg-background hover:bg-on-surface/5'}`;
        
        label.innerHTML = `
          <div class="mt-1 w-6 h-6 shrink-0 rounded border-2 flex items-center justify-center ${isSelected ? 'bg-primary border-primary text-white' : 'border-on-surface bg-[--color-surface]'}">
            <input type="checkbox" class="hidden" value="${opt.id}" ${isSelected ? 'checked' : ''}>
            ${isSelected ? '<span class="material-symbols-outlined shrink-0" style="font-size: 16px; font-weight: bold;">check</span>' : ''}
          </div>
          <div class="flex-grow flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <span class="font-bold leading-tight">${opt.label}</span>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${opt.isMonthly ? 'bg-secondary/20 text-secondary' : 'bg-tertiary/20 text-tertiary'}">
                <span class="material-symbols-outlined shrink-0" style="font-size: 12px;">${opt.isMonthly ? 'calendar_month' : 'bolt'}</span>
                ${opt.isMonthly ? 'Monthly' : 'One-time'}
              </span>
              <span class="font-sketch text-on-surface/80 text-lg whitespace-nowrap">
                $${opt.priceMin} - $${opt.priceMax}
              </span>
            </div>
          </div>
        `;

        label.querySelector('input').addEventListener('change', (e) => {
          selectedOptions[opt.id] = e.target.checked;
          renderCategories();
          updateTotals();
        });

        contentDiv.appendChild(label);
      });

      headerBtn.addEventListener('click', () => {
        const isHidden = contentDiv.classList.contains('hidden');
        if (isHidden) {
          contentDiv.classList.remove('hidden');
          headerBtn.querySelector('span').style.transform = 'rotate(180deg)';
        } else {
          contentDiv.classList.add('hidden');
          headerBtn.querySelector('span').style.transform = 'rotate(0deg)';
        }
      });

      categoryDiv.appendChild(headerBtn);
      categoryDiv.appendChild(contentDiv);
      categoriesContainer.appendChild(categoryDiv);
    });
  }

  function updateTotals() {
    let monthlyMin = 0;
    let monthlyMax = 0;
    let oneTimeMin = 0;
    let oneTimeMax = 0;

    mixYourOwn.categories.forEach(cat => {
      cat.options.forEach(opt => {
        if (selectedOptions[opt.id]) {
          if (opt.isMonthly) {
            monthlyMin += opt.priceMin;
            monthlyMax += opt.priceMax;
          } else {
            oneTimeMin += opt.priceMin;
            oneTimeMax += opt.priceMax;
          }
        }
      });
    });

    const totalAdSpend = adBudget + (adBudget * 0.20);
    monthlyMin += totalAdSpend;
    monthlyMax += totalAdSpend;

    document.getElementById('monthly-total').innerHTML = `$${monthlyMin.toLocaleString()} <span class="text-2xl text-on-surface/50">-</span> $${monthlyMax.toLocaleString()}`;
    document.getElementById('onetime-total').innerHTML = `$${oneTimeMin.toLocaleString()} <span class="text-xl text-on-surface/50">-</span> $${oneTimeMax.toLocaleString()}`;
  }

  const adBudgetInput = document.getElementById('ad-budget-input');
  if (adBudgetInput) {
    adBudgetInput.addEventListener('input', (e) => {
      adBudget = parseFloat(e.target.value) || 0;
      updateTotals();
    });
  }

  renderCategories();
  updateTotals();
});
