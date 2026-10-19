"use client";
import React from "react";
import {
  Building2,
  Truck,
  ShieldCheck,
  HardHat,
  CheckCircle2,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

const iconMap = {
  Building2,
  Truck,
  ShieldCheck,
  HardHat,
  CheckCircle2,
  Compass,
};

export default function ServicesSection({ onOpenQuote }) {
  return (
    <section id="expertises" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50/60 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-2">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#D97706] font-semibold">
            {"// DOMAINES D'INTERVENTION & INGÉNIERIE"}
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
            Nos Missions &amp; Compétences Métier
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            De la note de calcul préliminaire sous Eurocodes au contrôle physique intransigeant 
            sur le chantier, nous garantissons la conformité structurelle de vos investissements.
          </p>
        </div>

        {/* 6 Clean Engineering Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-900 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center group-hover:bg-[#111827] group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#D97706] font-semibold block">
                      {service.badge}
                    </span>
                    <h3 className="font-headline text-base font-bold uppercase tracking-tight text-[#111827] mt-0.5 group-hover:text-[#D97706] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-neutral-100 text-xs text-neutral-600">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#D97706] mt-2 shrink-0" />
                        <span className="text-[11px] leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Aesthetic Action Link */}
                <div className="pt-4 mt-6 border-t border-neutral-100">
                  <button
                    onClick={onOpenQuote}
                    className="w-full inline-flex items-center justify-between text-xs font-headline font-semibold text-neutral-700 hover:text-[#D97706] transition-colors group/btn py-1"
                  >
                    <span>Étudier un projet similaire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
