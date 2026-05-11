import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, MonitorPlay } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { Button } from "../components/ui/Button";

// Mock data map
const projectsData = {
  "fintech-dashboard": {
    title: "Fintech Analytics Dashboard",
    category: "Web Application",
    description: "A high-performance financial analytics dashboard designed for enterprise users, capable of rendering large datasets with WebGL and React.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion", "Vite"],
    overview: "Built to handle thousands of real-time transactions with zero-latency updates. The dashboard uses optimisitic UI patterns and virtualization to maintain 60FPS scrolling even when visualizing massive datasets.",
    challenges: "The primary challenge was optimizing the rendering pipeline. Raw transaction events were flooding the React state, causing severe lag.",
    solutions: "Implemented RxJS for event debouncing and React-Window for DOM virtualization. Shifted heavy computations to Web Workers.",
  },
  "ecommerce-platform": {
    title: "Headless E-Commerce Platform",
    category: "Full Stack",
    description: "A modern, ultra-fast headless e-commerce store utilizing Next.js, Stripe for payments, and Sanity CMS for product management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Sanity CMS"],
    overview: "A premium commerce experience crafted for conversion rate optimization. Focused on sub-second page loads and seamless, multi-step checkout flows.",
    challenges: "Integrating dynamic inventory counts with edge-cached product pages without sacrificing TTFB (Time to First Byte).",
    solutions: "Used ISR (Incremental Static Regeneration) alongside SWR for client-side inventory hydration during checkout.",
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  // Safe fallback
  const project = (slug && projectsData[slug as keyof typeof projectsData]) || projectsData["fintech-dashboard"];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex gap-4 items-center mb-6">
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded-full">{project.category}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">{project.title}</h1>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">{project.description}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl overflow-hidden mb-16 border border-white/10 aspect-video relative"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16">
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Overview</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{project.overview}</p>
            </section>
            
            <section>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Challenges</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{project.challenges}</p>
            </section>

            <section>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Solutions</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{project.solutions}</p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-3xl bg-[#111827] border border-white/5">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-slate-500 mb-6">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-black/40 rounded-lg text-xs font-medium text-slate-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 space-y-4">
              <Button href="#" className="w-full" variant="primary">
                <MonitorPlay size={16} /> Live Demo
              </Button>
              <Button href="#" className="w-full" variant="outline">
                <Github size={16} /> View Source
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
