import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import SideBullet from './components/SideBullet'

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <SideBullet />
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default App
