"use client";
import React from "react";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Copy,
  ExternalLink,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function ContactSection({ onShowToast, onOpenQuote }) {
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    onShowToast(`${label} copié dans le presse-papier !`);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-2">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#D97706] font-semibold">
            {"// CONTACT & DÉMARRAGE DE PROJET"}
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
            Engager une Collaboration
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            Vous planifiez un chantier, avez besoin d&apos;une note de calcul certifiée ou d&apos;un audit structurel ?
            Contactez directement le bureau d&apos;études Woodlyam Engineering.
          </p>
        </div>

        {/* 4 Clean Communication Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* WhatsApp Direct */}
          <div className="bg-neutral-50/70 p-5 rounded-xl border border-neutral-200/80 hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-600 font-bold block">
                  Canal Prioritaire
                </span>
                <h3 className="font-headline text-sm font-bold text-neutral-900 mt-0.5">
                  WhatsApp Direct
                </h3>
                <p className="font-mono text-xs text-neutral-500 mt-1">
                  {COMPANY_INFO.contacts.phone}
                </p>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-neutral-200/60 flex items-center gap-2">
              <a
                href={COMPANY_INFO.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-1.5 px-3 rounded-lg text-xs font-headline font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Écrire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(COMPANY_INFO.contacts.phone, "Numéro WhatsApp")}
                className="p-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                title="Copier le numéro"
                aria-label="Copier le numéro WhatsApp"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Appel Téléphonique */}
          <div className="bg-neutral-50/70 p-5 rounded-xl border border-neutral-200/80 hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-200 text-neutral-800 flex items-center justify-center border border-neutral-300">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-bold block">
                  Ligne Téléphonique
                </span>
                <h3 className="font-headline text-sm font-bold text-neutral-900 mt-0.5">
                  Appel Direct
                </h3>
                <p className="font-mono text-xs text-neutral-500 mt-1">
                  {COMPANY_INFO.contacts.phone}
                </p>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-neutral-200/60 flex items-center gap-2">
              <a
                href={`tel:${COMPANY_INFO.contacts.phoneRaw}`}
                className="flex-1 bg-[#111827] hover:bg-[#D97706] text-white py-1.5 px-3 rounded-lg text-xs font-headline font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Appeler</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(COMPANY_INFO.contacts.phone, "Numéro de téléphone")}
                className="p-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                title="Copier le numéro"
                aria-label="Copier le numéro de téléphone"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Courriel Professionnel */}
          <div className="bg-neutral-50/70 p-5 rounded-xl border border-neutral-200/80 hover:border-rose-500 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-rose-600 font-bold block">
                  Messagerie
                </span>
                <h3 className="font-headline text-sm font-bold text-neutral-900 mt-0.5">
                  Courriel
                </h3>
                <p className="font-mono text-[11px] text-neutral-500 mt-1 truncate" title={COMPANY_INFO.contacts.email}>
                  {COMPANY_INFO.contacts.email}
                </p>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-neutral-200/60 flex items-center gap-2">
              <a
                href={`mailto:${COMPANY_INFO.contacts.email}`}
                className="flex-1 bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 py-1.5 px-3 rounded-lg text-xs font-headline font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Écrire</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(COMPANY_INFO.contacts.email, "Adresse e-mail")}
                className="p-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                title="Copier l'e-mail"
                aria-label="Copier l'adresse e-mail"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Localisation & Horaires */}
          <div className="bg-neutral-50/70 p-5 rounded-xl border border-neutral-200/80 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-200 text-neutral-700 flex items-center justify-center border border-neutral-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-bold block">
                  Siège &amp; Rayon
                </span>
                <h3 className="font-headline text-sm font-bold text-neutral-900 mt-0.5">
                  Libreville — Gabon
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Missions et déplacements sur tout le territoire national.
                </p>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-neutral-200/60 text-[10px] font-mono text-neutral-400 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#D97706]" />
              <span>{COMPANY_INFO.contacts.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Minimalist Architectural Quote Strip */}
        <div className="bg-[#111827] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-neutral-800">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="font-mono text-[9px] text-[#F59E0B] uppercase tracking-widest block">
              {"// ÉTUDES PRÉLIMINAIRES & CHIFFRAGE"}
            </span>
            <h3 className="font-headline text-lg sm:text-xl font-bold uppercase tracking-tight">
              Prêt à dimensionner ou sécuriser votre ouvrage ?
            </h3>
            <p className="text-xs text-neutral-400">
              Recevez sous 24h à 48h une proposition technique adaptée à vos contraintes de sol.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="shrink-0 bg-[#D97706] hover:bg-[#F59E0B] text-white hover:text-neutral-900 px-6 py-3 rounded-full font-headline font-semibold text-xs uppercase tracking-wide transition-all shadow-sm active:scale-95 flex items-center gap-2"
          >
            <span>Demander une étude structure</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
