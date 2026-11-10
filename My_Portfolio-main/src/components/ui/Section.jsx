import DrawLine from '@/components/motion/DrawLine'
import LineReveal from '@/components/motion/LineReveal'
import Reveal from '@/components/motion/Reveal'

export const container = 'mx-auto w-full max-w-page px-5 sm:px-8 lg:px-10'

// Shared section scaffold: id for scroll-spy, labelled heading, a mono index,
// a red-led divider that draws in, and a masked title.
export default function Section({ id, index, label, title, intro, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative py-24 sm:py-28 lg:py-36 ${className}`}>
      <div className={container}>
        <header className="mb-12 sm:mb-16">
          <Reveal className="mb-5 flex items-center gap-4" y={10}>
            <span className="font-mono text-[0.72rem] tracking-[0.14em] text-red">{index}</span>
            <span className="label-mono">{label}</span>
          </Reveal>
          <DrawLine accent className="mb-8" />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <LineReveal
              as="h2"
              id={`${id}-title`}
              lines={title}
              className="display text-[clamp(2.4rem,6.2vw,5.25rem)] text-ink"
            />
            {intro && (
              <Reveal as="p" className="max-w-md text-base leading-relaxed text-muted lg:pb-3" delay={0.2}>
                {intro}
              </Reveal>
            )}
          </div>
        </header>
        {children}
      </div>
    </section>
  )
}
