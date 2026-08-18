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
    description: 'Plateforme de gestion des diffusions ONU et des partenaires pour la CENTIF. Système complet de gestion et suivi des diffusions.',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB'],
    image: '/images/centif.png',
  },
  {
    id: '2',
    name: 'Gestion des Appels d\'offres',
    description: 'Plateforme de gestion des dossiers d\'appels d\'offres pour 2SND. Permet la gestion complète du processus d\'appels d\'offres.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB'],
    image: '/images/DAO.png',
  },
  {
    id: '3',
    name: 'Gestion Immobilière',
    description: 'Plateforme de gestion immobilière pour QUI SUIS-JE IMMOBILIER. Système de gestion des biens, clients et transactions.',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB'],
    image: '/images/immobilier.png',
  },
  {
    id: '4',
    name: 'Réservation de Salles',
    description: 'Plateforme de réservation de salles de réunion pour le Ministère du Cadre de Vie. Système de gestion des réservations.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: '5',
    name: 'Réinitialisation de Mot de Passe',
    description: 'Plateforme de réinitialisation de mot de passe pour Successo. Système sécurisé de récupération de compte.',
    technologies: ['PHP', 'CSS', 'HTML', 'JavaScript'],
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
