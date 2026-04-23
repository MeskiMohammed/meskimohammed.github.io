import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Opening from '@/components/Opening'
import CustomCursor from '@/components/CustomCursor'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export default function App() {
	useGSAP(() => {
		gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger, ScrollToPlugin)
	}, [])
	return (
		<AnimationWrapper>
			<Navigation />
			<div id='smooth-content'>
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Opening />
			</div>
			<CustomCursor />
		</AnimationWrapper>
	)
}

function AnimationWrapper({ children }: { children: React.ReactNode }) {
	useGSAP(() => {
		const t1 = gsap.timeline({
			onComplete: () => {
				document.getElementById('opening')?.remove()
				document.getElementById('app')?.classList.remove('overflow-y-hidden')
				ScrollSmoother.create({
					wrapper: '.smooth-wrapper',
					content: '#smooth-content',
					smooth: 1,
					effects: true,
				})
			},
		})
		t1.from('#logo-left', { x: '-120%', duration: 1.2, ease: 'power2.inOut', repeatDelay: 0.5, yoyo: true, repeat: 1 }, 0)
		t1.from('#logo-right', { x: '120%', duration: 1.2, ease: 'power2.inOut', repeatDelay: 0.5, yoyo: true, repeat: 1 }, 0)
		t1.to('.left-door', { x: '-120%', duration: 1.2, delay: 0.5, ease: 'power2.inOut', stagger: { from: 'center', amount: 0.5 } }, 1.2)
		t1.to('.right-door', { x: '120%', duration: 1.2, delay: 0.5, ease: 'power2.inOut', stagger: { from: 'center', amount: 0.5 } }, 1.2)
		t1.to('.cursor-fade', { opacity: 1, duration: 1.2, delay: 0.5, ease: 'power2.inOut' }, 2.4)
	}, [])

	return (
		<div className='smooth-wrapper h-screen w-screen overflow-y-hidden' id='app'>
			{children}
		</div>
	)
}
