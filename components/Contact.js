import { email, resume, contact } from "../config"

const Contact = () => {
  return (
    <div className="section-contact">
        <h1 className="contact-title">05. What's Next?</h1>
        <h2>Get In Touch</h2>
        <p>{contact.message}</p>

        <div className="cta">
          <a href={resume} className="green-button">View my resume</a>
          <a href={"mailto:"+email} className="green-button">Send me an email</a>
        </div>
    </div>
  )
}

export default Contact