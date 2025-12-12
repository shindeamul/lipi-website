import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  expertName: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, expertName }: VideoModalProps) => {
  // Demo video URL if none provided
  const demoVideoUrl = videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ";
  
  // Convert YouTube URL to embed format if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return url;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative z-10 w-full max-w-4xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Expert Name */}
            <motion.h3
              className="text-white text-xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {expertName}
            </motion.h3>

            {/* Video Container */}
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 border border-orange-500/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-orange-400/50 rounded-tl-2xl pointer-events-none z-10" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-orange-400/50 rounded-tr-2xl pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-orange-400/50 rounded-bl-2xl pointer-events-none z-10" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-orange-400/50 rounded-br-2xl pointer-events-none z-10" />

              <iframe
                src={getEmbedUrl(demoVideoUrl)}
                title={`Video from ${expertName}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
