import { motion } from "framer-motion";
import HeroTitle from "./HeroTitle";
import BeginButton from "./BeginButton";
import FloatingParticles from "./FloatingParticles";
import FooterCredits from "./FooterCredits";
import ScrollIndicator from "./ScrollIndicator";

import heroBackground from "@/assets/hero-background.png";
import cloudsLayer from "@/assets/clouds-layer.png";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Mountains */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src={heroBackground}
          alt="Sri Krishna on the battlefield"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Cloud Layer Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[35%] z-[2] opacity-50"
        animate={{ x: ["0%", "2%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={cloudsLayer} alt="" className="h-full w-full object-cover object-top" />
      </motion.div>

      {/* Cloud Layer Top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[35%] z-[2] opacity-30 rotate-180"
        animate={{ x: ["0%", "-2%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={cloudsLayer} alt="" className="h-full w-full object-cover scale-x-[-1]" />
      </motion.div>


      <FloatingParticles />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-[6] bg-gradient-to-b from-background/20 via-transparent to-background/60 pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 z-[7] pointer-events-none" 
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, hsl(215 40% 8% / 0.5) 80%)" }} />

      {/* Main Content */}
      <div className="absolute inset-0 z-[10]">
        <HeroTitle />
        <div className="absolute bottom-48 sm:bottom-56 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}>
            <BeginButton />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      <FooterCredits />
    </section>
  );
};

export default HeroSection;
