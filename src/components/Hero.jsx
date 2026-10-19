"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown, MessageSquare, ShieldCheck, HardHat, FileCheck2 } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-end pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#141515]">
      {/* Background Image using Next.js Image Component */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/projects/32.JPG"
          alt="Ingénieur Woodlyam en mission de supervision de chantier à Libreville"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale-[25%] brightness-[0.45] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Architectural Blueprint Grid Pattern Overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-30 mix-blend-overlay"></div>
        {/* Dynamic Dark Gradients for Maximum Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141515] via-[#141515]/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141515]/90 via-[#141515]/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl space-y-6">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#ff9800]/15 border border-[#ff9800]/40 backdrop-blur-md px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#ff9800] animate-ping"></span>
            <span className="text-[11px] font-headline font-bold tracking-[0.2em] text-[#ff9800] uppercase">
              BUREAU D&apos;ÉTUDES STRUCTURES &amp; BTP • LIBREVILLE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            MENDAME NDONG <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9800] via-[#ffb74d] to-[#ffa726]">
              Warex Lansky
            </span>
          </h1>

          {/* Subtitle / Value proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-200 font-normal leading-relaxed max-w-2xl">
            Ingénieur en Génie Civil et fondateur de{" "}
            <strong className="text-white font-semibold">Woodlyam Engineering</strong>. 
            Nous concevons et sécurisons vos ouvrages : calculs matriciels aux Eurocodes, 
            dimensionnement béton armé, VRD et contrôle qualité sans concession sur le terrain.
          </p>

          {/* Quick Technical Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-300 font-medium">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#ff9800]" />
              <span>Calculs Eurocode 2 &amp; BAEL 91</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
              <HardHat className="w-4 h-4 text-[#ff9800]" />
              <span>Supervision &amp; Réception Chantier</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
              <FileCheck2 className="w-4 h-4 text-[#ff9800]" />
              <span>Notes de Calcul &amp; Plans d&apos;Exécution</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#realisations"
              className="group bg-[#ff9800] hover:bg-[#ffa726] text-[#1b1c1c] font-headline font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-[#ff9800]/20 active:scale-95 uppercase text-xs tracking-wider"
            >
              <span>Consulter les Réalisations</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <button
              onClick={onOpenQuote}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-headline font-bold py-4 px-7 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm uppercase text-xs tracking-wider"
            >
              <span>Demander une Étude</span>
            </button>

            <a
              href={COMPANY_INFO.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-headline font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
