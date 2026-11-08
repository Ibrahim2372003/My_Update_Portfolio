import Container from './Container'
import { cn } from '@/lib/cn'

/** Page section with a hairline divider and a consistent title treatment. */
export default function Section({ id, title, className, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('border-t border-line py-20 md:py-28', className)}
    >
      <Container>
        <h2
          id={`${id}-title`}
          className="mb-10 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:mb-14 md:text-5xl"
        >
          {title}
        </h2>
        {children}
      </Container>
    </section>
  )
}
