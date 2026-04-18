import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, 
  X, 
  Github, 
  ChevronLeft, 
  CheckCircle2,
  Monitor,
  Layout,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { PROJECTS, ARTA_DATA } from '../constants';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-canvas-primary text-ink-primary font-sans">
        <div className="text-center p-12 glass-surface border border-stroke rounded-[40px] max-w-sm">
          <h2 className="text-3xl font-bold mb-6 tracking-tighter">Project not found</h2>
          <button onClick={() => navigate('/')} className="btn-primary w-full">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <section id="project-detail" className="py-20 md:py-40 px-6 bg-canvas-primary text-ink-primary min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-24">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors"
          >
            <ChevronLeft size={16} />
            Back
          </button>
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-ink-tertiary">
            <span className="opacity-50">Collection</span>
            <div className="w-8 h-px bg-stroke" />
            <span className="text-ink-primary">{project.title}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Left Column: Info */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4 block">{project.category}</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                {project.title}
              </h2>
              <div className="w-16 h-1 bg-ink-primary rounded-full mb-8" />
              <p className="text-lg text-ink-secondary leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.stats?.map((stat, i) => (
                <div key={i} className="p-6 rounded-xl border border-stroke flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-widest text-ink-tertiary font-bold">{stat.label}</p>
                  <p className="text-2xl font-bold tracking-tight text-ink-primary">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Info Sections */}
            <div className="space-y-12 pt-8">
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href={project.link} className="btn-primary flex-1 py-4">
                  <Monitor size={18} /> Live Performance
                </a>
                {project.githubLink && (
                  <a href={project.githubLink} className="p-4 bg-canvas-secondary border border-stroke rounded-2xl text-ink-primary hover:border-ink-primary transition-all">
                    <Github size={20} />
                  </a>
                )}
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="px-4 py-2 bg-canvas-secondary border border-stroke rounded-xl text-[10px] font-bold uppercase tracking-widest text-ink-tertiary">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual & Features */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-16">
            <div className="rounded-xl overflow-hidden border border-stroke bg-canvas-secondary relative group cursor-zoom-in" onClick={() => setSelectedImage(project.image)}>
              <img 
                src={project.image} 
                alt={project.title} 
                referrerPolicy="no-referrer"
                className="w-full aspect-video object-cover"
              />
            </div>

            {/* Key Features Section */}
            <div className="border-t border-stroke pt-12 space-y-8">
              <h3 className="text-xl font-bold tracking-tight">Key features</h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features?.map((feature, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-1 h-1 rounded-full bg-ink-tertiary mt-2" />
                    <p className="text-ink-secondary text-sm leading-relaxed">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Step CTA */}
            <div className="p-10 border border-stroke rounded-xl flex items-center justify-between group cursor-pointer hover:border-ink-primary transition-all">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-ink-tertiary mb-2">Next step</p>
                <h4 className="text-2xl font-bold">Start an architecture</h4>
              </div>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative max-w-5xl w-full"
            >
              <img src={selectedImage} alt="Preview" className="w-full rounded-lg shadow-2xl" />
              <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white"><X size={24} /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
