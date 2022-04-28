import Technologies from "./Technologies"

const About = () => {
  return (
    <div className="section-about">
      <h1 className="section-title"><span aria-hidden="true">01.</span>About Me</h1>
      <div className="content">
        <div className="about-me">
          <p>Hello! My name is Adrian and I enjoy creating things that live on the internet. My interest in development started back in 2017 when I decided to use VBA to make some excel macros for a project I was working on. From there, I learned Python and Java during high school to do some web scraping, data analysis and make some cool projects with Tkinter. More recently, I've learned C, the MERN stack and other fullstack technologies and frameworks to branch into software development.</p>

          <p>Fast-forward to today, and I’ve had the privilege of working at a start-up, and I've joined a human computer interaction research group led by Dr. Edith Law examining how positive technology can be used to enact meaningful change to help save our climate. On my own time, I've also been working on gaining a strong mathematical background for machine learning through courses and textbooks, as well as applying that math using Tensorflow for various computer vision, natural language processing, and time series ML projects.</p>

          <p>On the right you'll see a few of the technologies I've been working with recently.</p>
        </div>
        <div className="recent-technologies">

          <Technologies />
        </div>
      </div>
    </div>
  )
}

export default About