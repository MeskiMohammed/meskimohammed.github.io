import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Navigation() {
	const { i18n, t } = useTranslation()
	const [isDark, setIsDark] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const saved = localStorage.getItem("darkMode")
		if (saved === "true") {
			setIsDark(true)
			document.documentElement.classList.add("dark")
		}
	}, [])

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const toggleDarkMode = () => {
		const newMode = !isDark
		setIsDark(newMode)
		document.documentElement.classList.toggle("dark")
		localStorage.setItem("darkMode", String(newMode))
	}

	const navItems = [
		{ id: "about", label: t('nav.about') },
		{ id: "experience", label: t('nav.experience') },
		{ id: "projects", label: t('nav.projects') },
		{ id: "contact", label: t('nav.contact') },
	]

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
			<div className="px-4">
				<div className="flex items-center justify-between h-16">
					<img src="/logo.svg" alt="" className="h-24" />

					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark transition-colors">
								{item.label}
							</a>
						))}
					</div>

					<div className="flex items-center gap-3">
						<div className="flex gap-1 bg-gray-100 dark:bg-zinc-800 rounded-lg p-1">
							{(["en", "fr"] as const).map((lang) => (
								<button key={lang} onClick={() => i18n.changeLanguage(lang)} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${i18n.language === lang ? "bg-primary text-white shadow-lg" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`}>
									{lang.toUpperCase()}
								</button>
							))}
						</div>

						<button onClick={toggleDarkMode} className="p-2.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-all" aria-label="Toggle dark mode">
							{isDark ? <Sun size={20} /> : <Moon size={20} />}
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}
