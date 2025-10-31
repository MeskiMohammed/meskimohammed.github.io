import { useLanguage } from '../contexts/LanguageContext'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
          {t.contact.title}
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12">{t.contact.description}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-primary dark:text-primary-dark" size={24} />
              <h3 className="text-lg font-semibold text-primary dark:text-primary-dark">{t.contact.email}</h3>
            </div>
            <a
              href="mailto:mohammedmeski.pro@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors break-all"
            >
              mohammedmeski.pro@gmail.com
            </a>
          </div>

          <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="text-primary dark:text-primary-dark" size={24} />
              <h3 className="text-lg font-semibold text-primary dark:text-primary-dark">{t.contact.phone}</h3>
            </div>
            <a
              href="tel:+212691926735"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              +212 691 926 735
            </a>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          <h3 className="text-lg font-semibold text-primary dark:text-primary-dark mb-6">{t.contact.social}</h3>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://linkedin.com/in/meski-mohammed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary/20 dark:bg-primary-dark/30 text-primary dark:text-primary-dark rounded-xl hover:bg-primary/30 dark:hover:bg-primary-dark/40 transition-all font-medium text-sm"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/meski-mohammed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary/20 dark:bg-primary-dark/30 text-primary dark:text-primary-dark rounded-xl hover:bg-primary/30 dark:hover:bg-primary-dark/40 transition-all font-medium text-sm"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
