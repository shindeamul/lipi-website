import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface HeroTitleProps {
    showOnlyJourneyText?: boolean;
}

export const HeroTitle = ({ showOnlyJourneyText = false }: HeroTitleProps) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    if (showOnlyJourneyText) {
        return (
            <motion.div
                className="relative z-20 flex flex-col items-center justify-center text-center px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Decorative Line */}
                <motion.div
                    className="w-20 sm:w-28 md:w-36 h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent mb-20"
                    variants={itemVariants}
                />

            </motion.div>
        );
    }

    return (
        <motion.div
            className="relative z-40 flex flex-col items-center justify-center text-center px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Main Title - LIPI GAMES */}
            <motion.h1
                className="title-gold text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
                variants={itemVariants}
            >
                LIPI GAMES
            </motion.h1>

            {/* Subtitle - MAHABHARAT & RAMAYANA */}
            <motion.h2
                className="title-gold text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-[0.3em] sm:tracking-[0.4em] mb-8"
                variants={itemVariants}
            >
                MAHABHARAT & RAMAYANA
            </motion.h2>

            {/* Decorative Line */}
            <motion.div
                className="w-20 sm:w-28 md:w-36 h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent mb-8"
                variants={itemVariants}
            />


        </motion.div>
    );
};

export default HeroTitle;
