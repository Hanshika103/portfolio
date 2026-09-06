import profile from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          <div>
            <p className="section-label">04 · Experience</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-display font-semibold">Experience</h2>
          </div>

          <div className="space-y-10">
            {profile.experience.map((exp, i) => (
              <div key={i} className="border-l-2 border-line pl-6 relative">
                <span className="absolute -left-[7px] top-1 w-3 h-3 bg-brass" />
                <p className="font-mono text-xs text-steel">{exp.period}</p>
                <h3 className="mt-1 text-lg font-display font-semibold">{exp.role}</h3>
                <p className="text-steel text-sm mt-0.5">{exp.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-paper/90 list-disc list-inside">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-steel border border-line/80 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            
          </div>
        </div>
      </div>
    </section>
  )
}