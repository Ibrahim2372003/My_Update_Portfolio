import Intro from '@/components/motion/Intro'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Pricing and Reviews are intentionally NOT rendered (see src/features.js).
// The components stay in the repo. To restore one, import it here, render it
// inside <main>, and add its entry back in src/data/navigation.js:
//   import PricingPlans from '@/components/PricingPlans'   // pricing not ready
//   import Reviews from '@/components/Reviews'             // no real testimonials yet

export default function Home() {
  return (
    <Intro>
      <Header />
      <div id="page-root">
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </Intro>
  )
}
