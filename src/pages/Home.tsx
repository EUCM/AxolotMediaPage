import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Brush, Palette, Users, ArrowRight, Ban } from 'lucide-react';
import { siteContent } from '../content';
import CustomMixBuilder from '../components/CustomMixBuilder';

const LOGO_URL = "/logo1.png";

export default function Home() {
  const { hero, howWeHelp, contact } = siteContent;

  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-[10%] opacity-10 floating">
          <Brush size={150} />
        </div>
        <div className="absolute bottom-20 left-[5%] opacity-10 rotate-12">
          <Palette size={200} />
        </div>
        
        <div className="max-w-4xl text-center z-10">
          <motion.div 
            initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
            animate={{ scale: 1, rotate: -2, opacity: 1 }}
            className="mb-6 inline-block bg-white p-4 sketch-border shadow-xl"
          >
            <img alt="Axolotl Media" className="h-32 w-auto mx-auto" src={LOGO_URL} referrerPolicy="no-referrer" />
          </motion.div>
          
          <h1 className="font-headline font-black mb-6 leading-tight flex flex-col items-center justify-center text-center">
            <span className="text-3xl md:text-5xl text-on-surface/90 mb-2">{hero.title}</span>
            <span className="text-5xl md:text-8xl flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
              <span className="text-secondary drop-shadow-md">Passion</span>
              <span className="text-on-surface">Your</span>
              <span className="text-primary drop-shadow-md">Livelihood.</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-on-surface/80 max-w-2xl mx-auto leading-relaxed font-medium font-sketch">
            {hero.subtitle}
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#mix-your-own" className="sketch-button bg-secondary text-white px-10 py-5 rounded-xl text-xl font-black hover:rotate-1">
              {hero.primaryButton}
            </a>
            <Link to="/contact" className="font-sketch text-2xl hover:text-white transition-colors underline decoration-wavy decoration-white">
              {hero.secondaryButton}
            </Link>
          </div>

          {/* Anti-AI Badge */}
          <div className="mt-16 flex justify-center">
            <div className="bg-paper sketch-border px-8 py-4 rotate-1 flex items-center gap-4 group hover:rotate-0 transition-transform">
              <Ban className="text-4xl text-red-500 font-bold" size={40} />
              <div className="text-left">
                <p className="font-black text-lg leading-none">{hero.badgeTitle}</p>
                <p className="font-sketch text-xl text-primary leading-none mt-1">{hero.badgeSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* How we help */}
      <section className="py-24 px-6 relative overflow-hidden" id="how">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="font-headline text-4xl md:text-6xl font-black mb-4">{howWeHelp.title} <span className="marker-highlight">{howWeHelp.titleHighlight}</span>.</h2>
            <p className="font-sketch text-2xl max-w-2xl">{howWeHelp.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howWeHelp.cards.map((card, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? -1 : 1 }} className={`bg-${idx % 2 === 0 ? 'white' : 'paper'} p-10 sketch-border rotate-[${idx % 2 === 0 ? '-1deg' : '1deg'}]`}>
                <div className={`w-16 h-16 bg-${idx === 0 ? 'primary' : idx === 1 ? 'secondary' : 'tertiary'}/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] flex items-center justify-center mb-8 border-2 border-on-surface`}>
                  {idx === 0 ? <Brush className="text-3xl" /> : idx === 1 ? <Users className="text-3xl" /> : <Palette className="text-3xl" />}
                </div>
                <h3 className="text-2xl font-black mb-4 font-headline">{card.title}</h3>
                <p className="text-on-surface/80 leading-relaxed mb-6">{card.description}</p>
                <a href="#mix-your-own" className={`font-sketch text-2xl text-${idx === 0 ? 'secondary' : idx === 1 ? 'primary' : 'secondary'} flex items-center gap-2 cursor-pointer hover:underline`}>
                  {card.cta} <ArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Mix Builder Section */}
      <CustomMixBuilder />

      {/* Final CTA */}
      <section className="py-32 px-6 text-center overflow-hidden" id="contact">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-white/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] -z-10 scale-150 rotate-45 blur-2xl" />
          <div className="absolute inset-0 bg-white/10 rounded-[50%_50%_33%_67%_/_55%_27%_73%_45%] -z-10 scale-125 -rotate-12 blur-2xl" />
          <h2 className="font-headline text-5xl md:text-7xl font-black text-on-surface mb-8">{contact.title} <span className="italic text-secondary">{contact.titleHighlight}</span>?</h2>
          <p className="text-2xl font-sketch max-w-2xl mx-auto mb-12">{contact.subtitle}</p>
          <Link to="/contact" className="inline-block sketch-button bg-on-surface text-white px-16 py-6 rounded-2xl text-2xl font-black hover:rotate-[-2deg] active:scale-95">
            {contact.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
