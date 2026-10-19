"use client";
import React from "react";
import { CheckCircle2, X } from "lucide-react";

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-24 md:bottom-8 right-6 z-[100] max-w-sm bg-[#1b1c1c] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#ff9800]/40 flex items-center gap-3 animate-bounce">
      <CheckCircle2 className="w-5 h-5 text-[#ff9800] shrink-0" />
      <span className="text-xs md:text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        aria-label="Fermer la notification"
        className="ml-auto text-white/60 hover:text-white p-1 rounded-md"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
