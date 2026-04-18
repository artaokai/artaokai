import { Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-canvas-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-24">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink-tertiary">Direct Access</h2>
          <div className="flex-1 h-px bg-stroke" />
          <span className="text-[10px] font-mono text-ink-tertiary opacity-40">System.Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 space-y-12">
            <h5 className="text-6xl md:text-4xl font-black tracking-tighter leading-[0.85] text-ink-primary italic lowercase">
              Start a <br />
              <span className="not-italic font-display text-ink-secondary">Dialogue.</span>
            </h5>
            
            <p className="text-xl text-ink-secondary font-medium leading-relaxed max-w-sm">
              Saya mensintesis persyaratan kompleks menjadi struktur digital yang <span className="text-ink-primary font-bold">elegan</span> Mari kita diskusikan visi Anda.
            </p>
            
            <div className="pt-8">
              <a href="mailto:arta@example.studio" className="group flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary">Quick Email</span>
                <span className="text-3xl font-black tracking-tighter border-b-4 border-stroke group-hover:border-ink-primary transition-all pb-2">hello@arta.studio</span>
              </a>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-canvas-primary border border-stroke flex items-center justify-center text-ink-primary">
                 <Sparkles size={18} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary leading-tight">
                Current response time: <br />
                <span className="text-ink-primary">Under 24 hours</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-surface p-12 rounded-[48px] border border-stroke space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary ml-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-canvas-primary/50 border border-stroke rounded-2xl p-5 text-sm font-bold focus:outline-none focus:border-ink-primary focus:bg-canvas-primary transition-all text-ink-primary placeholder:text-ink-tertiary/40"
                    placeholder="Enter full name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary ml-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-canvas-primary/50 border border-stroke rounded-2xl p-5 text-sm font-bold focus:outline-none focus:border-ink-primary focus:bg-canvas-primary transition-all text-ink-primary placeholder:text-ink-tertiary/40"
                    placeholder="name@domain.com"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary ml-2">Project Brief</label>
                <textarea
                  rows={5}
                  className="w-full bg-canvas-primary/50 border border-stroke rounded-[32px] p-5 text-sm font-bold focus:outline-none focus:border-ink-primary focus:bg-canvas-primary transition-all resize-none text-ink-primary placeholder:text-ink-tertiary/40"
                  placeholder="Tell me about your vision..."
                />
              </div>
              <button type="submit" className="w-full btn-primary py-6 justify-center text-lg italic shadow-2xl">
                Synthesize Message <ArrowUpRight size={24} className="not-italic" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
