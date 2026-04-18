import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, X } from 'lucide-react';
import { getAIResponse } from '../services/gemini';
import { ARTA_CONTEXT } from '../constants';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([
    { role: 'ai', content: 'Halo! Saya asisten digital Arta. Sesuatu yang ingin ditanyakan tentang karya atau keahliannya?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    const aiMsg = await getAIResponse(userMsg, ARTA_CONTEXT);
    setMessages(prev => [...prev, { role: 'ai', content: aiMsg }]);
    setIsLoading(false);
  };

  return (
    <section id="ai" className="relative">
      <div className="fixed bottom-10 right-10 z-40">
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 glass-surface rounded-xl flex items-center justify-center shadow-lg hover:border-ink-primary transition-all"
          >
            <Bot size={20} className="text-ink-primary" />
          </motion.button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 right-10 z-50 w-[350px] h-[500px] bg-canvas-primary rounded-xl flex flex-col overflow-hidden shadow-2xl border border-stroke"
          >
            <div className="p-6 border-b border-stroke flex justify-between items-center bg-canvas-secondary">
              <div className="flex items-center gap-3">
                <Sparkles size={16} className="text-ink-tertiary" />
                <span className="text-xs font-bold uppercase tracking-widest text-ink-primary">Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-ink-secondary hover:text-ink-primary transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-ink-primary text-canvas-primary' 
                    : 'bg-canvas-secondary border border-stroke text-ink-primary'
                  }`}>
                    <p>{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-canvas-secondary border-t border-stroke">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="w-full bg-canvas-primary border border-stroke rounded-lg p-3 pr-10 text-xs font-medium focus:outline-none focus:border-ink-primary transition-colors text-ink-primary"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-tertiary hover:text-ink-primary transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
