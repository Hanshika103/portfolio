import { useEffect } from 'react'
import { X, Github, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-sm flex items-start md:items-center justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="blueprint-frame bg-surface border border-line max-w-2xl w-full my-8 md:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-6 md:p-8 border-b border-line">
          <div>
            <p className="font-mono text-xs text-brass">{project.category}</p>
            <h2 id="project-modal-title" className="mt-1.5 text-2xl font-display font-semibold">
              {project.title}
            </h2>
            <p className="text-steel text-sm mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="text-steel hover:text-brass transition-colors shrink-0"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6 text-sm leading-relaxed">
          <div>
            <h3 className="font-mono text-xs text-brass mb-2">PROJECT OVERVIEW</h3>
            <p className="text-paper/90">{project.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-mono text-xs text-brass mb-2">PROBLEM</h3>
              <p className="text-paper/90">{project.problem}</p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-brass mb-2">SOLUTION</h3>
              <p className="text-paper/90">{project.solution}</p>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-brass mb-2">TECHNICAL IMPLEMENTATION</h3>
            <p className="text-paper/90">{project.technicalImplementation}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-brass mb-2">TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span key={t} className="text-xs font-mono text-steel border border-line/80 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-brass mb-2">KEY FEATURES</h3>
            <ul className="space-y-1.5 text-paper/90 list-disc list-inside">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs text-brass mb-2">MY CONTRIBUTION</h3>
            <p className="text-paper/90">{project.contribution}</p>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-line">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-sm font-medium hover:border-brass hover:text-brass transition-colors"
            >
              <Github size={16} />
              View on GitHub
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-brass text-ink px-4 py-2.5 text-sm font-medium hover:bg-brassDim transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}