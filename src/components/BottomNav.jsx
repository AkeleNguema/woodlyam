"use client";
import React from "react";
import { Building2, Layers, HardHat, MessageSquare, FileText } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function BottomNav({ onOpenQuote }) {
  return (
    <nav
      aria-label="Navigation mobile rapide"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fcf9f8]/95 backdrop-blur-md border-t border-[#dbc2ad]/30 shadow-[0_-4px_20px_rgba(27,28,28,0.08)] px-3 py-2 flex items-center justify-around"
    >
      <a
        href="#"
        className="flex flex-col items-center justify-center text-[#1b1c1c]/70 hover:text-[#ff9800] py-1 px-2 transition-colors"
      >
        <Building2 className="w-5 h-5" />
        <span className="text-[10px] font-headline font-bold uppercase tracking-wider mt-1">
          Accueil
        </span>
      </a>

      <a
        href="#realisations"
        className="flex flex-col items-center justify-center text-[#1b1c1c]/70 hover:text-[#ff9800] py-1 px-2 transition-colors"
      >
        <Layers className="w-5 h-5" />
        <span className="text-[10px] font-headline font-bold uppercase tracking-wider mt-1">
          Projets
        </span>
      </a>

      {/* Primary Center Action: Quote */}
      <button
        onClick={onOpenQuote}
        className="flex flex-col items-center justify-center bg-[#ff9800] text-[#1b1c1c] rounded-xl px-4 py-1.5 shadow-md -translate-y-2 active:scale-95 transition-transform"
      >
        <FileText className="w-5 h-5" />
        <span className="text-[9px] font-headline font-black uppercase tracking-wider mt-0.5">
          Devis
        </span>
      </button>

      <a
        href="#services"
        className="flex flex-col items-center justify-center text-[#1b1c1c]/70 hover:text-[#ff9800] py-1 px-2 transition-colors"
      >
        <HardHat className="w-5 h-5" />
        <span className="text-[10px] font-headline font-bold uppercase tracking-wider mt-1">
          Métiers
        </span>
      </a>

      <a
        href={COMPANY_INFO.contacts.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-[#25D366] hover:text-[#128C7E] py-1 px-2 transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-[10px] font-headline font-bold uppercase tracking-wider mt-1">
          WhatsApp
        </span>
      </a>
    </nav>
  );
}
