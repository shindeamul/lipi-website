import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

interface ParallaxLayerProps {
  children: React.ReactNode;
  depth: number; // 0.01 to 0.1 - higher = more movement
  className?: string;
}

export const ParallaxLayer = ({ children, depth, className = "" }: ParallaxLayerProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const x = useSpring(useTransform(mouseX, [-1, 1], [depth * 50, -depth * 50]), springConfig);
  const y = useSpring(useTransform(mouseY, [-1, 1], [depth * 30, -depth * 30]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize to -1 to 1
      mouseX.set((clientX / innerWidth) * 2 - 1);
      mouseY.set((clientY / innerHeight) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className={`absolute inset-0 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
