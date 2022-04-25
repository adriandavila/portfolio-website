import { useEffect } from "react";
import { projects } from "../config"

import FeaturedProject from "./projects/FeaturedProject";
import OtherProject from "./projects/OtherProject";

const Projects = () => {
    const projectsCopy = projects;
    const featuredProjects = projectsCopy.filter((proj) => (proj.type === 'featured'));
    // console.log(featuredProjects)
    //projectsCopy = projects;
    const otherProjects = projectsCopy.filter((proj) => (proj.type === 'displayed'))
    // console.log(otherProjects)

    return (
        <div className="section-projects">
            <h1 className="section-title"><span aria-hidden="true">03.</span>Projects</h1>

            <div className="featured-projects">
                {featuredProjects && featuredProjects.map((proj, i) => {
                    const isLeft = (i % 2 == 0)
                    return (
                        <FeaturedProject 
                            title={proj.title}
                            category={proj.category}
                            description={proj.description}
                            technologies={proj.technologies}
                            git={proj.git}
                            live={proj.live}
                            image={proj.image}
                            left={isLeft}
                            key={i}
                        />
                    )
                })}
            </div>

            <div className="other-projects">
                <div className="section-subtitle">
                    <h1>Other Noteworthy Projects</h1>
                </div>
                <div className="other-projects-list">
                    {otherProjects && otherProjects.map((proj, i) => {
                        return (
                            <OtherProject 
                                title={proj.title}
                                category={proj.category}
                                description={proj.description}
                                technologies={proj.technologies}
                                git={proj.git}
                                live={proj.live}
                                image={proj.image}
                                key={i}
                            />
                        )
                    })}
                </div>
            </div>

        </div>
  )
}

export default Projects