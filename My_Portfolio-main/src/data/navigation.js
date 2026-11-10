// Page order: Hero, Projects, About, Skills, Journey, Contact.
// "Home" is the logo link, so it is not repeated in the nav list.
export const navItems = [
  { id: 'projects', name: 'Projects', num: '01' },
  { id: 'about', name: 'About', num: '02' },
  { id: 'skills', name: 'Skills', num: '03' },
  { id: 'journey', name: 'Journey', num: '04' },
  { id: 'contact', name: 'Contact', num: '05' },
  // Disabled sections (components kept in the repo; see src/features.js):
  // { id: 'reviews', name: 'Reviews' }, // Restore when real testimonials exist.
  // { id: 'pricing', name: 'Pricing' }, // Restore when pricing is ready.
]

// Every section the scroll-spy tracks (module-level so the reference is stable).
export const sectionIds = ['home', ...navItems.map((item) => item.id)]
