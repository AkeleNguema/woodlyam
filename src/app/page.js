"use client";
import React, { useState } from 'react';

export default function WoodlyamMaquette() {
  // Le seul ajout : l'état pour afficher ou cacher le portfolio
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="bg-[#fcf9f8] font-['Inter'] text-[#1b1c1c] overflow-x-hidden min-h-screen">
      {/* Import des polices et icônes via Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .technical-grid {
          background-image: radial-gradient(#dbc2ad 0.5px, transparent 0.5px);
          background-size: 20px 20px;
          opacity: 0.1;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      {/* Header / TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#fcf9f8]/80 backdrop-blur-md shadow-[0_12px_32px_rgba(27,28,28,0.06)] flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#ff9800] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            signal_cellular_alt
          </span>
          <span className="font-['Space_Grotesk'] text-2xl font-black text-[#1b1c1c] tracking-[0.2em]">WOODLYAM</span>
        </div>
        <button className="material-symbols-outlined text-[#1b1c1c] text-3xl scale-95 active:scale-90 duration-200">
          menu
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 min-h-[85vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            className="w-full h-full object-cover grayscale-[20%] brightness-50" 
            src="/projects/32.JPG" 
            alt="Ingénieur Woodlyam"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9f8] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 space-y-6">
          <div className="inline-block bg-[#ffdcbe] px-3 py-1 rounded-sm">
            <span className="text-[10px] font-bold tracking-widest text-[#653900] uppercase">INGÉNIEUR GÉNIE CIVIL</span>
          </div>
          
          <h1 className="font-['Space_Grotesk'] text-5xl font-bold tracking-tighter leading-tight uppercase" style={{ color: '#FFFFFF' }}>
            MENDAME NDONG <br/>
            <span className="text-[#ff9800]">Warex Lansky</span>
          </h1>

          <p className="text-lg leading-relaxed max-w-md font-medium" style={{ color: '#FFFFFF' }}>
            Fondateur de <span className="font-bold uppercase tracking-wider">Woodlyam</span>, 
            déterminé à bâtir l'infrastructure de demain avec rigueur et intégrité structurelle.
          </p>

          <button 
            onClick={() => setShowPortfolio(!showPortfolio)}
            className="w-full bg-[#ff9800] text-[#653900] font-bold py-4 px-8 rounded-lg flex justify-between items-center group transition-all duration-300 shadow-xl"
          >
            <span>{showPortfolio ? "FERMER LE PORTFOLIO" : "CONSULTER MON PORTFOLIO"}</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* --- SECTION PORTFOLIO : Apparaît seulement au clic --- */}
      {showPortfolio && (
        <section className="bg-white py-16 px-6">
          <div className="flex flex-col items-start mb-10">
            <span className="text-gray-400 uppercase text-[10px] font-bold tracking-[0.3em] mb-2">Archives Techniques</span>
            <h2 className="font-['Space_Grotesk'] text-4xl font-black uppercase tracking-tighter text-[#1b1c1c]">Réalisations</h2>
            <div className="w-16 h-1 bg-[#ff9800] mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <img src="/projects/2.JPG" className="w-full aspect-[4/5] object-cover rounded-sm" alt="Projet Ntoum" />
              <p className="text-[#ff9800] text-[10px] font-bold uppercase tracking-widest">NTOUM</p>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#1b1c1c]">Bâtiment R+2 à Ntoum</h3>
              <p className="text-gray-400 uppercase text-[10px]">GROS ŒUVRE TERMINÉ</p>
            </div>
            <div className="space-y-3">
              <img src="/projects/3.JPG" className="w-full aspect-[4/5] object-cover rounded-sm" alt="Chantier Ondongo" />
              <p className="text-[#ff9800] text-[10px] font-bold uppercase tracking-widest">ONDONGO</p>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#1b1c1c]">Chantier Routier Ondongo</h3>
              <p className="text-gray-400 uppercase text-[10px]">TERRASSEMENT 100%</p>
            </div>
            <div className="space-y-3">
              <img src="/projects/6.JPG" className="w-full aspect-[4/5] object-cover rounded-sm" alt="Soutènement" />
              <p className="text-[#ff9800] text-[10px] font-bold uppercase tracking-widest">STRUCTURE</p>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#1b1c1c]">Mur de Soutènement</h3>
              <p className="text-gray-400 uppercase text-[10px]">OUVRAGE SPÉCIALISÉ</p>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="bg-[#f6f3f2] py-16 px-6 relative overflow-hidden">
        <div className="technical-grid absolute inset-0"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-[#8b5000]"></div>
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight uppercase">À Propos</h2>
          </div>
          <p className="text-[#1b1c1c]/70 text-lg leading-relaxed mb-12 italic border-l-4 border-[#8b5000] pl-6">
            "Mon engagement repose sur la fusion entre la précision technique et l'innovation durable pour transformer le paysage urbain."
          </p>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: 'architecture', title: 'Bâtiment', desc: 'Conception et supervision de structures résidentielles et complexes.' },
              { icon: 'road', title: 'Routes', desc: 'Optimisation des tracés et maîtrise des terrassements.' },
              { icon: 'foundation', title: 'Soutènement', desc: 'Solutions géotechniques et ouvrages de protection complexes.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg flex items-start gap-4 shadow-sm">
                <span className="material-symbols-outlined text-[#8b5000] text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-['Space_Grotesk'] font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h3>
                  <p className="text-xs text-[#1b1c1c]/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#fcf9f8] py-16 px-6">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[2px] w-12 bg-[#8b5000]"></div>
          <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight uppercase">Compétences Techniques</h2>
        </div>
        <div className="space-y-12">
          <div>
            <label className="text-[10px] font-bold tracking-[0.2em] text-[#8b5000] uppercase mb-6 block">Écosystème Logiciel</label>
            <div className="grid grid-cols-2 gap-4">
              {['AutoCAD', 'Revit', 'Robot', 'Covadis'].map((soft) => (
                <div key={soft} className="bg-[#f0eded] p-6 rounded flex flex-col items-center justify-center text-center shadow-sm">
                  <span className="material-symbols-outlined mb-2 text-[#1b1c1c]">
                    {soft === 'AutoCAD' ? 'settings_input_component' : soft === 'Revit' ? 'layers' : soft === 'Robot' ? 'precision_manufacturing' : 'terrain'}
                  </span>
                  <span className="font-['Space_Grotesk'] text-sm font-bold">{soft}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <label className="text-[10px] font-bold tracking-[0.2em] text-[#8b5000] uppercase block">Expertise Métier</label>
            <div className="grid grid-cols-1 gap-2">
              {["Dimensionnement Structure", "Calcul Eurocodes", "Levé Topographique", "Gestion d'Équipe", "Contrôle Terrassement", "Ferraillage & Coffrage"].map((exp) => (
                <div key={exp} className="flex justify-between items-center py-4 border-b border-[#dbc2ad]/20">
                  <span className="font-['Space_Grotesk'] text-sm font-medium uppercase tracking-wide">{exp}</span>
                  <span className="material-symbols-outlined text-[#8b5000] scale-75" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fcf9f8] py-16 px-8 mb-20 flex flex-col items-center gap-10 text-center border-t border-[#dbc2ad]/10">
  <div className="flex items-center gap-12">
    
    {/* LOGO WHATSAPP OFFICIEL */}
    <a 
      href="https://wa.me/24176237090" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="transition-transform hover:scale-110 active:scale-95"
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
      </svg>
    </a>

    {/*mail*/}
    <a 
      href="mailto:woodlyam-engineering@gmail.com" 
      className="transition-transform hover:scale-110 active:scale-95"
    >
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.39l-9 6.22-9-6.22V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.42.17-.8.45-1.07l.03-.03C.73 3.15 1.1 3 1.5 3h.6l9.9 6.85L21.9 3h.6c.4 0 .77.15 1.02.4l.03.03c.28.27.45.65.45 1.07z" fill="#EA4335"/>
      </svg>
    </a>

    {/* bd */}
    <div className="transition-transform hover:scale-110 text-[#006689]">
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 13c-4.47 0-8.21-1.34-9.5-3.23V14c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-2.23c-1.29 1.89-5.03 3.23-9.5 3.23zM3 18.23V19c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-.77c-1.29 1.89-5.03 3.23-9.5 3.23s-8.21-1.34-9.5-3.23z" fill="currentColor"/>
      </svg>
    </div>
  </div>

  {/* corpo et localisation */}
  <div className="space-y-3">
    <p className="text-[11px] tracking-[0.3em] text-[#1b1c1c]/40 uppercase font-black italic">
      © 2026 WOODLYAM ENGINEERING
    </p>
    <div className="flex items-center justify-center gap-2">
        <span className="h-[1px] w-4 bg-[#8b5000]/30"></span>
        <p className="text-[10px] tracking-widest text-[#8b5000] uppercase font-bold">
            Libreville — Gabon
        </p>
        <span className="h-[1px] w-4 bg-[#8b5000]/30"></span>
    </div>
  </div>
</footer>


      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-safe bg-[#fcf9f8] border-t border-[#dbc2ad]/20 shadow-lg">
        <div className="flex flex-col items-center justify-center text-[#1b1c1c]/50">
          <span className="material-symbols-outlined">architecture</span>
          <span className="text-[9px] font-bold uppercase tracking-widest mt-1">DRAFTS</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#1b1c1c]/50">
          <span className="material-symbols-outlined">construction</span>
          <span className="text-[9px] font-bold uppercase tracking-widest mt-1">WORKS</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#ff9800] text-[#1b1c1c] rounded-xl py-2 px-4 shadow-lg scale-110">
          <span className="material-symbols-outlined">settings_input_component</span>
          <span className="text-[9px] font-bold uppercase tracking-widest mt-1">SPECS</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#1b1c1c]/50">
          <span className="material-symbols-outlined">location_on</span>
          <span className="text-[9px] font-bold uppercase tracking-widest mt-1">SITE</span>
        </div>
      </nav>
    </div>
  );
}