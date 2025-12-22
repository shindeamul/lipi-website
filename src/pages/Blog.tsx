import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Menu, X, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AllBlogsAtom, currentPageAtom } from "@/store/atoms/allBlogsAtom";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { toast } from "sonner";
import BlogGridSkeleton from "@/components/blog/BlogSkeleton";
import lipiLogo from "@/assets/lipi-logo.png";

export interface BlogPosts {
  id: string;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  readTime?: string;
  publishedBy?: string;
  imageUrl: string;
  tags: string[];
}

const Blog = () => {
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const blogPostsData = useRecoilValueLoadable(AllBlogsAtom);

  if (blogPostsData.state === "loading") {
    return (
    <div className="min-h-screen bg-blog-cream">
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-blog-cream/80 backdrop-blur-md border-b border-blog-brown/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 font-display text-2xl md:text-3xl font-bold text-blog-brown tracking-tight">
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
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-blog-brown/70 hover:text-blog-brown transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-blog-brown/70 hover:text-blog-brown transition-colors font-medium">About</Link>
              <Link to="/blog" className="text-blog-brown font-medium">Blog</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-blog-brown"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blog-cream border-t border-blog-brown/10"
          >
            <div className="px-4 py-4 space-y-3">
              <Link to="/" className="text-blog-brown/70 hover:text-blog-brown transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-blog-brown/70 hover:text-blog-brown transition-colors font-medium">About</Link>
              <Link to="/blog" className="text-blog-brown font-medium">Blog</Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-blog-brown/10 rounded-full text-blog-brown text-sm font-medium mb-6">
              Stories & Insights
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blog-brown leading-tight mb-6">
              Lipi Games Blog, <br className="hidden sm:block" />
              <span className="text-blog-brown/60">Epics & Updates</span>
            </h1>
            <p className="text-blog-brown/70 text-lg md:text-xl max-w-2xl mx-auto">
              Fresh stories, product updates, and behind-the-scenes insights from Lipi.game—where Mahabharat & Ramayan meet fun word games.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid Skeleton */}
      <BlogGridSkeleton count={6} />

    </div>
  );
  }

  if (blogPostsData.state === "hasError") {
    return <div>Error loading blog posts</div>;
  }

  const { blogs, totalPages } = blogPostsData.contents;
  const paginatedPosts: BlogPosts[] = blogs;

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    try {
    const res = await fetch(
      `${import.meta.env.VITE_GOOGLE_SHEET_API}`,
      {
        method: "POST",
        // ✅ text/plain avoids preflight
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ email }),
      }
    );

    const data = await res.json();

    if (!data?.success) {
      toast.error(data?.error || "Subscription failed");
      return;
    }

    toast.success(data.duplicate ? "You're already subscribed ✅" : "Thank you for subscribing! 🎉");
    setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-blog-cream">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-blog-cream/80 backdrop-blur-md border-b border-blog-brown/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 font-display text-2xl md:text-3xl font-bold text-blog-brown tracking-tight">
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
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-blog-brown/70 hover:text-blog-brown transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-blog-brown/70 hover:text-blog-brown transition-colors font-medium">About</Link>
              <Link to="/blog" className="text-blog-brown font-medium">Blog</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-blog-brown"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blog-cream border-t border-blog-brown/10"
          >
            <div className="px-4 py-4 space-y-3">
              <Link to="/" className="text-blog-brown/70 hover:text-blog-brown transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-blog-brown/70 hover:text-blog-brown transition-colors font-medium">About</Link>
              <Link to="/blog" className="text-blog-brown font-medium">Blog</Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-blog-brown/10 rounded-full text-blog-brown text-sm font-medium mb-6">
              Stories & Insights
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blog-brown leading-tight mb-6">
              Lipi Games Blog, <br className="hidden sm:block" />
              <span className="text-blog-brown/60">Epics & Updates</span>
            </h1>
            <p className="text-blog-brown/70 text-lg md:text-xl max-w-2xl mx-auto">
              Fresh stories, product updates, and behind-the-scenes insights from Lipi.game—where Mahabharat & Ramayan meet fun word games.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {paginatedPosts.map((post) => (
            <motion.article 
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blog-brown/10 rounded-full text-xs font-medium text-blog-brown">
                        {post.category}
                      </span>
                      <span className="text-blog-brown/50 text-sm">{Math.round((post.content.length/60)/60)+" min read"}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-blog-brown mb-3 group-hover:text-blog-brown/80 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-blog-brown/60 text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blog-brown/40 text-sm">{post.date}</span>
                      <span className="flex items-center gap-1 text-blog-brown font-medium text-sm group-hover:gap-2 transition-all">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 border-blog-brown/20 text-blog-brown hover:bg-blog-brown hover:text-blog-cream disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
            <span>Previous</span>
          </Button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full font-medium transition-all ${
                  currentPage === page
                    ? "bg-blog-brown text-blog-cream"
                    : "bg-blog-brown/10 text-blog-brown hover:bg-blog-brown/20"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 border-blog-brown/20 text-blog-brown hover:bg-blog-brown hover:text-blog-cream disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <ChevronRight size={18} />
          </Button>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-blog-brown rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-blog-cream/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Mail className="w-8 h-8 text-blog-cream" />
              </motion.div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-blog-cream mb-4">
                Stay in the Loop
              </h2>
              <p className="text-blog-cream/70 text-lg max-w-xl mx-auto mb-8">
                Get the latest articles, insights, and creative inspiration delivered straight to your inbox. No spam, just good stuff.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-white/10 border-white/20 text-blog-cream placeholder:text-blog-cream/50 rounded-xl focus:ring-2 focus:ring-blog-cream/30"
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-white text-orange-600 font-bold rounded-full hover:bg-white/90 transition-all shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-4 h-4 border-2 border-orange-600 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
              
              <p className="text-blog-cream/50 text-sm mt-4">
                Join 5,000+ readers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-blog-brown/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="flex items-center gap-2 font-display text-2xl font-bold text-blog-brown">
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
            </span>
            <div className="flex items-center gap-6 text-blog-brown/60 text-sm">
              <span className="hover:text-blog-brown transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-blog-brown transition-colors cursor-pointer">Terms</span>
            </div>
            <p className="text-blog-brown/40 text-sm">© 2024 Lipi.Game. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;