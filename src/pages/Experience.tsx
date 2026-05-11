import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const experienceData = [
  {
    role: "Senior Frontend Engineer",
    company: "TechNova Solutions",
    period: "2023 - Present",
    description: "Leading the frontend architectural decisions for a suite of enterprise SaaS products. Improved core web vitals by 40%.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    role: "Full Stack Developer",
    company: "Elevate Digital",
    period: "2021 - 2023",
    description: "Built and maintained custom e-commerce platforms. Implemented server-side rendering strategies and integrated headless CMS setups.",
    tech: ["Node.js", "Express", "React", "PostgreSQL", "Stripe"]
  },
  {
    role: "UI/UX Designer",
    company: "Creative Studio",
    period: "2019 - 2021",
    description: "Designed high-converting landing pages and intuitive web application interfaces. Established comprehensive design systems.",
    tech: ["Figma", "Framer", "Webflow", "Illustrator"]
  }
];

export default function Experience() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">Work <span className="text-gradient">Experience.</span></h1>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-16 py-8">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 lg:gap-12"
            >
              <div className="absolute w-4 h-4 rounded-full bg-blue-500 -left-[8.5px] top-1.5 ring-4 ring-[#0B0F14]" />
              
              <div className="pt-1">
                <span className="text-sm font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-md">{exp.period}</span>
              </div>
              
              <div>
                <h3 className="text-2xl font-display font-bold tracking-tight mb-1">{exp.role}</h3>
                <h4 className="text-lg text-blue-400 font-medium mb-6">{exp.company}</h4>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-[#111827] border border-white/5 rounded text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
