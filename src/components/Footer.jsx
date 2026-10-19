"use client";
import React from "react";
import Image from "next/image";
import { ArrowUp, MapPin, Mail, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F1115] text-white pt-14 pb-24 lg:pb-14 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-neutral-700 shadow-sm shrink-0 bg-neutral-900">
                <Image
                  src="/projects/icone2.jpeg"
                  alt="Logo Woodlyam Engineering"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="font-headline text-lg font-black tracking-[0.2em] text-white uppercase">
                WOODLYAM
              </span>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              {COMPANY_INFO.slogan}. Bureau d&apos;études structures, voiries (VRD), soutènements et maîtrise d&apos;œuvre d&apos;exécution à Libreville et sur toute l&apos;étendue du territoire gabonais.
            </p>

            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 bg-neutral-900/90 px-3 py-1 rounded-full border border-neutral-800">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Conformité Eurocodes &amp; BAEL 91</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {"// NAVIGATION"}
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-300 font-headline">
              <li>
                <a href="#ouvrages" className="hover:text-[#F59E0B] transition-colors">
                  Ouvrages &amp; Projets
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-[#F59E0B] transition-colors">
                  Expertises &amp; Métiers
                </a>
              </li>
              <li>
                <a href="#methode" className="hover:text-[#F59E0B] transition-colors">
                  Méthodologie Qualité
                </a>
              </li>
              <li>
                <a href="#logiciels" className="hover:text-[#F59E0B] transition-colors">
                  Outils &amp; Éléments Finis
                </a>
              </li>
              <li>
                <a href="#ingenieur" className="hover:text-[#F59E0B] transition-colors">
                  L&apos;Ingénieur Fondateur
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F59E0B] transition-colors">
                  Coordonnées &amp; Devis
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {"// COORDONNÉES"}
            </h4>
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span className="text-neutral-400">{COMPANY_INFO.contacts.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contacts.phoneRaw}`} className="hover:text-white font-mono">
                  {COMPANY_INFO.contacts.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="hover:text-white font-mono truncate">
                  {COMPANY_INFO.contacts.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a
                  href={COMPANY_INFO.contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-mono text-[11px]"
                >
                  Ouvrir WhatsApp direct
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <p>
            © {new Date().getFullYear()} WOODLYAM ENGINEERING // {COMPANY_INFO.founder.fullName} • LIBREVILLE, GABON
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors"
            aria-label="Remonter en haut de page"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
