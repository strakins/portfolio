import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  enter: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className="w-full min-h-[calc(100vh-200px)] pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto"
    >
      {children}
    </motion.div>
  );
}
