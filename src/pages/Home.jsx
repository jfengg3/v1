import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Technologies from "../components/Technologies"
import Work from "../components/Work"
import GlowCursor from "../components/GlowCursor"

const Home = () => {

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <GlowCursor />
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="mx-auto lg:flex">

        <div className=" border-cyan-400 lg:w-1/2 lg:pl-[10%] lg:h-screen lg:fixed px-8 lg:px-0 flex flex-col justify-between">
          <Hero />
          <Navbar />
        </div>

        <div className=" border-green-400 lg:w-1/2 lg:pr-[10%] lg:ml-[50%] px-8 lg:px-0">
          <About />
          <Technologies />
          <Projects />
          <Work />
          <Contact />
        </div>
        
      </div>


    </div>

  )
}

export default Home
