"use client"
import { motion } from "framer-motion";
import { BookOpen, Star, Award, Lightbulb, Users } from "lucide-react";

const AnimatedTeachersGuidelines = () => {
    return (
        <motion.div
            className="md:inline-block relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Animated background with multiple gradients */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-full"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 100%" }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                style={{ backgroundSize: "300% 300%" }}
            />

            {/* Decorative elements */}
            <motion.div
                className="absolute -top-3 -right-3 text-yellow-300"
                animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <Star size={28} fill="currentColor" />
            </motion.div>

            <motion.div
                className="absolute -bottom-3 -left-3 text-amber-300"
                animate={{
                    rotate: [0, -20, 20, 0],
                    scale: [1, 1.15, 1],
                    opacity: [0.8, 1, 0.8]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <Lightbulb size={24} fill="currentColor" />
            </motion.div>

            {/* Main content */}
            <div className="relative flex items-center justify-center py-4 px-6 lg:px-8 rounded-full shadow-xl">
                {/* Animated main icon */}
                <motion.div
                    className="mr-4 text-white"
                    animate={{
                        rotate: [0, 5, -5, 0],
                        y: [0, -5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <BookOpen size={24} strokeWidth={2.5} />
                </motion.div>

                {/* Animated text with stagger effect */}
                <motion.h1
                    className="text-xl md:text-3xl merriweather font-medium text-white"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Teachers' Guidelines
                </motion.h1>

                {/* Excellence badge */}
                <motion.div
                    className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.6,
                        type: "spring",
                        stiffness: 500,
                        damping: 15
                    }}
                >
                    <Award size={18} />
                </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
                className="absolute -bottom-10 left-1/4 text-white/30"
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                    opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <Users size={36} />
            </motion.div>

            <motion.div
                className="absolute -bottom-8 right-1/4 text-white/30"
                animate={{
                    y: [0, -12, 0],
                    rotate: [0, -8, 8, 0],
                    opacity: [0.5, 0.9, 0.5]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                }}
            >
                <BookOpen size={32} />
            </motion.div>

            {/* Subtle pulse effect */}
            <motion.div
                className="absolute inset-0 rounded-full border-4 border-white/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
        </motion.div>
    );
};

export default AnimatedTeachersGuidelines;