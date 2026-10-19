"use client";
import React from "react";
import Image from "next/image";
import { Shield, Target, HardHat, ArrowUpRight, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function AboutSection({ onOpenQuote }) {
  return (
    <section id="ingenieur" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Compact, Professionally Framed Portrait (No Giant Picture!) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* CAD Crosshairs */}
              <div className="absolute -top-2 -left-2 font-mono text-[9px] text-neutral-400 z-10">+</div>
              <div className="absolute -top-2 -right-2 font-mono text-[9px] text-neutral-400 z-10">+</div>
              <div className="absolute -bottom-2 -left-2 font-mono text-[9px] text-neutral-400 z-10">+</div>
              <div className="absolute -bottom-2 -right-2 font-mono text-[9px] text-neutral-400 z-10">+</div>

              {/* Controlled Height Container */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-neutral-300 shadow-md bg-neutral-900">
                <Image
                  src="/projects/32.JPG"
                  alt="Mendame Ndong Warex Lansky, Ingénieur Génie Civil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-center grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/10">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#F59E0B] block">
                    INGÉNIEUR GÉNIE CIVIL • FONDATEUR
                  </span>
                  <span className="font-headline text-sm font-bold uppercase tracking-tight block">
                    {COMPANY_INFO.founder.fullName}
                  </span>
                  <span className="font-mono text-[9px] text-neutral-300 block">
                    Libreville, Gabon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#D97706] font-semibold">
                {"// PROFIL & ENGAGEMENT"}
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
                L&apos;Ingénieur Derrière Woodlyam
              </h2>
            </div>

            <blockquote className="border-l-2 border-[#D97706] pl-4 italic text-sm text-neutral-700 leading-relaxed bg-neutral-50 p-3 rounded-r-lg">
              &laquo; {COMPANY_INFO.founder.quote} &raquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {COMPANY_INFO.founder.bio}
            </p>

            {/* 3 Core Engineering Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80 space-y-1">
                <Shield className="w-4 h-4 text-[#D97706]" />
                <h4 className="font-headline text-xs font-bold uppercase text-neutral-900">Rigueur Normative</h4>
                <p className="text-[10px] text-neutral-500">Eurocodes &amp; BAEL 91 appliqués sans compromis.</p>
              </div>

              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80 space-y-1">
                <Target className="w-4 h-4 text-emerald-600" />
                <h4 className="font-headline text-xs font-bold uppercase text-neutral-900">Optimisation</h4>
                <p className="text-[10px] text-neutral-500">Métrés d&apos;aciers et dosage béton équilibrés.</p>
              </div>

              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80 space-y-1">
                <HardHat className="w-4 h-4 text-[#111827]" />
                <h4 className="font-headline text-xs font-bold uppercase text-neutral-900">Réalité Terrain</h4>
                <p className="text-[10px] text-neutral-500">Contrôle physique des armatures avant coulage.</p>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center gap-2 bg-[#111827] hover:bg-[#D97706] text-white px-5 py-2.5 rounded-full text-xs font-headline font-semibold tracking-wide uppercase transition-all duration-200 active:scale-95 shadow-sm"
              >
                <span>Consulter pour un projet</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href={COMPANY_INFO.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 px-4 py-2.5 rounded-full text-xs font-headline font-semibold tracking-wide uppercase transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discussion directe</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
