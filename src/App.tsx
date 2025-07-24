import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default App
