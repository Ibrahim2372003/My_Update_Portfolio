import Image from 'next/image'
import { techLabel } from '@/data/projects'

/** Image-led project card. The image zooms slightly on hover; nothing is hidden behind a click. */
export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors duration-300 hover:border-fg/30">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-sunken">
        <Image
          src={project.url}
          alt={`${project.name} website preview`}
          fill
          sizes="(min-width: 1200px) 560px, (min-width: 768px) 46vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{project.name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.desc}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-sunken px-3 py-1 text-xs font-medium text-muted"
            >
              {techLabel(tech)}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
