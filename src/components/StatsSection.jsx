"use client";
import React from "react";
import { COMPANY_INFO } from "../data/companyData";

export default function StatsSection() {
  return (
    <section className="bg-neutral-50/80 border-b border-neutral-200/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start p-2 border-l-2 border-neutral-300 pl-4 hover:border-[#D97706] transition-colors"
            >
              <span className="font-headline text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
                {stat.value}
              </span>
              <span className="font-headline text-xs font-bold uppercase tracking-wider text-neutral-800 mt-1">
                {stat.label}
              </span>
              <span className="font-mono text-[10px] text-neutral-400 mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
