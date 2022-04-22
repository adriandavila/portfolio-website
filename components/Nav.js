import { useState } from 'react'


// Nav component

const Nav = () => {
    const [navButtonVisible, setNavButtonVisible] = useState(false);
    const handleClick = () => {
        setNavButtonVisible(!navButtonVisible);
        console.log(navButtonVisible);
    }

    const [aboutSelected, setAboutSelected] = useState(false);
    const [experienceSelected, setExperienceSelected] = useState(false);
    const [projectsSelected, setProjectsSelected] = useState(false);
    const [researchSelected, setResearchSelected] = useState(false);
    const [contactSelected, setContactSelected] = useState(false);

    const resetAllSelected = () => {
        setAboutSelected(false);
        setExperienceSelected(false);
        setProjectsSelected(false);
        setResearchSelected(false);
        setContactSelected(false);
    }
    const handleSelectAbout = () => {
        resetAllSelected();
        setAboutSelected(true);
    }
    const handleSelectExperience = () => {
        resetAllSelected();
        setExperienceSelected(true);
    }
    const handleSelectProjects = () => {
        resetAllSelected();
        setProjectsSelected(true);
    }
    const handleSelectResearch = () => {
        resetAllSelected();
        setResearchSelected(true);
    }
    const handleSelectContact = () => {
        resetAllSelected();
        setContactSelected(true);
    }

  return (
    <div className="primary-header">
        <div>
            <img src="ADlogo.png" alt="Adrian Davila Logo" className="logo"/>
        </div>

        <button className="mobile-nav-toggle" onClick={handleClick} aria-controls="primary-navigation" aria-expanded={navButtonVisible}>
            <span className="sr-only">Menu</span>
        </button>

        <nav>
            <ul data-visible={navButtonVisible} id="primary-navigation" className="primary-navigation underline-indicators flex">
                <li aria-selected={aboutSelected}>
                    <a href="/#about" onClick={handleSelectAbout} className="letter-spacing-2">
                        <span aria-hidden="true">01.</span>About
                    </a>
                </li>
                <li aria-selected={experienceSelected}>
                    <a href="/#experience" onClick={handleSelectExperience} className="letter-spacing-2">
                        <span aria-hidden="true">02.</span>Experience
                    </a>
                </li>
                <li aria-selected={projectsSelected}>
                    <a href="/#projects" onClick={handleSelectProjects} className="letter-spacing-2">
                        <span aria-hidden="true">03.</span>Projects
                    </a>
                </li>
                <li aria-selected={researchSelected}>
                    <a href="/#research" onClick={handleSelectResearch} className="letter-spacing-2">
                        <span aria-hidden="true">04.</span>Research
                    </a>
                </li>
                <li aria-selected={contactSelected}>
                    <a href="/#contacct" onClick={handleSelectContact} className="letter-spacing-2">
                        <span aria-hidden="true">05.</span>Contact
                    </a>
                </li>
                <li className="special">
                    <a className="green-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}



export default Nav