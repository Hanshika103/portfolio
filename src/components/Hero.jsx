import { Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react'
import profile from '../data/profile'
import profileImage from '../assets/profile.jpeg'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
          <div className="max-w-2xl">
            

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold leading-[1.05] tracking-tight">
              Hi, I&apos;m {profile.name}
            </h1>

            <p className="mt-5 text-lg md:text-xl text-steel font-body">{profile.role} · {profile.tagline}</p>

            <p className="mt-6 text-base md:text-lg text-paper/85 leading-relaxed max-w-xl">
              {profile.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 bg-brass text-ink px-5 py-3 text-sm font-medium hover:bg-brassDim transition-colors"
              >
                View Projects
                <ArrowDown size={16} />
              </button>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium text-paper hover:border-brass hover:text-brass transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium text-paper hover:border-brass hover:text-brass transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium text-paper hover:border-brass hover:text-brass transition-colors"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium text-paper hover:border-brass hover:text-brass transition-colors"
              >
                <FileDown size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Title-block: engineering-drawing style summary card */}
          {/* Profile Photo */}
<div className="flex flex-col items-center justify-end">
  <div className="relative">
    <div className="absolute -inset-2 border border-brass/30"></div>

    <img
      src={profileImage}
      alt={`${profile.name} - Profile`}
      className="relative w-56 h-64 md:w-64 md:h-72 object-cover border border-line"
    />
  </div>

  <p className="mt-4 font-mono text-xs text-steel tracking-wider">
    HANSHiKA MUKATI / PROFILE
  </p>
</div>
        </div>
      </div>
    </section>
  )
}