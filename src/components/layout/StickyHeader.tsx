import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import lipiLogo from "@/assets/lipi-logo.png";

const StickyHeader = () => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerY = useTransform(scrollY, [0, 100], [-100, 0]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 py-3"
      style={{ opacity: headerOpacity, y: headerY }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={lipiLogo}
              alt="Lipi Games Logo"
              className="h-10 sm:h-12 w-auto rounded-lg shadow-lg"
              whileHover={{ 
                rotateY: 15,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors text-sm tracking-wide">
            Home
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors text-sm tracking-wide">
            About
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default StickyHeader;
