"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight, Filter, Eye, Layers } from "lucide-react";
import { PROJECTS, CATEGORIES } from "../data/projectsData";

export default function PortfolioSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="realisations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-[0.25em] text-[#8b5000]">
              <span className="w-8 h-[2px] bg-[#ff9800]"></span>
              Archives &amp; Réalisations de Chantiers
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase text-[#1b1c1c] tracking-tight">
              Nos Réalisations
            </h2>
            <p className="text-sm sm:text-base text-[#1b1c1c]/70 max-w-xl">
              De Libreville à l&apos;intérieur du Gabon : découvrez nos ouvrages de bâtiment, 
              voies de circulation et soutènements géotechniques calculés et exécutés avec rigueur.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="bg-[#fcf9f8] p-4 rounded-xl border border-[#dbc2ad]/30 flex items-center gap-4 shrink-0">
            <div className="text-right">
              <span className="block text-2xl font-headline font-black text-[#8b5000]">
                {PROJECTS.length}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#1b1c1c]/50">
                Ouvrages documentés
              </span>
            </div>
            <div className="w-[1px] h-8 bg-[#dbc2ad]/40" />
            <div className="text-right">
              <span className="block text-2xl font-headline font-black text-[#ff9800]">
                35+
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#1b1c1c]/50">
                Photos de chantiers
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-[#1b1c1c]/50 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#ff9800]" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">Filtrer :</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-headline font-bold uppercase tracking-wider transition-all shrink-0 ${
                activeCategory === cat.id
                  ? "bg-[#1b1c1c] text-[#ff9800] shadow-md scale-105"
                  : "bg-[#f0eded] text-[#1b1c1c]/70 hover:bg-[#e4dfdd] hover:text-[#1b1c1c]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-[#fcf9f8] rounded-2xl overflow-hidden border border-[#dbc2ad]/30 hover:border-[#ff9800]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[10px] font-headline font-bold uppercase tracking-wider rounded-md bg-[#1b1c1c]/80 backdrop-blur-md text-[#ff9800] border border-[#ff9800]/30">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-headline font-bold uppercase tracking-wider rounded-md bg-emerald-500/90 text-white backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Overlay Location */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#ff9800]" />
                  <span>{project.location}</span>
                </div>

                {/* Hover CTA Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 bg-[#ff9800] text-[#1b1c1c] font-headline font-bold text-xs uppercase px-4 py-2.5 rounded-lg shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>Fiche Technique</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-headline font-bold tracking-widest uppercase text-[#8b5000]">
                    {project.status}
                  </span>
                  <h3 className="font-headline text-lg font-black uppercase text-[#1b1c1c] group-hover:text-[#8b5000] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#1b1c1c]/70 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technical Meta Footer */}
                <div className="pt-3 border-t border-[#dbc2ad]/20 flex items-center justify-between text-xs">
                  <span className="text-[#1b1c1c]/60 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-[#8b5000]" />
                    <span className="truncate max-w-[170px]">{project.technicalSpecs?.structure || "Béton armé"}</span>
                  </span>

                  <span className="text-[#ff9800] font-headline font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Détails</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
