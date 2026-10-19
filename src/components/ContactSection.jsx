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
  ShieldCheck,
  Send,
} from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function ContactSection({ onShowToast, onOpenQuote }) {
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    onShowToast(`${label} copié dans le presse-papier !`);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-[0.25em] text-[#8b5000]">
            <span className="w-8 h-[2px] bg-[#ff9800]"></span>
            Prise de Contact Directe
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase text-[#1b1c1c] tracking-tight">
            Engager une Collaboration
          </h2>
          <p className="text-sm sm:text-base text-[#1b1c1c]/70 leading-relaxed">
            Vous avez un projet de construction, un besoin d&apos;audit structural, ou des plans à valider ?
            Contactez directement l&apos;ingénieur ou demandez une pré-étude.
          </p>
        </div>

        {/* 4 Interactive Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp Card */}
          <div className="bg-[#fcf9f8] p-6 rounded-2xl border border-[#dbc2ad]/40 shadow-sm hover:border-[#25D366] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-headline font-bold uppercase tracking-wider text-[#128C7E] block">
                  Canal Prioritaire
                </span>
                <h3 className="font-headline text-lg font-bold text-[#1b1c1c] mt-0.5">
                  WhatsApp Direct
                </h3>
                <p className="text-xs text-[#1b1c1c]/70 mt-1 font-mono font-medium">
                  {COMPANY_INFO.contacts.phone}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#dbc2ad]/20 flex items-center gap-2">
              <a
                href={COMPANY_INFO.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-2 px-3 rounded-lg text-xs font-headline font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Écrire</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(COMPANY_INFO.contacts.phone, "Numéro WhatsApp")}
                className="p-2 rounded-lg bg-white border border-[#dbc2ad]/30 hover:bg-[#f0eded] text-[#1b1c1c]/70 hover:text-[#1b1c1c] transition-colors"
                title="Copier le numéro"
                aria-label="Copier le numéro WhatsApp"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-[#fcf9f8] p-6 rounded-2xl border border-[#dbc2ad]/40 shadow-sm hover:border-[#ff9800] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#ff9800]/15 text-[#8b5000] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-headline font-bold uppercase tracking-wider text-[#8b5000] block">
                  Ligne Téléphonique
                </span>
                <h3 className="font-headline text-lg font-bold text-[#1b1c1c] mt-0.5">
                  Appel Direct
                </h3>
                <p className="text-xs text-[#1b1c1c]/70 mt-1 font-mono font-medium">
                  {COMPANY_INFO.contacts.phone}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#dbc2ad]/20 flex items-center gap-2">
              <a
                href={`tel:${COMPANY_INFO.contacts.phoneRaw}`}
                className="flex-1 bg-[#1b1c1c] hover:bg-[#8b5000] text-white py-2 px-3 rounded-lg text-xs font-headline font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Appeler</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(COMPANY_INFO.contacts.phone, "Numéro de téléphone")}
                className="p-2 rounded-lg bg-white border border-[#dbc2ad]/30 hover:bg-[#f0eded] text-[#1b1c1c]/70 hover:text-[#1b1c1c] transition-colors"
                title="Copier le numéro"
                aria-label="Copier le numéro de téléphone"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-[#fcf9f8] p-6 rounded-2xl border border-[#dbc2ad]/40 shadow-sm hover:border-[#EA4335] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EA4335]/15 text-[#EA4335] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-headline font-bold uppercase tracking-wider text-[#EA4335] block">
                  Courriel Professionnel
                </span>
                <h3 className="font-headline text-lg font-bold text-[#1b1c1c] mt-0.5 truncate">
                  Messagerie E-mail
                </h3>
                <p className="text-xs text-[#1b1c1c]/70 mt-1 font-mono truncate" title={COMPANY_INFO.contacts.email}>
                  {COMPANY_INFO.contacts.email}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#dbc2ad]/20 flex items-center gap-2">
              <a
                href={`mailto:${COMPANY_INFO.contacts.email}`}
                className="flex-1 bg-[#EA4335] hover:bg-[#d33426] text-white py-2 px-3 rounded-lg text-xs font-headline font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Écrire</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(COMPANY_INFO.contacts.email, "Adresse e-mail")}
                className="p-2 rounded-lg bg-white border border-[#dbc2ad]/30 hover:bg-[#f0eded] text-[#1b1c1c]/70 hover:text-[#1b1c1c] transition-colors"
                title="Copier l'e-mail"
                aria-label="Copier l'adresse e-mail"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Location & Office Hours */}
          <div className="bg-[#fcf9f8] p-6 rounded-2xl border border-[#dbc2ad]/40 shadow-sm hover:border-[#8b5000] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#8b5000]/15 text-[#8b5000] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-headline font-bold uppercase tracking-wider text-[#8b5000] block">
                  Siège &amp; Rayon d&apos;Action
                </span>
                <h3 className="font-headline text-lg font-bold text-[#1b1c1c] mt-0.5">
                  Libreville — Gabon
                </h3>
                <p className="text-xs text-[#1b1c1c]/70 mt-1">
                  Missions et déplacements sur tout le territoire national.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#dbc2ad]/20 text-[11px] text-[#1b1c1c]/70 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#ff9800]" />
              <span>{COMPANY_INFO.contacts.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Big CTA Banner for Structural Quote */}
        <div className="bg-gradient-to-r from-[#1b1c1c] via-[#2A221B] to-[#1b1c1c] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden border border-[#ff9800]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-headline font-bold uppercase tracking-widest text-[#ff9800] bg-white/10 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              Études Préliminaires & Chiffrage Gratuit
            </div>
            <h3 className="font-headline text-2xl sm:text-4xl font-black uppercase tracking-tight">
              Prêt à sécuriser votre prochain chantier ?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Recevez sous 24 à 48 heures une proposition technique détaillée, adaptée aux contraintes du sol et du cahier des charges.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="shrink-0 bg-[#ff9800] hover:bg-[#ffa726] text-[#1b1c1c] px-8 py-4 rounded-xl font-headline font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-[#ff9800]/30 transition-all flex items-center gap-3 active:scale-95"
          >
            <span>Demander une étude structure</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
