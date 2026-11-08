// "Home" is the logo link, so it is not repeated in the nav list.
export const navItems = [
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  // { id: 'reviews', name: 'Reviews' }, // Restore when real testimonials are available.
  { id: 'projects', name: 'Projects' },
  // { id: 'pricing', name: 'Pricing' }, // Restore when pricing is ready.
  { id: 'contact', name: 'Contact' },
  { id: 'questions', name: 'Questions' },
]

// Every section the scroll-spy should track (module-level so the reference is stable).
export const sectionIds = ['home', ...navItems.map((item) => item.id)]
