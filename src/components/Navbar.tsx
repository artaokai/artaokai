import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ARTA_DATA } from '../constants';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '/#about' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-canvas-primary/80 backdrop-blur-xl border-b border-stroke py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
            {ARTA_DATA.name}.
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <HashLink
                smooth
                key={link.name}
                to={link.href}
                className="text-xs font-semibold text-ink-secondary hover:text-ink-primary transition-colors"
              >
                {link.name}
              </HashLink>
            ))}
            <div className="h-3 w-px bg-stroke" />
            <button 
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-canvas-secondary border border-stroke hover:border-ink-primary transition-all"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <HashLink smooth to="/#contact" className="btn-primary py-2 px-6 text-xs font-bold">
              Connect
            </HashLink>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 bg-canvas-secondary border border-stroke rounded-lg">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-ink-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[110] bg-canvas-primary flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-bold tracking-tight">{ARTA_DATA.name}.</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <HashLink
                  smooth
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bold tracking-tight text-ink-primary"
                >
                  {link.name}
                </HashLink>
              ))}
            </div>

            <div className="mt-auto border-t border-stroke pt-8 flex flex-col gap-4">
               {ARTA_DATA.social.map(s => (
                  <a key={s.name} href={s.url} className="text-sm font-medium text-ink-secondary">{s.name}</a>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
