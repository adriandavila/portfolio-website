import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Research from "../components/Research"
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="main-container">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="research">
        <Research />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}