import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Copy, Layers, Database, Smartphone } from "lucide-react";
import { Button } from "../components/ui/Button";

const services = [
  {
    icon: <Layers size={32} className="text-blue-400" />,
    title: "Full Stack Development",
    description: "End-to-end web application development using React, Next.js, and Node.js. From database architecture to reactive frontends.",
    features: ["Single Page Applications", "Server Side Rendering", "API Development", "Database Architecture"]
  },
  {
    icon: <Copy size={32} className="text-purple-400" />,
    title: "UI/UX Design",
    description: "Premium interface design zeroed in on usability, accessibility, and modern aesthetics. Moving from wireframes to high-fidelity prototypes.",
    features: ["Wireframing & Prototyping", "Design Systems", "Interaction Design", "User Testing"]
  },
  {
    icon: <Smartphone size={32} className="text-teal-400" />,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications built with React Native and Expo, offering a native feel with single-codebase efficiency.",
    features: ["iOS & Android Apps", "React Native", "App Store Deployment", "Mobile UI Guidelines"]
  },
  {
    icon: <Database size={32} className="text-orange-400" />,
    title: "SaaS & Systems Architecture",
    description: "Scalable backend services, payment integration (Stripe), and multi-tenant architectures for modern SaaS products.",
    features: ["Stripe Integration", "Authentication", "Serverless Infrastructure", "Cloud Deployment"]
  }
];

export default function Services() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">Expertise & <span className="text-gradient">Services</span></h1>
          <p className="text-lg text-slate-400">
            Comprehensive product development. I take ideas from concept to production-ready scalable platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-3xl bg-[#111827] border border-white/5 hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-8 p-4 bg-black/40 inline-flex rounded-2xl border border-white/5">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[2.5rem] bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 text-center"
        >
          <h3 className="text-3xl font-display font-bold mb-4">Have a specific project in mind?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Let's discuss how my expertise can help bring your vision to life with precision and scale.</p>
          <Button href="/contact" size="lg">Start a Conversation</Button>
        </motion.div>
      </div>
    </PageTransition>
  );
}
