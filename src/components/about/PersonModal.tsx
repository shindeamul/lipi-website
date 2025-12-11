import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Mail, MapPin } from "lucide-react";

interface Person {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  fullBio?: string;
  location?: string;
  email?: string;
}

interface PersonModalProps {
  person: Person | null;
  isOpen: boolean;
  onClose: () => void;
}

const PersonModal = ({ person, isOpen, onClose }: PersonModalProps) => {
  if (!person) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <motion.div
              className="relative w-full max-w-lg bg-gradient-to-b from-card/95 to-background/95 backdrop-blur-xl rounded-3xl border border-primary/20 overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50, rotateX: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-primary/20 blur-3xl" />
              
              {/* Close button */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-foreground" />
              </motion.button>

              {/* Content */}
              <div className="relative p-8 pt-6">
                {/* Image */}
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", damping: 15 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-transparent animate-pulse" />
                  <img
                    src={person.image}
                    alt={person.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-primary/30"
                  />
                  <motion.div
                    className="absolute -inset-2 rounded-full border-2 border-primary/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Info */}
                <motion.div
                  className="text-center space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-foreground">{person.name}</h3>
                  <p className="text-primary font-medium">{person.role}</p>
                  
                  {person.location && (
                    <p className="flex items-center justify-center gap-2 text-foreground/60 text-sm">
                      <MapPin size={14} />
                      {person.location}
                    </p>
                  )}
                </motion.div>

                {/* Bio */}
                <motion.div
                  className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {person.fullBio || person.bio}
                  </p>
                </motion.div>

                {/* Links */}
                <motion.div
                  className="mt-6 flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={18} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </motion.a>
                  
                  {person.email && (
                    <motion.a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-foreground hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail size={18} />
                      <span className="text-sm font-medium">Email</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Bottom decorative line */}
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PersonModal;
