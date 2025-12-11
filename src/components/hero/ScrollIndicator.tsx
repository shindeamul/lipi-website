import { motion } from "framer-motion";

export const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 right-8 z-[15] flex flex-col items-center gap-3 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <span 
        className="text-foreground/80 text-xs sm:text-sm tracking-[0.3em] uppercase font-elegant"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        Scroll Down
      </span>
      <motion.div
        className="w-6 h-10 rounded-full border-2 border-foreground/40 flex justify-center pt-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-1.5 h-3 bg-primary/80 rounded-full"
          animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
