"use client";
import React from "react";
import { CheckCircle2, Cpu, Award, BookOpen } from "lucide-react";
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
    <section id="logiciels" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fcf9f8] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-[0.25em] text-[#8b5000]">
            <span className="w-8 h-[2px] bg-[#ff9800]"></span>
            Outils &amp; Référentiels d&apos;Ingénierie
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase text-[#1b1c1c] tracking-tight">
            Écosystème Logiciel &amp; Compétences
          </h2>
          <p className="text-sm sm:text-base text-[#1b1c1c]/70 leading-relaxed">
            La précision de l&apos;ingénieur repose sur la maîtrise d&apos;outils de modélisation 
            numérique avancés couplée à une connaissance approfondie des normes internationales.
          </p>
        </div>

        {/* Software Cards */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#8b5000]">
            <Cpu className="w-4 h-4 text-[#ff9800]" />
            <span>Logiciels de Calcul & Modélisation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.software.map((soft) => (
              <div
                key={soft.name}
                className="bg-white rounded-2xl p-6 border border-[#dbc2ad]/30 shadow-sm hover:border-[#ff9800] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-headline font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff9800]/15 text-[#8b5000]">
                      {soft.tag}
                    </span>
                    <span className="font-headline text-sm font-bold text-[#8b5000]">
                      {soft.level}%
                    </span>
                  </div>

                  <h3 className="font-headline text-lg font-bold text-[#1b1c1c]">
                    {soft.name}
                  </h3>

                  <p className="text-xs text-[#1b1c1c]/70 leading-relaxed">
                    {soft.desc}
                  </p>
                </div>

                {/* Progress Gauge */}
                <div className="pt-4 mt-4 border-t border-[#dbc2ad]/20">
                  <div className="w-full bg-[#f0eded] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#8b5000] to-[#ff9800] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${soft.level}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-[#1b1c1c]/50 font-medium block mt-1.5">
                    {soft.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Norms and Field Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          {/* Normes & Référentiels Réglementaires */}
          <div className="bg-white rounded-2xl p-7 border border-[#dbc2ad]/30 shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#ff9800]" />
              <h3 className="font-headline text-lg font-bold uppercase text-[#1b1c1c] tracking-tight">
                Normes & Règlements Appliqués
              </h3>
            </div>

            <div className="space-y-3">
              {normList.map((norm, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#fcf9f8] border border-[#dbc2ad]/20 flex items-start gap-3"
                >
                  <Award className="w-4 h-4 text-[#8b5000] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-headline font-bold text-xs uppercase text-[#8b5000] block">
                      {norm.code}
                    </span>
                    <span className="text-xs text-[#1b1c1c]/80 mt-0.5 block">
                      {norm.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertises Métier */}
          <div className="bg-white rounded-2xl p-7 border border-[#dbc2ad]/30 shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="font-headline text-lg font-bold uppercase text-[#1b1c1c] tracking-tight">
                Savoir-Faire Opérationnel
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {expertises.map((exp, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#fcf9f8] transition-colors border-b border-[#dbc2ad]/15"
                >
                  <span className="font-headline text-xs font-medium uppercase text-[#1b1c1c]/90">
                    {exp}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
