import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CallToActionPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already seen and dismissed the popup
    const hasSeen = localStorage.getItem("hasSeenPortfolioPopup");
    if (hasSeen) return;

    let timerStarted = false;

    // Start a 30 second timer when the user begins interacting (scrolling)
    const handleFirstScroll = () => {
      if (!timerStarted) {
        timerStarted = true;
        setTimeout(() => {
          setIsVisible(true);
          // Save to local storage so it doesn't pop up on every page load
          localStorage.setItem("hasSeenPortfolioPopup", "true");
        }, 30000); // 30 seconds
      }
    };

    window.addEventListener("scroll", handleFirstScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleFirstScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] p-6 rounded-3xl bg-[#111827] border border-white/10 shadow-2xl max-w-[320px]"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
          <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          </div>
          <h4 className="text-xl font-display font-bold mb-2 pr-4 text-white">Enjoying the experience?</h4>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Take a deeper dive into some of my past works and explore the engineering behind them.
          </p>
          <Link
            to="/projects"
            onClick={() => setIsVisible(false)}
            className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-black rounded-xl font-medium hover:bg-slate-200 transition-colors"
          >
            See my works <ArrowRight size={16} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
