export type Branch = 'main' | 'sylius' | 'symfony-ai';

export interface CvLink {
  label: string;
  href: string;
}

export interface CvProject {
  name: string;
  highlights: string[];
}

export interface CvEntry {
  branch: Branch;
  meta: string;
  title: string;
  href?: string;
  description: string;
  highlights?: string[];
  projects?: CvProject[];
  excludeFromCv?: boolean;
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
    projects: [
      {
        name: 'Aéroport Marseille-Provence',
        highlights: [
          'Marketplace multi-vendeurs : comptes marchands, commissions, reversements, réconciliation et reporting financier.',
          'Montées de version Sylius : passage en 1.14 livré et maintenu en production, migration vers 2.2 en cours.',
          'Développement transverse : paiement, checkout, catalogue, back-office, intégrations tierces.',
        ],
      },
      {
        name: 'Ekoï, équipementier vélo',
        highlights: [
          'Boutique Sylius 2.2 B2B/B2C : checkout, points relais, gestion des adresses.',
          'Synchronisation tarifaire multi-devise avec une API externe.',
          'Catalogue : précommande, variantes, alertes de stock, indexation Elasticsearch.',
        ],
      },
      {
        name: 'Axiolis',
        highlights: ["ERP métier développé from scratch, sans socle applicatif, entièrement sur mesure."],
      },
      {
        name: "Plugins Sylius de l'agence",
        highlights: [
          'Contribution aux plugins internes : droits (ACL), SEO, géolocalisation, historique de commandes.',
        ],
      },
    ],
  },
  {
    branch: 'sylius',
    meta: 'open source',
    title: 'Sylius',
    link: {
      label: 'mes PRs ↗',
      href: 'https://github.com/search?q=org%3ASylius+author%3Acamilleislasse+is%3Apr+is%3Amerged&type=pullrequests',
    },
    description:
      "Contributions régulières : dark mode de l'interface d'administration, commande de debug des Twig Hooks, migration du plugin MCP vers le bundle Symfony officiel.",
  },
  {
    branch: 'symfony-ai',
    meta: 'open source',
    title: 'Symfony AI',
    link: {
      label: 'mes PRs ↗',
      href: 'https://github.com/symfony/ai/pulls?q=is%3Apr+author%3Acamilleislasse+is%3Amerged',
    },
    description:
      "Contributions régulières : MCP Bundle migré vers le SDK officiel, profiler MCP, schémas d'outils JSON dans le profiler, filtrage par métadonnées des stores.",
  },
  {
    branch: 'main',
    meta: 'juil. 2021 - oct. 2023 · Lyon',
    title: 'Développeur Sylius/Symfony · Arobases',
    href: 'https://www.arobases.fr/',
    description:
      'Deux ans en équipe sur des boutiques Sylius sur mesure et leurs connecteurs métier (Sellsy, Sendcloud…).',
    highlights: [
      'Configurateurs de produits : interfaces front de personnalisation sur mesure.',
      'Développement quotidien de boutiques Sylius : fonctionnalités métier, plugins, imports/exports.',
      'Connecteurs vers des systèmes tiers : Sellsy, Sendcloud, Mailchimp.',
    ],
  },
  {
    branch: 'main',
    meta: 'fév. 2020 · side project',
    title: 'Le Reflet de Jade',
    description:
      'Une boutique Shopify montée seul, de A à Z : paiements, livraison, click & collect.',
    excludeFromCv: true,
  },
  {
    branch: 'main',
    meta: 'juil. 2018 - juin 2021 · Le Puy-en-Velay',
    title: 'Développeur Symfony · Kiboko',
    href: 'https://kiboko.fr/',
    description:
      'Premières armes sur Symfony avec OroCommerce & Marello : synchros CRM/ERP/PIM, tests, Docker.',
    highlights: [
      'Synchronisations de flux entre CRM, ERP, moyens de paiement et site e-commerce.',
      'Développement de fonctionnalités B2B et B2C sur OroCommerce et Marello.',
      'Tests unitaires et fonctionnels avec PHPUnit et Behat, environnements Docker.',
    ],
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

export interface Education {
  meta: string;
  title: string;
  option?: string;
}

export const education: Education[] = [
  {
    meta: '2017 - 2018',
    title: 'Licence MSW (bac +3)',
    option: 'Développement web',
  },
  {
    meta: '2015 - 2017',
    title: 'BTS SIO',
    option: 'Solutions Logicielles et Applications Métier',
  },
  {
    meta: '2014 - 2015',
    title: 'Baccalauréat STMG',
    option: 'Développement web',
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: 'Langage & framework', items: ['PHP 8', 'Symfony', 'Doctrine'] },
  { label: 'E-commerce', items: ['Sylius', 'OroCommerce', 'Marello', 'Akeneo'] },
  { label: 'IA', items: ['MCP', "orchestration d'agents", 'intégration LLM'] },
  { label: 'Qualité & outils', items: ['PHPUnit', 'Behat', 'PHPStan', 'Git', 'Docker', 'CI/CD'] },
  {
    label: 'Infra & données',
    items: ['MySQL', 'PostgreSQL', 'Elasticsearch', 'RabbitMQ', 'Sentry'],
  },
];

