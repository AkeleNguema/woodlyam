"use client";
import React from "react";
import Image from "next/image";
import { Shield, Target, Compass, HardHat, Check, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function AboutSection({ onOpenQuote }) {
  return (
    <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f6f3f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900">
              <Image
                src="/projects/32.JPG"
                alt="Ingénieur Mendame Ndong Warex Lansky sur chantier"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#dbc2ad]/40">
                <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-[#8b5000] block">
                  Fondateur & Directeur Technique
                </span>
                <span className="font-headline text-lg font-black uppercase text-[#1b1c1c] block mt-0.5">
                  {COMPANY_INFO.founder.fullName}
                </span>
                <span className="text-xs text-[#1b1c1c]/70 block mt-0.5">
                  Ingénieur Génie Civil — Libreville, Gabon
                </span>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 blueprint-grid opacity-30 -z-10 rounded-2xl"></div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-[0.25em] text-[#8b5000]">
                <span className="w-8 h-[2px] bg-[#ff9800]"></span>
                L&apos;Ingénieur &amp; La Vision Woodlyam
              </div>
              <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase text-[#1b1c1c] tracking-tight">
                Bâtir avec Précision, Rigueur et Intégrité
              </h2>
            </div>

            {/* Quote Block */}
            <blockquote className="border-l-4 border-[#ff9800] pl-6 py-2 italic text-base sm:text-lg text-[#1b1c1c]/80 leading-relaxed bg-white/60 rounded-r-xl">
              &laquo; {COMPANY_INFO.founder.quote} &raquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#1b1c1c]/80 leading-relaxed">
              {COMPANY_INFO.founder.bio}
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-[#dbc2ad]/30 shadow-sm space-y-1.5">
                <Shield className="w-5 h-5 text-[#8b5000]" />
                <h4 className="font-headline font-bold text-xs uppercase text-[#1b1c1c]">Sécurité Maximale</h4>
                <p className="text-[11px] text-[#1b1c1c]/70">Calculs matriciels aux Eurocodes avec marges de sécurité garanties.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#dbc2ad]/30 shadow-sm space-y-1.5">
                <Target className="w-5 h-5 text-[#ff9800]" />
                <h4 className="font-headline font-bold text-xs uppercase text-[#1b1c1c]">Optimisation des Coûts</h4>
                <p className="text-[11px] text-[#1b1c1c]/70">Juste dosage du béton et ratios d&apos;aciers maîtrisés sans gaspillage.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#dbc2ad]/30 shadow-sm space-y-1.5">
                <HardHat className="w-5 h-5 text-[#8b5000]" />
                <h4 className="font-headline font-bold text-xs uppercase text-[#1b1c1c]">Présence Terrain</h4>
                <p className="text-[11px] text-[#1b1c1c]/70">Contrôle physique intransigeant des armatures avant chaque coulage.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="bg-[#1b1c1c] hover:bg-[#8b5000] text-white px-6 py-3.5 rounded-xl font-headline font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                Demander une Consultation Technique
              </button>
              
              <a
                href={COMPANY_INFO.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] px-6 py-3.5 rounded-xl font-headline font-bold text-xs uppercase tracking-wider border border-[#25D366]/30 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Échanger sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
