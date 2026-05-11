import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { Button } from "../components/ui/Button";

const projects = [
  {
    id: "fintech-dashboard",
    title: "Fintech Analytics Dashboard",
    category: "Web Application",
    description: "A high-performance financial analytics dashboard designed for enterprise users, capable of rendering large datasets with WebGL and React.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    tech: ["React", "TypeScript", "Tailwind", "Recharts"],
  },
  {
    id: "ecommerce-platform",
    title: "Headless E-Commerce",
    category: "Full Stack",
    description: "A modern, ultra-fast headless e-commerce store utilizing Next.js App Router, Stripe for payments, and Sanity CMS for product management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
  },
  {
    id: "ai-content-generator",
    title: "AI Story Studio",
    category: "AI Integration",
    description: "A SaaS tool that generates illustrated stories using the Gemini API for narrative generation and custom prompt-driven imagery.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    tech: ["React", "Node.js", "Gemini API", "Framer Motion"],
  },
  {
    id: "smart-task-manager",
    title: "Linear-style Task Manager",
    category: "Productivity",
    description: "A keyboard-first, highly responsive task tracking application inspired by Linear, featuring optimisitic UI updates and offline support.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
    tech: ["React Router", "Zustand", "Tailwind", "Vite"],
  }
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">Works & <span className="text-gradient">Projects</span></h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            A showcase of my technical and design capabilities. I build applications that are fast, accessible, and visually striking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/projects/${project.id}`} className="block relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/10 bg-[#111827]">
                <div className="absolute inset-0 bg-[#000000] z-10 opacity-10 group-hover:opacity-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/80 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-overlay opacity-60 group-hover:opacity-100"
                />
                
                {/* Tech Badges on Hover */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] uppercase tracking-wider font-semibold border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">{project.category}</span>
                  <div className="flex gap-3">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={18} /></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
