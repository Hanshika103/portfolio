import { Award, ExternalLink } from 'lucide-react'
import profile from '../data/profile'

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-line">
      <div className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          <div>
            <p className="section-label">06 · Certifications</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-display font-semibold">Certifications</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {profile.certifications.map((cert, i) => (
              <div key={i} className="border border-line bg-surface p-5 flex flex-col">
                <Award size={18} className="text-brass mb-3" />
                <h3 className="font-display font-semibold leading-snug">{cert.name}</h3>
                <p className="text-steel text-sm mt-1">{cert.org}</p>
                {cert.date && <p className="text-steel text-xs font-mono mt-2">{cert.date}</p>}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-brass hover:text-brassDim transition-colors"
                  >
                    <ExternalLink size={14} />
                    View credential
                  </a>
                )}
              </div>
            ))}

            
          </div>
        </div>
      </div>
    </section>
  )
}