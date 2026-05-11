import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenSquare, BarChart3, Settings, Trash2, Plus, ArrowLeft } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { getPosts, savePost, deletePost, BlogPost } from "../lib/store";

export default function Admin() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "blog" | "create">("dashboard");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [analytics, setAnalytics] = useState({ totalViews: 0, uniqueViews: 0, recentPaths: [] as any[] });

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    category: "Engineering",
    excerpt: "",
    content: ""
  });

  useEffect(() => {
    refreshData();
  }, [activeTab]);

  const refreshData = () => {
    setPosts(getPosts());
    
    const countsJson = localStorage.getItem("analytics_counts");
    const counts = countsJson ? JSON.parse(countsJson) : { total: 0, unique: 1 };
    
    const visitsJson = localStorage.getItem("analytics_visits");
    const visits = visitsJson ? JSON.parse(visitsJson) : [];
    
    // Process recent paths to show most visited
    const pathCounts = visits.reduce((acc: any, visit: any) => {
      acc[visit.path] = (acc[visit.path] || 0) + 1;
      return acc;
    }, {});
    
    const sortedPaths = Object.keys(pathCounts)
      .map(path => ({ path, count: pathCounts[path] }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    setAnalytics({
      totalViews: counts.total,
      uniqueViews: counts.unique, // Simulated
      recentPaths: sortedPaths
    });
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    const id = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    const newPost: BlogPost = {
      id: id || `post-${Date.now()}`,
      title: formData.title,
      category: formData.category,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: `${Math.max(1, Math.ceil(formData.content.length / 1000))} min read`,
      excerpt: formData.excerpt,
      content: formData.content
    };
    
    savePost(newPost);
    setFormData({ title: "", category: "Engineering", excerpt: "", content: "" });
    setActiveTab("blog");
  };

  const handleDelete = (id: string) => {
    deletePost(id);
    refreshData();
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-display font-bold mb-2">Admin Workspace</h1>
          <p className="text-slate-400 text-sm">Manage your portfolio content and view local traffic data.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'dashboard' ? 'bg-[#111827] text-white border border-white/10' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
            >
              <BarChart3 size={18} />
              <span className="font-medium text-sm">Analytics</span>
            </button>
            <button
              onClick={() => setActiveTab("blog")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'blog' || activeTab === 'create' ? 'bg-[#111827] text-white border border-white/10' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
            >
              <PenSquare size={18} />
              <span className="font-medium text-sm">Blog Manager</span>
            </button>
            
            <div className="pt-8 mt-8 border-t border-white/5">
              <div className="px-4 text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Note</div>
              <p className="px-4 text-xs text-slate-400 leading-relaxed">
                Since Firebase was declined, data is temporarily stored in your browser's LocalStorage. Changes made here will only reflect on this device.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#111827] rounded-3xl border border-white/5 p-6 md:p-10 min-h-[500px]">
             
            <AnimatePresence mode="wait">
              {activeTab === "dashboard" && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-display font-bold mb-8">Traffic Overview</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div className="p-6 rounded-2xl border border-white/5 bg-black/20">
                      <p className="text-slate-400 text-sm font-medium mb-2">Total Page Views</p>
                      <h3 className="text-4xl font-bold">{analytics.totalViews}</h3>
                      <p className="text-xs text-blue-400 mt-2 tracking-wide font-medium">LOCAL SESSION</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-black/20">
                      <p className="text-slate-400 text-sm font-medium mb-2">Active Blog Posts</p>
                      <h3 className="text-4xl font-bold">{posts.length}</h3>
                      <p className="text-xs text-green-400 mt-2 tracking-wide font-medium">PUBLISHED</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-4 border-b border-white/5 pb-2">Most Visited Routes</h3>
                  <div className="space-y-3">
                    {analytics.recentPaths.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                        <span className="font-mono text-sm text-slate-300">{item.path}</span>
                        <span className="bg-[#111827] px-3 py-1 rounded-lg text-xs font-medium text-slate-400">{item.count} views</span>
                      </div>
                    ))}
                    {analytics.recentPaths.length === 0 && (
                      <p className="text-slate-500 text-sm italic">No traffic recorded yet. Try browsing the site!</p>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "blog" && (
                <motion.div
                  key="blog"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-display font-bold">Manage Posts</h2>
                    <button 
                      onClick={() => setActiveTab("create")}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <Plus size={16} /> New Post
                    </button>
                  </div>

                  <div className="space-y-4">
                    {posts.map(post => (
                      <div key={post.id} className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-black/20 group">
                        <div>
                          <h4 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{post.title}</h4>
                          <div className="flex gap-3 text-xs text-slate-400">
                            <span>{post.date}</span>
                            <span>{post.category}</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleDelete(post.id)}
                          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500/20 text-slate-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                    {posts.length === 0 && (
                      <div className="text-center py-12 text-slate-400">
                        No posts found. Create your first blog post!
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "create" && (
                <motion.div
                  key="create"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                    <button onClick={() => setActiveTab("blog")} className="text-slate-400 hover:text-white transition-colors">
                      <ArrowLeft size={20} />
                    </button>
                    <h2 className="text-2xl font-display font-bold">Create New Post</h2>
                  </div>

                  <form onSubmit={handleCreatePost} className="space-y-6">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">Title</label>
                      <input 
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white"
                        placeholder="E.g., The Future of Web Dev"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">Category</label>
                      <select 
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none text-white"
                      >
                        <option value="Engineering">Engineering</option>
                        <option value="Design">Design</option>
                        <option value="Product">Product</option>
                        <option value="Personal">Personal</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">Short Excerpt</label>
                      <textarea 
                        required
                        rows={2}
                        value={formData.excerpt}
                        onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none text-white"
                        placeholder="A brief summary of the post..."
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">Content (Markdown / Text)</label>
                      <textarea 
                        required
                        rows={10}
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-y text-white font-mono"
                        placeholder="Write your article here. Use paragraphs..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-slate-200 transition-colors"
                    >
                      Publish Post
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
