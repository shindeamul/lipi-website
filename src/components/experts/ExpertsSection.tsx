import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

interface Expert {
  id: number;
  name: string;
  title: string;
  videoThumbnail: string;
  videoUrl?: string;
}

const experts: Expert[] = [
  {
    id: 1,
    name: "Sri Sri Sri Tridandi Chinna Jeeyar Swamiji",
    title: "Spiritual Leader",
    videoThumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    name: "Yandamoori Veerendranath",
    title: "Novelist & Screenwriter",
    videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    name: "Dr. K Brahmanandam",
    title: "Indian Film Actor",
    videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const ExpertVideoCard = ({ 
  expert, 
  index,
  onPlay 
}: { 
  expert: Expert; 
  index: number;
  onPlay: (expert: Expert) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="relative group cursor-pointer"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onClick={() => onPlay(expert)}
    >
      {/* Video Thumbnail Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
        {/* Thumbnail Image */}
        <img
          src={expert.videoThumbnail}
          alt={expert.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Play Button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="relative"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(251, 146, 60, 0.4)",
                "0 0 0 20px rgba(251, 146, 60, 0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 transition-all duration-300 group-hover:from-orange-500 group-hover:to-orange-700">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
            </div>
          </motion.div>
        </motion.div>

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-orange-500/20 to-transparent pointer-events-none" />
      </div>

      {/* Expert Info */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
          {expert.name}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          {expert.title}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ExpertsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = (expert: Expert) => {
    setSelectedExpert(expert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExpert(null);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="experts"
        className="relative py-20 md:py-32 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block text-orange-400 text-sm md:text-base font-medium tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Words from{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Experts
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Hear what renowned personalities have to say about our language learning journey
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
            {experts.map((expert, index) => (
              <ExpertVideoCard 
                key={expert.id} 
                expert={expert} 
                index={index}
                onPlay={handlePlayVideo}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm md:text-base">
              Join thousands of learners who have transformed their language skills
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl={selectedExpert?.videoUrl}
        expertName={selectedExpert?.name || ""}
      />
    </>
  );
};

export default ExpertsSection;
