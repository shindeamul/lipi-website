import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(215 40% 12%) 0%, hsl(215 50% 18%) 50%, hsl(200 60% 25%) 100%)"
      }}
    >
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, hsl(200 60% 50%) 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-foreground/90 leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-primary font-semibold">Lipi Epics and Word Games</span> is a unique learning and
            gamification platform dedicated to celebrating Indian epics, languages and cultural values. The focus of our
            current version is on the Mahabharat, the timeless Indian epic, while also offering engaging word games in Indian
            languages and English...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10"
          >
            <Link to="/about">
              <motion.button
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm tracking-wide
                  shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
