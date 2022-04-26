import { bio } from "../config"

const Hero = () => {
  return (
    <div className="section-hero">
      <div className="hero-text-area">
        <div className="hero-title">
          <h1>Hi, my name is</h1>
          <h2>{bio.name}.</h2>
          <h3>{bio.headline}</h3>
        </div>
        <div className="hero-subtitle">
          <p>{bio.paragraph}</p>
        </div>
        <div className="cta">
          <a className="green-button" href="" target="_blank" rel="">Contact Me!</a>
        </div>
      </div>
    </div>
  )
}

export default Hero