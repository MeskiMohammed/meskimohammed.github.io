import { useLanguage } from '../contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800 py-8 px-4 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 Meski Mohammed. {t.footer.copyright}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
