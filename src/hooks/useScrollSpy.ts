import { useState, useEffect } from 'react'

export function useScrollSpy() {
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            if (sectionId) {
              setCurrentSection(sectionId)
            }
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px', // Only trigger when section is clearly in view
      }
    )

    // Find all sections and observe them
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  return currentSection
} 