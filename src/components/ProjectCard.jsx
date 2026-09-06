import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, onViewDetails, featured = false }) {
  return (
    <div
      className={`group border border-line bg-surface p-6 flex flex-col h-full transition-colors hover:border-brass/60 ${
        featured ? 'blueprint-frame' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-brass">{project.category}</p>
          <h3 className="mt-1.5 text-lg font-display font-semibold leading-snug">{project.title}</h3>
          <p className="text-sm text-steel mt-0.5">{project.subtitle}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-paper/85 leading-relaxed flex-1">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 6).map((t) => (
          <span key={t} className="text-xs font-mono text-steel border border-line/80 px-2 py-1">
            {t}
          </span>
        ))}
        {project.technologies.length > 6 && (
          <span className="text-xs font-mono text-steel px-2 py-1">+{project.technologies.length - 6}</span>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-line/70">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-paper hover:text-brass transition-colors"
        >
          <Github size={15} />
          Code
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-paper hover:text-brass transition-colors"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
        <button
          onClick={() => onViewDetails(project)}
          className="ml-auto text-sm text-brass hover:text-brassDim transition-colors font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  )
}