export type Branch = 'main' | 'sylius' | 'symfony-ai';

export interface CvLink {
  label: string;
  href: string;
}

export interface CvEntry {
  branch: Branch;
  meta: string;
  title: string;
  href?: string;
  description: string;
  link?: CvLink;
}

export interface Certification {
  issuer: string;
  title: string;
  href?: string;
}

export const profile = {
  name: 'Camille Islasse',
  role: 'Développeur Symfony & Sylius',
  tagline:
    "Spécialisé dans l'e-commerce et les solutions métier : plateformes Sylius sur mesure, connecteurs ERP/CRM/PIM, reprises de projets et montées de version. Et pas mal d'open source",
  current:
    "Actuellement développeur Symfony chez ACSEO",
  links: [
    { label: 'GitHub', icon: 'simple-icons:github', href: 'https://github.com/camilleislasse' },
    {
      label: 'LinkedIn',
      icon: 'simple-icons:linkedin',
      href: 'https://www.linkedin.com/in/camilleislasse/',
    },
  ],
} as const;

export const cvEntries: CvEntry[] = [
  {
    branch: 'main',
    meta: "mars 2024 - aujourd'hui · Aix-en-Provence",
    title: 'Développeur Sylius/Symfony · ACSEO',
    href: 'https://www.acseo.fr/',
    description:
      "Intervenu en équipe sur un ERP Symfony from scratch, la boutique Sylius d'un équipementier vélo, et le Sylius d'un grand aéroport : évolution en marketplace, migration vers la v2 et dev au quotidien.",
  },
  {
    branch: 'sylius',
    meta: 'open source · 11 PRs mergées',
    title: 'Sylius',
    link: {
      label: 'mes PRs ↗',
      href: 'https://github.com/search?q=org%3ASylius+author%3Acamilleislasse+is%3Apr+is%3Amerged&type=pullrequests',
    },
    description:
      "Le dark mode de l'admin, du tooling DX pour les devs, et le serveur MCP officiel.",
  },
  {
    branch: 'symfony-ai',
    meta: 'open source · 15 PRs mergées',
    title: 'Symfony AI',
    link: {
      label: 'mes PRs ↗',
      href: 'https://github.com/symfony/ai/pulls?q=is%3Apr+author%3Acamilleislasse+is%3Amerged',
    },
    description:
      "Le MCP Bundle porté sur le SDK officiel, et l'outillage de debug : profiler MCP, schémas d'outils, data collector.",
  },
  {
    branch: 'main',
    meta: 'juil. 2021 - oct. 2023 · Lyon',
    title: 'Développeur Sylius/Symfony · Arobases',
    href: 'https://www.arobases.fr/',
    description:
      'Deux ans en équipe sur des boutiques Sylius sur mesure et leurs connecteurs métier (Sellsy, Sendcloud…).',
  },
  {
    branch: 'main',
    meta: 'fév. 2020 · side project',
    title: 'Le Reflet de Jade',
    description:
      'Une boutique Shopify montée seul, de A à Z : paiements, livraison, click & collect.',
  },
  {
    branch: 'main',
    meta: 'juil. 2018 - juin 2021 · Le Puy-en-Velay',
    title: 'Développeur Symfony · Kiboko',
    href: 'https://kiboko.fr/',
    description:
      'Premières armes sur Symfony avec OroCommerce & Marello : synchros CRM/ERP/PIM, tests, Docker.',
  },
];

export const certifications: Certification[] = [
  {
    issuer: 'Anthropic',
    title: 'MCP: Advanced Topics',
    href: 'https://verify.skilljar.com/c/b74a4dja5d3w',
  },
  {
    issuer: 'Anthropic',
    title: 'Building with the Claude API',
    href: 'https://verify.skilljar.com/c/gjpk5orgudy5',
  },
  {
    issuer: 'Anthropic',
    title: 'Claude Code in Action',
    href: 'https://verify.skilljar.com/c/kdggn5nrtfzb',
  },
  {
    issuer: 'Anthropic',
    title: 'AI Fluency: Framework & Foundations',
    href: 'https://verify.skilljar.com/c/z6qqq3hxw863',
  },
  {
    issuer: 'Anthropic',
    title: 'Introduction to MCP',
    href: 'https://verify.skilljar.com/c/bzdf6cqxhfrw',
  },
  {
    issuer: 'Anthropic',
    title: 'Claude 101',
    href: 'https://verify.skilljar.com/c/fttroya257px',
  },
  {
    issuer: 'Hugging Face',
    title: 'Fundamentals of MCP',
    href: 'https://huggingface.co/datasets/mcp-course/certificates/resolve/main/certificates/guiziweb/2025-10-07.png',
  },
  {
    issuer: 'Hugging Face',
    title: 'MCP: Automation in Production',
  },
];
