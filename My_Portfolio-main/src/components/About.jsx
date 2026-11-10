'use client'
import { about } from '@/data/profile'
import Section from '@/components/ui/Section'
import Reveal from '@/components/motion/Reveal'
import DrawLine from '@/components/motion/DrawLine'

export default function About() {
  return (
    <Section
      id="about"
      index="02"
      label="About"
      title={['Backend-minded,', [{ t: 'interface-aware.', accent: true }]]}
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-7 lg:col-span-7">
          {about.paragraphs.map((p, i) => (
            <Reveal
              as="p"
              key={i}
              i={i}
              className={
                i === 0
                  ? 'text-[1.35rem] leading-[1.45] text-ink sm:text-[1.7rem]'
                  : 'max-w-2xl text-[1.05rem] leading-relaxed text-muted'
              }
            >
              {p}
            </Reveal>
          ))}
        </div>

        <dl className="lg:col-span-5">
          {about.facts.map((f, i) => (
            <Reveal key={f.k} i={i} y={16} className="group relative">
              <DrawLine delay={i * 0.08} color="bg-ink/15" />
              <div className="relative grid grid-cols-[6.5rem_1fr] gap-4 py-5 sm:grid-cols-[7.5rem_1fr]">
                {/* hover: tint wash + red marker slide in */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 -inset-x-3 origin-left scale-x-0 bg-tint transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                />
                <span
                  aria-hidden
                  className="absolute inset-y-4 -left-3 w-[2px] origin-top scale-y-0 bg-red transition-transform duration-500 ease-out-expo group-hover:scale-y-100"
                />
                <dt className="label-mono relative pt-1">{f.k}</dt>
                <dd className="relative text-[0.98rem] leading-snug text-ink">{f.v}</dd>
              </div>
            </Reveal>
          ))}
          <DrawLine delay={0.4} color="bg-ink/15" />
        </dl>
      </div>
    </Section>
  )
}
