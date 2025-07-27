import { useState } from "react"

function About() {
  const [activeTab, setActiveTab] = useState("languages")

  return (
    <section id="about" className="h-screen snap-start snap-always scroll-smooth flex items-center justify-end pr-20 bg-mine-shaft-950">
      <div className="flex flex-col w-1/2 mr-8">
        <h1 className="text-5xl font-handwritten text-wistful-400 mb-4">About Me</h1>
        <p className="text-white text-lg font-body">
          Rising senior engineering major, CS addict. I split my time between algorithms, ML, data pipes, and raw software builds. My current grind: a market-data model at the campus research lab -- pushing trading strategies to the edge and blending code with finance.
        </p>
        <div className="flex flex-row gap-10 mb-4 mt-6">
          <button 
            className={`text-sm font-body hover:border-b-2 text-white px-2 ${
              activeTab === "languages" ? "border-b-2" : ""
            }`}
            onClick={() => setActiveTab("languages")}
          >
            LANGUAGES
          </button>
          <button 
            className={`text-sm font-body hover:border-b-2 text-white px-2 ${
              activeTab === "frameworks" ? "border-b-2" : ""
            }`}
            onClick={() => setActiveTab("frameworks")}
          >
            FRAMEWORKS & LIBRARIES
          </button>
          <button 
            className={`text-sm font-body hover:border-b-2 text-white px-2 ${
              activeTab === "devTools" ? "border-b-2" : ""
            }`}
            onClick={() => setActiveTab("devTools")}
          >
            DEV TOOLS & ENV
          </button>
        </div>
        <SkillList activeTab={activeTab} />
      </div>
    </section>
  )
}

function SkillList({ activeTab }: { activeTab: string }) {
  const languages = [
    "Python",
    "C++",
    "C",
    "Java",
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Solidity",
    "LaTeX"
  ] 
  const frameworks = [
    "NumPy",
    "pandas",
    "scikit-learn",
    "TensorFlow",
    "MongoDB",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Flask",
    "FastAPI",
    "Selenium"
  ]
  const devTools = [
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Windows",
    "Jupyter Notebook",
    "VS Code"
  ]

  const getSkillsForTab = () => {
    switch (activeTab) {
      case "languages":
        return languages
      case "frameworks":
        return frameworks
      case "devTools":
        return devTools
      default:
        return languages
    }
  }

  return (
    <div className="flex pl-5 h-32">
      <ul className="flex flex-col flex-wrap flex-grow list-disc list-inside">
        {getSkillsForTab().map((skill, index) => (
          <li key={`${activeTab}-${index}`} className="text-white text-sm font-body animate-fade-in">{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default About