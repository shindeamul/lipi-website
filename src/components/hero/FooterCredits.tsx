import { motion } from "framer-motion";

export const FooterCredits = () => {
  return (
    <motion.footer
      className="absolute bottom-0 left-0 right-0 z-30 px-4 py-4 sm:py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
    >
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-foreground/40">
        <div className="flex flex-col items-start text-[10px] sm:text-xs">
          <span className="opacity-80">This is a</span>
          <span className="font-medium">Mythology Experience</span>
        </div>
        
        <div className="flex flex-col items-start text-[10px] sm:text-xs">
          <span className="opacity-80">Created with</span>
          <span className="opacity-80">devotion and knowledge by</span>
          <span className="font-medium">Lipi Epics</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-[10px] opacity-100">
          <span>MAHABHARAT</span>
          <span>RAMAYANA</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterCredits;
