"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageSquare, Compass } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);

    const updateTime = () => {
      try {
        const now = new Date();
        const options = { timeZone: "Africa/Libreville", hour: "2-digit", minute: "2-digit" };
        setTime(now.toLocaleTimeString("fr-FR", options));
      } catch {
        setTime("15:30");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Ouvrages", href: "#ouvrages" },
    { label: "Expertises", href: "#expertises" },
    { label: "Méthodologie", href: "#methode" },
    { label: "Logiciels", href: "#logiciels" },
    { label: "Ingénieur", href: "#ingenieur" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Main Floating Glass Capsule */}
          <div
            className={`w-full flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-white/90 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                : "bg-white/70 backdrop-blur-md border border-neutral-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.03)]"
            }`}
          >
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Woodlyam Engineering Accueil"
            >
              <div className="w-8 h-8 rounded-lg bg-[#111827] text-white flex items-center justify-center font-headline font-black text-sm border border-neutral-300 shadow-sm group-hover:bg-[#D97706] transition-colors duration-200">
                W
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-xs font-black tracking-[0.2em] text-[#111827] uppercase leading-none group-hover:text-[#D97706] transition-colors">
                  WOODLYAM
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400 font-medium mt-0.5">
                  INGÉNIERIE CIVILE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Aesthetic Minimalist) */}
            <nav className="hidden lg:flex items-center gap-1 bg-neutral-100/70 p-1 rounded-full border border-neutral-200/50">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-headline font-medium text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all duration-200 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Side: Local Time & Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Libreville Realtime Clock Pill */}
              <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-500 font-mono text-[10px] tracking-wider border border-neutral-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>LIBREVILLE {time || "15:30"}</span>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href={COMPANY_INFO.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200"
                aria-label="Contacter sur WhatsApp"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Refined Magnetic Pill CTA */}
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center gap-2 bg-[#111827] hover:bg-[#D97706] text-white px-4 py-1.5 rounded-full text-xs font-headline font-semibold tracking-wide transition-all duration-300 shadow-sm active:scale-95"
              >
                <span>Demander une étude</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors focus:outline-none"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed top-20 right-4 left-4 bg-white rounded-3xl border border-neutral-200 p-6 shadow-2xl transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                  NAVIGATION DU BUREAU
                </span>
                <span className="font-mono text-[10px] text-emerald-600 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  GABON (GMT+1)
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-headline font-semibold text-neutral-800 hover:bg-neutral-50 hover:text-[#D97706] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-[#111827] text-white py-3 rounded-full font-headline font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Demander une étude structure</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={COMPANY_INFO.contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 py-2.5 rounded-full font-headline font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
