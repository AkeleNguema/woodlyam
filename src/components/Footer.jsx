"use client";
import React from "react";
import { ArrowUp, MapPin, Mail, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141515] text-white pt-16 pb-28 lg:pb-16 px-4 sm:px-6 lg:px-8 border-t border-[#ff9800]/20 relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#ff9800] text-[#1b1c1c] flex items-center justify-center font-bold text-xl font-headline">
                W
              </div>
              <div>
                <span className="font-headline text-2xl font-black tracking-[0.2em] block leading-none text-white">
                  WOODLYAM
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#ff9800] font-bold">
                  ENGINEERING • GABON
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              {COMPANY_INFO.slogan}. Bureau d&apos;études structures, voiries (VRD), soutènements et maîtrise d&apos;œuvre d&apos;exécution à Libreville et sur toute l&apos;étendue du territoire gabonais.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#ff9800]" />
              <span>Conformité Eurocodes &amp; BAEL 91</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-[#ff9800]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <a href="#realisations" className="hover:text-[#ff9800] transition-colors">
                  Réalisations &amp; Projets
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff9800] transition-colors">
                  Services &amp; Compétences
                </a>
              </li>
              <li>
                <a href="#methodologie" className="hover:text-[#ff9800] transition-colors">
                  Processus d&apos;Ingénierie
                </a>
              </li>
              <li>
                <a href="#logiciels" className="hover:text-[#ff9800] transition-colors">
                  Outils &amp; Éléments Finis
                </a>
              </li>
              <li>
                <a href="#apropos" className="hover:text-[#ff9800] transition-colors">
                  L&apos;Ingénieur Fondateur
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ff9800] transition-colors">
                  Coordonnées &amp; Devis
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-[#ff9800]">
              Coordonnées Officielles
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff9800] shrink-0" />
                <span>{COMPANY_INFO.contacts.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff9800] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contacts.phoneRaw}`} className="hover:text-white font-mono">
                  {COMPANY_INFO.contacts.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff9800] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="hover:text-white font-mono truncate">
                  {COMPANY_INFO.contacts.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={COMPANY_INFO.contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-bold"
                >
                  Ouvrir WhatsApp direct
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-headline font-bold uppercase tracking-wider text-neutral-300">
              © {new Date().getFullYear()} WOODLYAM ENGINEERING — Tous droits réservés.
            </p>
            <p className="text-[11px] text-neutral-500">
              Mendame Ndong Warex Lansky • Ingénieur Génie Civil • Libreville, République Gabonaise.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-[#ff9800] hover:text-[#1b1c1c] text-white border border-white/10 transition-all font-headline text-[11px] font-bold uppercase tracking-wider"
            aria-label="Remonter en haut de page"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
