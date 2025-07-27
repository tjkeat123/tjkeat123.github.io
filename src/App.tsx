import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import SideBullet from './components/SideBullet'
import NavigationIsland from './components/NavigationIsland'

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <NavigationIsland />
      <SideBullet />
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default App
