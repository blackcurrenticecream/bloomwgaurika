import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Music, Music2, ChevronDown, Sparkles, Heart } from 'lucide-react';
import Starfield from './components/Starfield';
import RelationshipTimer from './components/RelationshipTimer';
import Scrapbook from './components/Scrapbook';
import AspirationsGrid from './components/AspirationsGrid';
import SecretArchive from './components/SecretArchive';
import VideoPlayer from './components/VideoPlayer';

import FloatingElements from './components/FloatingElements';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { scrollYProgress } = useScroll();
  
  // Shifting Nebula Background
  const gradientPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundGradient = useTransform(scrollYProgress, [0, 1], [
    `radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.07) 0%, transparent 70%)`,
    `radial-gradient(circle at 80% 70%, rgba(74, 29, 29, 0.05) 0%, transparent 70%)`
  ]);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/i_think_they_call_this_love.mp3');
      audioRef.current.loop = true;
    }
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-jayrika-cream selection:bg-jayrika-gold/30 selection:text-jayrika-burgundy">
      <Starfield />
      <FloatingElements />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
        <svg className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] text-jayrika-gold" fill="currentColor" viewBox="0 0 200 200">
          <path d="M100 0 C120 50 180 50 180 100 C180 150 120 150 100 200 C80 150 20 150 20 100 C20 50 80 50 100 0" />
        </svg>
      </div>

      {/* Dynamic Nebula Overlay (Refined for light theme) */}
      <motion.div 
        style={{ 
          background: backgroundGradient
        }}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Audio Toggle */}
      <button 
        onClick={toggleAudio}
        className="fixed top-6 right-6 z-50 p-4 rounded-full bg-white shadow-xl hover:scale-110 transition-transform active:scale-95 group border border-jayrika-gold/20"
      >
        {isPlaying ? <Music className="w-6 h-6 text-jayrika-gold animate-pulse" /> : <Music2 className="w-6 h-6 text-jayrika-burgundy/40" />}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-jayrika-burgundy text-white px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {isPlaying ? "Click to Pause" : "Play a Song"}
        </span>
      </button>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div className="mb-4">
            <h1 
              style={{ borderColor: '#2e260a' }}
              className="text-8xl md:text-[10rem] font-header italic tracking-tighter text-jayrika-burgundy"
            >
              Jayrika
            </h1>
          </motion.div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-jayrika-gold/30" />
            <p 
              style={{ borderColor: '#786831' }}
              className="text-xs uppercase tracking-[0.4em] font-body font-bold text-jayrika-gold"
            >
              Lets Bloom Together
            </p>
            <div className="h-[1px] w-12 bg-jayrika-gold/30" />
          </div>
          <p className="text-jayrika-burgundy/60 text-xs uppercase tracking-[0.3em] max-w-lg mx-auto font-bold">
            Established • April 26, 2026 • Digital Pings to Soulmates
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-jayrika-gold cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </header>

      <main className="relative z-10 space-y-32 md:space-y-64 pb-32">
        
        {/* Compatibility Card */}
        <section className="max-w-sm mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white/60 backdrop-blur-md border border-jayrika-gold/30 rounded-[2rem] p-10 text-center card-shadow relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-jayrika-gold/5 via-transparent to-jayrika-burgundy/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4 shadow-inner">
                <Heart className="w-8 h-8 text-pink-400 fill-current" />
              </div>
              <div className="text-5xl font-header italic text-jayrika-burgundy mb-1">100%</div>
              <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-jayrika-gold mb-6">Compatibility</div>
              <div className="border border-jayrika-gold/20 rounded-xl p-4 mb-4 bg-white/40">
                <div className="text-[8px] uppercase tracking-[0.3em] text-jayrika-gold/70 mb-2">Official Ship Name</div>
                <div className="text-3xl font-header italic text-jayrika-burgundy">Jayrika</div>
              </div>
              <p className="font-header italic text-jayrika-burgundy/60 text-sm leading-relaxed">
                "You two are perfectly synced.<br/>A true dynamic masterpiece."
              </p>
              <div className="mt-4 text-[8px] uppercase tracking-[0.4em] text-jayrika-gold/50 font-bold">
                Relationship Status: Soulmates
              </div>
            </div>
          </motion.div>
        </section>

        {/* Act I: The Digital Genesis */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-jayrika-gold/10 text-jayrika-gold border border-jayrika-gold/20">
              <Sparkles className="w-4 h-4" />
              <span className="uppercase tracking-widest text-[10px] font-bold">Chapter One: The Genesis</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-header italic text-jayrika-burgundy leading-tight">
              A journey from pings to <span className="text-jayrika-gold">purpose.</span>
            </h2>
            <div className="space-y-6 text-xl text-jayrika-burgundy/80 leading-relaxed font-header italic pb-8 border-b border-dashed border-jayrika-gold/30">
              <p>
                "Who knew a 2:00 AM study timer would lead me to you? No school hallways, just digital pings that became my favorite sound."
              </p>
            </div>
            <div className="pt-4">
              <span className="text-[10px] uppercase font-bold text-jayrika-gold tracking-widest block mb-1">The Constant in Chaos</span>
              <p className="text-sm leading-relaxed opacity-70 max-w-md font-body">
                From YPT study buddies to waking each other up for early morning sessions. You weren't just a bestie; you were the steady pulse in my digital world.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[2rem] overflow-hidden card-shadow p-2 bg-white/60"
          >
            <VideoPlayer 
              src="/holi_moment.mp4"
              poster="/regenerated_image_1777321414012.png"
              caption="sweet holi moment!"
            />
          </motion.div>
        </section>

        {/* Act II: The Bestie Phase */}
        <section className="bg-jayrika-burgundy text-white py-32 md:py-64 relative overflow-hidden">
          {/* Subtle Decorative Circle */}
          <svg className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] text-jayrika-gold opacity-10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" />
          </svg>

          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-12"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-jayrika-gold">The Interlude</span>
              <h2 className="text-6xl md:text-8xl font-header italic tracking-tight">Our Little World</h2>
              <p className="text-xl md:text-2xl font-header italic leading-relaxed text-white/80 max-w-2xl mx-auto">
                "The phase of waking each other up for early morning sessions, sharing every minor detail of the day, and loving everything about you without even realizing it."
              </p>
            </motion.div>
            <Scrapbook />
          </div>
        </section>

        {/* Act III: The Realization */}
        <section className="max-w-6xl mx-auto px-6 text-center space-y-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-jayrika-gold">Relationship Metric</span>
            <h2 className="text-5xl md:text-8xl font-header italic text-jayrika-burgundy tracking-tighter">The Pulse</h2>
          </motion.div>
          
          <RelationshipTimer />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-jayrika-burgundy/60 italic font-header border-t border-jayrika-gold/20 pt-12 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6">
              <Heart className="w-5 h-5 text-jayrika-gold fill-current" />
            </div>
            "It was April 26, 2026, at exactly 11:11 AM... the moment I unraveled the truth and well, the feelings just leaked out. A digital confession that changed everything forever."
          </motion.div>
        </section>

        {/* Act IV: The Forever Horizon */}
        <section className="space-y-12 max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end border-b border-jayrika-gold/30 pb-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-jayrika-gold">Future Quests</span>
              <h2 className="text-5xl font-header italic text-jayrika-burgundy mt-2">The Forever Horizon</h2>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="w-12 h-[1px] bg-jayrika-gold mt-4" />
            </div>
          </div>
          <AspirationsGrid />
        </section>

        {/* Act V: Secret Archive */}
        <section className="relative py-20 bg-white/30 backdrop-blur-sm border-y border-jayrika-gold/10">
          <SecretArchive />
        </section>

      </main>

      <footer className="py-20 text-center border-t border-jayrika-gold/20 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <div className="text-jayrika-burgundy text-4xl font-header italic">J + G</div>
          <div className="text-jayrika-burgundy/40 space-y-2 uppercase tracking-[0.4em] text-[10px] font-bold">
            <p>A Journey for Eternity</p>
            <p>Jayesh Sharma • Gaurika Tiwari <span className="text-jayrika-gold/60">(soon to be sharma)</span></p>
          </div>
          <div className="h-12 w-[1px] bg-jayrika-gold/30" />
          <p className="text-jayrika-gold/40 text-[9px] tracking-[0.5em] uppercase font-bold">Established 04.26.2026 | 11:11 AM</p>
        </div>
      </footer>
    </div>
  );
}
