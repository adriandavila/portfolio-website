import Icon from "../icons/icon"

const OtherProject = ({title, category, description, technologies, git, live, image}) => {
  const categoryToTag = (cat) => {
    if (cat == 'machine-learning') {
      return 'machine learning';
    } else if (cat == 'data-science') {
      return 'data science';
    } else {
      return cat;
    }
  }
  
  return (
    <div className="project card-styling">
      <div className={"other-card " + category}>
        <div className="content">
          <h3>{categoryToTag(category)}</h3>
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
    </div>
  )
}

export default OtherProject