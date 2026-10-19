"use client";
import React from "react";
import { CheckCircle2, Cpu, BookOpen, Award } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function SkillsSection() {
  const normList = [
    { code: "Eurocode 2 (EN 1992)", title: "Calcul des structures en béton armé & précontraint" },
    { code: "Eurocode 7 (EN 1997)", title: "Calcul géotechnique, fondations & ouvrages de soutènement" },
    { code: "Eurocode 1 (EN 1991)", title: "Actions sur les structures (charges d'exploitation, vent, séisme)" },
    { code: "BAEL 91 révisé 99", title: "Règles techniques de conception & calcul des ouvrages en BA" },
    { code: "DTU 13.1 & 13.3", title: "Fondations superficielles & dallages industriels" },
    { code: "CCTG Fascicule 70", title: "Ouvrages d'assainissement et canalisations d'eaux pluviales" },
  ];

  const expertises = [
    "Dimensionnement matriciel d'ossatures (Poteaux, Poutres, Voiles)",
    "Calculs et vérifications aux états limites ELU et ELS",
    "Études géotechniques de stabilité des pentes & murs de soutènement",
    "Levés topographiques, profils en long/travers et calage altimétrique",
    "Équilibrage et calcul des cubatures de terrassement (déblais/remblais)",
    "Contrôle de conformité des armatures et enrobages avant coulage",
    "Essais de convenance et d'affaissement au cône d'Abrams sur chantier",
    "Édition de plans de coffrage, plans de ferraillage et métrés certifiés",
  ];

  return (
    <section id="logiciels" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50/60 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-2">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#D97706] font-semibold">
            {"// OUTILS DE CALCUL & RÉFÉRENTIELS"}
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
            Écosystème Logiciel &amp; Normes
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            La précision de l&apos;ingénieur repose sur la modélisation tridimensionnelle 
            avancée et le respect rigoureux des codes internationaux de construction.
          </p>
        </div>

        {/* 4 Software Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPANY_INFO.software.map((soft) => (
            <div
              key={soft.name}
              className="bg-white rounded-xl p-5 border border-neutral-200 shadow-sm hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#D97706] font-semibold">
                    {soft.tag}
                  </span>
                  <span className="font-mono text-xs font-bold text-neutral-700">
                    {soft.level}%
                  </span>
                </div>

                <h3 className="font-headline text-sm font-bold uppercase text-neutral-900">
                  {soft.name}
                </h3>

                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  {soft.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-neutral-100">
                <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#111827] h-full rounded-full transition-all duration-700"
                    style={{ width: `${soft.level}%` }}
                  />
                </div>
                <span className="font-mono text-[9px] text-neutral-400 block mt-1">
                  {soft.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Standards and Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Normes */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#D97706]" />
              <h3 className="font-headline text-sm font-bold uppercase tracking-wider text-neutral-900">
                Normes &amp; Codes Techniques Appliqués
              </h3>
            </div>
            <div className="space-y-2">
              {normList.map((norm, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100 flex items-start gap-2.5"
                >
                  <Award className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase text-neutral-800 block">
                      {norm.code}
                    </span>
                    <span className="text-[11px] text-neutral-500 block">
                      {norm.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Field Skills */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <h3 className="font-headline text-sm font-bold uppercase tracking-wider text-neutral-900">
                Savoir-Faire Opérationnel Terrain
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {expertises.map((exp, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 px-2.5 rounded-lg hover:bg-neutral-50 transition-colors border-b border-neutral-100 text-xs text-neutral-700"
                >
                  <span className="font-medium text-[11px]">{exp}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
