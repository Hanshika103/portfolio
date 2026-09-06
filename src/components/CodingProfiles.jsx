import { ExternalLink } from 'lucide-react'
import profile from '../data/profile'

export default function CodingProfiles() {
  const valid = profile.codingProfiles.filter((p) => p.url && !p.url.startsWith('YOUR_'))

  if (valid.length === 0) return null

  return (
    <section className="border-t border-line">
      <div className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          <div>
            <p className="section-label">Coding Profiles</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {valid.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-sm hover:border-brass hover:text-brass transition-colors"
              >
                {p.name}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}