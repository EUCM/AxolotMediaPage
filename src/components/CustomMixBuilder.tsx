import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Check, Calendar, Zap, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteContent } from '../content';

export default function CustomMixBuilder() {
  const { mixYourOwn } = siteContent;
  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>({});
  const [adBudget, setAdBudget] = useState<string>("");
  const [expandedCategories, setExpandedCategories] = useState<Record<number, boolean>>({});

  const toggleOption = (id: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleCategory = (idx: number) => {
    setExpandedCategories(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const calculateTotals = () => {
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
    
    const budgetNum = parseFloat(adBudget) || 0;
    const totalAdSpend = budgetNum + (budgetNum * 0.20);
    monthlyMin += totalAdSpend;
    monthlyMax += totalAdSpend;
    
    return { monthlyMin, monthlyMax, oneTimeMin, oneTimeMax };
  };

  const totals = calculateTotals();

  return (
    <section className="py-24 px-6 relative" id="mix-your-own">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-6xl font-black mb-6">{mixYourOwn.title}</h2>
          <p className="text-xl md:text-2xl text-on-surface/80 max-w-3xl mx-auto leading-relaxed font-medium">
            {mixYourOwn.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            
            {/* Consultation Banner */}
            <div className="bg-white p-6 sketch-border flex flex-col sm:flex-row items-center justify-between gap-6 rotate-1 mb-8">
              <div>
                <h3 className="font-headline text-2xl font-black mb-2 flex items-center gap-2">
                  <MessageSquare className="text-tertiary" /> {mixYourOwn.helpTitle}
                </h3>
                <p className="font-medium text-on-surface/80">
                  {mixYourOwn.helpText}
                </p>
              </div>
              <Link to="/contact" className="sketch-button bg-tertiary text-white px-6 py-3 font-bold whitespace-nowrap hover:rotate-[-2deg] shrink-0">
                {mixYourOwn.helpCta}
              </Link>
            </div>

            {mixYourOwn.categories.map((category, idx) => (
              <div key={idx} className="bg-white sketch-border overflow-hidden">
                <button 
                  onClick={() => toggleCategory(idx)}
                  className="w-full p-6 flex justify-between items-center bg-paper hover:bg-primary/5 transition-colors text-left"
                >
                  <h3 className="text-2xl font-black font-headline">{category.name}</h3>
                  <motion.div
                    animate={{ rotate: expandedCategories[idx] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {expandedCategories[idx] && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="p-6 border-t-2 border-on-surface/10 bg-white space-y-4">
                        {category.options.map(opt => (
                          <label 
                            key={opt.id} 
                            className={`flex items-start gap-4 p-4 cursor-pointer sketch-border transition-colors ${selectedOptions[opt.id] ? 'bg-primary/10 border-primary' : 'bg-background hover:bg-on-surface/5'}`}
                          >
                            <div className={`mt-1 w-6 h-6 shrink-0 rounded border-2 flex items-center justify-center ${selectedOptions[opt.id] ? 'bg-primary border-primary text-white' : 'border-on-surface bg-white'}`}>
                              <input 
                                type="checkbox" 
                                className="hidden" 
                                checked={!!selectedOptions[opt.id]} 
                                onChange={() => toggleOption(opt.id)} 
                              />
                              {selectedOptions[opt.id] && <Check size={16} strokeWidth={4} />}
                            </div>
                            <div className="flex-grow flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                              <span className="font-bold leading-tight">{opt.label}</span>
                              <div className="flex items-center gap-2 shrink-0">
                                <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${opt.isMonthly ? 'bg-secondary/20 text-secondary-dark' : 'bg-tertiary/20 text-tertiary-dark'}`}>
                                  {opt.isMonthly ? <Calendar size={12} /> : <Zap size={12} />}
                                  {opt.isMonthly ? 'Monthly' : 'One-time'}
                                </span>
                                <span className="font-sketch text-on-surface/80 text-lg whitespace-nowrap">
                                  ${opt.priceMin} - ${opt.priceMax}
                                </span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="bg-paper p-8 sketch-border">
              <h3 className="text-2xl font-black font-headline mb-4">{mixYourOwn.adBudgetLabel}</h3>
              <p className="text-on-surface/70 mb-6">{mixYourOwn.adBudgetDescription}</p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-2xl text-on-surface/50">$</span>
                <input 
                  type="number" 
                  min="0"
                  placeholder="e.g. 500"
                  value={adBudget}
                  onChange={(e) => setAdBudget(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 text-2xl font-black sketch-border bg-white focus:outline-none focus:ring-4 focus:ring-primary/30"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white sketch-border p-8 sticky top-32 rotate-1">
              <h3 className="font-sketch text-4xl font-black mb-8 underline decoration-primary">{mixYourOwn.summaryTitle}</h3>
              
              <div className="space-y-8 mb-10">
                <div className="border-b-2 border-on-surface/10 pb-6">
                  <div className="flex items-center gap-2 mb-2 text-secondary">
                    <Calendar size={20} />
                    <span className="font-black text-lg">{mixYourOwn.monthlyLabel}</span>
                  </div>
                  <span className="font-sketch text-4xl md:text-5xl text-on-surface block">
                    ${totals.monthlyMin.toLocaleString()} <span className="text-2xl text-on-surface/50">-</span> ${totals.monthlyMax.toLocaleString()}
                  </span>
                </div>

                <div className="border-b-2 border-on-surface/10 pb-6">
                  <div className="flex items-center gap-2 mb-2 text-tertiary">
                    <Zap size={20} />
                    <span className="font-black text-lg">{mixYourOwn.oneTimeLabel}</span>
                  </div>
                  <span className="font-sketch text-3xl md:text-4xl text-on-surface block">
                    ${totals.oneTimeMin.toLocaleString()} <span className="text-xl text-on-surface/50">-</span> ${totals.oneTimeMax.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <Link to="/contact" className="w-full py-5 sketch-button bg-primary text-on-surface font-black text-xl flex items-center justify-center gap-3 hover:rotate-[-2deg] transition-transform">
                {mixYourOwn.cta} <Rocket />
              </Link>
              <p className="text-sm font-medium mt-6 italic opacity-60 text-center">{mixYourOwn.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
