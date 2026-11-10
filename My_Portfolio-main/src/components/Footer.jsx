'use client'
import { navItems } from '@/data/navigation'
import { profile, socials } from '@/data/profile'
import DrawLine from '@/components/motion/DrawLine'
import LineReveal from '@/components/motion/LineReveal'
import Magnetic from '@/components/motion/Magnetic'
import Reveal from '@/components/motion/Reveal'
import { ArrowUp, ArrowUpRight } from '@/components/ui/Icons'

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-page px-5 pb-8 pt-20 sm:px-8 sm:pt-28 lg:px-10">
        {/* Oversized outlined name: fills in on hover. */}
        <div className="group cursor-default" aria-hidden>
          <LineReveal
            as="p"
            lines={['Ibrahim', 'Mohammed']}
            className="display text-[clamp(3.6rem,15.5vw,13rem)] leading-[0.9] text-transparent transition-colors duration-700 ease-out-expo [-webkit-text-stroke:1px_rgba(255,255,255,0.55)] group-hover:text-white group-hover:[-webkit-text-stroke:1px_#fff]"
            step={0.12}
          />
        </div>
        <span className="sr-only">{profile.name}</span>

        <div className="mt-14 grid gap-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="label-mono !text-muted-dark mb-4 flex items-center gap-3">
              <span aria-hidden className="h-1.5 w-1.5 bg-red" />
              Currently
            </p>
            <p className="max-w-sm text-[1.05rem] leading-relaxed text-white/85">
              Open to junior full-stack roles and internships. Email is the quickest way to reach me.
            </p>
          </Reveal>

          <Reveal i={1} className="lg:col-span-3 lg:col-start-7">
            <nav aria-label="Footer">
              <p className="label-mono !text-muted-dark mb-4">Sections</p>
              <ul className="space-y-2">
                {navItems.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className="group/l inline-flex items-center text-[0.98rem] text-white/90 hover:text-white">
                      <span aria-hidden className="h-px w-0 bg-red transition-all duration-500 ease-out-expo group-hover/l:mr-3 group-hover/l:w-5" />
                      <span className="link-draw">{n.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal i={2} className="lg:col-span-3">
            <p className="label-mono !text-muted-dark mb-4">Elsewhere</p>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    {...(s.id !== 'email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group/l inline-flex items-center gap-2 text-[0.98rem] text-white/90 hover:text-white"
                  >
                    <span className="link-draw">{s.label}</span>
                    <ArrowUpRight
                      width={14}
                      height={14}
                      className="transition-transform duration-500 ease-out-expo group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5"
                    />
                    {s.id !== 'email' && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16">
          <DrawLine color="bg-line-dark" accent />
          <div className="flex flex-col-reverse items-start justify-between gap-6 pt-6 sm:flex-row sm:items-center">
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-dark">
              <p>© {new Date().getFullYear()} {profile.name}</p>
              <p className="mt-1 normal-case tracking-normal">Built with Next.js, Tailwind CSS and Framer Motion.</p>
            </div>
            <Magnetic>
              <a href="#home" className="btn btn-ghost-dark group">
                Back to top
                <ArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  )
}
