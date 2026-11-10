// Journey: taken from the owner's résumé. Do not add responsibilities that are
// not in the source document.
//
// DATES FLAGGED FOR OWNER CONFIRMATION (not shown in full on the site):
//  - Both FlyRank internships list "Jul 2026" as the start; the Frontend role
//    ends "Sep 8, 2026" and the Backend role is "Present". Only the year is
//    displayed until the owner confirms. Full strings are kept below.
export const journey = [
  {
    id: 'flyrank-backend',
    kind: 'work',
    title: 'AI Backend Engineer Intern',
    org: 'FlyRank',
    place: 'Remote',
    display: '2026 – Present',
    resume: 'Jul 2026 – Present',
    datesConfirmed: false,
    points: [
      'Developed REST API functionality with Node.js and Express.js.',
      'Worked with PostgreSQL and Prisma for database operations and relational schema changes.',
      'Implemented authentication workflows, input validation, structured error handling and user-scoped data access.',
      'Applied security practices: environment-variable secret management, input limits and rate limiting.',
      'Worked with AI API integrations, automated tests and backend reliability improvements.',
    ],
  },
  {
    id: 'flyrank-frontend',
    kind: 'work',
    title: 'AI Frontend Engineer Intern',
    org: 'FlyRank',
    place: 'Remote',
    display: '2026',
    resume: 'Jul 2026 – Sep 8, 2026',
    datesConfirmed: false,
    points: [
      'Built frontend features with React, Next.js, TypeScript and Tailwind CSS.',
      'Developed reusable UI components, forms and input validation.',
      'Integrated AI-powered features with backend services and handled loading and error states.',
      'Applied accessibility practices and tested frontend behaviour with relevant testing and accessibility tools.',
    ],
  },
  {
    id: 'trainopia',
    kind: 'work',
    title: 'Curriculum Creator & Technical Instructor',
    org: 'Trainopia',
    place: 'Cairo, Egypt',
    display: 'Feb 2025 – Present',
    resume: 'Feb 2025 – Present',
    datesConfirmed: true,
    points: [
      'Created structured programming and ICT learning materials covering Python fundamentals, programming logic and algorithms.',
      'Delivered technical instruction to 20+ learners through practical exercises.',
      'Organised lesson plans, checklists, slides and curriculum materials in ClickUp.',
    ],
  },
  {
    id: 'nti',
    kind: 'training',
    title: 'MEAN Stack Web Developer Career Accelerator',
    org: 'NTI, Digital Egypt Youth Program',
    place: '',
    display: 'Sep – Oct 2025',
    resume: 'Sep – Oct 2025',
    datesConfirmed: true,
    points: ['Completed 180 technical hours and 30 freelancing hours.'],
  },
  {
    id: 'helwan',
    kind: 'education',
    title: 'Bachelor of Commerce, Information Systems',
    org: 'Helwan University',
    place: 'Faculty of Commerce and Business Administration',
    display: 'Graduated May 2025',
    resume: 'Graduated May 2025',
    datesConfirmed: true,
    points: [],
  },
]
