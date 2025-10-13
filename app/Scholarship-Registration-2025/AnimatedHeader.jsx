import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeader = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="text-center mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-sm mb-4 mt-4"
        variants={itemVariants}
        whileHover={{
          scale: 1.02,
          textShadow: "0 0 8px rgba(99, 102, 241, 0.5)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        Scholarship Registration Form
      </motion.h1>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed"
        variants={itemVariants}
        whileHover={{
          color: "#4f46e5",
          transition: { duration: 0.3 }
        }}
      >
        Please fill in all the required information carefully to apply for the scholarship program.
      </motion.p>

      {/* Animated underline decoration */}
      <motion.div
        className="mt-4 flex justify-center"
        variants={underlineVariants}
      >
        <motion.span
          className="inline-block w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
          whileHover={{
            width: "8rem",
            transition: { duration: 0.3 }
          }}
          whileInView={{
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
        ></motion.span>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeader;