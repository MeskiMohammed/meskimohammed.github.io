import { useLanguage } from '../contexts/LanguageContext'
import { Github } from 'lucide-react'

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: 'HR Management System',
      description: 'Web platform for managing HR operations with sensitive data handling and document flow management.',
      tags: ['React', 'Laravel', 'MySQL'],
      github: 'https://github.com',
    },
    {
      title: 'Madani Quran Award',
      description: 'International Quranic competition platform with online registration, candidate management, and real-time tracking.',
      tags: ['Next.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with multi-language support and beautiful animations.',
      tags: ['React', 'Vite', 'Tailwind', 'GSAP'],
      github: 'https://github.com',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform group"
            >
              <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-3 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-primary/20 dark:bg-primary-dark/30 text-primary dark:text-primary-dark rounded-lg text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-primary-dark font-semibold text-sm flex items-center gap-2 hover:underline"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
