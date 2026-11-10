'use client'
import { useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { availability, cv, profile, socials } from '@/data/profile'
import { ease } from '@/lib/motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/motion/Reveal'
import DrawLine from '@/components/motion/DrawLine'
import { ArrowUpRight, Check, Copy, GitHub, LinkedIn, Mail } from '@/components/ui/Icons'

const ICON = { github: GitHub, linkedin: LinkedIn, email: Mail }

function Row({ s, i }) {
  const Icon = ICON[s.id]
  const external = s.id !== 'email'
  return (
    <Reveal i={i} y={16}>
      <a
        href={s.href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={`${s.label}: ${s.handle}${external ? ' (opens in a new tab)' : ''}`}
        className="group relative flex items-center gap-4 overflow-hidden px-1 py-5 sm:gap-6 sm:px-4 sm:py-6"
      >
        <span
          aria-hidden
          className="absolute inset-0 origin-left scale-x-0 bg-tint transition-transform duration-[600ms] ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100"
        />
        <span className="relative flex w-24 shrink-0 items-center gap-2 label-mono !text-ink sm:w-32">
          <Icon width={15} height={15} />
          {s.label}
        </span>
        <span className="relative min-w-0 flex-1 break-all font-display text-[1.25rem] leading-tight text-ink sm:text-[1.9rem]">
          {s.handle}
        </span>
        <ArrowUpRight
          width={22}
          height={22}
          className="relative shrink-0 text-ink transition-all duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red"
        />
      </a>
    </Reveal>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      const t = document.createElement('textarea')
      t.value = profile.email
      document.body.appendChild(t)
      t.select()
      document.execCommand('copy')
      t.remove()
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2200)
  }

  return (
    <Section
      id="contact"
      index="05"
      label="Contact"
      title={[[{ t: 'Get in ' }, { t: 'touch.', accent: true }]]}
      intro="The quickest way to reach me is email. I read everything and reply."
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
        {/* Currently / Open to */}
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {[
            ['Currently', availability.currently],
            ['Open to', availability.openTo],
          ].map(([title, items], g) => (
            <Reveal key={title} i={g}>
              <h3 className="label-mono mb-4 flex items-center gap-3 !text-ink">
                <span aria-hidden className="h-1.5 w-1.5 bg-red" />
                {title}
              </h3>
              <ul className="border-t border-ink/15">
                {items.map((t, k) => (
                  <Reveal as="li" key={t} i={k} y={10} className="border-b border-ink/15 py-3 text-[0.98rem] leading-snug text-ink/90">
                    {t}
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Links */}
        <div className="lg:col-span-7">
          <DrawLine accent />
          <div className="divide-y divide-ink/15">
            {socials.map((s, i) => (
              <Row key={s.id} s={s} i={i} />
            ))}
          </div>
          <DrawLine />

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <button type="button" onClick={copy} className="btn btn-outline group min-w-[12.5rem]">
              <AnimatePresence mode="wait" initial={false}>
                <m.span
                  key={copied ? 'done' : 'idle'}
                  className="inline-flex items-center gap-2"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.22, ease: ease.outExpo }}
                >
                  {copied ? <Check className="text-red" /> : <Copy />}
                  {copied ? 'Email copied' : 'Copy email address'}
                </m.span>
              </AnimatePresence>
            </button>
            <span className="sr-only" role="status">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>

            {/* CV stays disabled until a redacted copy is approved. */}
            {cv.available ? (
              <a href={cv.path} download className="btn btn-primary">
                Download CV
              </a>
            ) : (
              <span className="inline-flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                <span aria-hidden className="h-px w-6 bg-ink/30" />
                Résumé PDF coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
