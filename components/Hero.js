import heroStyles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div>
        <div className={heroStyles.title}>
          <h1>Hi, my name is</h1>
          <h2>Adrian Davila.</h2>
          <h3>I'm a CS Student @UWaterloo.</h3>
        </div>
        <div className="hero-subtitle">
          <p>Note: I want to create for myself a similar background as this: https://gridcritters.com/ - (I also have a screenshot on my desktop). Can also use this galaxy possibly: https://adobe.ly/3rFvtLJ . Will use same text I have from Brittany Chang Website. Desired navbar: https://www.youtube.com/watch?v=HbBMp6yUXO0</p>
        </div>
    </div>
  )
}

export default Hero