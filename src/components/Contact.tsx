import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

function Contact() {

  const currentYear = new Date().getFullYear();
  const [emailCopied, setEmailCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText('tjkeat123@gmail.com');
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  }

  return (
    <section id="contact-me" className="h-screen snap-start snap-always scroll-smooth flex flex-col justify-between px-20 md:pl-20 md:pr-0 bg-mine-shaft-950">
      <div className="flex flex-col w-full md:w-2/5 flex-grow justify-center">
        <h1 className="font-handwritten text-5xl text-wistful-400 mb-4 text-center md:text-left">Let's Connect</h1>
        <p className="font-body text-white text-xl text-center md:text-left">My inbox is always open -- whether it's a fresh project, thoughtful question, insightful advice, or just a quick hello. I respond quickly and keep it honest.</p>
        <div className="flex flex-row gap-6 mt-4 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/tjkeat123/" target='_blank' className="text-white font-body flex items-center gap-2 hover:text-wistful-400 transition-colors text-4xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/tjkeat123" target='_blank' className="text-white font-body flex items-center gap-2 hover:text-wistful-400 transition-colors text-4xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <FontAwesomeIcon icon={faEnvelope} onClick={copyEmail} className="text-white font-body flex items-center gap-2 hover:text-wistful-400 transition-colors text-4xl cursor-pointer" />
          {emailCopied && <p className="text-white font-body text-sm transition-opacity duration-300">Email Copied!</p>}
        </div>
      </div>
      <footer className="flex flex-col md:flex-row justify-between w-full md:pr-20 pb-8 gap-4">
        <p className="font-body text-white text-sm text-center md:text-left">© {currentYear} Derick TJ Keat | Kuala Lumpur | Taipei</p>
        <p className="font-body text-white text-sm text-center md:text-left">Source Code on <a href="https://github.com/tjkeat123/tjkeat123.github.io" target='_blank' className="text-wistful-400 hover:text-wistful-300 transition-colors">GitHub</a></p>
      </footer>
    </section>
  )
}

export default Contact