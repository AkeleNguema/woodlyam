import "./globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Woodlyam Engineering | Bureau d'Études & Ingénierie Civile — Libreville, Gabon",
  description:
    "Cabinet d'ingénierie et de calculs de structures dirigé par MENDAME ME NDONG Warex Lansky . Dimensionnement béton armé Eurocodes, voiries & réseaux divers (VRD), soutènements et maîtrise d'œuvre à Libreville, Gabon.",
  keywords: [
    "Ingénieur Génie Civil Gabon",
    "Woodlyam Engineering",
    "MENDAME ME NDONG Warex Lansky",
    "BTP Gabon Libreville",
    "Bureau d'études structures Gabon",
    "Calcul Eurocode 2",
    "Plans béton armé",
    "Murs de soutènement",
    "Chantier routier terrassement Ondongo Ntoum",
  ],
  authors: [{ name: "MENDAME ME NDONG Warex Lansky", url: "https://woodlyam.com" }],
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased font-body bg-[#FAFAFA] text-[#111827] selection:bg-[#F59E0B] selection:text-[#111827]">
        {children}
      </body>
    </html>
  );
}