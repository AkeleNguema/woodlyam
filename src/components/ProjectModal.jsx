"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Calendar,
  Layers,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  MessageSquare,
} from "lucide-react";

export default function ProjectModal({ project, onClose, onOpenQuote }) {
  const [selectedImageOverride, setSelectedImageOverride] = useState(null);

  const currentImage = selectedImageOverride || project?.image;

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleClose = () => {
    setSelectedImageOverride(null);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Ingénieur Warex Lansky,\nJ'ai consulté la fiche technique de votre projet "${project.title}" (${project.location}) sur le site de Woodlyam Engineering. J'aimerais échanger avec vous concernant un projet similaire.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-4xl bg-[#fcf9f8] rounded-2xl shadow-2xl border border-[#dbc2ad]/50 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
      >
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#dbc2ad]/30 bg-[#fcf9f8]/95 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-[10px] font-headline font-bold uppercase tracking-wider rounded-md bg-[#ff9800]/15 text-[#8b5000] border border-[#ff9800]/30">
              {project.categoryLabel}
            </span>
            <span className="px-2.5 py-1 text-[10px] font-headline font-semibold uppercase tracking-wider rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
              {project.status}
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-[#1b1c1c]/70 hover:text-[#1b1c1c] hover:bg-[#f0eded] transition-colors"
            aria-label="Fermer la modale"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Photo Viewer */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 shadow-inner">
            <Image
              src={currentImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md text-white text-xs flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#ff9800]" />
              <span>{project.location}, {project.country}</span>
            </div>
          </div>

          {/* Gallery Thumbnails (if any) */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageOverride(img)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    currentImage === img
                      ? "border-[#ff9800] ring-2 ring-[#ff9800]/30 scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Afficher photo ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} aperçu ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Title & Metadata */}
          <div>
            <h2 id="modal-title" className="font-headline text-2xl sm:text-3xl font-black uppercase text-[#1b1c1c] tracking-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#1b1c1c]/70 mt-2">
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="w-4 h-4 text-[#ff9800]" /> {project.location}
              </span>
              <span className="flex items-center gap-1 font-medium">
                <Calendar className="w-4 h-4 text-[#ff9800]" /> Année : {project.year}
              </span>
              {project.surface && (
                <span className="flex items-center gap-1 font-medium">
                  <Layers className="w-4 h-4 text-[#ff9800]" /> Envergure : {project.surface}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-5 rounded-xl border border-[#dbc2ad]/30 shadow-sm space-y-2">
            <h3 className="font-headline text-xs font-bold uppercase tracking-wider text-[#8b5000]">
              Présentation du Projet
            </h3>
            <p className="text-sm leading-relaxed text-[#1b1c1c]/80">
              {project.description}
            </p>
          </div>

          {/* Technical Specs Grid */}
          {project.technicalSpecs && (
            <div className="space-y-3">
              <h3 className="font-headline text-xs font-bold uppercase tracking-wider text-[#8b5000] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#ff9800]" />
                Spécifications & Données Techniques
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-[#f0eded] p-3.5 rounded-lg border border-[#dbc2ad]/20">
                  <span className="text-[#1b1c1c]/50 block text-[10px] uppercase font-bold">Système Constructif</span>
                  <span className="font-headline font-bold text-[#1b1c1c] mt-0.5 block">{project.technicalSpecs.structure}</span>
                </div>
                <div className="bg-[#f0eded] p-3.5 rounded-lg border border-[#dbc2ad]/20">
                  <span className="text-[#1b1c1c]/50 block text-[10px] uppercase font-bold">Réglementation Appliquée</span>
                  <span className="font-headline font-bold text-[#1b1c1c] mt-0.5 block">{project.technicalSpecs.normes}</span>
                </div>
                <div className="bg-[#f0eded] p-3.5 rounded-lg border border-[#dbc2ad]/20">
                  <span className="text-[#1b1c1c]/50 block text-[10px] uppercase font-bold">Volume / Cubature</span>
                  <span className="font-headline font-bold text-[#1b1c1c] mt-0.5 block">{project.technicalSpecs.volumeBeton}</span>
                </div>
                <div className="bg-[#f0eded] p-3.5 rounded-lg border border-[#dbc2ad]/20">
                  <span className="text-[#1b1c1c]/50 block text-[10px] uppercase font-bold">Aciers Haute Adhérence</span>
                  <span className="font-headline font-bold text-[#1b1c1c] mt-0.5 block">{project.technicalSpecs.acierUtilise}</span>
                </div>
              </div>
            </div>
          )}

          {/* Missions and Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Missions de l'ingénieur */}
            {project.missions && (
              <div className="bg-white p-5 rounded-xl border border-[#dbc2ad]/30 shadow-sm space-y-3">
                <h3 className="font-headline text-xs font-bold uppercase tracking-wider text-[#1b1c1c] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Missions de l&apos;Ingénieur Woodlyam
                </h3>
                <ul className="space-y-2 text-xs text-[#1b1c1c]/80">
                  {project.missions.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff9800] mt-1.5 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Défis techniques & Solutions */}
            {project.challenges && (
              <div className="bg-white p-5 rounded-xl border border-[#dbc2ad]/30 shadow-sm space-y-3">
                <h3 className="font-headline text-xs font-bold uppercase tracking-wider text-[#1b1c1c] flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#ff9800]" />
                  Contraintes & Solutions Géotechniques
                </h3>
                <ul className="space-y-2 text-xs text-[#1b1c1c]/80">
                  {project.challenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b5000] mt-1.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="p-4 sm:p-6 border-t border-[#dbc2ad]/30 bg-[#f6f3f2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#1b1c1c]/60">
            <Cpu className="w-4 h-4 text-[#8b5000]" />
            <span>Logiciels : {project.technicalSpecs?.logiciels?.join(", ") || "AutoCAD / Robot"}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                handleClose();
                onOpenQuote();
              }}
              className="bg-[#1b1c1c] hover:bg-[#ff9800] hover:text-[#1b1c1c] text-white px-5 py-2.5 rounded-lg font-headline text-xs font-bold uppercase tracking-wider transition-all"
            >
              Devis pour projet similaire
            </button>
            <a
              href={`https://wa.me/24176237090?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-lg font-headline text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
