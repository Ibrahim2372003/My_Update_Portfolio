// Skills grouped by what they are used for. No ratings or percentages.
// Source: résumé "Technical skills" + dependencies found in the project repos.
// `id` matches the ids used in projects.js `tech`, which powers the
// "used in" highlight (a skill lights up the projects that really use it).
export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      { id: 'react', label: 'React' },
      { id: 'nextjs', label: 'Next.js' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'javascript', label: 'JavaScript (ES6+)' },
      { id: 'html-css', label: 'HTML5 and CSS3' },
      { id: 'tailwind', label: 'Tailwind CSS' },
      { id: 'redux', label: 'Redux Toolkit' },
      { id: 'framer', label: 'Framer Motion' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend and APIs',
    items: [
      { id: 'node', label: 'Node.js' },
      { id: 'express', label: 'Express.js' },
      { id: 'nestjs', label: 'NestJS' },
      { id: 'rest', label: 'REST APIs' },
      { id: 'jwt', label: 'JWT authentication' },
      { id: 'validation', label: 'Validation and rate limiting' },
      { id: 'inngest', label: 'Background jobs (Inngest)' },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    items: [
      { id: 'postgres', label: 'PostgreSQL' },
      { id: 'prisma', label: 'Prisma ORM' },
      { id: 'mongodb', label: 'MongoDB' },
      { id: 'sql', label: 'SQL' },
    ],
  },
  {
    id: 'ai',
    title: 'AI integration',
    items: [
      { id: 'ai-sdk', label: 'Vercel AI SDK' },
      { id: 'openai', label: 'OpenAI API' },
      { id: 'gemini', label: 'Gemini API' },
      { id: 'claude', label: 'Claude API' },
    ],
  },
  {
    id: 'quality',
    title: 'Testing and quality',
    items: [
      { id: 'vitest', label: 'Vitest' },
      { id: 'jest', label: 'Jest' },
      { id: 'playwright', label: 'Playwright' },
      { id: 'rtl', label: 'React Testing Library' },
      { id: 'axe', label: 'axe and WAVE' },
      { id: 'lighthouse', label: 'Lighthouse' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: [
      { id: 'git', label: 'Git and GitHub' },
      { id: 'docker', label: 'Docker' },
      { id: 'postman', label: 'Postman' },
      { id: 'vercel', label: 'Vercel' },
      { id: 'vite', label: 'Vite' },
    ],
  },
]

// Also familiar with (from the résumé): Python, Java.
export const alsoFamiliar = ['Python', 'Java']
