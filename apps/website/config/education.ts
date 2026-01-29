export interface EducationEntry {
  id: string;
  /** Degree or program title */
  title: string;
  /** Institution name */
  institution: string;
  /** Institution URL */
  institutionUrl?: string;
  /** Location or mode (e.g. "Turkey", "Online, Self-Paced") */
  city?: string;
  /** Period: start and end. Listed reverse by date. */
  period: {
    start: string;
    end: string;
  };
  /** Collapsible details (bullet points). */
  highlights?: string[];
  /** Whether expanded by default */
  isExpanded?: boolean;
}

export const educationEntries: EducationEntry[] = [
  {
    id: 'ossu',
    title: 'Computer Science Curriculum',
    institution: 'Open Source Society University (OSSU)',
    institutionUrl: 'https://github.com/ossu/computer-science',
    city: 'Online, Self-Paced',
    period: { start: '2024', end: 'Present' },
    isExpanded: true,
    highlights: [
      'Completing core CS subjects: Algorithms, Data Structures, Databases, Operating Systems, Computer Architecture.',
      'Based on MIT, Harvard, Stanford course material (edX, Coursera, YouTube).',
      'Practicing with hands-on projects and coding assignments.',
    ],
  },
  {
    id: 'ege-university',
    title: 'Associate Degree – Computer Programming',
    institution: 'Ege University',
    institutionUrl: 'https://www.ege.edu.tr',
    city: 'Turkey',
    period: { start: '2016', end: '2018' },
    isExpanded: false,
    highlights: ['GPA (4.0 scale): 3.37'],
  },
];

/** Education entries sorted by period end descending (newest first). */
export const educationEntriesByDateReverse = [...educationEntries].sort(
  (a, b) => {
    const endA = a.period.end === 'Present' ? '9999' : a.period.end;
    const endB = b.period.end === 'Present' ? '9999' : b.period.end;
    return endB.localeCompare(endA, undefined, { numeric: true });
  }
);
