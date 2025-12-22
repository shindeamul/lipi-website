import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Heart, Bookmark, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { BlogPosts } from "./Blog";
import { BlogBySlugAtom } from "@/store/atoms/blogBySlugAtom";
import BlogPostSkeleton from "@/components/blog/BlogPostSkeletion";
import lipiLogo from "@/assets/lipi-logo.png";


const BlogPost = () => {
  const { slug } = useParams();
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const postData = useRecoilValueLoadable(BlogBySlugAtom(slug));

  if (postData.state === "loading") {
    return <BlogPostSkeleton/>
  }

  if (postData.state === "hasError") {
    return <div>Error loading blog posts</div>;
  }

  const post = postData.contents;

  if (!post) {
    return (
      <div className="min-h-screen bg-blog-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-blog-brown mb-4">Post not found</h1>
          <Link to="/blog">
            <Button variant="outline" className="border-blog-brown text-blog-brown hover:bg-blog-brown hover:text-blog-cream">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    toast({
      title: `Shared on ${platform}`,
      description: "Thanks for sharing this article!",
    });
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
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setLiked(!liked)}
                className={`p-2 rounded-full transition-colors ${
                  liked ? "bg-red-100 text-red-500" : "bg-blog-brown/5 text-blog-brown/50 hover:text-blog-brown"
                }`}
              >
                <Heart size={20} fill={liked ? "currentColor" : "none"} />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setSaved(!saved)}
                className={`p-2 rounded-full transition-colors ${
                  saved ? "bg-blog-brown/20 text-blog-brown" : "bg-blog-brown/5 text-blog-brown/50 hover:text-blog-brown"
                }`}
              >
                <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
              </motion.button>
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
            <span className="px-3 py-1 bg-blog-brown/10 rounded-full text-sm font-medium text-blog-brown">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-blog-brown/50 text-sm">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-blog-brown/50 text-sm">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-blog-brown leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-blog-brown/10">
            <img 
              src={'https://github.com/shadcn.png'} 
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-blog-brown">{post.author}</p>
              <p className="text-sm text-blog-brown/50">{"Lipi"}</p>
            </div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 rounded-2xl overflow-hidden flex justify-center"
          >
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-1/2 h-auto object-cover aspect-video"
            />
          </motion.div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            
            <div
              className="text-blog-brown/80 leading-relaxed mb-6 text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }} // Render content as HTML
            />

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-blog-brown/10"
            >
              <h3 className="text-sm font-medium text-blog-brown/60 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-blog-brown/5 hover:bg-blog-brown/10 rounded-full text-sm text-blog-brown font-medium transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
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
                <div className="flex items-center gap-2 text-blog-brown/60">
                  <Share2 size={18} />
                  <span className="font-medium">Share this article</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleShare("Twitter")}
                    className="p-3 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-full hover:bg-[#1DA1F2]/20 transition-colors"
                  >
                    <Twitter size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleShare("Facebook")}
                    className="p-3 bg-[#4267B2]/10 text-[#4267B2] rounded-full hover:bg-[#4267B2]/20 transition-colors"
                  >
                    <Facebook size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleShare("LinkedIn")}
                    className="p-3 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full hover:bg-[#0A66C2]/20 transition-colors"
                  >
                    <Linkedin size={18} />
                  </motion.button>
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
          <div className="flex items-center gap-6 text-blog-brown/60 text-sm">
            <span className="hover:text-blog-brown transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-blog-brown transition-colors cursor-pointer">Terms</span>
          </div>
          <p className="text-blog-brown/40 text-sm">© 2024 Lipi.Game. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;