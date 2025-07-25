import Typewriter from 'typewriter-effect'

function Hero() {

  return (
    <section id="hero" className="h-screen snap-start snap-always scroll-smooth flex items-center pl-20 bg-mine-shaft-950">
      <div className="flex flex-col w-3/4">
        <h1 className="text-2xl text-white font-body leading-relaxed">Hey, I'm
          <br/>
          <span className="text-wistful-400 text-6xl font-handwritten leading-tight">Derick (or TJ)</span>
          <br/>
          an engineering student who
          <span className="text-wistful-400 text-5xl font-handwritten leading-tight">
          <Typewriter
            options={{
              strings: ["really just wants to code.",
                        "know they picked the wrong major.",
                        "loves CS more than circuits.",
                        "compiles dreams into reality.",
                        "should've majored in code, but here I am."],
              autoStart: true,
              loop: true,
            }}
          />
        </span></h1>
      </div>
    </section>
  )
}

export default Hero