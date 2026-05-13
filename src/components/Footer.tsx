import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 z-10 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold tracking-tight text-white mb-6 block">
              Blessing.
            </Link>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-8">
              Building digital products that solve real problems. Specializing in modern web technologies, premium UI/UX, and scalable architectures.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/strakins" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all">
                <Github size={18} />
              </a>
              <a href="https://x.com/straksman" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/blessing-akinola-a567a4389/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:akinolablessing25@gmail.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-white text-sm transition-colors">Projects</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link to="/experience" className="text-slate-400 hover:text-white text-sm transition-colors">Resume</Link></li>
              <li><Link to="/skills" className="text-slate-400 hover:text-white text-sm transition-colors">Tech Stack</Link></li>
              <li className="mt-4"><Link to="/admin" className="text-blue-400 hover:text-blue-300 text-xs font-semibold tracking-wider uppercase transition-colors">Admin Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Blessing Akinola. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
