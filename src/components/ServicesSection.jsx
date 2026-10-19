"use client";
import React from "react";
import {
  Building2,
  Truck,
  ShieldCheck,
  HardHat,
  CheckCircle2,
  Compass,
  ArrowRight,
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f6f3f2] relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="technical-dots absolute inset-0 opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-[0.25em] text-[#8b5000]">
            <span className="w-8 h-[2px] bg-[#ff9800]"></span>
            Champs d&apos;Intervention &amp; Expertise
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase text-[#1b1c1c] tracking-tight">
            Services &amp; Compétences Métier
          </h2>
          <p className="text-sm sm:text-base text-[#1b1c1c]/70 leading-relaxed">
            De la note de calcul préliminaire à la réception finale sans réserve : un accompagnement 
            technique rigoureux respectant les normes Eurocodes, BAEL 91 et les réalités des sols gabonais.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.services.map((service) => {
            const IconComponent = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-[#dbc2ad]/30 hover:border-[#ff9800] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#ff9800]/15 text-[#8b5000] flex items-center justify-center group-hover:bg-[#ff9800] group-hover:text-[#1b1c1c] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-headline font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#f0eded] text-[#8b5000]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="font-headline text-xl font-bold uppercase text-[#1b1c1c] group-hover:text-[#8b5000] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#1b1c1c]/70 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Details Bullet List */}
                  <ul className="space-y-2 pt-2 border-t border-[#dbc2ad]/20 text-xs text-[#1b1c1c]/80">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff9800] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 mt-6 border-t border-[#dbc2ad]/20">
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#fcf9f8] hover:bg-[#ff9800] text-[#1b1c1c] font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-between border border-[#dbc2ad]/30 group-hover:border-[#ff9800] transition-all"
                  >
                    <span>Demander une étude</span>
                    <ArrowRight className="w-4 h-4 text-[#ff9800] group-hover:text-[#1b1c1c] group-hover:translate-x-1 transition-all" />
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
