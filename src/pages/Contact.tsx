import { motion } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { siteContent } from '../content';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-black mb-6">
            Let's <span className="text-primary">Chat</span>
          </h1>
          <p className="font-sketch text-2xl text-on-surface/80 max-w-2xl mx-auto">
            {siteContent.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 sketch-border rotate-1"
          >
            <h2 className="font-headline text-3xl font-black mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-bold mb-2 font-sketch text-xl">Name / Sona</label>
                <input 
                  type="text" 
                  className="w-full p-3 sketch-border bg-paper focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How should we call you?"
                />
              </div>
              <div>
                <label className="block font-bold mb-2 font-sketch text-xl">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 sketch-border bg-paper focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Where can we reach you?"
                />
              </div>
              <div>
                <label className="block font-bold mb-2 font-sketch text-xl">What's on your mind?</label>
                <textarea 
                  className="w-full p-3 sketch-border bg-paper focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
                  placeholder="Tell us about your project, your goals, or just say hi!"
                ></textarea>
              </div>
              <button type="submit" className="sketch-button bg-secondary text-white w-full py-4 text-xl font-black flex items-center justify-center gap-2 hover:rotate-[-2deg]">
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Other ways to connect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-paper p-8 sketch-border -rotate-1">
              <h3 className="font-headline text-2xl font-black mb-4 flex items-center gap-3">
                <MessageSquare className="text-primary" /> Send us a DM
              </h3>
              <p className="mb-6 font-medium text-on-surface/80">
                The fastest way to reach us. Send a direct message to our account and we'll get back to you ASAP!
              </p>
              <a href="#" className="sketch-button bg-[#5865F2] text-white px-6 py-3 inline-block font-bold">
                Message Us
              </a>
            </div>

            <div className="bg-white p-8 sketch-border rotate-2">
              <h3 className="font-headline text-2xl font-black mb-4 flex items-center gap-3">
                <Mail className="text-secondary" /> Direct Email
              </h3>
              <p className="mb-6 font-medium text-on-surface/80">
                Prefer the classic way? Shoot us an email directly and we'll get back to you within 24 hours.
              </p>
              <a href="mailto:hello@axolotlmedia.com" className="sketch-button bg-primary text-on-surface px-6 py-3 inline-block font-bold">
                hello@axolotlmedia.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
