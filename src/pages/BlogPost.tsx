import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { BlogPosts, blogPosts } from "@/data/blogPosts";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import NewsletterSection from "@/components/newsletter/NewsletterSection";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [post, setPost] = useState<BlogPosts | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  window.scrollTo(0, 0);

    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(
      `${import.meta.env.VITE_GOOGLE_SHEET_API}?action=blog&slug=${encodeURIComponent(slug)}`
    )
      .then((res) => res.json())
      .then((data) => setPost(data?.success ? data.blog : null))
      .catch((err) => {
        console.error(err);
        setPost(null);
      }).finally(() => setLoading(false));

  }, [slug]);


  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };
    window.open(urls[platform], "_blank", "width=600,height=400");
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Lipi Games Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.imageUrl} />
        <link rel="canonical" href={shareUrl} />
      </Helmet>

      <main className="min-h-screen bg-background">
        <StickyHeader />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            {/* Back Button */}
            <motion.button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-orange-400 transition-colors mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </motion.button>

            {/* Category */}
            <br/>
            <motion.span
              className="inline-block px-4 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {post.category}
            </motion.span>

            {/* Title */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {post.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {Math.round((post.content.length/60)/60)+" min read"}
              </span>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-6xl mx-auto">
              {/* Main Content */}
              <motion.article
                className="prose prose-lg prose-invert max-w-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Featured Image */}
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-auto rounded-2xl mb-8 shadow-xl"
                />

                {/* Content */}
                <div
                  className="blog-content text-foreground/90 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </motion.article>

              {/* Sidebar */}
              <motion.aside
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Share Section */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-orange-400" />
                    Share Article
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="flex-1 p-3 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Facebook className="w-5 h-5 mx-auto" />
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex-1 p-3 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Twitter className="w-5 h-5 mx-auto" />
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex-1 p-3 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Linkedin className="w-5 h-5 mx-auto" />
                    </button>
                  </div>
                </div>

                {/* Tags Section */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-orange-400" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 10).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-orange-500/20 hover:text-orange-400 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <NewsletterSection />
        <Footer />
      </main>
    </>
  );
};

export default BlogPost;