import { motion } from 'motion/react';
import { Plane, GraduationCap, Heart, Sparkles, Mountain, Music, Video, MessageCircle, TrendingUp, Loader2 } from 'lucide-react';

const QUESTS = [
  {
    title: "Traveling the World",
    description: "From Iceland's Northern lights to sunsets in Greece, exploring every corner with you.",
    icon: <Plane className="w-8 h-8" />
  },
  {
    title: "Post-NEET Era",
    description: "Conquering our medical dreams side by side. Doctors by title, partners by soul.",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    title: "Home Foundation",
    description: "Building our dream sanctuary filled with laughter, coffee, and peace.",
    icon: <Heart className="w-8 h-8" />
  },
  {
    title: "Eternal Love",
    description: "Being together always, through every high and low. Infinite and beyond.",
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    title: "Climbing Everest",
    description: "Scaling the highest peaks together, literally and figuratively.",
    icon: <Mountain className="w-8 h-8" />
  },
  {
    title: "Dancing Together",
    description: "Finding our rhythm in a crowded room or just alone in our living room.",
    icon: <Music className="w-8 h-8" />
  },
  {
    title: "Crazy Vlogs",
    description: "Capturing our chaotic and beautiful life. Making vlogs together like crazy!",
    icon: <Video className="w-8 h-8" />
  },
  {
    title: "Bold Rika Unleashed",
    description: "I'm so excited to see the bold Rika who can express herself too much!",
    icon: <MessageCircle className="w-8 h-8" />
  },
  {
    title: "Growing Together",
    description: "Evolving side by side, becoming the best versions of ourselves together.",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    title: "More Loading...",
    description: "Our story is just beginning. Infinite possibilities still to be unraveled.",
    icon: <Loader2 className="w-8 h-8 animate-spin" />
  }
];

export default function AspirationsGrid() {
  return (
    <div className="py-20 overflow-x-auto no-scrollbar">
      <div className="flex px-6 gap-8 min-w-max pb-12">
        {QUESTS.map((quest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-80 bg-white/40 p-8 rounded-3xl group border-l-4 border-jayrika-gold card-shadow transition-all hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-jayrika-gold/5 blur-3xl -z-10 group-hover:bg-jayrika-gold/10 transition-all" />
            
            <div className="mb-6 p-4 rounded-2xl bg-jayrika-gold/10 text-jayrika-gold group-hover:scale-110 group-hover:bg-jayrika-gold/20 transition-all inline-block">
              {quest.icon}
            </div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-2 text-jayrika-gold">{quest.title}</h3>
            <p className="text-jayrika-burgundy/80 text-[11px] leading-relaxed font-body font-bold uppercase tracking-widest">{quest.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
