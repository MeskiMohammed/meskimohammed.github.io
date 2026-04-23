import { useEffect } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
	useEffect(() => {
		document.body.style.cursor = 'none'

		function handleMouseMove({ clientX, clientY }: MouseEvent) {
			gsap.to('.cursor', {
				x: clientX - 15,
				y: clientY - 15,
				duration: 0.1,
				overwrite: 'auto',
				stagger: 0.02,
			})

			gsap.to('#cursor-dot', {
				x: clientX - 3,
				y: clientY - 3,
				duration: 0.0001,
				overwrite: 'auto',
			})
		}

		window.addEventListener('mousemove', handleMouseMove)
		handleMouseMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 } as MouseEvent)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<>
			{Array.from({ length: 3 }).map((_, index) => (
				<div key={index} className='cursor cursor-fade fixed top-0 left-0 w-8 h-8 border-2 border-primary dark:border-primary rounded-full pointer-events-none z-9999 hidden md:block opacity-0' />
			))}
			<div id='cursor-dot' className='fixed cursor-fade top-0 left-0 w-2 h-2 bg-primary dark:bg-primary rounded-full pointer-events-none z-9999 hidden md:block opacity-0' />
		</>
	)
}
