"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Réalisations", href: "#realisations" },
    { label: "Services & Métiers", href: "#services" },
    { label: "Méthodologie", href: "#methodologie" },
    { label: "Outils & Logiciels", href: "#logiciels" },
    { label: "L'Ingénieur", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#fcf9f8]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(27,28,28,0.08)] py-3 border-b border-[#dbc2ad]/30"
            : "bg-[#fcf9f8]/85 backdrop-blur-sm py-4 border-b border-[#dbc2ad]/15"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#ff9800] rounded-lg p-1"
            aria-label="Woodlyam Engineering Accueil"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1b1c1c] text-[#ff9800] flex items-center justify-center font-bold text-xl shadow-md border border-[#ff9800]/30 group-hover:border-[#ff9800] transition-colors">
              <span className="font-headline font-black">W</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-xl font-black text-[#1b1c1c] tracking-[0.18em] leading-none group-hover:text-[#8b5000] transition-colors">
                WOODLYAM
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8b5000] font-bold mt-0.5">
                ENGINEERING • GABON
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-headline uppercase tracking-wider text-[#1b1c1c]/80 hover:text-[#ff9800] font-semibold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff9800] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 text-xs font-bold transition-all border border-[#25D366]/30"
              title="Discuter directement sur WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#ff9800] hover:bg-[#8b5000] text-[#653900] hover:text-white px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Demander une étude</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1b1c1c] hover:bg-[#f0eded] focus:outline-none focus:ring-2 focus:ring-[#ff9800] transition-colors"
            aria-label={isOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-20 right-0 left-0 bg-[#fcf9f8] border-b border-[#dbc2ad]/40 shadow-2xl p-6 transition-transform">
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#dbc2ad]/20 text-xs text-[#8b5000] font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Cabinet d&apos;Ingénierie BTP — Libreville
              </div>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-headline font-bold uppercase tracking-wider text-[#1b1c1c] hover:text-[#ff9800] transition-colors border-b border-[#dbc2ad]/10"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#ff9800]" />
                  </a>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-[#ff9800] hover:bg-[#8b5000] text-[#653900] hover:text-white py-3.5 px-4 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Demander un devis / étude</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={COMPANY_INFO.contacts.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366]/15 text-[#128C7E] py-3 rounded-lg text-xs font-bold border border-[#25D366]/30"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.phoneRaw}`}
                    className="flex items-center justify-center gap-2 bg-[#f0eded] text-[#1b1c1c] py-3 rounded-lg text-xs font-bold border border-[#dbc2ad]/40"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Appeler</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
