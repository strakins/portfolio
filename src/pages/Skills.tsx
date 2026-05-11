import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and highly interactive client applications.",
    skills: [
      { name: "React / React Native", level: 95 },
      { name: "Next.js / App Router", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Zustand / Redux", level: 90 },
    ]
  },
  {
    title: "Backend & Cloud",
    description: "Designing scalable APIs, database schemas, and deploying serverless functions.",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "PostgreSQL / Prisma", level: 80 },
      { name: "Firebase", level: 90 },
      { name: "Vercel / Edge", level: 85 },
      { name: "REST / GraphQL", level: 85 },
    ]
  },
  {
    title: "Design & Tools",
    description: "Creating high-fidelity mockups, managing versions, and testing.",
    skills: [
      { name: "Figma / FigJam", level: 90 },
      { name: "Git / GitHub Actions", level: 85 },
      { name: "Jest / Cypress", level: 75 },
      { name: "UI/UX Prototyping", level: 95 },
      { name: "Stripe API", level: 80 },
    ]
  }
];

export default function Skills() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">Tech <span className="text-gradient">Stack.</span></h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            My absolute focus is right tool for the right job. I specialize in the modern JavaScript ecosystem but adapt quickly to any environment.
          </p>
        </motion.div>

        <div className="space-y-24">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start"
            >
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">{category.title}</h3>
                <p className="text-slate-400">{category.description}</p>
              </div>

              <div className="space-y-8 p-8 rounded-3xl bg-[#111827] border border-white/5">
                {category.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-3 text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 w-1/3 animate-[translateX_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
