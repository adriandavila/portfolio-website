import { projects } from "../config"

const Projects = () => {
    const featuredProjects = projects.filter((proj) => (proj.type === 'featured'));
    console.log(featuredProjects);

    return (
        <div className="section-projects">
            <div className="section-title">
                <h1>03. Projects</h1>
            </div>
            <div className="featured">

            </div>
            <div className="other-projects">

            </div>

        </div>
  )
}

export default Projects