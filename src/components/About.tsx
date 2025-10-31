import { useLanguage } from '../contexts/LanguageContext'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
          {t.about.title}
        </h2>

        <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-8 md:p-12 mb-12 shadow-xl">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Interests */}
          <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-primary dark:text-primary-dark mb-4">
              {t.about.interests}
            </h3>
            <ul className="space-y-3">
              {t.about.interestsList.map((interest: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-primary dark:text-primary-dark mb-4">
              {t.skills.title}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-accent dark:text-accent-dark mb-2">
                  {t.skills.frontend}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.skills.frontendSkills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 dark:bg-primary-dark/30 text-primary dark:text-primary-dark rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-accent dark:text-accent-dark mb-2">
                  {t.skills.backend}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.skills.backendSkills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary/20 dark:bg-secondary-dark/30 text-secondary dark:text-secondary-dark rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-accent dark:text-accent-dark mb-2">
                  {t.skills.tools}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.skills.toolsSkills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-accent/20 dark:bg-accent-dark/30 text-accent dark:text-accent-dark rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
