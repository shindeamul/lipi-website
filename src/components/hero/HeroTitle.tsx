import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export const HeroTitle = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative z-20 flex flex-col items-center justify-center text-center px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Title - THE HOBBIT */}
      <motion.h1
        className="title-gold text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
        variants={itemVariants}
      >
        LIPI GAMES
      </motion.h1>

      {/* Subtitle - THE DESOLATION OF SMAUG */}
      <motion.h2
        className="title-gold text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-[0.3em] sm:tracking-[0.4em] mb-8"
        variants={itemVariants}
      >
        MAHABHARAT & RAMAYANA
      </motion.h2>

      {/* Decorative Line */}
      <motion.div
        className="w-20 sm:w-28 md:w-36 h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent mb-8"
        variants={itemVariants}
      />

      {/* Journey Text */}
      <motion.div
        className="flex flex-col items-center gap-0.5"
        variants={itemVariants}
      >
        <span className="font-elegant text-foreground/90 text-xs sm:text-sm md:text-base tracking-[0.4em] uppercase">
          A Journey
        </span>
        <span className="font-elegant text-foreground/90 text-xs sm:text-sm md:text-base tracking-[0.4em] uppercase">
          Into 
        </span>
      </motion.div>

      {/* MIDDLE-EARTH */}
      <motion.h3
        className="font-fantasy text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] sm:tracking-[0.2em] mt-1"
        variants={itemVariants}
        style={{
          textShadow: "0 2px 15px rgba(0,0,0,0.6)",
        }}
      >
        EPIC-TRUTH
      </motion.h3>
    </motion.div>
  );
};

export default HeroTitle;
