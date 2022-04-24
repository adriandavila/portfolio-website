import Icon from '../icons/icon.js'

const FeaturedProject = ({title, category, description, technologies, git, live, image, left}) => {
    const leftOrRight = (left ? "left" : "right");
  return (
    <div className={"project featured-project " + leftOrRight}>
        <div className={"project-card card-styling " + category}>
            <div className="content">
                <h3>Featured Project</h3>
                <h2>{title}</h2>
                <p>{description}</p>

                <ul className="technologies">
                    {technologies && technologies.map((tech, i) => {
                        return (
                            <li key={i}>{tech}</li>
                        )
                    })}
                </ul>

                <div className="cta">
                    <a href={git} area-label="GitHub" target="_blank" rel="noreferrer">
                        <Icon name="GitHub" />
                    </a>
                    <a href={live} aria-label="Live Project" target="_blank" rel="noreferrer">
                        <Icon name="IconExternal" />
                    </a>
                </div>
            </div>
        </div>
        
        <div className="project-image">
            <img src={image} alt={description} />
        </div>
    </div>
  )
}

export default FeaturedProject