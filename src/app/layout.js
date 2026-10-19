import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Woodlyam Engineering | Cabinet d'Ingénierie & Génie Civil — Libreville, Gabon",
  description:
    "Expertise technique en ingénierie civile dirigée par Mendame Ndong Warex Lansky. Dimensionnement de structures béton armé, VRD, ouvrages de soutènement et contrôle de chantiers à Libreville et dans tout le Gabon.",
  keywords: [
    "Ingénieur Génie Civil Gabon",
    "Woodlyam Engineering",
    "Warex Lansky Mendame Ndong",
    "BTP Gabon Libreville",
    "Bureau d'études structures Gabon",
    "Calcul Eurocode 2",
    "Plans béton armé",
    "Murs de soutènement",
    "Chantier routier terrassement Ondongo Ntoum",
  ],
  authors: [{ name: "Mendame Ndong Warex Lansky", url: "https://woodlyam.com" }],
  creator: "Woodlyam Engineering",
  openGraph: {
    title: "Woodlyam Engineering — Ingénierie & Structures Civiles",
    description:
      "Cabinet d'études et suivi de chantiers BTP au Gabon. Conception et calculs de structures fiables, durables et conformes aux normes internationales.",
    url: "https://woodlyam.com",
    siteName: "Woodlyam Engineering",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodlyam Engineering — Ingénierie & Génie Civil Gabon",
    description:
      "Bureau d'études et ingénierie BTP à Libreville, Gabon. Calcul de structures et suivi de chantiers.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="antialiased font-body bg-[#fcf9f8] text-[#1b1c1c] selection:bg-[#ff9800] selection:text-[#653900]">
        {children}
      </body>
    </html>
  );
}