import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Lock, Heart, Stars } from 'lucide-react';

const LETTER_TEXT = "Idk what to say love you so so much endlessly forever ever. Hope you stay by my side forever always like idk i just want to be with you lmao. Couldn't even confess properly like i intended but whvrrrrrrrrrrrrrr i felt too much happy knowing the feeling was mutual. Cant explain legit like you talked about me with your friends lol. This is so funny you dont knoow like not funny just so soo idk. Loveeeeeeee youu so soom muchh thanks for everything gaurika. you even being you is a blessing lol, idk what to say more. ahh lets just meettttttttt somedayy soonishlly and well you said doing smtg on meetup lol! Excited asf XD. Mwuahhh hugss kisses everythingg lovee yalylllyyl  ";

export default function SecretArchive() {
  const [code, setCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleUnlock = () => {
    // Password is now "Love" (case sensitive or insensitive? User said "Love" but usually these are case insensitive in simple apps, I'll make it lower to be safe or strict as requested. User said "Love", I'll check for "Love")
    if (code.trim().toLowerCase() === 'love') {
      setIsUnlocked(true);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#fbcfe8', '#ec4899', '#fdf2f8', '#ff0000']
      });
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  useEffect(() => {
    if (isUnlocked && typedText.length < LETTER_TEXT.length) {
      const timeout = setTimeout(() => {
        setTypedText(LETTER_TEXT.slice(0, typedText.length + 1));
      }, 35); // Adjust typing speed here
      return () => clearTimeout(timeout);
    } else if (isUnlocked && typedText.length === LETTER_TEXT.length) {
      setIsTypingComplete(true);
    }
  }, [isUnlocked, typedText]);

  // Auto scroll to bottom during typing
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [typedText]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 relative z-10 font-sans">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="lock"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            className="glass bg-white/40 p-12 rounded-[3rem] text-center card-shadow border-pink-200/50"
          >
            <motion.div 
              animate={{ 
                rotate: error ? [0, -10, 10, -10, 10, 0] : 0,
                scale: error ? [1, 1.1, 1] : 1
              }}
              className="mb-8 inline-block p-6 rounded-full bg-pink-100/50 text-pink-500 shadow-inner"
            >
              <Lock className="w-12 h-12" />
            </motion.div>
            
            <h2 className="text-4xl font-header italic mb-2 text-jayrika-burgundy">The Eternal Fragment</h2>
            <p className="text-[10px] uppercase tracking-[0.4em] text-pink-400 mb-8 font-bold opacity-80 flex items-center justify-center gap-2">
              <Stars className="w-3 h-3" /> PROTECTED BY LOVE <Stars className="w-3 h-3" />
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                  className={`bg-white/80 backdrop-blur-sm border-2 ${
                    error ? 'border-rose-400 shake' : 'border-pink-200 group-hover:border-pink-300'
                  } rounded-2xl px-6 py-4 text-xl text-center w-64 text-jayrika-burgundy focus:outline-none focus:ring-4 focus:ring-pink-100 transition-all card-shadow placeholder-pink-200`}
                  placeholder="The secret word..."
                />
                {error && (
                  <p className="absolute -bottom-6 left-0 right-0 text-rose-500 text-[10px] font-bold tracking-widest animate-pulse">
                    THAT'S NOT IT, LOVE...
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fbcfe8" }}
                whileActive={{ scale: 0.95 }}
                onClick={handleUnlock}
                className="px-12 py-4 bg-pink-200 text-jayrika-burgundy text-xs font-black rounded-2xl transition-all shadow-lg uppercase tracking-[0.2em]"
              >
                Reveal Memory
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 100, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative"
          >
            {/* Pinkish Letter Theme */}
            <div className="absolute inset-0 bg-pink-100/50 blur-3xl -z-10 rounded-full scale-110 opacity-50" />
            
            <div className="bg-[#fffdfa] p-8 md:p-16 rounded-[1rem] border-pink-100 border-[1.5rem] card-shadow-lg relative overflow-hidden min-h-[500px] flex flex-col">
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
              
              {/* Decorative Stamps/Elements */}
              <div className="absolute top-8 right-8 text-pink-300 transform rotate-12 opacity-40">
                <Heart className="w-16 h-16 fill-current" />
              </div>
              
              <div className="relative z-10 flex-grow" ref={scrollRef}>
                <header className="mb-10 border-b border-pink-100 pb-4 flex justify-between items-end">
                  <div>
                    <h3 className="font-handwriting text-3xl text-jayrika-burgundy">To my dearest,</h3>
                    <div className="h-1 w-20 bg-pink-200 rounded-full mt-2" />
                  </div>
                  <div className="text-[10px] font-bold text-pink-300 tracking-widest uppercase">
                    Forever & Always
                  </div>
                </header>

                <div className="font-letter text-3xl md:text-4xl leading-relaxed text-pink-900/90 whitespace-pre-wrap min-h-[300px]">
                  {typedText}
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className={`inline-block w-2 lg:w-3 h-8 bg-pink-400 align-middle ml-1 ${isTypingComplete ? 'hidden' : ''}`}
                  />
                </div>

                {isTypingComplete && (
                  <motion.footer 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-16 pt-8 border-t border-pink-100"
                  >
                    <p className="font-handwriting text-4xl text-jayrika-burgundy">Yours forever,</p>
                    <p className="font-handwriting text-5xl text-pink-500 mt-4 underline decoration-pink-200 underline-offset-8">Jayesh</p>
                    
                    <div className="mt-12 flex items-center gap-4 text-pink-400 opacity-60">
                      <Heart className="w-5 h-5 fill-current" />
                      <div className="h-px flex-grow bg-pink-100" />
                      <Stars className="w-5 h-5" />
                    </div>
                  </motion.footer>
                )}
              </div>
            </div>

            {/* Floating Hearts Animation */}
            <div className="absolute -top-10 -right-10 w-20 h-20 text-pink-200 animate-float opacity-50">
              <Heart className="w-full h-full fill-current" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 text-pink-200 animate-float delay-700 opacity-30">
              <Heart className="w-full h-full fill-current" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
