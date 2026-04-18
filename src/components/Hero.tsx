import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ARTA_DATA } from '../constants';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6 pt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stroke text-[10px] font-bold uppercase tracking-widest text-ink-secondary mb-8">
            <span>Sikur, ID</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-ink-primary">
            {ARTA_DATA.role} <span className="text-ink-tertiary">Okai.</span><br />
          </h1>

          <p className="max-w-md text-lg text-ink-secondary mb-12 leading-relaxed font-normal">
            Menciptakan Website Yang Inovatif, Fungsional, dan User-Friendly untuk Solusi Digital.
          </p>

          <div className="flex items-center gap-8">
            <a href="#portfolio" className="btn-primary">
              Projects <ArrowRight size={18} />
            </a>
            <a href="#about" className="text-xs font-bold uppercase tracking-widest text-ink-tertiary hover:text-ink-primary transition-all border-b border-transparent hover:border-ink-primary pb-1">
              Know more
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[500px] mx-auto">
            <div className="absolute inset-0 rounded-full border border-stroke animate-[spin_20s_linear_infinite] opacity-20" />
            <div className="absolute inset-4 rounded-full border border-stroke animate-[spin_15s_linear_infinite_reverse] opacity-10" />
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-stroke p-2 bg-canvas-primary">
              <img 
                src={ARTA_DATA.about.image} 
                alt={ARTA_DATA.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-6 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center opacity-20 hidden md:flex">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-ink-primary" 
        />
      </div>
    </section>
  );
}
