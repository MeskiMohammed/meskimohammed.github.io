import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Chatbot from './Chatbot'

export default function Navigation() {
	const { i18n, t } = useTranslation()
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const saved = localStorage.getItem('darkMode')
		if (saved === 'true') {
			setIsDark(true)
			document.documentElement.classList.add('dark')
		}
	}, [])

	const toggleDarkMode = () => {
		const newMode = !isDark
		setIsDark(newMode)
		document.documentElement.classList.toggle('dark')
		localStorage.setItem('darkMode', String(newMode))
	}

	const navItems = [
		{ id: 'home', label: t('nav.home') },
		{ id: 'about', label: t('nav.about') },
		{ id: 'projects', label: t('nav.projects') },
		{ id: 'contact', label: t('nav.contact') },
	]

	return (
		<>
			<div className='absolute z-10 top-5 left-5 flex flex-col gap-4'>
				{navItems.map((item) => (
					<a key={item.id} href={`#${item.id}`} className='text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark transition-colors'>
						{item.label}
					</a>
				))}
			</div>
			<div className='absolute z-10 top-5 right-5 flex gap-1 bg-gray-100 dark:bg-zinc-800 rounded-lg p-1'>
				{(['en', 'fr'] as const).map((lang) => (
					<button key={lang} onClick={() => i18n.changeLanguage(lang)} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${i18n.language === lang ? 'bg-primary text-white shadow-lg' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}>
						{lang.toUpperCase()}
					</button>
				))}
			</div>
			<button onClick={toggleDarkMode} className='absolute z-10 bottom-5 left-5 p-2.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-all' aria-label='Toggle dark mode'>
				{isDark ? <Sun size={20} /> : <Moon size={20} />}
			</button>
			<Chatbot buttonClassName='absolute z-10 bottom-5 right-5 rounded-lg w-10! h-10!' />
		</>
	)
}
