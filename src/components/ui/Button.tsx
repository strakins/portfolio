import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  href, 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-500/50";
  
  const variants = {
    primary: "bg-white text-black hover:bg-slate-200",
    secondary: "bg-[#111827] text-white border border-white/10 hover:bg-[#1f2937] hover:border-white/20",
    outline: "bg-transparent text-white border border-white/20 hover:border-white/50",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
  };
  
  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };
  
  const classes = cn(baseClasses, variants[variant], sizes[size], className);
  
  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-blue-50/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      )}
    </>
  );

  if (href) {
    // If it's an external link
    if (href.startsWith("http") || href.startsWith("mailto")) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    // Internal link
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
