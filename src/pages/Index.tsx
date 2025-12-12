import HeroSection from "@/components/hero/HeroSection";
import GamesSection from "@/components/games/GamesSection";
import ExpertsSection from "@/components/experts/ExpertsSection";
import AboutSection from "@/components/about/AboutSection";
import BlogSection from "@/components/blog/BlogSection";
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <GamesSection />
      <ExpertsSection />
      <AboutSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
