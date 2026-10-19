"use client";
import React from "react";
import { COMPANY_INFO } from "../data/companyData";

export default function StatsSection() {
  return (
    <section className="bg-[#1b1c1c] text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-[#ff9800]/20 relative overflow-hidden">
      {/* Blueprint grid subtle background */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff9800]/30 transition-colors"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl sm:text-5xl font-black text-[#ff9800] tracking-tight">
                  {stat.value}
                </span>
              </div>
              <span className="font-headline text-sm font-bold uppercase tracking-wider text-neutral-200 mt-2">
                {stat.label}
              </span>
              <span className="text-xs text-neutral-400 mt-1">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
