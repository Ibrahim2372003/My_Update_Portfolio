// Single source of truth for projects.
//
// Every claim below is traceable to the project's own repository (README,
// package.json, source tree) or to the owner's résumé. Do not add features,
// metrics or test counts that are not in those sources.
//
// links.live  -> only set when the owner has confirmed the URL works.
// image.src   -> null means "use the typographic cover artwork". Put a real
//                screenshot path here (e.g. '/projects/audit-chat.png') to replace it.
// hidden      -> true keeps a project in this file but off the page.

export const TECH = {
  nextjs: 'Next.js',
  react: 'React',
  typescript: 'TypeScript',
  node: 'Node.js',
  express: 'Express.js',
  nestjs: 'NestJS',
  postgres: 'PostgreSQL',
  prisma: 'Prisma',
  jwt: 'JWT',
  openai: 'OpenAI API',
  gemini: 'Gemini API',
  'ai-sdk': 'Vercel AI SDK',
  inngest: 'Inngest',
  playwright: 'Playwright',
  vitest: 'Vitest',
  jest: 'Jest',
  axe: 'axe-core',
  webgl: 'WebGL / GLSL',
  zod: 'Zod',
  reactflow: 'React Flow',
  zustand: 'Zustand',
  tailwind: 'Tailwind CSS',
  vite: 'Vite',
  recharts: 'Recharts',
  stripe: 'Stripe',
  socketio: 'Socket.IO',
  cheerio: 'Cheerio',
  rest: 'REST API',
  validation: 'Input validation',
}

const gh = (repo) => `https://github.com/Ibrahim2372003/${repo}`

export const projects = [
  {
    slug: 'ai-seo-audit-chat',
    name: 'AI SEO Audit Chat',
    kind: 'flagship',
    year: 'FlyRank capstone',
    summary:
      'A streaming AI chat that audits a page’s SEO fundamentals and returns structured, scored findings.',
    description:
      'Describe a page or paste its meta content and the app calls a tool that extracts and scores SEO signals against a fixed checklist, then explains the findings in plain language. Results render as real components, a score badge and a pass/fail table, instead of raw JSON.',
    features: [
      'Scores title, meta description, canonical, Open Graph, Twitter card and robots signals from 0 to 100.',
      'Streams the model’s explanation alongside a structured results table.',
      'Optional AI metadata suggestions with copy buttons; it never edits or publishes the audited site.',
      'Asks for explicit confirmation before re-scanning a URL that was already audited.',
    ],
    highlights: [
      'Tool calling with schema-validated output (Zod) rather than parsing free text.',
      'IP-based rate limiting, input validation, streaming timeouts and error handling.',
      'Accessible AI interaction: aria-live announcements, keyboard-operable controls, visible focus; checked with WAVE and axe.',
      'Custom WebGL/GLSL hero that responds to time, resolution and pointer, with a reduced-motion fallback.',
      'Automated tests (Vitest, Playwright) and production-build validation.',
    ],
    tech: ['nextjs', 'typescript', 'ai-sdk', 'gemini', 'zod', 'webgl', 'vitest', 'playwright', 'axe', 'validation'],
    status: { label: 'Live demo', tone: 'live' },
    image: { src: null, alt: '' },
    cover: { variant: 'grid', tone: 'ink', word: 'Audit' },
    links: { github: gh('AI-Audit-Chat'), live: 'https://ai-audit-chat.vercel.app' },
  },
  {
    slug: 'job-hunt-command-center',
    name: 'Job Hunt Command Center',
    kind: 'flagship',
    year: 'FlyRank capstone',
    summary:
      'A full-stack job-search tracker with AI-assisted resume tailoring and background PDF reports.',
    description:
      'A dashboard for organising job applications, tracking status changes and follow-ups. An Express and Prisma API with JWT authentication keeps each user’s data private, and an AI step tailors a resume to a given application.',
    features: [
      'Sign-up and login with JWT; every application is scoped to its owner.',
      'Track applications, status changes and follow-ups.',
      'AI-assisted resume tailoring through the OpenAI API.',
      'Asynchronous PDF report: the API replies 202 immediately, an Inngest background job renders the PDF, and the client polls pending, done or failed.',
    ],
    highlights: [
      'REST API with input validation, structured error handling and PostgreSQL persistence via Prisma.',
      'Idempotent report requests: a repeated request does not enqueue a second job, and a failed job can be retried.',
      'Ownership checks return 404 for other users’ records.',
    ],
    tech: ['react', 'vite', 'node', 'express', 'postgres', 'prisma', 'jwt', 'openai', 'inngest', 'playwright', 'rest', 'validation'],
    status: {
      label: 'PDF reports still being verified end to end',
      tone: 'progress',
    },
    image: { src: null, alt: '' },
    cover: { variant: 'rows', tone: 'paper', word: 'Track' },
    links: {
      github: gh('Job-Hunt-Command-Center'),
      live: 'https://job-hunt-command-center-iota.vercel.app',
    },
  },
  {
    slug: 'ai-workflow-builder',
    name: 'AI Workflow Builder',
    kind: 'flagship',
    year: 'FlyRank program',
    summary:
      'A visual editor where every node is an AI yes/no decision, executed as durable background steps.',
    description:
      'Build a decision graph on a React Flow canvas, run it, and watch the path light up as each node is evaluated. Every visited node runs as its own Inngest step, and each node asks the model for exactly YES or NO.',
    features: [
      'Node-based decision graph with decision and outcome nodes.',
      'Execution through Inngest, with the run traced live on the canvas.',
      'Workflow validation before a run, plus save, load, export and import.',
      'Run history and logs panels.',
    ],
    highlights: [
      'Pure, dependency-free modules for graph traversal, validation, storage and run-state display, covered by unit tests (node --test).',
      'The model call validates its answer as YES or NO and makes one repair attempt before failing.',
    ],
    tech: ['nextjs', 'react', 'reactflow', 'inngest', 'openai', 'zod', 'zustand', 'tailwind'],
    status: { label: 'Source on GitHub', tone: 'code' },
    image: { src: null, alt: '' },
    cover: { variant: 'graph', tone: 'tint', word: 'Decide' },
    links: { github: gh('AI-Workflow-Builder'), live: null },
  },
  {
    slug: 'shopping-app',
    name: 'Shopping App',
    kind: 'compact',
    year: 'Personal project',
    summary: 'A NestJS marketplace API with JWT auth, product listings and Stripe Checkout.',
    description:
      'A NestJS backend with Prisma and PostgreSQL where users sign in and list products, with a Next.js frontend folder alongside it. The repository has no README yet, so this description is limited to what the code shows.',
    features: [
      'Authentication with Passport and JWT.',
      'Product endpoints, image upload and a real-time Socket.IO gateway.',
      'Stripe Checkout session creation and a webhook endpoint.',
    ],
    highlights: ['Unit tests (Jest) across the auth, users, products and checkout modules.'],
    tech: ['nestjs', 'typescript', 'prisma', 'postgres', 'jwt', 'stripe', 'socketio', 'jest', 'nextjs', 'rest'],
    status: { label: 'Source on GitHub', tone: 'code' },
    image: { src: null, alt: '' },
    cover: { variant: 'bars', tone: 'ink', word: 'Checkout' },
    links: { github: gh('Shopping-App'), live: null },
  },
  {
    slug: 'polite-scraper',
    name: 'Polite Scraper',
    kind: 'compact',
    year: 'FlyRank program',
    summary: 'A Node.js scraping pipeline that is careful with the site it visits and honest in its report.',
    description:
      'Downloads the first three catalogue pages of a practice site built for scraping, visits every book page, turns the HTML into schema-checked JSON, survives a broken page, and ends each run with a report.',
    features: [
      'Pipeline stages: fetch, extract, normalize, validate, store, report.',
      'Identifying User-Agent, request timeouts, a delay between requests and retries.',
      'Output validated with Zod; a deliberately broken URL is handled without crashing the run.',
    ],
    highlights: ['Unit tests for page discovery and extraction.'],
    tech: ['node', 'cheerio', 'zod'],
    status: { label: 'Source on GitHub', tone: 'code' },
    image: { src: null, alt: '' },
    cover: { variant: 'lines', tone: 'paper', word: 'Collect' },
    links: { github: gh('Polite--Scraper'), live: null },
  },
  {
    slug: 'crypto-dashboard',
    name: 'Crypto Dashboard',
    kind: 'compact',
    year: 'Course assignment',
    summary: 'A responsive React dashboard for live top-40 market data with search, sorting and charts.',
    description:
      'Pulls the top 40 cryptocurrencies from the public CoinGecko API and presents them as a searchable, sortable table with a ticker, per-coin sparklines and a detail drawer with a 7-day chart. Built with AI assistance, as its README documents.',
    features: [
      'Debounced search and sorting by rank, price, 24h change or market cap.',
      'Auto-refresh every 60 seconds with a pause toggle and manual refresh.',
      'Loading skeletons, empty state and an error state with retry.',
      'Keyboard-navigable, labelled controls, and a ticker that respects reduced motion.',
    ],
    highlights: ['Custom hooks for data fetching with abort handling and for debouncing.'],
    tech: ['react', 'vite', 'tailwind', 'recharts'],
    status: { label: 'Source on GitHub', tone: 'code' },
    image: { src: null, alt: '' },
    cover: { variant: 'spark', tone: 'tint', word: 'Chart' },
    links: { github: gh('crypto-dashboard'), live: null },
  },

  // Kept but hidden: the owner has confirmed this project exists but its
  // repository could not be found. Do not show or describe it until a verified
  // repo URL is provided. (The old "55 passing tests" claim is unverified.)
  {
    slug: 'lead-capture-platform',
    name: 'Lead Capture Platform',
    hidden: true,
    kind: 'compact',
    summary: '',
    description: '',
    features: [],
    highlights: [],
    tech: ['node'],
    status: null,
    image: { src: null, alt: '' },
    cover: { variant: 'lines', tone: 'ink', word: 'Capture' },
    links: { github: null, live: null },
  },
]

export const visibleProjects = projects.filter((p) => !p.hidden)

// Filter chips: only technologies that appear on at least one visible project,
// limited to the ones worth filtering by.
export const FILTERS = [
  'nextjs',
  'react',
  'typescript',
  'node',
  'postgres',
  'openai',
  'vitest',
]
export const filterOptions = FILTERS.filter((id) =>
  visibleProjects.some((p) => p.tech.includes(id)),
)
