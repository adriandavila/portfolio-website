import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Research from "../components/Research"
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="main-container">
      <div id="about">
        <About />
      </div>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <div id="research">
        <Research />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}