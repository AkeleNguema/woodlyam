"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Compass, Layers, CheckCircle2, MessageSquare, ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

const HERO_PROJECTS = [
  {
    id: "batiment",
    title: "Bâtiment R+2 à Ntoum",
    category: "Béton Armé",
    image: "/projects/2.JPG",
    ref: "REF-NTM/2025",
    spec: "Eurocode 2 • 245 m³ Béton",
    status: "Gros Œuvre Validé",
  },
  {
    id: "route",
    title: "Chantier Routier Ondongo",
    category: "VRD & Nivellement",
    image: "/projects/3.JPG",
    ref: "REF-OND/2024",
    spec: "Terrassement 14 500 m³",
    status: "Plateforme Réceptionnée",
  },
  {
    id: "soutenement",
    title: "Voile de Soutènement",
    category: "Géotechnique",
    image: "/projects/6.JPG",
    ref: "REF-OWD/2024",
    spec: "Eurocode 7 • Hauteur 4,50m",
    status: "Ouvrage Livré",
  },
];

export default function Hero({ onOpenQuote }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const currentProject = HERO_PROJECTS[activeProjectIndex];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-neutral-200/80 overflow-hidden">
      {/* Precision CAD grid background with subtle opacity */}
      <div className="absolute inset-0 cad-grid opacity-60 pointer-events-none"></div>

      {/* Subtle architectural gradient glow */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative Editorial Presentation */}
          <div className="lg:col-span-7 space-y-6">
            {/* Architectural Coordinates Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 font-mono text-[10px] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
              <span>{"00°23'N — 09°27'E // LIBREVILLE, GABON"}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.08] uppercase">
              L&apos;art du calcul <br />
              <span className="text-neutral-400 font-medium">de structure.</span>
            </h1>

            {/* Crisp Value Proposition */}
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed">
              Cabinet d&apos;ingénierie et de modélisation structurale fondé par{" "}
              <strong className="text-neutral-900 font-semibold">{COMPANY_INFO.founder.fullName}</strong>. 
              Nous calculons, optimisons et supervisons vos ouvrages en béton armé, voiries (VRD) et soutènements 
              avec une rigueur mathématique conforme aux normes Eurocodes.
            </p>

            {/* Aesthetic Action Links & Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#ouvrages"
                className="group inline-flex items-center gap-2.5 bg-[#111827] hover:bg-[#D97706] text-white px-5 py-3 rounded-full text-xs font-headline font-semibold tracking-wide uppercase transition-all duration-300 shadow-sm active:scale-95"
              >
                <span>Explorer les ouvrages</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 hover:border-neutral-900 px-5 py-3 rounded-full text-xs font-headline font-semibold tracking-wide uppercase transition-all duration-200 active:scale-95 shadow-2xl"
              >
                <span>Demander une étude</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
              </button>

              <a
                href={COMPANY_INFO.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 px-4 py-3 rounded-full text-xs font-headline font-semibold tracking-wide uppercase transition-colors"
                title="Échanger directement avec l'ingénieur"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp direct</span>
              </a>
            </div>

            {/* Trust & Engineering Standards Ribbon */}
            <div className="pt-4 border-t border-neutral-200/80 flex flex-wrap items-center gap-4 text-[11px] font-mono text-neutral-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Eurocodes 1, 2, 7 &amp; BAEL 91</span>
              </div>
              <span className="text-neutral-300">•</span>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Robot &amp; Revit BIM</span>
              </div>
              <span className="text-neutral-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Contrôle qualité béton sur site</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Showcase Card with Controlled Sizing */}
          <div className="lg:col-span-5 relative">
            {/* The CAD Card Frame */}
            <div className="relative bg-neutral-900 rounded-2xl p-3 border border-neutral-200 shadow-xl overflow-hidden group">
              {/* CAD Crosshairs Corner Accents */}
              <div className="absolute top-2 left-2 font-mono text-[9px] text-white/30 z-20 pointer-events-none">+</div>
              <div className="absolute top-2 right-2 font-mono text-[9px] text-white/30 z-20 pointer-events-none">+</div>
              <div className="absolute bottom-2 left-2 font-mono text-[9px] text-white/30 z-20 pointer-events-none">+</div>
              <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/30 z-20 pointer-events-none">+</div>

              {/* The Image Container with STRICT PROPORTIONS (No Oversized Banner!) */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-neutral-950">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                {/* Top Overlay Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider border border-white/10">
                    {currentProject.ref}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/90 text-white font-headline text-[9px] font-bold uppercase tracking-wider">
                    {currentProject.status}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1 text-white">
                  <span className="font-mono text-[9px] text-[#F59E0B] uppercase tracking-wider block">
                    {currentProject.category} {"//"} {currentProject.spec}
                  </span>
                  <h3 className="font-headline text-base sm:text-lg font-bold uppercase tracking-tight leading-snug">
                    {currentProject.title}
                  </h3>
                </div>
              </div>

              {/* Interactive Tabs under the Card to Switch Between Real Gabon Projects */}
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {HERO_PROJECTS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveProjectIndex(idx)}
                    className={`py-2 px-2 rounded-lg text-left transition-all ${
                      activeProjectIndex === idx
                        ? "bg-white/15 text-white border border-white/20"
                        : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border border-transparent"
                    }`}
                  >
                    <span className="font-mono text-[8px] uppercase tracking-wider block truncate">
                      0{idx + 1} • {p.category}
                    </span>
                    <span className="font-headline text-[10px] font-bold truncate block mt-0.5">
                      {p.id === "batiment" ? "Ntoum R+2" : p.id === "route" ? "Ondongo" : "Soutènement"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Subtle Drafting Annotation below */}
            <div className="mt-3 flex items-center justify-between px-2 text-[10px] font-mono text-neutral-400">
              <span>PHOTO DE CHANTIER RÉELLE • GABON</span>
              <a
                href="#ouvrages"
                className="text-neutral-600 hover:text-neutral-900 font-semibold flex items-center gap-1 group"
              >
                <span>Voir les 8 réalisations</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
