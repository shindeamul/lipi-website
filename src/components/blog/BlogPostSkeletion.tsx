import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import lipiLogo from "@/assets/lipi-logo.png";

const BlogPostSkeleton = () => {
  return (
    <div className="min-h-screen bg-blog-cream">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-blog-cream/80 backdrop-blur-md border-b border-blog-brown/10"
      >
        <div className="w-[80%] mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link 
              to="/blog" 
              className="flex items-center gap-2 text-blog-brown/70 hover:text-blog-brown transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Blog</span>
            </Link>
            
            <Link to="/" className="flex items-center gap-2 font-display text-xl md:text-2xl font-bold text-blog-brown">
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
              <span>Lipi.Game</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blog-brown/5 rounded-full animate-pulse" />
              <div className="w-9 h-9 bg-blog-brown/5 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Article Content */}
      <article className="w-[80%] mx-auto py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="w-24 h-7 bg-blog-brown/10 rounded-full animate-pulse" />
            <div className="w-28 h-5 bg-blog-brown/10 rounded animate-pulse" />
            <div className="w-20 h-5 bg-blog-brown/10 rounded animate-pulse" />
          </div>

          {/* Title */}
          <div className="space-y-3 mb-6">
            <div className="w-full h-10 md:h-12 bg-blog-brown/10 rounded animate-pulse" />
            <div className="w-4/5 h-10 md:h-12 bg-blog-brown/10 rounded animate-pulse" />
            <div className="w-3/5 h-10 md:h-12 bg-blog-brown/10 rounded animate-pulse" />
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-blog-brown/10">
            <div className="w-12 h-12 bg-blog-brown/10 rounded-full animate-pulse" />
            <div className="space-y-2">
              <div className="w-32 h-5 bg-blog-brown/10 rounded animate-pulse" />
              <div className="w-24 h-4 bg-blog-brown/10 rounded animate-pulse" />
            </div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 rounded-2xl overflow-hidden flex justify-center"
          >
            <div className="w-1/2 aspect-video bg-blog-brown/10 animate-pulse" />
          </motion.div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            {/* Paragraph skeletons */}
            <div className="space-y-4 mb-6">
              <div className="w-full h-5 bg-blog-brown/10 rounded animate-pulse" />
              <div className="w-full h-5 bg-blog-brown/10 rounded animate-pulse" />
              <div className="w-full h-5 bg-blog-brown/10 rounded animate-pulse" />
              <div className="w-4/5 h-5 bg-blog-brown/10 rounded animate-pulse" />
            </div>

            <div className="space-y-4 mb-6">
              <div className="w-full h-5 bg-blog-brown/10 rounded animate-pulse" />
              <div className="w-full h-5 bg-blog-brown/10 rounded animate-pulse" />
              <div className="w-full h-5 bg-blog-brown/10 rounded animate-pulse" />
              <div className="w-3/4 h-5 bg-blog-brown/10 rounded animate-pulse" />
            </div>

            <div className="space-y-4 mb-6">
              <div className="w-full h-5 bg-blog-brown/10 rounded animate-pulse" />
              <div className="w-full h-5 bg-blog-brown/10 rounded animate-pulse" />
              <div className="w-4/5 h-5 bg-blog-brown/10 rounded animate-pulse" />
            </div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-blog-brown/10"
            >
              <div className="w-16 h-5 bg-blog-brown/10 rounded animate-pulse mb-4" />
              <div className="flex flex-wrap gap-2">
                <div className="w-20 h-9 bg-blog-brown/5 rounded-full animate-pulse" />
                <div className="w-24 h-9 bg-blog-brown/5 rounded-full animate-pulse" />
                <div className="w-28 h-9 bg-blog-brown/5 rounded-full animate-pulse" />
                <div className="w-20 h-9 bg-blog-brown/5 rounded-full animate-pulse" />
                <div className="w-32 h-9 bg-blog-brown/5 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-blog-brown/10"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="w-40 h-6 bg-blog-brown/10 rounded animate-pulse" />
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 bg-blog-brown/10 rounded-full animate-pulse" />
                  <div className="w-11 h-11 bg-blog-brown/10 rounded-full animate-pulse" />
                  <div className="w-11 h-11 bg-blog-brown/10 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </article>

      {/* Footer */}
      <footer className="w-[80%] mx-auto py-12 border-t border-blog-brown/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-blog-brown">
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
            Lipi.Game
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-16 h-5 bg-blog-brown/10 rounded animate-pulse" />
            <div className="w-16 h-5 bg-blog-brown/10 rounded animate-pulse" />
          </div>
          <div className="w-56 h-5 bg-blog-brown/10 rounded animate-pulse" />
        </div>
      </footer>
    </div>
  );
};

export default BlogPostSkeleton;