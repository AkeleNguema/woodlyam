"use client";
import React from "react";
import { Compass, Layers, FileText, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

const iconMap = {
  Compass,
  Layers,
  FileText,
  ShieldCheck,
};

export default function MethodologySection() {
  return (
    <section id="methodologie" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1b1c1c] text-white relative overflow-hidden">
      {/* Blueprint grid subtle background */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-[0.25em] text-[#ff9800]">
            <span className="w-8 h-[2px] bg-[#ff9800]"></span>
            Démarche Qualité &amp; Rigueur
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Notre Méthodologie d&apos;Ingénierie
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Chaque structure fait l&apos;objet d&apos;un processus strict et immuable. 
            Aucun compromis n&apos;est toléré entre la note de calcul théorique et la réalité du chantier.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.workflow.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="bg-white/[0.04] border border-white/10 hover:border-[#ff9800]/50 rounded-2xl p-6 transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-4 right-4 font-headline text-4xl font-black text-white/10 group-hover:text-[#ff9800]/30 transition-colors">
                  {item.step}
                </span>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ff9800]/20 text-[#ff9800] flex items-center justify-center border border-[#ff9800]/30">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[10px] font-headline font-bold tracking-widest text-[#ff9800] uppercase block">
                      Phase {item.step}
                    </span>
                    <h3 className="font-headline text-lg font-bold uppercase text-white mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Validation technique requise</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
