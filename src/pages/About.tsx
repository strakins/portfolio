
import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Button } from "../components/ui/Button";
import { Download } from "lucide-react";
import My_Pics from '../../public/images/hero.png';

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">About <span className="text-gradient-accent">Me.</span></h1>
              <div className="space-y-6 text-base md:text-lg text-slate-300 leading-relaxed font-light">
                <p>
                  I'm Blessing, a Full-Stack Product Engineer with a passion for building software that feels native, interactive, and premium.
                </p>
                <p>
                  My journey started in UI/UX design, which gave me a deep appreciation for typography, space, and motion. I transitioned into engineering because I wanted to bring those designs to life natively, without compromises.
                </p>
                <p>
                  Today, I bridge the gap between design and engineering. I don't just write code; I think about the product lifecycle, scalable architecture, and how every interaction makes the user feel.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-12">
              <h3 className="text-2xl font-display font-bold mb-6">My Philosophy</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-[#111827] border border-white/5">
                  <h4 className="text-lg font-bold mb-2">Design Meets Logic</h4>
                  <p className="text-sm text-slate-400">Beautiful interfaces mean nothing if the underlying architecture is fragile. I strive for robustness under the hood and elegance on the surface.</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#111827] border border-white/5">
                  <h4 className="text-lg font-bold mb-2">Performance is UX</h4>
                  <p className="text-sm text-slate-400">Latency is the enemy of trust. I optimize for TTFB, rely on edge computing, and build optimistic UIs that hide network friction.</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button href="/contact">Get in Touch</Button>
              <Button variant="outline" href="https://drive.google.com/file/d/17cmYGNRcCefWX2cLVEC2_4urzshgKlZZ/view?usp=sharing">
                <Download size={16} /> Resume
              </Button>
            </div>
          </motion.div>

          {/* Sticky Image Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 bg-[#111827] shadow-2xl">
              <div className="absolute inset-0 bg-gradie-to-tr from-blue-900/40 to-transparent z-10" />
              <img 
                src={My_Pics} 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </motion.div>
        
        </div>
      </div>
    </PageTransition>
  );
}
