"use client";
import React from "react";
import { Layers, HardHat, MessageSquare, FileText } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function BottomNav({ onOpenQuote }) {
  return (
    <nav
      aria-label="Navigation mobile rapide"
      className="lg:hidden fixed bottom-3 left-4 right-4 z-40 bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full px-4 py-2 flex items-center justify-around"
    >
      <a
        href="#ouvrages"
        className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-900 py-0.5 transition-colors"
      >
        <Layers className="w-4 h-4" />
        <span className="text-[9px] font-headline font-semibold uppercase tracking-wider mt-0.5">
          Ouvrages
        </span>
      </a>

      {/* Primary Center Action: Quote */}
      <button
        onClick={onOpenQuote}
        className="flex items-center gap-1.5 bg-[#111827] text-white rounded-full px-4 py-1.5 shadow-md active:scale-95 transition-transform"
      >
        <FileText className="w-3.5 h-3.5 text-[#F59E0B]" />
        <span className="text-[10px] font-headline font-bold uppercase tracking-wider">
          Devis
        </span>
      </button>

      <a
        href="#expertises"
        className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-900 py-0.5 transition-colors"
      >
        <HardHat className="w-4 h-4" />
        <span className="text-[9px] font-headline font-semibold uppercase tracking-wider mt-0.5">
          Métiers
        </span>
      </a>

      <a
        href={COMPANY_INFO.contacts.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-emerald-600 hover:text-emerald-700 py-0.5 transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="text-[9px] font-headline font-semibold uppercase tracking-wider mt-0.5">
          WhatsApp
        </span>
      </a>
    </nav>
  );
}
