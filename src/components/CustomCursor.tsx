import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e

      gsap.to(cursorRef.current, {
        x: clientX - 15,
        y: clientY - 15,
        duration: 0.1,
        overwrite: 'auto',
      })

      gsap.to(cursorDotRef.current, {
        x: clientX - 4,
        y: clientY - 4,
        duration: 0.05,
        overwrite: 'auto',
      })
    }

    const handleMouseEnter = () => {
      gsap.to([cursorRef.current, cursorDotRef.current], { opacity: 1, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to([cursorRef.current, cursorDotRef.current], { opacity: 0, duration: 0.3 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-primary dark:border-primary-dark rounded-full pointer-events-none z-[9999] opacity-0 hidden md:block"
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-primary dark:bg-primary-dark rounded-full pointer-events-none z-[9999] opacity-0 hidden md:block"
      />
    </>
  )
}
