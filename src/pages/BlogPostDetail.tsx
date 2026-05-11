import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { getPostById, BlogPost } from "../lib/store";

export default function BlogPostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (id) {
      const foundPost = getPostById(id);
      if (foundPost) {
        setPost(foundPost);
      } else {
        navigate("/blog");
      }
    }
  }, [id, navigate]);

  if (!post) return null;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex gap-4 items-center mb-6 text-sm">
            <span className="text-blue-400 font-semibold tracking-wider uppercase border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-slate-400">{post.date}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-400">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 leading-[1.2]">{post.title}</h1>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">{post.excerpt}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-300"
        >
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="mb-6 text-lg leading-relaxed">{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
