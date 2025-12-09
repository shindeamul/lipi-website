import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="border-primary/30 bg-background/95 backdrop-blur-xl sm:max-w-md overflow-hidden p-0">
            {/* Decorative golden border glow */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                boxShadow: "inset 0 0 60px hsl(38 70% 50% / 0.15), 0 0 80px hsl(38 70% 50% / 0.2)",
              }}
            />
            
            {/* Inner content */}
            <div className="relative p-8">
              {/* Animated corner decorations */}
              <motion.div
                className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary/50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />

              <DialogHeader className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <DialogTitle className="text-center font-fantasy text-2xl tracking-[0.2em] title-gold">
                    BEGIN YOUR JOURNEY
                  </DialogTitle>
                  <p className="text-center text-muted-foreground mt-3 font-elegant text-lg">
                    Download the app and embark on an epic adventure
                  </p>
                </motion.div>
              </DialogHeader>

              <div className="space-y-4">
                {/* Android Button */}
                <motion.button
                  className="download-btn group relative w-full py-4 px-6 rounded-lg border border-primary/40 bg-secondary/30 backdrop-blur-sm overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open("#android", "_blank")}
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="relative flex items-center justify-center gap-4">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.341a.5.5 0 0 0-.78-.609l-1.584 2.023a.5.5 0 0 0 .39.814h3.18a.5.5 0 0 0 .39-.814l-1.596-2.023zM6.477 15.341a.5.5 0 0 1 .78-.609l1.584 2.023a.5.5 0 0 1-.39.814H5.27a.5.5 0 0 1-.39-.814l1.597-2.023z"/>
                      <path d="M3 11.5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5.5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5.5z"/>
                      <path d="M12 2a7 7 0 0 1 7 7v1.5H5V9a7 7 0 0 1 7-7z"/>
                      <circle cx="9" cy="7" r="1" fill="hsl(var(--background))"/>
                      <circle cx="15" cy="7" r="1" fill="hsl(var(--background))"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Download on</p>
                      <p className="font-fantasy text-lg text-foreground tracking-wider group-hover:text-primary transition-colors">Google Play</p>
                    </div>
                  </div>
                </motion.button>

                {/* iOS Button */}
                <motion.button
                  className="download-btn group relative w-full py-4 px-6 rounded-lg border border-primary/40 bg-secondary/30 backdrop-blur-sm overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open("#ios", "_blank")}
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="relative flex items-center justify-center gap-4">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Download on</p>
                      <p className="font-fantasy text-lg text-foreground tracking-wider group-hover:text-primary transition-colors">App Store</p>
                    </div>
                  </div>
                </motion.button>
              </div>

              {/* Decorative divider */}
              <motion.div
                className="mt-8 flex items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                <div className="w-2 h-2 rotate-45 border border-primary/50" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
              </motion.div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default DownloadModal;
