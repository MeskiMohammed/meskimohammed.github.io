import { useLanguage } from '../contexts/LanguageContext'
import { Briefcase } from 'lucide-react'

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t.experience.internship1.title,
      company: t.experience.internship1.company,
      period: t.experience.internship1.period,
      description: t.experience.internship1.description,
    },
    {
      title: t.experience.internship2.title,
      company: t.experience.internship2.company,
      period: t.experience.internship2.period,
      description: t.experience.internship2.description,
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
          {t.experience.title}
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-8 border-l-4 border-primary dark:border-primary-dark shadow-xl hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 dark:bg-primary-dark/20 rounded-lg">
                  <Briefcase className="text-primary dark:text-primary-dark" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-accent dark:text-accent-dark font-semibold">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
