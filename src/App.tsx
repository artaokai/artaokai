/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { ARTA_DATA } from './constants';

function HomePage() {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-32 px-6 border-y border-stroke">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tighter">The philosophy.</h2>
                <p className="text-xl text-ink-secondary leading-relaxed">
                  {ARTA_DATA.about.p1}
                </p>
                <p className="text-lg text-ink-tertiary leading-relaxed font-normal">
                  {ARTA_DATA.about.p2}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-12 pt-8 border-t border-stroke">
                {ARTA_DATA.stats?.map((stat: any) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold tracking-tighter mb-1">{stat.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-tertiary">{stat.label}</p>
                  </div>
                ))}
                <div>
                  <p className="text-3xl font-bold tracking-tighter mb-1">{ARTA_DATA.rating}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-tertiary">Customer Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-tighter mb-1">{ARTA_DATA.location}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-tertiary">Base Location</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-full overflow-hidden border border-stroke bg-canvas-secondary p-4">
                <img 
                  src={ARTA_DATA.about.image} 
                  alt="Profile" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-canvas-primary text-ink-primary font-sans selection:bg-ink-primary selection:text-canvas-primary antialiased">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <footer className="py-32 px-6 border-stroke mt-20 bg-canvas-secondary/30">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="col-span-1">
              <Link to="/" className="text-3xl font-bold tracking-tighter mb-8 block">{ARTA_DATA.name}.</Link>
              <p className="text-ink-secondary text-base max-w-xs">{ARTA_DATA.description}</p>
            </div>
            
            <div className="col-span-1 flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ink-tertiary font-bold mb-4">Navigasi</p>
              {['Home', 'About', 'Portfolio', 'Contact'].map((link) => (
                <Link key={link} to="/" className="text-sm font-bold text-ink-secondary hover:text-ink-primary transition-colors">{link}</Link>
              ))}
            </div>

            <div className="col-span-1 flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ink-tertiary font-bold mb-4">Let's Talk</p>
              <div className="flex flex-col gap-4">
                {ARTA_DATA.social.map((link: any) => (
                  <a key={link.name} href={link.url} className="text-sm font-bold text-ink-secondary hover:text-ink-primary transition-colors">{link.name}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto pt-20 mt-20 border-t border-stroke flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] text-ink-tertiary uppercase tracking-[0.3em]">© 2026 {ARTA_DATA.name} — Built with Passion</p>
            <div className="flex gap-8">
              <p className="text-[10px] text-ink-tertiary underline uppercase tracking-[0.3em]">Privacy Policy</p>
              <p className="text-[10px] text-ink-tertiary underline uppercase tracking-[0.3em]">Terms of Service</p>
            </div>
          </div>
        </footer>

        <AIAssistant />
      </div>
    </Router>
  );
}

