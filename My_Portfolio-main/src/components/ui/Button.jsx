import { cn } from '@/lib/cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-medium transition duration-200 active:scale-[0.98]'

const variants = {
  primary: 'bg-accent text-accent-fg hover:bg-accent/85',
  secondary: 'border border-line bg-surface text-fg hover:border-fg/40',
}

/** Renders an <a> by default; pass `as="button"` for real buttons. */
export default function Button({ as: Tag = 'a', variant = 'primary', className, children, ...props }) {
  return (
    <Tag className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Tag>
  )
}
