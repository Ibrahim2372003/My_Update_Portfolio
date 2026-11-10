'use client'
import { m } from 'framer-motion'
import { ease } from '@/lib/motion'

// Designed typographic covers: temporary previews until real screenshots exist.
// They are abstract artwork that echoes what each project does; they are NOT
// screenshots and are labelled as cover artwork wherever they appear.
// Replace one by setting `image.src` in src/data/projects.js.

const TONES = {
  ink: { bg: 'bg-ink', fg: 'text-white', sub: 'text-white/60', stroke: '#FFFFFF', dim: 'rgba(255,255,255,0.22)', accent: '#8B0000' },
  paper: { bg: 'bg-white', fg: 'text-ink', sub: 'text-ink/55', stroke: '#111111', dim: 'rgba(17,17,17,0.18)', accent: '#8B0000' },
  tint: { bg: 'bg-tint', fg: 'text-ink', sub: 'text-ink/55', stroke: '#111111', dim: 'rgba(17,17,17,0.2)', accent: '#8B0000' },
}

// Children animate through variants propagated from the <m.svg> container, which
// is the element observed for visibility (zero-size children never intersect).
const draw = (delay = 0, d = 1.2) => ({
  variants: {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1, transition: { duration: d, ease: ease.outExpo, delay } },
  },
})
const pop = (delay = 0) => ({
  variants: {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: ease.outExpo, delay } },
  },
  style: { transformBox: 'fill-box', transformOrigin: 'center' },
})

function Art({ variant, t }) {
  const line = { fill: 'none', stroke: t.stroke, strokeWidth: 1.4, vectorEffect: 'non-scaling-stroke' }
  const red = { fill: 'none', stroke: t.accent, strokeWidth: 2, vectorEffect: 'non-scaling-stroke' }
  switch (variant) {
    case 'grid': // checklist of audit checks: pass (filled) / fail (hollow)
      return (
        <g>
          {[0, 1, 2, 3, 4, 5].map((r) => (
            <g key={r}>
              <m.rect {...pop(0.1 + r * 0.08)} x="372" y={92 + r * 34} width="14" height="14" fill={r === 2 || r === 4 ? 'none' : t.accent} stroke={r === 2 || r === 4 ? t.accent : 'none'} strokeWidth="1.6" />
              <m.path {...draw(0.15 + r * 0.08)} d={`M398 ${99 + r * 34}H${398 + [190, 150, 210, 120, 170, 90][r]}`} {...line} stroke={t.dim} strokeWidth="6" strokeLinecap="square" />
            </g>
          ))}
        </g>
      )
    case 'rows': // application pipeline
      return (
        <g>
          {[0, 1, 2, 3].map((c) => (
            <g key={c}>
              <m.path {...draw(0.1 + c * 0.1, 0.9)} d={`M${372 + c * 66} 84v232`} {...line} stroke={t.dim} />
              {Array.from({ length: [4, 3, 2, 1][c] }).map((_, k) => (
                <m.rect key={k} {...pop(0.25 + c * 0.1 + k * 0.07)} x={378 + c * 66} y={96 + k * 52} width="52" height="38" fill={c === 3 ? t.accent : 'none'} stroke={c === 3 ? 'none' : t.stroke} strokeWidth="1.3" />
              ))}
            </g>
          ))}
        </g>
      )
    case 'graph': // YES / NO decision tree
      return (
        <g fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.5">
          <m.path {...draw(0.1)} d="M470 120V160M470 160H410V210M470 160H530V210M410 210V250M410 250H370V290M410 250H450V290" {...line} />
          <m.path {...draw(0.5)} d="M470 120V160M470 160H530V210" {...red} />
          <m.rect {...pop(0.1)} x="440" y="92" width="60" height="28" fill="none" stroke={t.stroke} strokeWidth="1.4" />
          {[[410, 210], [530, 210], [370, 290], [450, 290]].map(([x, y], i) => (
            <m.rect key={i} {...pop(0.3 + i * 0.1)} x={x - 24} y={y - 14} width="48" height="28" fill={i === 1 ? t.accent : 'none'} stroke={i === 1 ? 'none' : t.stroke} strokeWidth="1.4" />
          ))}
          <text x="404" y="190" fill={t.stroke} textAnchor="end">YES</text>
          <text x="536" y="190" fill={t.accent} fontWeight="700">NO</text>
        </g>
      )
    case 'bars': // stacked blocks
      return (
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <m.rect key={i} {...pop(0.1 + i * 0.09)} x={372 + i * 50} y={300 - [60, 110, 80, 160, 130][i]} width="36" height={[60, 110, 80, 160, 130][i]} fill={i === 3 ? t.accent : 'none'} stroke={i === 3 ? 'none' : t.stroke} strokeWidth="1.3" />
          ))}
          <m.path {...draw(0.2)} d="M360 304H640" {...line} />
        </g>
      )
    case 'lines': // pages of text lines, one broken
      return (
        <g>
          {Array.from({ length: 9 }).map((_, i) => (
            <m.path key={i} {...draw(0.05 + i * 0.07, 0.9)} d={`M372 ${96 + i * 26}h${[200, 150, 230, 180, 90, 210, 160, 220, 120][i]}`} {...(i === 4 ? red : { ...line, stroke: t.dim, strokeWidth: 5 })} strokeLinecap="square" strokeDasharray={i === 4 ? '6 8' : undefined} />
          ))}
        </g>
      )
    case 'spark': // sparkline
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M372 ${110 + i * 60}H600`} stroke={t.dim} strokeWidth="1" vectorEffect="non-scaling-stroke" />
          ))}
          <m.path {...draw(0.15, 1.6)} d="M372 280 400 250 428 262 456 214 484 226 512 170 540 190 568 130 596 112" {...line} />
          <m.path {...draw(0.9, 0.9)} d="M540 190 568 130 596 112" {...red} />
          <m.circle {...pop(1.3)} cx="596" cy="112" r="5" fill={t.accent} />
        </g>
      )
    default:
      return null
  }
}

export default function ProjectCover({ project, className = '', label = true }) {
  const { cover, name, year } = project
  const t = TONES[cover.tone] || TONES.ink
  // A real screenshot always wins when one is configured.
  if (project.image?.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.image.src} alt={project.image.alt || `${name} screenshot`} className={`h-full w-full object-cover ${className}`} />
  }
  return (
    <div
      role="img"
      aria-label={`Typographic cover artwork for ${name}`}
      className={`relative h-full w-full overflow-hidden [container-type:inline-size] ${t.bg} ${t.fg} ${className}`}
    >
      <m.svg
        viewBox="352 72 292 256"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-y-[6%] right-[5%] h-[88%] w-[54%]"
        aria-hidden
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Art variant={cover.variant} t={t} />
      </m.svg>
      <div className="absolute inset-0 flex flex-col justify-between p-[6%]">
        <span className={`font-mono text-[0.62rem] uppercase tracking-[0.18em] ${t.sub}`}>{year}</span>
        <div>
          <span className="mb-3 block h-[2px] w-10 bg-red" aria-hidden />
          <span className="display block max-w-[60%] text-[clamp(1.7rem,9.5cqw,4rem)] leading-[0.95]">
            {cover.word}
            <span className="text-red">.</span>
          </span>
        </div>
      </div>
      {label && (
        <span className={`absolute right-[5%] top-[6%] font-mono text-[0.55rem] uppercase tracking-[0.16em] ${t.sub}`}>
          Cover artwork
        </span>
      )}
    </div>
  )
}
