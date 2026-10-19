"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight, LayoutGrid, ListFilter, Eye, Layers } from "lucide-react";
import { PROJECTS, CATEGORIES } from "../data/projectsData";

export default function PortfolioSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "table"

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="ouvrages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
          <div className="space-y-2">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#D97706] font-semibold">
              {"// ARCHIVES D'INGÉNIERIE & RÉALISATIONS"}
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
              Ouvrages &amp; Projets Réalisés
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-lg">
              Sélection de structures béton armé, aménagements routiers et ouvrages géotechniques 
              conçus ou supervisés au Gabon par Woodlyam Engineering.
            </p>
          </div>

          {/* View Mode Switcher (Grid vs Table) */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200/80 shrink-0">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-headline font-semibold transition-all ${
                viewMode === "grid"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cartes</span>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-headline font-semibold transition-all ${
                viewMode === "table"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Nomenclature</span>
            </button>
          </div>
        </div>

        {/* Filter Pills with Counts */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-headline font-medium transition-all shrink-0 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-[#111827] text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.id
                      ? "bg-white/20 text-white"
                      : "bg-neutral-200 text-neutral-700"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- VIEW 1: REFINED GRID VIEW (CONTROLLED COMPACT PROPORTIONS) --- */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-neutral-50/60 rounded-xl border border-neutral-200/90 hover:border-neutral-900 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-lg"
              >
                {/* Image Frame with CONTROLLED COMPACT HEIGHT (No Giant Banners) */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                  {/* Corner Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider border border-white/10">
                      0{idx + 1} {"//"} {project.categoryLabel}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500 text-white font-headline text-[9px] font-bold uppercase">
                      {project.year}
                    </span>
                  </div>

                  {/* Location Pin */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-white text-[11px] font-medium">
                    <MapPin className="w-3 h-3 text-[#F59E0B]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#D97706] font-semibold block">
                      {project.status}
                    </span>
                    <h3 className="font-headline text-sm font-bold uppercase tracking-tight text-[#111827] group-hover:text-[#D97706] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Aesthetic Footer Link */}
                  <div className="pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs">
                    <span className="font-mono text-[10px] text-neutral-400 truncate max-w-[170px]">
                      {project.technicalSpecs?.structure || "Béton armé"}
                    </span>
                    <span className="inline-flex items-center gap-1 font-headline font-semibold text-[11px] text-neutral-800 group-hover:text-[#D97706] transition-colors">
                      <span>Fiche technique</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* --- VIEW 2: TECHNICAL NOMENCLATURE / TABLE VIEW (ENGINEERING STANDARD) --- */}
        {viewMode === "table" && (
          <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-neutral-100 border-b border-neutral-200 text-neutral-600 font-mono text-[10px] uppercase tracking-wider">
                    <th className="py-3 px-4">Réf.</th>
                    <th className="py-3 px-4">Ouvrage</th>
                    <th className="py-3 px-4">Localisation</th>
                    <th className="py-3 px-4">Système Constructif</th>
                    <th className="py-3 px-4">Volume / Surface</th>
                    <th className="py-3 px-4">Statut</th>
                    <th className="py-3 px-4 text-right">Dossier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200/60 font-body">
                  {filteredProjects.map((p, idx) => (
                    <tr
                      key={p.id}
                      onClick={() => onSelectProject(p)}
                      className="hover:bg-neutral-50/80 transition-colors cursor-pointer group"
                    >
                      <td className="py-3.5 px-4 font-mono text-[11px] text-neutral-400">
                        0{idx + 1}
                      </td>
                      <td className="py-3.5 px-4 font-headline font-bold text-neutral-900 group-hover:text-[#D97706] transition-colors">
                        {p.title}
                      </td>
                      <td className="py-3.5 px-4 text-neutral-500">
                        {p.location}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-neutral-600">
                        {p.technicalSpecs?.structure || "Béton armé"}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-neutral-500">
                        {p.surface || p.technicalSpecs?.volumeBeton || "—"}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-flex items-center gap-1 text-[11px] font-headline font-semibold text-neutral-700 group-hover:text-[#D97706]">
                          <span>Détails</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
