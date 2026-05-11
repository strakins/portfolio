import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getPosts, BlogPost } from "../lib/store";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">Insights & <span className="text-gradient">Writing.</span></h1>
            <p className="text-lg text-slate-400 max-w-xl">
              Thoughts on software engineering, product design, and building the web.
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="group flex flex-col md:flex-row gap-6 md:items-center justify-between p-8 rounded-3xl bg-[#111827] border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                    <span className="text-blue-400">{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-slate-400 leading-relaxed md:line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/5 transition-all">
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
          
          {posts.length === 0 && (
            <div className="text-center py-20 bg-[#111827] rounded-3xl border border-white/5">
              <p className="text-slate-400">No blog posts found. They can be created in the Admin panel.</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
