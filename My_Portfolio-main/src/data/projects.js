
export const projectsData = [
  {
    name: 'AI Audit Chat',
    desc: 'An AI-powered SEO audit experience that combines conversational AI with an interactive WebGL interface to help users explore website audit insights.',
    url: '/projects/image-1.jpg',
    tech: ['NextJS', 'TypeScript', 'AI', 'WebGL', 'Vitest'],
  },
  {
    name: 'Job Hunt Command Center',
    desc: 'A full-stack job search management platform with AI-powered resume tailoring, built to help organize applications and streamline the job search workflow.',
    url: '/projects/image-2.jpg',
    tech: ['ReactJS', 'NodeJS', 'PostgreSQL', 'Prisma', 'AI'],
  },
  {
    name: 'AI Workflow Builder',
    desc: 'A visual workflow-building project exploring node-based interfaces and event-driven background workflow execution.',
    url: '/projects/image-3.jpg',
    tech: ['ReactJS', 'ReactFlow', 'Inngest'],
  },
  {
    name: 'Lead Capture Platform',
    desc: 'A web application for capturing and managing leads, with a focus on reliable application behavior and automated testing.',
    url: '/projects/image-4.jpg',
    tech: ['SQLite', 'Testing'],
  },
]

// Filter options for the Projects section.
export const projectsButton = [
  'All',
  'NextJS',
  'ReactJS',
  'NodeJS',
  'TypeScript',
  'PostgreSQL',
  'Prisma',
  'AI',
  'WebGL',
  'ReactFlow',
  'Inngest',
  'SQLite',
  'Vitest',
  'Testing',
]

/** Human-friendly label for a technology key. */
export function techLabel(tech) {
  const labels = {
    NextJS: 'Next.js',
    ReactJS: 'React',
    NodeJS: 'Node.js',
    TypeScript: 'TypeScript',
    PostgreSQL: 'PostgreSQL',
    ReactFlow: 'React Flow',
    Inngest: 'Inngest',
    SQLite: 'SQLite',
    Vitest: 'Vitest',
    WebGL: 'WebGL / GLSL',
    Prisma: 'Prisma',
    AI: 'AI Integration',
    Testing: 'Automated Testing',
  }

  return labels[tech] || tech
}
