import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PageTransition from "../components/PageTransition";
import { Mail, MapPin, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    console.log("Form Data:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">Let's build <br/><span className="text-gradient">together.</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 xl:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Contact Details</h3>
              <p className="text-slate-400 mb-8 max-w-sm">
                I'm currently available for freelance work and full-time opportunities. If you are looking for a developer or designer to build your product, let's talk.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:akinolablessing25@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-colors">
                    <Mail size={20} className="group-hover:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Email</p>
                    <p className="text-sm">akinolablessing25@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Location</p>
                    <p className="text-sm">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-8 md:p-12 rounded-3xl bg-[#111827] border border-white/5">
              {isSubmitSuccessful ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Message Sent!</h3>
                  <p className="text-slate-400">Thanks for reaching out. I'll get back to you within 24-48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Name</label>
                       <input 
                         {...register("name")}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 hover:border-white/20 transition-colors"
                         placeholder="John Doe"
                       />
                       {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Email</label>
                       <input 
                         {...register("email")}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 hover:border-white/20 transition-colors"
                         placeholder="john@example.com"
                       />
                       {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Service Needed</label>
                       <select 
                         {...register("service")}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 hover:border-white/20 transition-colors appearance-none"
                       >
                         <option value="">Select a service</option>
                         <option value="frontend">Frontend Development</option>
                         <option value="fullstack">Full Stack App</option>
                         <option value="design">UI/UX Design</option>
                         <option value="other">Other</option>
                       </select>
                       {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Budget Range</label>
                       <select 
                         {...register("budget")}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 hover:border-white/20 transition-colors appearance-none"
                       >
                         <option value="">Select budget</option>
                         <option value="small">&lt; $5k</option>
                         <option value="medium">$5k - $10k</option>
                         <option value="large">$10k - $25k</option>
                         <option value="enterprise">&gt; $25k</option>
                       </select>
                       {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-medium uppercase tracking-wider text-slate-400">Project Details</label>
                     <textarea 
                       {...register("message")}
                       rows={5}
                       className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 hover:border-white/20 transition-colors resize-none"
                       placeholder="Tell me about your project, goals, and timeline..."
                     />
                     {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
