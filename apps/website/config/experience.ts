export type ExperiencePositionIcon =
  /** Icon key used to render the position category in the UI. */
  'code' | 'design' | 'education' | 'business' | 'idea';

export type ExperiencePosition = {
  id: string;
  title: string;
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  employmentPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Full-time | Part-time | Contract | Internship, etc. */
  employmentType?: string;
  description?: string;
  /** Bullet points for the position (shown as list with dots). */
  highlights?: string[];
  /** UI icon to represent the role type. */
  icon?: ExperiencePositionIcon;
  skills?: string[];
  /** Whether the position is expanded by default in the UI. */
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyUrl: string;
  city: string;
 
  companyLogo?: string;
 
  positions: ExperiencePosition[];
  
  isCurrentEmployer?: boolean;
};

export const experiences: Experience[] = [
  {
    id: 'toyota-boshoku-turkiye',
    companyName: 'Toyota Boshoku Türkiye',
    companyUrl: 'https://www.toyotaboshoku.com',
    city: 'Sakarya',
    positions: [
      {
        id: 'frontend-developer',
        title: 'Frontend Developer',
        employmentType: 'Hybrid',
        employmentPeriod: {
          start: 'Jan 2024',
          end: 'Present',
        },
        isExpanded: true,
        description:
          'Collaborate within the IoT Team as a frontend developer, contributing to the design. Engineered scalable and high-performance frontend interfaces and web applications using React.js, Astro, and Next.js for IoT solutions. Designed and implemented interactive dashboards and data visualizations using Grafana and ELK stack. Developed web applications in PWA structure. Led the adoption of microfrontend architecture (Webpack Module Federation). Built real-time communication interfaces with WebSocket and MQTT protocols. Ensured compliance with UX and accessibility (a11y) standards.',
        highlights: [
          'Collaborate within the IoT Team as a frontend developer, contributing to the design.',
          'Engineered scalable and high-performance frontend interfaces and web applications using React.js, Astro, and Next.js for IoT solutions.',
          'Designed and implemented interactive dashboards and data visualizations using Grafana and ELK stack.',
          'Developed web applications in PWA structure.',
          'Led the adoption of microfrontend architecture (Webpack Module Federation).',
          'Built real-time communication interfaces with WebSocket and MQTT protocols.',
          'Ensured compliance with UX and accessibility (a11y) standards.',
        ],
        skills: [
          'React.js',
          'Astro',
          'Next.js',
          'Tailwind CSS',
          'ELK Stack',
          'Grafana',
          'Microfrontend Architecture',
          'PWA',
          'WebSocket',
          'MQTT',
          'Azure DevOps',
          'Figma',
        ],
        icon: 'code',
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: 'hattat-holding',
    companyName: 'Hattat Holding A.Ş.',
    companyUrl: 'https://www.hattat.com.tr',
    city: 'Turkey',
    positions: [
      {
        id: 'frontend-developer-fullstack',
        title: 'Frontend Developer / Occasional Full-Stack',
        employmentType: 'On-site',
        employmentPeriod: {
          start: 'July 2022',
          end: 'Jan 2024',
        },
        description:
          'Work as a frontend developer in the Digital Transformation Team and take on full-stack roles on a project basis. Created report pages and interfaces for data collected from IoT equipment. Developed React.js, Next.js, and ASP.NET based web applications, including data entry pages, dashboards, and 3D visualizations using Three.js. Developed Node.js based RESTful and .NET based SOAP services. Designed and developed MSSQL databases. Managed IIS servers and related services.',
        highlights: [
          'Work as a frontend developer in the Digital Transformation Team and take on full-stack roles on a project basis.',
          'Created report pages and interfaces for data collected from IoT equipment.',
          'Developed React.js, Next.js, and ASP.NET based web applications, including data entry pages, dashboards, and 3D visualizations using Three.js.',
          'Developed Node.js based RESTful and .NET based SOAP services.',
          'Designed and developed MSSQL databases.',
          'Managed IIS servers and related services.',
        ],
        skills: [
          'React.js',
          'Next.js',
          'Remix.run',
          'Three.js',
          'Chakra UI',
          'Tailwind CSS',
          'Ant Design',
          'ASP.NET',
          'Node.js',
          'Express',
          'Fastify',
          'Prisma',
          'MSSQL',
          'Figma',
        ],
        icon: 'code',
      },
    ],
  },
];
