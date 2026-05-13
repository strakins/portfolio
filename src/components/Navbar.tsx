import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "bg-[#0A0F16]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/5" 
            : "bg-transparent py-5",
          mobileMenuOpen && "bg-[#0A0F16]/95 backdrop-blur-xl"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-50 group"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <span className="text-xl sm:text-2xl font-display font-bold tracking-tight">
                <span className="text-white">Blessing</span>
                <span className="text-blue-500">.</span>
              </span>
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                initial={false}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-1 lg:gap-2 bg-white/5 rounded-full px-4 lg:px-6 py-1.5 lg:py-2 border border-white/10 backdrop-blur-md">
              {links.map((link, index) => {
                const isActive = location.pathname === link.path || 
                  (link.path !== '/' && location.pathname.startsWith(link.path));
                
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "relative px-3 lg:px-4 py-1.5 lg:py-2 text-sm font-medium transition-all duration-300 rounded-full",
                        isActive 
                          ? "text-white bg-white/10" 
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="group relative px-5 lg:px-6 py-2 lg:py-2.5 text-sm font-medium border border-purple-500 rounded-full transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 text-white bg-clip-text">
                  Let's Talk
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-[1px] bg-black rounded-full" />
                <div className="absolute inset-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
            </motion.div>
          </motion.button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel - Now with scrollable content */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-40 md:hidden bg-gradient-to-br from-[#0A0F16] to-[#0D1420] shadow-2xl overflow-hidden"
            >
              {/* Scrollable Container */}
              <div className="h-full flex flex-col overflow-y-auto overscroll-contain">
                {/* Custom Scrollbar Styles */}
                <style jsx>{`
                  .menu-scrollbar::-webkit-scrollbar {
                    width: 4px;
                  }
                  .menu-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                  }
                  .menu-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(59, 130, 246, 0.5);
                    border-radius: 10px;
                  }
                  .menu-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(59, 130, 246, 0.8);
                  }
                `}</style>

                {/* Header with close button inside scrollable area */}
                <div className="sticky top-0 z-10 bg-gradient-to-br from-[#0A0F16] to-[#0D1420] pt-6 pb-2 px-6 border-b border-white/10">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-500 font-medium">Menu</div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <X size={18} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Navigation Links - Scrollable */}
                <div className="flex-1 py-6 px-6">
                  <div className="space-y-1">
                    {[...links, { name: "Contact", path: "/contact" }].map((link, index) => {
                      const isActive = location.pathname === link.path || 
                        (link.path !== '/' && location.pathname.startsWith(link.path));
                      
                      return (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Link
                            to={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "group flex items-center justify-between py-4 px-5 rounded-2xl transition-all duration-300",
                              isActive 
                                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white" 
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                          >
                            <span className="text-base font-medium">{link.name}</span>
                            <ChevronRight 
                              size={18} 
                              className={cn(
                                "transition-all duration-300",
                                isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                              )} 
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Additional Options Section */}
                  
                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                      Connect With Me
                    </h3>
                    <div className="flex gap-3">
                      {[
                        { name: "GitHub", icon: "💻", url: "https://github.com/strakins" },
                        { name: "LinkedIn", icon: "🔗", url: "https://www.linkedin.com/in/blessing-akinola-a567a4389/" },
                        { name: "Twitter", icon: "🐦", url: "https://x.com/straksman" },
                      ].map((social, idx) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + idx * 0.05 }}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 text-slate-400 hover:text-white text-sm"
                        >
                          <span>{social.icon}</span>
                          <span>{social.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-gradient-to-br from-[#0A0F16] to-[#0D1420] pt-4 pb-8 px-6 border-t border-white/10">
                  <p className="text-slate-500 text-xs text-center">
                    © 2026 Blessing. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}