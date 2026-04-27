import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function RelationshipTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2026-04-26T11:11:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = now - startDate;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto py-12 px-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/40 backdrop-blur-md border border-jayrika-gold/20 card-shadow aspect-square flex flex-col items-center justify-center rounded-3xl p-6"
        >
          <span className="text-5xl md:text-7xl font-header italic text-jayrika-burgundy">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-jayrika-gold mt-2">
            {unit}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
