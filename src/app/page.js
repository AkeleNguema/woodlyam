"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import MethodologySection from "../components/MethodologySection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ProjectModal from "../components/ProjectModal";
import QuoteModal from "../components/QuoteModal";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import Toast from "../components/Toast";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] font-body selection:bg-[#ff9800] selection:text-[#653900]">
      {/* Top Floating App Bar */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Main Page Flow */}
      <main>
        {/* High-Impact Hero */}
        <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Key Numerical Metrics Strip */}
        <StatsSection />

        {/* Portfolio & Real-World Projects */}
        <PortfolioSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* Engineering Services & Specializations */}
        <ServicesSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Civil Engineering 4-Step Methodology */}
        <MethodologySection />

        {/* Software Ecosystem & Eurocodes Standards */}
        <SkillsSection />

        {/* Founder Engineer Profile & Core Values */}
        <AboutSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Direct Contact & Quote Request */}
        <ContactSection
          onShowToast={showToast}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />
      </main>

      {/* Technical Footer */}
      <Footer />

      {/* Mobile Sticky Quick Navigation */}
      <BottomNav onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage("")}
      />
    </div>
  );
}