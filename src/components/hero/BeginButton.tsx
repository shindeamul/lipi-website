import { motion } from "framer-motion";
import { useState } from "react";
import DownloadModal from "./DownloadModal";

interface BeginButtonProps {
  onClick?: () => void;
}

export const BeginButton = ({ onClick }: BeginButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
    onClick?.();
  };

  return (
    <>
      <motion.button
        className="begin-button w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center text-xs sm:text-sm"
        onClick={handleClick}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 2.5,
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{
          scale: 1.08,
          rotate: 360,
          transition: { 
            scale: { duration: 0.3 },
            rotate: { duration: 2, ease: "linear", repeat: Infinity }
          },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ARAMBH
        </motion.span>

        {/* Animated ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-foreground/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Second rotating ring on hover */}
        <motion.div
          className="absolute inset-[-4px] rounded-full border border-primary/20"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            rotate: -360,
            transition: { rotate: { duration: 3, ease: "linear", repeat: Infinity } }
          }}
        />
      </motion.button>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default BeginButton;
