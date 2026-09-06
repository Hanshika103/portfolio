import { useState } from 'react'
import { Github } from 'lucide-react'
import projects from '../data/projects'
import profile from '../data/profile'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [active, setActive] = useState(null)
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="border-t border-line">
      <div className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 mb-4">
          <div>
            <p className="section-label">03 · Projects</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-display font-semibold">Featured Projects</h2>
          </div>
          <p className="max-w-prose text-paper/80 leading-relaxed">
            A selection of AI/ML and full-stack projects, each built end-to-end — from data and models to a working
            interface.
          </p>
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          <div />
          <div className="grid sm:grid-cols-2 gap-6">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} onViewDetails={setActive} featured />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-10 mt-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold">Other Projects</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {other.map((p) => (
              <ProjectCard key={p.id} project={p} onViewDetails={setActive} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-10 mt-16">
          <div />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start border border-line px-5 py-3 text-sm font-medium hover:border-brass hover:text-brass transition-colors"
          >
            <Github size={16} />
            Explore more projects on GitHub
          </a>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}