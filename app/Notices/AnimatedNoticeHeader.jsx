"use client"
import { motion } from "framer-motion";
import { Clipboard, Bell, FileText, Sparkles } from "lucide-react";

const AnimatedNoticeHeader = () => {
    return (
        <motion.div
            className="inline-block relative overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Background gradient with animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                style={{ backgroundSize: "200% 200%" }}
            />

            {/* Decorative elements */}
            <motion.div
                className="absolute -top-2 -right-2 text-yellow-300"
                animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <Sparkles size={24} />
            </motion.div>

            <motion.div
                className="absolute -bottom-2 -left-2 text-yellow-300"
                animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <Sparkles size={20} />
            </motion.div>

            {/* Main content */}
            <div className="relative flex items-center justify-center py-3 px-6 rounded-full shadow-lg">
                {/* Animated icon */}
                <motion.div
                    className="mr-3 text-white"
                    animate={{
                        rotate: [0, 10, -10, 0],
                        y: [0, -3, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <Clipboard size={28} strokeWidth={2.5} />
                </motion.div>

                {/* Animated text */}
                <motion.h1
                    className="text-xl merriweather md:text-2xl font-medium text-white"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Official Notices
                </motion.h1>

                {/* Notification badge */}
                <motion.div
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 0.8,
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }}
                >
                    <Bell size={14} />
                </motion.div>
            </div>

            {/* Floating paper animation */}
            <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/20"
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <FileText size={40} />
            </motion.div>
        </motion.div>
    );
};

export default AnimatedNoticeHeader;