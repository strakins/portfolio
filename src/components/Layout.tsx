import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorEffect from "./CursorEffect";
import CallToActionPopup from "./CallToActionPopup";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white flex flex-col font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <CursorEffect />
      <CallToActionPopup />
      
      <Navbar />
      <main className="flex-grow z-10">{children}</main>
      <Footer />
    </div>
  );
}
