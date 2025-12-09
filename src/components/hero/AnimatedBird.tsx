import { motion } from "framer-motion";

interface AnimatedBirdProps {
  src: string;
  initialX: string;
  initialY: string;
  size: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export const AnimatedBird = ({
  src,
  initialX,
  initialY,
  size,
  delay = 0,
  duration = 12,
  className = "",
}: AnimatedBirdProps) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        left: initialX,
        top: initialY,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.85 }}
      transition={{ delay: delay + 0.5, duration: 1 }}
    >
      <motion.img
        src={src}
        alt="Bird"
        className="h-full w-full object-contain"
        style={{
          filter: "brightness(1.3) contrast(1.1)",
        }}
        animate={{
          y: [0, -15, -5, -20, 0],
          x: [0, 5, -3, 8, 0],
          rotate: [0, 2, -1, 3, 0],
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          repeat: Infinity,
          delay: delay,
        }}
      />
    </motion.div>
  );
};

export default AnimatedBird;
