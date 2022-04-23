import Experience from "../components/Experience"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <div className="main-container">
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects id="projects" />
      </section>
    </div>
  )
}