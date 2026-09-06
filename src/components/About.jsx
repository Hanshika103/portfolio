import profile from '../data/profile'

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          <div>
            <p className="section-label">01 · About</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-display font-semibold">Who I am</h2>
          </div>
          <div className="max-w-prose space-y-5 text-paper/90 leading-relaxed">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}