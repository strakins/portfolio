import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layout as LayoutIcon, Smartphone, Zap } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { Button } from "../components/ui/Button";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-4xl mx-auto pt-4 md:pt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1 
          className="text-2xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Building Digital <br />
          <span className="text-gradient">Products That Solve</span> <br />
          <span className="text-white">Real Problems.</span>
        </motion.h1>

        <motion.p 
          className="text-md md:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Full-stack developer and UI designer creating scalable web and mobile experiences with modern technologies. I bridge the gap between design and engineering.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button href="/projects" size="lg" className="w-full sm:w-auto">
            View Projects <ArrowRight size={18} />
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Services Snapshot */}
      <motion.div 
        className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="p-8 rounded-3xl bg-[#111827] border border-white/5 hover:border-white/10 transition-colors group">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
            <LayoutIcon size={24} />
          </div>
          <h3 className="text-xl font-display font-semibold mb-3">UI/UX Design</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Crafting premium, intuitive, and user-centric interfaces that feel native and communicate trust.</p>
        </div>
        <div className="p-8 rounded-3xl bg-[#111827] border border-white/5 hover:border-white/10 transition-colors group">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
            <Code size={24} />
          </div>
          <h3 className="text-xl font-display font-semibold mb-3">Frontend Eng.</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Building interactive, highly responsive, and accessible web applications using React, Next.js, and Tailwind.</p>
        </div>
        <div className="p-8 rounded-3xl bg-[#111827] border border-white/5 hover:border-white/10 transition-colors group">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-display font-semibold mb-3">Backend & Systems</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Designing scalable architectures, APIs, and databases with Node.js, Prisma, and PostgreSQL.</p>
        </div>
      </motion.div>

      {/* Featured Projects Preview */}
      <motion.div 
        className="mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">Selected Work</h2>
            <p className="text-slate-400 max-w-xl">A curated selection of my recent projects, highlighting my full-stack capabilities.</p>
          </div>
          <Button href="/projects" variant="ghost" className="hidden md:flex">
            All Projects <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mock Project 1 */}
          <Link to="/projects/fintech-dashboard" className="group rounded-3xl overflow-hidden bg-[#111827] border border-white/5 block relative aspect-[4/3] md:aspect-auto md:h-[500px]">
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <div className="flex gap-3 mb-4 opacity-0 y-4 group-hover:opacity-100 group-hover:transform-none transition-all duration-300 translate-y-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium">React</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium">Tailwind</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Fintech Dashboard UI</h3>
              <p className="text-slate-300 text-sm line-clamp-2">A high-performance analytics dashboard designed to process millions of transactions with real-time feedback.</p>
            </div>
            {/* Placeholder Image */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" />
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" alt="Fintech" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 Mix-blend-overlay" />
          </Link>
          
          {/* Mock Project 2 */}
          <Link to="/projects/ecommerce-platform" className="group rounded-3xl overflow-hidden bg-[#111827] border border-white/5 block relative aspect-[4/3] md:aspect-auto md:h-[500px]">
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <div className="flex gap-3 mb-4 opacity-0 y-4 group-hover:opacity-100 group-hover:transform-none transition-all duration-300 translate-y-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium">Next.js</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium">Stripe</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Premium E-Commerce</h3>
              <p className="text-slate-300 text-sm line-clamp-2">A headless commerce platform built with a modern stack focusing on ultra-fast conversions.</p>
            </div>
            {/* Placeholder Image */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-900/40 to-emerald-900/40 opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" />
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" alt="E-Commerce" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay" />
          </Link>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button href="/projects" variant="outline" className="w-full">
            All Projects
          </Button>
        </div>
      </motion.div>
    </PageTransition>
  );
}
