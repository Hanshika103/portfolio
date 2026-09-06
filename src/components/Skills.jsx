import profile from '../data/profile'

export default function Skills() {
  const categories = Object.entries(profile.skills)

  return (
    <section id="skills" className="border-t border-line">
      <div className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          <div>
            <p className="section-label">02 · Skills</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-display font-semibold">What I work with</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {categories.map(([category, items]) => (
              <div key={category}>
                <h3 className="font-mono text-xs text-steel tracking-tight mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-paper/90 border border-line px-3 py-1.5 hover:border-brass hover:text-brass transition-colors"
                    >
                      {item}
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