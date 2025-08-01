import { useScrollSpy } from '../hooks/useScrollSpy'

function SideBullet() {
  const currentSection = useScrollSpy()

  return (
    <div className="absolute right-5 bottom-10 md:bottom-5 flex flex-col justify-end h-full z-10">
        <ul className="flex flex-col gap-4 list-disc list-inside">
            <li 
              className="text-white text-2xl transition-colors" 
              style={{ color: currentSection === "hero" ? "#a1acda" : "#FFFFFF" }}
            ></li>
            <li 
              className="text-white text-2xl transition-colors" 
              style={{ color: currentSection === "about" ? "#a1acda" : "#FFFFFF" }}
            ></li>
            <li 
              className="text-white text-2xl transition-colors" 
              style={{ color: currentSection === "contact-me" ? "#a1acda" : "#FFFFFF" }}
            ></li>
        </ul>
    </div>
  )
}

export default SideBullet;