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
    <section id="methode" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-2">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#D97706] font-semibold">
            {"// PROCESSUS & ASSURANCE QUALITÉ"}
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
            Notre Méthodologie d&apos;Ingénierie
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            Chaque édifice et chaque axe routier suit une rigueur séquentielle stricte : 
            de la reconnaissance géotechnique initiale jusqu&apos;à la réception finale sans réserve.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.workflow.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="bg-neutral-50/70 rounded-xl p-5 border border-neutral-200/80 hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#D97706]">
                      PHASE {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 text-neutral-700 flex items-center justify-center group-hover:bg-[#111827] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-headline text-sm font-bold uppercase tracking-tight text-[#111827] mt-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-neutral-200/60 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Jalon technique validé</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
