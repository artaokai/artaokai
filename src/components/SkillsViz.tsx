import { SKILLS } from '../constants';

export default function SkillsViz() {
  return (
    <section id="about" className="py-32 px-6 bg-bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Technical Stack</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name} 
              className="p-6 refined-card bg-bg-primary/50 flex flex-col justify-between group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-muted uppercase tracking-widest">{skill.category}</span>
                <span className="text-[10px] text-accent opacity-0 group-hover:opacity-100 transition-opacity">Expert</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white transition-all duration-1000" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
