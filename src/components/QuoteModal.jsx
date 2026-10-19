"use client";
import React, { useState, useEffect } from "react";
import { X, Send, MessageSquare, Mail, Building, MapPin, Phone, User, FileText } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    service: "Calcul de Structures Béton Armé",
    location: "Libreville",
    projectType: "Bâtiment R+1 / R+2",
    fullName: "",
    phone: "",
    description: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateBriefText = () => {
    return (
      `*DEMANDE D'ÉTUDE TECHNIQUE — WOODLYAM ENGINEERING*\n\n` +
      `👤 *Client* : ${formData.fullName || "Non renseigné"}\n` +
      `📞 *Contact* : ${formData.phone || "Non renseigné"}\n` +
      `🏗️ *Prestation* : ${formData.service}\n` +
      `📍 *Localisation* : ${formData.location}\n` +
      `📐 *Type d'ouvrage* : ${formData.projectType}\n` +
      `📝 *Détails / Besoins* : ${formData.description || "Souhaite un premier échange technique / devis."}\n\n` +
      `Transmis via la plateforme Woodlyam Engineering.`
    );
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(generateBriefText());
    window.open(`https://wa.me/24176237090?text=${text}`, "_blank");
    onClose();
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande d'étude Woodlyam - ${formData.service} (${formData.location})`);
    const body = encodeURIComponent(generateBriefText());
    window.open(`mailto:${COMPANY_INFO.contacts.email}?subject=${subject}&body=${body}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        className="relative w-full max-w-2xl bg-[#fcf9f8] rounded-2xl shadow-2xl border border-[#dbc2ad]/50 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#dbc2ad]/30 bg-[#fcf9f8]/95 backdrop-blur-sm">
          <div>
            <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-[#8b5000]">
              Cabinet Woodlyam Engineering
            </span>
            <h2 id="quote-modal-title" className="font-headline text-xl sm:text-2xl font-black uppercase text-[#1b1c1c] tracking-tight">
              Demander une Étude ou un Devis
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#1b1c1c]/70 hover:text-[#1b1c1c] hover:bg-[#f0eded] transition-colors"
            aria-label="Fermer le formulaire de devis"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form className="overflow-y-auto p-6 space-y-5 text-xs sm:text-sm">
          {/* Service Choice */}
          <div className="space-y-1.5">
            <label className="font-headline font-bold uppercase tracking-wider text-[#1b1c1c] flex items-center gap-2">
              <Building className="w-4 h-4 text-[#ff9800]" />
              Type de mission ou prestation
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-[#dbc2ad]/50 bg-white font-medium text-[#1b1c1c] focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
            >
              <option value="Calcul de Structures Béton Armé">Calcul de Structures Béton Armé (Poteaux, Poutres, Dalles)</option>
              <option value="Voiries & Réseaux Divers (VRD)">Voiries, Terrassements & Assainissement Pluvial</option>
              <option value="Soutènements & Géotechnique">Mur de Soutènement, Pente ou Fondation Spéciale</option>
              <option value="Contrôle & Suivi de Chantier">Maîtrise d&apos;Œuvre & Contrôle avant coulage</option>
              <option value="Diagnostic & Audit de Fissures">Audit Technique de Fissures ou Bâti Existant</option>
              <option value="Plans d'Exécution & Métrés">Édition de Plans de Ferraillage & Métrés Aciers</option>
              <option value="Autre Consultation Technique">Autre Consultation Technique en Génie Civil</option>
            </select>
          </div>

          {/* Location & Project Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-headline font-bold uppercase tracking-wider text-[#1b1c1c] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff9800]" />
                Localisation du chantier
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ex: Libreville, Ntoum, Akanda, Owendo..."
                className="w-full p-3 rounded-xl border border-[#dbc2ad]/50 bg-white font-medium text-[#1b1c1c] focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-headline font-bold uppercase tracking-wider text-[#1b1c1c] flex items-center gap-2">
                <Building className="w-4 h-4 text-[#ff9800]" />
                Type d&apos;ouvrage
              </label>
              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="Ex: Villa R+1, Immeuble R+3, Hangar, Mur..."
                className="w-full p-3 rounded-xl border border-[#dbc2ad]/50 bg-white font-medium text-[#1b1c1c] focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-headline font-bold uppercase tracking-wider text-[#1b1c1c] flex items-center gap-2">
                <User className="w-4 h-4 text-[#ff9800]" />
                Votre Nom ou Entreprise
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ex: M. Ndong / Entreprise X"
                className="w-full p-3 rounded-xl border border-[#dbc2ad]/50 bg-white font-medium text-[#1b1c1c] focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-headline font-bold uppercase tracking-wider text-[#1b1c1c] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff9800]" />
                Numéro Téléphone / WhatsApp
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ex: +241 76 23 70 90"
                className="w-full p-3 rounded-xl border border-[#dbc2ad]/50 bg-white font-medium text-[#1b1c1c] focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
              />
            </div>
          </div>

          {/* Details / Notes */}
          <div className="space-y-1.5">
            <label className="font-headline font-bold uppercase tracking-wider text-[#1b1c1c] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#ff9800]" />
              Description succincte du projet & objectifs
            </label>
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="Précisez la surface approximative, le délai envisagé ou vos contraintes particulières..."
              className="w-full p-3 rounded-xl border border-[#dbc2ad]/50 bg-white font-medium text-[#1b1c1c] focus:outline-none focus:ring-2 focus:ring-[#ff9800] resize-none"
            />
          </div>

          {/* Transmission CTAs */}
          <div className="pt-3 border-t border-[#dbc2ad]/30 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-5 rounded-xl font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[#25D366]/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Transmettre sur WhatsApp (Immédiat)</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSubmit}
              className="flex-1 bg-[#1b1c1c] hover:bg-[#8b5000] text-white py-3.5 px-5 rounded-xl font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Envoyer par E-mail</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
