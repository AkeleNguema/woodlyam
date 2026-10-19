export const COMPANY_INFO = {
  name: "Woodlyam Engineering",
  brand: "WOODLYAM",
  slogan: "L'intégrité structurelle au service de bâtisseurs exigeants",
  founder: {
    fullName: "MENDAME ME NDONG Warex Lansky",
    title: "Ingénieur Génie Civil & Fondateur",
    shortRole: "Ingénieur Génie Civil",
    bio: "Ingénieur en Génie Civil basé à Libreville, Gabon, Warex Lansky a fondé Woodlyam Engineering avec une conviction inébranlable : chaque édifice et chaque voie de communication doit allier robustesse technique absolue, optimisation des coûts de construction et pérennité sous les conditions climatiques équatoriales.",
    quote:
      "Mon engagement repose sur la fusion entre la rigueur mathématique, la modélisation de pointe et la réalité intransigeante du terrain pour bâtir les infrastructures gabonaises de demain.",
  },
  contacts: {
    phone: "+241 76 23 70 90",
    phoneRaw: "+24176237090",
    whatsapp: "https://wa.me/24176237090",
    email: "woodlyam-engineering@gmail.com",
    location: "Libreville, Gabon",
    address: "BP Libreville — Quartier Résidentiel & Chantiers Nationaux",
    availability: "Disponible pour nouveaux projets & consultations",
    workingHours: "Lun - Sam : 07h30 - 18h30",
  },
  stats: [
    {
      value: "35+",
      label: "Chantiers & Ouvrages",
      sub: "Bâtiments, VRD, soutènements",
    },
    {
      value: "100%",
      label: "Conformité Normative",
      sub: "Eurocodes, BAEL 91 & DTU",
    },
    {
      value: "10+",
      label: "Années d'Expertise",
      sub: "Conception & suivi terrain",
    },
    {
      value: "24/48h",
      label: "Réactivité Diagnostic",
      sub: "Devis & pré-étude rapide",
    },
  ],
  services: [
    {
      id: "structure",
      title: "Calcul de Structures Béton Armé",
      icon: "Building2",
      badge: "Cœur de Métier",
      shortDesc:
        "Modélisation éléments finis, dimensionnement des semelles, poteaux, poutres, dalles et édition des plans de ferraillage certifiés.",
      details: [
        "Descente de charges selon Eurocode 1 & 2 / BAEL 91",
        "Dimensionnement d'ossatures complexes (R+1 à R+8)",
        "Plans de coffrage et de ferraillage avec nomenclature des aciers",
        "Calculs de flèche et vérification de l'ouverture des fissures",
      ],
    },
    {
      id: "vrd",
      title: "Voiries & Réseaux Divers (VRD)",
      icon: "Truck",
      badge: "Infrastructures",
      shortDesc:
        "Conception géométrique d'itinéraires routiers, cubatures précises déblais/remblais et réseaux d'évacuation pluviale.",
      details: [
        "Tracé en plan, profil en long et profils en travers",
        "Équilibrage optimal des terrassements (Covadis)",
        "Dimensionnement hydraulique des caniveaux, fossés et dalots",
        "Structure de chaussée adaptée aux trafics lourds",
      ],
    },
    {
      id: "soutenement",
      title: "Soutènements & Géotechnique",
      icon: "ShieldCheck",
      badge: "Ouvrages d'Art",
      shortDesc:
        "Sécurisation des talus instables, conception de murs de soutènement poids, voiles béton armé et parois drainantes.",
      details: [
        "Vérification de stabilité au glissement, renversement et poinçonnement",
        "Systèmes de drainage sous fortes précipitations tropicales",
        "Ancrages géotechniques et fondations semi-profondes",
        "Gabions, perrés maçonnés et talutage sécurisé",
      ],
    },
    {
      id: "suivi",
      title: "Maîtrise d'Œuvre & Contrôle de Chantier",
      icon: "HardHat",
      badge: "Terrain & Qualité",
      shortDesc:
        "Inspection minutieuse avant coulage, audit des armatures, contrôle des bétons frais et respect scrupuleux du planning.",
      details: [
        "Contrôle strict des cales d'enrobage et de la nuance d'acier",
        "Supervision des coulage de béton et tests au cône d'Abrams",
        "Vérification de la verticalité et étanchéité des coffrages",
        "Réunions de chantier et procès-verbaux de réception",
      ],
    },
    {
      id: "audit",
      title: "Audit Technique & Diagnostic Structurel",
      icon: "CheckCircle2",
      badge: "Expertise Conseil",
      shortDesc:
        "Diagnostic de pathologies du bâti existant (fissures, affaissements, corrosion des aciers) et solutions de renforcement pérennes.",
      details: [
        "Relevé des désordres et cartographie des fissurations",
        "Étude de faisabilité pour surélévation ou réaménagement",
        "Préconisations de reprise en sous-œuvre et confortement",
        "Rapport technique d'expertise pour assureurs ou acquéreurs",
      ],
    },
    {
      id: "topo",
      title: "Topographie & Modélisation BIM 3D",
      icon: "Compass",
      badge: "Précision Numérique",
      shortDesc:
        "Relevés altimétriques de haute précision, modélisation BIM coordonnée et synthèses pluridisciplinaires 3D.",
      details: [
        "Modèle Numérique de Terrain (MNT) précis",
        "Implantation millimétrique des axes de fondations",
        "Maquette numérique Revit pour détection des clashs",
        "Génération automatique des métrés quantitatifs",
      ],
    },
  ],
  software: [
    {
      name: "Robot Structural Analysis",
      category: "Calculs & Éléments Finis",
      level: 96,
      desc: "Calcul matriciel tridimensionnel, descente de charges, spectres sismiques et vérification réglementaire Eurocodes.",
      tag: "Outil Majeur",
    },
    {
      name: "AutoCAD (2D / 3D)",
      category: "Dessin & Plans d'Exécution",
      level: 98,
      desc: "Production industrielle des plans de coffrage, coupes détaillées, élévations et carnets de ferraillage normalisés.",
      tag: "Standard BTP",
    },
    {
      name: "Revit BIM Structure",
      category: "Modélisation BIM Collaboratif",
      level: 90,
      desc: "Modélisation paramétrique 3D, détection des interférences réseaux-structures et quantification précise des matériaux.",
      tag: "BIM Ready",
    },
    {
      name: "Covadis & Mensura",
      category: "VRD & Terrassements",
      level: 92,
      desc: "Projets routiers complets, calcul automatique des cubatures déblais/remblais et réseaux hydrauliques d'assainissement.",
      tag: "VRD Expert",
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Diagnostic & Relevés",
      desc: "Visite de site, analyse du rapport géotechnique de sol et relevés topographiques pour appréhender les contraintes environnementales.",
      icon: "Compass",
    },
    {
      step: "02",
      title: "Calculs & Modélisation 3D",
      desc: "Calcul matriciel sous Robot Structural Analysis avec respect strict des Eurocodes (combinaisons ELU / ELS) pour dimensionner chaque élément.",
      icon: "Layers",
    },
    {
      step: "03",
      title: "Plans d'Exécution & Métrés",
      desc: "Édition de plans de coffrage millimétrés et nomenclatures d'armatures prêtes pour les ateliers de façonnage et les équipes de ferrailleurs.",
      icon: "FileText",
    },
    {
      step: "04",
      title: "Contrôle Terrain & Validation",
      desc: "Présence active sur le chantier pour contrôler les armatures avant coulage, valider la cure du béton et garantir la sécurité totale.",
      icon: "ShieldCheck",
    },
  ],
};
