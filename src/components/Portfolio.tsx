import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Folder, 
  Award, 
  Settings, 
  Maximize2, 
  X, 
  Monitor,
  Github
} from 'lucide-react';
import { PROJECTS, CERTIFICATES, SKILLS } from '../constants';

type Tab = 'projects' | 'certificates' | 'tech';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'tech', label: 'Tech Stack', icon: Settings },
  ];

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Portfolio Showcase</h2>
            <p className="text-ink-secondary text-lg max-w-xl font-normal leading-relaxed">
              Arsip terpadu arsitektur digital.
            </p>
          </motion.div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-8 mb-16 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`text-sm font-bold uppercase tracking-widest transition-all pb-1 border-b-2 ${
                  isActive 
                  ? 'text-ink-primary border-ink-primary' 
                  : 'text-ink-tertiary border-transparent hover:text-ink-secondary'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {PROJECTS.map((project, i) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-canvas-secondary border border-stroke group-hover:border-ink-primary transition-all duration-500">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    
                    <div>
                       <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                        {project.title}
                        <ArrowUpRight size={16} className="text-ink-tertiary group-hover:text-ink-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </h3>
                      <p className="text-sm text-ink-secondary mb-6">{project.category}</p>
                      
                      <div className="flex gap-4">
                        <Link 
                          to={`/project/${project.id}`}
                          className="text-[10px] font-bold uppercase tracking-widest border-b border-stroke hover:border-ink-primary transition-all pb-0.5"
                        >
                          View Detail
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {CERTIFICATES.map((cert) => (
                  <motion.div 
                    key={cert.id} 
                    className="group relative rounded-[32px] overflow-hidden glass-surface border border-stroke bg-canvas-secondary aspect-[4/3] cursor-zoom-in shadow-xl p-2"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setSelectedImage(cert.image)}
                  >
                    <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-ink-primary/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 border border-white/30">
                          <Maximize2 size={24} className="text-canvas-primary" />
                        </div>
                        <span className="text-xl font-bold text-canvas-primary mb-2 uppercase italic tracking-tighter">View Award</span>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-canvas-primary/60 font-bold">{cert.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-6 group">
                    <div className="w-24 h-24 rounded-[32px] bg-canvas-secondary border border-stroke flex items-center justify-center group-hover:border-ink-primary group-hover:shadow-[0_0_30px_rgba(var(--color-ink-primary-rgb),0.05)] transition-all duration-500 p-6">
                      {skill.icon ? (
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-700" 
                        />
                      ) : (
                        <div className="w-12 h-12 bg-ink-tertiary/10 rounded-full" />
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink-tertiary group-hover:text-ink-primary transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-32 flex justify-center">
          <a href="#" className="flex items-center gap-3 px-8 py-4 bg-canvas-secondary border border-stroke rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-ink-primary transition-all group shadow-sm">
            Access Open Source Archives
            <Github size={16} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>

      {/* Modern Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12"
          >
            <div onClick={() => setSelectedImage(null)} className="absolute inset-0 bg-black/95 backdrop-blur-3xl cursor-pointer" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative max-w-7xl w-full aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
            >
              <img src={selectedImage} alt="Preview" className="w-full h-full object-contain bg-black/40" />
              <button 
                onClick={() => setSelectedImage(null)} 
                className="absolute top-10 right-10 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all shadow-xl active:scale-95"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
