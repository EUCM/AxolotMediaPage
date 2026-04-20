import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare } from 'lucide-react';
import { siteContent } from '../content';

const LOGO_URL = "/logo1.png";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Magical Background Elements */}
      <div className="magic-decoration w-[500px] h-[500px] bg-white top-[-10%] left-[-10%] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="magic-decoration w-[600px] h-[600px] bg-yellow-200 bottom-[-10%] right-[-10%]" />
      <div className="magic-decoration w-[400px] h-[400px] bg-blue-300 top-[40%] right-[-5%] opacity-30" />
      <div className="magic-decoration w-[300px] h-[300px] bg-green-200 bottom-[30%] left-[-5%] opacity-20" />

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 px-6 py-3 flex justify-between items-center bg-white/90 backdrop-blur-md sketch-border">
        <Link to="/" className="flex items-center gap-3">
          <img alt="Axolotl Logo" className="h-10 w-10 rounded-full" src={LOGO_URL} referrerPolicy="no-referrer" />
          <span className="font-headline font-extrabold text-xl tracking-tighter text-secondary">{siteContent.nav.logoText}</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center font-semibold text-sm">
          {siteContent.nav.links.map((link, i) => (
            <Link key={i} to={link.href} className="hover:text-primary transition-colors">{link.label}</Link>
          ))}
        </div>
        <Link to="/#mix-your-own" className="sketch-button bg-primary px-5 py-2 rounded-lg font-bold text-sm inline-block">
          {siteContent.nav.cta}
        </Link>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-6 bg-on-surface text-white rounded-t-[4rem] relative mt-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <img alt="Logo" className="h-12 w-12 rounded-full grayscale invert" src={LOGO_URL} referrerPolicy="no-referrer" />
            <span className="text-3xl font-black tracking-tighter">{siteContent.nav.logoText}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-12 font-sketch text-2xl">
            <a className="hover:text-primary transition-colors flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer"><MessageSquare size={24} /> Send a DM</a>
            <a className="hover:text-secondary transition-colors flex items-center gap-2" href="mailto:hello@axolotlmedia.com"><Mail size={24} /> Gmail</a>
            <Link className="hover:text-primary transition-colors text-lg font-body" to="/terms">Terms</Link>
            <Link className="hover:text-primary transition-colors text-lg font-body" to="/privacy">Privacy</Link>
          </div>
          <div className="bg-white/10 px-6 py-2 rounded-full font-sketch text-lg border border-white/20">
            {siteContent.footer.badge}
          </div>
          <p className="font-medium text-sm text-white/40 mt-4">
            {siteContent.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
