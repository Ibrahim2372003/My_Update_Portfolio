import Container from '@/components/ui/Container'
import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {profile.startYear} – {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#home" className="w-fit rounded-full transition-colors hover:text-fg">
          Back to top
        </a>
      </Container>
    </footer>
  )
}
