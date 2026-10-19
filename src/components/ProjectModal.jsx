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
  ArrowUpRight,
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
    `Bonjour Ingénieur Warex Lansky,\nJ'ai consulté la fiche technique de votre ouvrage "${project.title}" (${project.location}) sur Woodlyam Engineering. J'aimerais échanger avec vous concernant un projet similaire.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
      >
        {/* Sticky Minimalist Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-200 bg-white">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-neutral-400">
              FICHE TECHNIQUE //
            </span>
            <span className="px-2 py-0.5 text-[9px] font-mono uppercase rounded bg-neutral-100 text-neutral-700 font-bold">
              {project.categoryLabel}
            </span>
            <span className="px-2 py-0.5 text-[9px] font-mono uppercase rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
              {project.status}
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="Fermer la modale"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* Main Photo Viewer - CONTROLLED COMPACT HEIGHT */}
          <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-200">
            <Image
              src={currentImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

            {/* Bottom Overlay Coordinates */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>{project.location}, {project.country}</span>
              </span>
              <span className="font-mono text-[10px] text-white/70">
                Année {project.year} {project.surface ? `• ${project.surface}` : ""}
              </span>
            </div>
          </div>

          {/* Gallery Thumbnails (if multiple photos) */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageOverride(img)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border transition-all ${
                    currentImage === img
                      ? "border-neutral-900 ring-2 ring-neutral-900/20 scale-105"
                      : "border-neutral-200 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Afficher photo ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} aperçu ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Title & Scope */}
          <div>
            <h2 id="modal-title" className="font-headline text-xl sm:text-2xl font-black uppercase text-[#111827] tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technical Specs Table */}
          {project.technicalSpecs && (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 space-y-2.5">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#D97706] font-bold block">
                DONNÉES TECHNIQUES &amp; RÉGLEMENTAIRES
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-neutral-400 block text-[10px] font-mono">Structure</span>
                  <span className="font-headline font-bold text-neutral-800 mt-0.5 block">{project.technicalSpecs.structure}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] font-mono">Norme</span>
                  <span className="font-headline font-bold text-neutral-800 mt-0.5 block">{project.technicalSpecs.normes}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] font-mono">Volume / Terre</span>
                  <span className="font-headline font-bold text-neutral-800 mt-0.5 block">{project.technicalSpecs.volumeBeton}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] font-mono">Aciers HA</span>
                  <span className="font-headline font-bold text-neutral-800 mt-0.5 block">{project.technicalSpecs.acierUtilise}</span>
                </div>
              </div>
            </div>
          )}

          {/* Missions & Solutions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {project.missions && (
              <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-2">
                <span className="font-headline font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Missions de l&apos;Ingénieur
                </span>
                <ul className="space-y-1.5 text-neutral-600">
                  {project.missions.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-2">
                <span className="font-headline font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#D97706]" />
                  Contraintes Géotechniques
                </span>
                <ul className="space-y-1.5 text-neutral-600">
                  {project.challenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>{project.technicalSpecs?.logiciels?.join(", ") || "AutoCAD / Robot"}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                handleClose();
                onOpenQuote();
              }}
              className="flex-1 sm:flex-none px-4 py-2 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-800 font-headline text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Devis similaire
            </button>
            <a
              href={`https://wa.me/24176237090?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-headline text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
