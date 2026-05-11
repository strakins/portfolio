export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
}

const defaultPosts: BlogPost[] = [
  {
    id: "optimizing-react-applications",
    title: "Optimizing React Applications for Scale",
    date: "Oct 12, 2026",
    category: "Engineering",
    readTime: "8 min read",
    excerpt: "Learn how to leverage React.memo, useCallback, and virtualization to ensure your application remains highly performant.",
    content: "When building React applications at scale, performance often degrades due to unnecessary re-renders. By strategically implementing `React.memo` for pure components, wrapping functions in `useCallback` when passed as props, and utilizing virtual lists for large data sets, you can maintain a silky-smooth 60fps experience.\n\nIn this post, we'll dive deeper into identifying bottlenecks using the React Profiler..."
  },
  {
    id: "art-of-micro-interactions",
    title: "The Art of Micro-interactions in UI Design",
    date: "Sep 28, 2026",
    category: "Design",
    readTime: "5 min read",
    excerpt: "How subtle animations and state changes can dramatically improve the perceived quality of your product.",
    content: "Micro-interactions are the small moments where the user and design interact. When crafted with intention, these subtle animations provide feedback, direct attention, and create a sense of direct manipulation.\n\nWhether it's a satisfying button press, a loading indicator that feels native, or an ethereal glow on hover, micro-interactions transition an interface from usable to delightful."
  },
];

export const getPosts = (): BlogPost[] => {
  const stored = localStorage.getItem("blog_posts");
  if (stored) {
    return JSON.parse(stored);
  }
  // Initialize with defaults if none exist
  localStorage.setItem("blog_posts", JSON.stringify(defaultPosts));
  return defaultPosts;
};

export const getPostById = (id: string): BlogPost | undefined => {
  const posts = getPosts();
  return posts.find((p) => p.id === id);
};

export const savePost = (post: BlogPost) => {
  const posts = getPosts();
  const existingIndex = posts.findIndex((p) => p.id === post.id);
  
  if (existingIndex >= 0) {
    posts[existingIndex] = post;
  } else {
    posts.unshift(post);
  }
  
  localStorage.setItem("blog_posts", JSON.stringify(posts));
};

export const deletePost = (id: string) => {
  const posts = getPosts();
  const filtered = posts.filter((p) => p.id !== id);
  localStorage.setItem("blog_posts", JSON.stringify(filtered));
};
