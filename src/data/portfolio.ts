import {
  BrainCircuit,
  Code2,
  ExternalLink,
  LayoutDashboard,
  Mail,
  Palette,
  Rocket,
  Sparkles,
  Users,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import type {
  EducationCardData,
  KnowledgeCardData,
  Locale,
  ProgressItem,
  ProjectData,
  SocialLinkData,
} from '@/types/portfolio';

type LocaleBlock = {
  name: string;
  title: string;
  role: string;
  profileSummary: string;
  sidebarIntro: string;
  profileDialog: {
    title: string;
    lead: string;
    bullets: string[];
  };
  footer: string;
  contactLabel: string;
  countryLabel: string;
  languagesLabel: string;
  programmingLabel: string;
  extraSkillsLabel: string;
  knowledgeTitle: string;
  educationTitle: string;
  portfolioTitle: string;
  contactCta: string;
};

/* En esta seccion organizo todo el contenido del protafolio, con la finalidad de hacerlo en cierta 
medida "Modular", permitiendome modificar el contenido del portafolio (asi como tambien manejar varios idiomas) 
sin afectar los otros componentes del portafolio. */


const shared = {
  avatar: '/ImageCV.png',
  avatarFallback: '/avatar.svg',
  heroAvatar: '/ImagenHero.png',
  heroAvatarFallback: '/avatar.svg',
  resumePdf: '/CVMateoVasquez.pdf',
  heroWords: ['Full Stack Developer', 'Systems Engineering Student', 'Machine Learning Focused'],
  email: 'mateo.vasquezg@udea.edu.co',
  country: 'Colombia',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/Lanza11', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mateo-v%C3%A1squez-garc%C3%ADa-82b803292/', icon: FaLinkedin },
    { label: 'Email', href: 'mailto:mateo.vasquezg@udea.edu.co', icon: Mail },
  ] satisfies SocialLinkData[],
  languages: [
    { label: 'Español', value: 100 },
    { label: 'English', value: 82 },
    { label: 'Deutsch', value: 12 },
  ] satisfies ProgressItem[],
  programmingLanguages: [
    { label: 'TypeScript', value: 88 },
    { label: 'JavaScript', value: 94 },
    { label: 'HTML/CSS', value: 90 },
    { label: 'SQL', value: 93 },
    { label: 'Python', value: 87 },
    { label: 'Java', value: 93 },
  ] satisfies ProgressItem[],
  extraSkills: ['UI Systems', 'Responsive Design', 'Accessibility', 'Git / GitHub', 'Teamwork', 'Effective Communication', 'AWS'],
  knowledge: [
    {
      title: { 
        es: 'Machine Learning',
        en: 'Machine Learning'
      },
      description: {
        es: 'Exploro modelos, datasets y casos de uso para construir soluciones prácticas con enfoque analítico.',
        en: 'I explore models, datasets, and use cases to build practical solutions with an analytical focus.',
      },
      icon: BrainCircuit,
    },
    {
      title: { 
        es: 'Desarrollo basado en datos',
        en: 'Data-Driven Development'
      },
      description: {
        es: 'Estructuro información para que el contenido sea claro, escalable y fácil de actualizar.',
        en: 'I structure information so content stays clear, scalable, and easy to update.',
      },
      icon: LayoutDashboard,
    },
    {
      title: { 
        es: 'Visualización de datos',
        en: 'Data Visualization'
      },
      description: {
        es: 'Transformo información compleja en pantallas legibles y útiles para apoyar decisiones.',
        en: 'I transform complex information into readable, useful screens that support decisions.',
      },
      icon: Palette,
    },
    {
      title: { 
        es: 'Seguridad de la información',
        en: 'Information Security'
      },
      description: {
        es: 'Aplicó buenas prácticas para proteger datos y construir interfaces confiables.',
        en: 'I apply best practices to protect data and build trustworthy interfaces.',
      },
      icon: Code2,
    },
  ] satisfies KnowledgeCardData[],
  education: [
    {
      institution: 'Universidad de Antioquia',
      dates: '2023 - actualidad',
      degree: {
        es: 'Ingeniería de Sistemas (en curso)',
        en: 'B.Sc. in Systems Engineering (in progress)',
      },
      description: {
        es: 'Base académica en desarrollo de software, estructuras de datos, trabajo colaborativo y proyectos aplicados.',
        en: 'Academic background in software development, data structures, teamwork, and applied projects.',
      },
    },
    {
      institution: 'IBM',
      dates: '2025 - 2026',
      degree: {
        es: 'Machine Learning',
        en: 'Machine Learning',
      },
      description: {
        es: 'Formación centrada en modelos, casos de uso y aplicación práctica de machine learning.',
        en: 'Training focused on models, use cases, and practical application of machine learning.',
      },
    },
    {
      institution: 'IBM',
      dates: '2025 - 2026',
      degree: {
        es: 'Ciencia de Datos',
        en: 'Data Science',
      },
      description: {
        es: 'Enfoque en el ciclo de datos: recolección, procesamiento, análisis y visualización.',
        en: 'Focus on the data cycle: collection, processing, analysis, and visualization.',
      },
    },
    {
      institution: 'Movistar',
      dates: '2025',
      degree: {
        es: 'Introducción al desarrollo de videojuegos',
        en: 'Introduction to Game Development',
      },
      description: {
        es: 'Fundamentos de diseño, lógica y programación aplicados al desarrollo de videojuegos con Unity.',
        en: 'Fundamentals of design, logic, and programming applied to game development with Unity.',
      },
    },
  ] satisfies EducationCardData[],
  projects: [
    {
      slug: 'inventory-and-sales-system',
      title: { 
        es: 'Sistema de inventario y ventas', 
        en: 'Inventory and Sales System' 
      },
      description: {
        es: 'Sistema para gestionar inventarios en múltiples bodegas, controlar movimientos y generar facturación de ventas.',
        en: 'System to manage inventory across multiple warehouses, track stock movements, and generate sales invoices.',
      },
      image: '/projects/RegistroVenta.jpg',
      github: 'https://github.com/Lanza11/Inventario_y_registro_de_ventas',
      stack: ['Rust', 'Next.js', 'TailwindCSS', 'TypeScript'],
      impact: {
        es: 'Mejoró la organización del inventario y redujo el tiempo operativo en la generación de facturas.',
        en: 'Improved inventory organization and reduced operational time in invoice generation.',
      },
      challenge: {
        es: 'Entender la lógica del negocio y los flujos de venta sin perder claridad visual.',
        en: 'Understanding business logic and sales flows while maintaining visual clarity.',
      },
    },
    {
      slug: 'vitalapp',
      title: { 
        es: 'VitalApp - plataforma de ejercicios para adultos mayores', 
        en: 'VitalApp - Exercise Platform for Older Adults' 
      },
      description: {
        es: 'Aplicación web enfocada en ejercicios para adultos mayores, con diseño modular y contenido editable.',
        en: 'Web application focused on exercise routines for older adults, with modular design and editable content.',
      },
      image: '/projects/VitalApp.jpg',
      github: 'https://github.com/CarlosZuluagaU/Vital-App',
      stack: ['Java', 'React', 'TypeScript', 'TailwindCSS'],
      impact: {
        es: 'Permitió validar la propuesta y probar soluciones con usuarios piloto.',
        en: 'Enabled proposal validation and early testing with pilot users.',
      },
      challenge: {
        es: 'Diseñar una interfaz clara, accesible y fácil de navegar.',
        en: 'Designing a clear, accessible, and easy-to-navigate interface.',
      },
    },
    {
      slug: 'speech-commands-model',
      title: { 
        es: 'Red neuronal para reconocimiento de voz', 
        en: 'Speech Command Recognition Neural Network' 
      },
      description: {
        es: 'Modelo de machine learning entrenado para reconocer comandos de voz y trabajar audio.',
        en: 'Machine learning model trained to recognize voice commands and work with audio.',
      },
      image: '/projects/Speech.png',
      github: 'https://github.com/Lanza11/Proyecto-Modelo-Speech-Commands',
      stack: ['Python', 'Pandas', 'NumPy', 'Librosa'],
      impact: {
        es: 'Permitió comprender el ciclo completo de un modelo de ML, desde los datos hasta la evaluación.',
        en: 'Provided understanding of the full ML lifecycle, from data preparation to evaluation.',
      },
      challenge: {
        es: 'Preprocesamiento de audio y trabajo con datos no estructurados.',
        en: 'Handling audio preprocessing and working with unstructured data.',
      },
    },
  ] satisfies ProjectData[],
  profileDialog: {
    es: {
      title: 'Perfil profesional',
      lead: 'Este espacio puede resumir tu perfil y ofrecer una salida directa al CV en PDF, además de un contacto rápido.',
      bullets: [
        'Resumen profesional breve con enfoque, experiencia y especialidad.',
        'Disponibilidad laboral y tipo de colaboración.',
        'Descarga directa del CV en PDF.',
        'Enlace a GitHub, LinkedIn y correo de contacto.',
      ],
    },
    en: {
      title: 'Professional profile',
      lead: 'This area can summarize your profile and offer a direct PDF CV download, along with quick contact actions.',
      bullets: [
        'Brief professional summary with focus, experience, and specialization.',
        'Availability and collaboration format.',
        'Direct PDF CV download.',
        'Links to GitHub, LinkedIn, and email contact.',
      ],
    },
  },
};

const content: Record<Locale, LocaleBlock> = {
  es: {
    name: 'Mateo Vásquez García',
    title: 'Estudiante de Ingeniería de Sistemas',
    role: 'Developer FullStack',
    profileSummary:
      'Construyo soluciones modernas, responsivas y claras con foco en arquitectura, experiencia de usuario y mantenibilidad.',
    sidebarIntro:
      'Me especializo en convertir ideas en productos que resuelvan problemas de forma organizada, rápida y fácil de evolucionar.',
    profileDialog: shared.profileDialog.es,
    footer:
      'Triunfa el que elabora una táctica para conseguirlo, aprovecha su oportunidad, acepta sus debilidades y reconoce sus fortalezas.',
    contactLabel: 'Correo',
    countryLabel: 'País',
    languagesLabel: 'Idiomas',
    programmingLabel: 'Lenguajes de programación',
    extraSkillsLabel: 'Habilidades extra',
    knowledgeTitle: 'Conocimientos',
    educationTitle: 'Educación',
    portfolioTitle: 'Portafolio',
    contactCta: 'Ver CV',
  },
  en: {
    name: 'Mateo Vásquez García',
    title: 'Systems Engineering Student',
    role: 'Full Stack Developer',
    profileSummary:
      'I build modern, responsive, and well-structured solutions with a strong focus on architecture, user experience, and maintainability.',
    sidebarIntro:
      'I specialize in turning ideas into products that solve real problems in an organized, efficient, and scalable way.',
    profileDialog: shared.profileDialog.en,
    footer:
      'He who prepares a strategy to achieve it, seizes the opportunity, accepts weaknesses, and recognizes strengths is the one who triumphs.',
    contactLabel: 'Email',
    countryLabel: 'Country',
    languagesLabel: 'Languages',
    programmingLabel: 'Programming Languages',
    extraSkillsLabel: 'Additional Skills',
    knowledgeTitle: 'Knowledge',
    educationTitle: 'Education',
    portfolioTitle: 'Portfolio',
    contactCta: 'View CV',
  },
};

export const portfolioData = {
  shared,
  content,
};
