import { Github, Linkedin, Mail } from 'lucide-react'
import profile from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="text-steel text-sm">{profile.role}</p>
        </div>

        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-steel hover:text-brass transition-colors">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-steel hover:text-brass transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-steel hover:text-brass transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-steel text-xs font-mono">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
