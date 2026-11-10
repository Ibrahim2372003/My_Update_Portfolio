// Single source of truth for personal details.
// Rule: only facts that come from the résumé, the repositories, or the owner.

export const profile = {
  name: 'Ibrahim Mohammed',
  shortName: 'IM',
  role: 'Junior Full-Stack Developer',
  // Public contact details that were already on the previous site.
  email: 'IbrahimMohammedIbrahim2372003@gmail.com',
  github: 'https://github.com/Ibrahim2372003',
  linkedin: 'https://linkedin.com/in/ibrahim-mohamed-a4b531164/',
  // The phone number is deliberately NOT stored here (owner decision).
  // Location is deliberately omitted until the owner approves showing it.
}

export const socials = [
  { id: 'github', label: 'GitHub', handle: 'Ibrahim2372003', href: profile.github },
  { id: 'linkedin', label: 'LinkedIn', handle: 'ibrahim-mohamed', href: profile.linkedin },
  { id: 'email', label: 'Email', handle: profile.email, href: `mailto:${profile.email}` },
]

// CV download is DISABLED until a redacted copy (no phone number) is approved.
// The original PDF was moved out of /public to /private/cv so it is not served.
// To enable: place the approved file in /public, set available: true and path.
export const cv = {
  available: false,
  path: '/cv.pdf',
}

export const hero = {
  eyebrow: 'Junior Full-Stack Developer',
  // Each entry is one masked line; `accent` words render in dark red serif italic.
  lines: [
    [{ t: 'Full-stack developer' }],
    [{ t: 'building tested,' }],
    [{ t: 'accessible', accent: true }, { t: ' web apps.' }],
  ],
  summary:
    'I work with React, Next.js, Node.js, PostgreSQL and AI APIs, and I care about the details that make software dependable: validation, authentication, automated tests and accessible interfaces.',
}

export const about = {
  // Condensed from the owner's existing About text and résumé summary.
  paragraphs: [
    "I'm Ibrahim, a Junior Full-Stack Developer who enjoys backend work and building practical web applications. I work with JavaScript, TypeScript, React, Next.js, Node.js and Express.js, and I've built REST APIs with JWT authentication, input validation, error handling and rate limiting.",
    'Recently I have been integrating AI APIs into real applications and testing them properly, with Vitest and Playwright for behaviour and axe and WAVE for accessibility.',
    'Every project on this page links to its source code on GitHub.',
  ],
  facts: [
    { k: 'Focus', v: 'Full-stack web, backend APIs, AI integrations' },
    { k: 'Stack', v: 'TypeScript, React, Next.js, Node.js, PostgreSQL' },
    { k: 'Practice', v: 'Automated tests, accessibility checks, secure defaults' },
    { k: 'Education', v: 'B.Com, Information Systems, Helwan University (2025)' },
  ],
}

// "Currently / Open to" replaces the old agency-style FAQ.
export const availability = {
  currently: [
    'AI Backend Engineer Intern at FlyRank (remote)',
    'Technical Instructor and Curriculum Creator at Trainopia',
  ],
  openTo: [
    'Junior software development roles',
    'Internships',
    'Collaborations and small freelance work',
  ],
}
