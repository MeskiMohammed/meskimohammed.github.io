import { useLanguage } from '../contexts/LanguageContext'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 dark:bg-primary-dark/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 dark:bg-accent-dark/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            {t.hero.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary dark:text-primary-dark animate-slide-up">
            {t.hero.subtitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary dark:bg-primary-dark text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-primary/50 hover:shadow-2xl animate-glow-pulse"
            >
              {t.hero.cta}
            </a>
          </div>
          <div className="pt-12 animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}
