import profile from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="border-t border-line">
      <div className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          <div>
            <p className="section-label">05 · Education</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-display font-semibold">Education</h2>
          </div>

          <div className="space-y-6">
            {profile.education.map((ed, i) => (
              <div key={i} className="border border-line bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-display font-semibold">{ed.degree}</h3>
                  <span className="font-mono text-xs text-steel">{ed.period}</span>
                </div>
                <p className="text-steel text-sm mt-1">{ed.school}</p>
                <p className="text-paper/85 text-sm mt-3">{ed.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}