import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Game {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  buttonColor: string;
}

const games: Game[] = [
  {
    id: "word-cruise",
    title: "Word Cruise",
    description: "Generate words and reach Brahma and beyond.",
    icon: (
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3"/>
        <text x="50" y="25" textAnchor="middle" fontSize="12" fill="currentColor">G</text>
        <text x="75" y="40" textAnchor="middle" fontSize="12" fill="currentColor">Y</text>
        <text x="75" y="65" textAnchor="middle" fontSize="12" fill="currentColor">P</text>
        <text x="50" y="80" textAnchor="middle" fontSize="12" fill="currentColor">M</text>
        <text x="25" y="65" textAnchor="middle" fontSize="12" fill="currentColor">V</text>
        <text x="25" y="40" textAnchor="middle" fontSize="12" fill="currentColor">S</text>
        <text x="15" y="50" textAnchor="middle" fontSize="10" fill="currentColor">L</text>
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    gradient: "from-sky-400 via-blue-500 to-cyan-400",
    buttonColor: "bg-blue-900 hover:bg-blue-800"
  },
  {
    id: "daily-word",
    title: "Daily Word",
    description: "Find the hidden word in seven attempts or less.",
    icon: (
      <svg viewBox="0 0 100 60" className="w-24 h-14">
        <circle cx="20" cy="18" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="45" cy="18" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="20" cy="42" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="45" cy="42" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
    gradient: "from-amber-400 via-orange-400 to-yellow-500",
    buttonColor: "bg-amber-700 hover:bg-amber-600"
  },
  {
    id: "daily-proverb",
    title: "Daily Proverb",
    description: "Search for the hidden proverb with clues and stories.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20">
        <rect x="15" y="20" width="50" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="55" cy="25" r="8" fill="currentColor"/>
        <circle cx="62" cy="32" r="5" fill="currentColor"/>
      </svg>
    ),
    gradient: "from-teal-400 via-emerald-400 to-cyan-500",
    buttonColor: "bg-teal-700 hover:bg-teal-600"
  },
  {
    id: "daily-jumble",
    title: "Daily Jumble",
    description: "Unjumble the letters and unearth the words.",
    icon: (
      <svg viewBox="0 0 100 60" className="w-24 h-14">
        <text x="10" y="25" fontSize="24" fontWeight="bold" fill="currentColor">OXO</text>
        <circle cx="25" cy="45" r="10" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="55" cy="45" r="10" fill="none" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
    gradient: "from-rose-400 via-pink-400 to-orange-400",
    buttonColor: "bg-purple-600 hover:bg-purple-500"
  }
];

const GameCard = ({ game, index }: { game: Game; index: number }) => {
  return (
    <motion.div
      className={`relative flex-shrink-0 w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden cursor-pointer group`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -10 }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient}`} />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-between p-6 sm:p-8 text-white">
        {/* Icon */}
        <motion.div 
          className="flex-1 flex items-center justify-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {game.icon}
        </motion.div>
        
        {/* Title & Description */}
        <div className="text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold tracking-wide">{game.title}</h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">{game.description}</p>
        </div>
        
        {/* Play Button */}
        <motion.button
          className={`mt-6 px-8 py-3 ${game.buttonColor} rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Play Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export const GamesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-background overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Section Header */}
      <motion.div 
        className="text-center mb-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-fantasy text-3xl sm:text-4xl md:text-5xl title-gold mb-4">
          Play Lipi Games
        </h2>
        <p className="text-foreground/70 text-base sm:text-lg max-w-xl mx-auto">
          Click on the <span className="text-primary font-semibold">Play Now</span> button to begin your journey
        </p>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div className="relative h-[500px] sm:h-[550px]">
        <motion.div 
          className="absolute flex gap-6 sm:gap-8 px-8 sm:px-16"
          style={{ x }}
        >
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
          {/* Duplicate for seamless loop feel */}
          {games.map((game, index) => (
            <GameCard key={`${game.id}-dup`} game={game} index={index + games.length} />
          ))}
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-foreground/50 text-sm tracking-wider">
          ← Scroll to explore more games →
        </p>
      </motion.div>
    </section>
  );
};

export default GamesSection;
