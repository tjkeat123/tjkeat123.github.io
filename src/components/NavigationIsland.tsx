import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons"

function NavigationIsland() {

  const navElement = ({ icon, text, href }: { icon: any, text: string, href: string }) => {
    return (
      <a href={href} className="flex flex-row items-center group overflow-hidden transition-all duration-500 ease-in-out p-3 md:p-4">
        <FontAwesomeIcon icon={icon} className="text-black text-xl flex-shrink-0" />
        <span className="hidden md:inline text-black text-sm font-body ml-2 max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap overflow-hidden">{text}</span>
      </a>
    )
  }

  return (
    <div className="fixed flex flex-row bottom-28 md:bottom-5 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300 shadow-lg">
      {navElement({ icon: faHouse, text: "Home", href: "#hero" })}
      <div className="w-px h-6 bg-gray-300 self-center"></div>
      {navElement({ icon: faUser, text: "About", href: "#about" })}
      <div className="w-px h-6 bg-gray-300 self-center"></div>
      {navElement({ icon: faEnvelope, text: "Contact Me", href: "#contact-me" })}
    </div>
  )
}

export default NavigationIsland