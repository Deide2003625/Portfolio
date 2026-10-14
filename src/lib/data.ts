import { Experience, Project, Education, Skill } from '@/types';

export const personalInfo = {
  name: 'GAHOU Chédide',
  title: 'Développeuse Full Stack',
  tagline: 'Je transforme des idées en applications web modernes et performantes.',
  email: 'houefagahou@gmail.com',
  phone: '01 59 39 29 12',
  location: 'Bénin/ Abomey-Calavi',
};

export const about = {
  description: `Je suis GAHOU Chédide, étudiante en Génie Informatique et Logiciel, passionnée par le développement logiciel, les technologies innovantes et le développement Full Stack.
  
 Je souhaite mettre mes compétences en développement web au service d’une entreprise innovante et contribuer à la réalisation de projets performants et évolutifs.`,
  objectives: [
    'Acquérir de l\'expérience professionnelle en développement web',
    'Contribuer à des projets innovants et impactants',
    'Développer mes compétences en Full Stack',
    'Travailler dans un environnement collaboratif et stimulant',
  ],
  interests: [
    'Développement Web',
    'Technologies innovantes',
    'Design d\'interface',
    'Open Source',
    'Résolution de problèmes',
  ],
};

export const skills: Skill[] = [
  {
    category: 'Frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'Sass'],
  },
  {
    category: 'Backend',
    technologies: ['PHP', 'Python', 'Node.js', 'Laravel', 'API REST'],
  },
  {
    category: 'Bases de données',
    technologies: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'Outils',
    technologies: ['Git', 'GitLab', 'VS Code', 'Figma'],
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: '2SND Technologie',
    position: 'Développeuse Web Full Stack',
    type: 'Stage professionnel',
    period: 'Depuis octobre 2025',
    description: [
      'Création d\'une plateforme de gestion des diffusions ONU et des partenaires pour la CENTIF avec Next.js et Node.js',
      'Création d\'une plateforme de gestion des dossiers d\'appels d\'offres pour 2SND avec Next.js',
      'Création d\'une plateforme de gestion immobilière pour QUI SUIS-JE IMMOBILIER avec Next.js et Node.js',
    ],
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    id: '2',
    company: 'Espoir Plus Technologie',
    position: 'Développeuse Web',
    type: 'Expérience pratique',
    period: 'Depuis 2024',
    description: [
      'Travail collaboratif dans un environnement professionnel',
      'Participation aux projets de développement web',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    id: '3',
    company: 'Ministère du Cadre de Vie',
    position: 'Développeuse Full Stack',
    type: 'Stage académique',
    period: '2023–2024',
    description: [
      'Création d\'une plateforme de réservation de salles de réunion',
      'Développement des fonctionnalités frontend et backend',
    ],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: '4',
    company: 'Successo',
    position: 'Développeuse Full Stack',
    type: 'Stage académique',
    period: '2022–2023',
    description: [
      'Création d\'une plateforme de réinitialisation de mot de passe',
      'Développement de l\'interface utilisateur et de la logique backend',
    ],
    technologies: ['PHP', 'CSS', 'HTML', 'JavaScript'],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Plateforme CENTIF',
    description: 'Plateforme de gestion des diffusions ONU et des partenaires pour la CENTIF. Système complet de gestion et suivi des diffusions.\n\nJ’ai participé à la conception et assuré le développement du frontend et du backend.',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB'],
    image: '/images/centif.png',
    live: 'https://sfc-benin.centif.bj/',
  },
  {
    id: '2',
    name: 'Gestion des Appels d\'offres',
    description: 'Plateforme de gestion des dossiers d\'appels d\'offres pour 2SND. Permet la gestion complète du processus d\'appels d\'offres.\n\nJ’ai participé à la conception et assuré le développement du frontend et du backend.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB'],
    image: '/images/DAO.png',
  },
  {
    id: '3',
    name: 'SIGIMMO',
    description: 'SIGIMMO — Plateforme immobilière\n\nSIGIMMO est une plateforme web immobilière dédiée à la gestion et à la valorisation des biens immobiliers. Elle permet de centraliser les informations relatives aux maisons, appartements, terrains et autres biens, tout en facilitant les opérations d’achat, de vente et de location.\n\nLa plateforme a pour objectif de mettre en relation les différents acteurs du secteur immobilier, notamment les agences immobilières, les propriétaires, les acheteurs et les locataires, à travers un espace numérique accessible et organisé.\n\nJ’ai participé à la conception et assuré le développement du frontend de la plateforme.\n\nPrincipales fonctionnalités\n\n- Gestion des biens immobiliers : enregistrement, modification et consultation des informations sur les biens disponibles.\n- Publication d’annonces immobilières : présentation des biens avec photos, descriptions, prix, localisation et caractéristiques.\n- Recherche de biens : recherche et filtrage des annonces selon le type de bien, le budget, la localisation et le mode de transaction.\n- Gestion des ventes et locations : suivi des biens proposés à la vente ou à la location.\n- Gestion des clients : centralisation des informations relatives aux acheteurs, vendeurs, propriétaires et locataires.\n- Administration de la plateforme : gestion des utilisateurs, des accès et des informations immobilières.',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/immobilier.png',
    live: 'https://sigimmo-frontend.pprod.2snd.bj/',
  },
  {
    id: '4',
    name: 'FormFlow',
    description: 'FormFlow est une application web de création, de gestion et de suivi de formulaires et d’évaluations en ligne. Elle vise à faciliter la collecte de réponses, la gestion des questionnaires et le suivi des résultats à partir d’une plateforme centralisée.\n\nJ’ai participé à la conception et assuré le développement du backend de la plateforme.\n\nL’application permet de mettre en place des formulaires, de gérer leur contenu, de recueillir les réponses des participants et d’exploiter les données collectées. Elle comporte également des fonctionnalités de gestion et d’administration adaptées aux besoins de la plateforme.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    image: '/images/form.png',
    live: 'https://formflow.pprod.2snd.bj/',
  },
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Licence en Système Informatique et Logiciel',
    institution: 'École Supérieure Le Faucon',
    period: 'Depuis 2025',
    description: 'Formation approfondie en développement logiciel, bases de données, et systèmes informatiques.',
  },
  {
    id: '2',
    degree: 'Baccalauréat scientifique, série C',
    institution: 'Lycée des Jeunes Filles de Ouidah',
    period: 'Année 2022',
    description: 'Spécialisation en mathématiques et sciences physiques.',
  },
  {
    id: '3',
    degree: 'BEPC',
    institution: 'Lycée des Jeunes de Ouidah',
    period: 'Année 2019',
    description: 'Brevet d\'études du premier cycle.',
  },
];

export const socialLinks = {
  github: '',
  linkedin: '',
  twitter: '',
};
