module.exports = {
  /* ------------- MY BIOGRAPHY ------------- */
  bio: {
    name: 'Adrian Davila',
    headline: "I'm a CS student @UWaterloo.",
    paragraph: "Note: I want to create for myself a similar background as this: https://gridcritters.com/ - (I also have a screenshot on my desktop). Can also use this galaxy possibly: https://adobe.ly/3rFvtLJ . Will use same text I have from Brittany Chang Website. Desired navbar: https://www.youtube.com/watch?v=HbBMp6yUXO0",
  },

  /* ------------- ABOUT ME ------------- */
  about: {
    desc: "",
    technologies: [],
  },

  /* ------------- MY SOCIALS ------------- */
  email: 'a4davila@uwaterloo.ca',
  resume: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/adriandavila',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/adriandavila1/',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/adrian.davila_/',
    },
  ],

  /* ------------- MY EXPERIENCE ------------- */
  experience: [
    {
      company: 'H2Analytics',
      position: 'Junior Developer',
      startDate: 'May 2022',
      endDate: 'Present',
      bullets: ["Write modern, performant, maintainable code for a diverse array of client and internal projects",
                "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"],
    },
    {
      company: 'SpaceX',
      position: 'Software Engineer',
      startDate: 'May',
      endDate: 'August 2024',
      bullets: ["Developed and shipped highly interactive web applications for Apple Music using Ember.js",
                "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
                "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
                "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps"],
    },
    {
      company: 'Apple',
      position: 'Machine Learning Intern',
      startDate: 'August 2017',
      endDate: 'March 2019',
      bullets: [],
    },  
  ],

  /* ------------- MY PROJECTS ------------- */
  // Types:
  //   - featured (will display with big image and desc)
  //   - displayed (will display under "other projects")
  //   - archived (will display in the archive)
  // Categories:
  //   - fullstack
  //   - frontend
  //   - backend
  //   - data-science
  //   - machine-learning
  projects: [
    {
      type: 'featured',
      title: 'Portfolio Website',
      category: "fullstack",
      description: "My personal portfolio website built with Next.JS and styled with SCSS. Complete with Hero, About, Experience, Projects, Research, Contact and more.",
      technologies: ["Next.JS", "SCSS", "React", "Node", "JSX"],
      git: 'https://github.com/adriandavila/portfolio-website',
      live: 'www.localhost:3000',
      image: '/project-images/sample-project-image-1.png',
    },
    {
      type: 'featured',
      title: 'MERN Productivity App',
      category: "fullstack",
      description: "CRUD productivity app built using React and Node with MongoDB as a database and using Passport to protect API routes behind Google OAuth2.0 Authentication",
      technologies: ["React.JS", "CSS"],
      git: '',
      live: '',
      image: '/project-images/sample-project-image-1.png',
    },
    {
      type: 'featured',
      title: 'Feature Project 3',
      category: "machine-learning",
      description: "desc",
      technologies: ["Tensorflow", "Python"],
      git: '',
      live: '',
      image: '/project-images/sample-project-image-1.png',
    },
    {
      type: 'displayed',
      title: 'displayed project 1',
      category: 'machine-learning',
      description: "disp proj 1 desc",
      technologies: [],
      git: '',
      live: '',
      image: '/project-images/...',
    },
    {
      type: 'displayed',
      title: 'displayed project 2',
      category: 'fullstack',
      description: "disp proj 2 desc",
      technologies: [],
      git: 'fullstack',
      live: '',
      image: '/project-images/...',
    },
    {
      type: 'displayed',
      title: 'displayed project 3',
      category: 'frontend',
      description: "disp proj 3 desc",
      technologies: [],
      git: '',
      live: '',
      image: '/project-images/...',
    },
    {
      type: 'displayed',
      title: 'displayed project 4',
      category: 'backend',
      description: "disp proj 4 desc",
      technologies: [],
      git: '',
      live: '',
      image: '/project-images/...',
    },
    {
      type: 'displayed',
      title: 'displayed project 5',
      category: 'data-science',
      description: "disp proj 5 desc",
      technologies: [],
      git: '',
      live: '',
      image: '/project-images/...',
    },
    {
      type: 'displayed',
      title: 'displayed project 6',
      category: 'machine-learning',
      description: "disp proj 6 desc",
      technologies: [],
      git: '',
      live: '',
      image: '/project-images/...',
    },
  ],

  /* ------------- MY RESEARCH ------------- */
  // Types:
  //   - featured (will display with image and desc)
  //   - archived (will display in the archive)
  research: [
    {
      category: 'featured',
      title: "Effects of an Adaptive Robot Encouraging Teamwork on Students' Learning",
      authors: "P. Ravari, K. J. Lee, E. Law, and D. Kulic.",
      date: "May 2022",
      desc: "Accepted for the 30th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN'21).",
      abstract: "",
      pdf: '',
      doi: '',
      image: '/research-images/sample-research-image-1.png',
    },
    {
      category: 'archived',
      title: "paper 3",
      authors: "",
      date: "",
      desc: "",
      abstract: "",
      pdf: '',
      doi: '',
      image: '/research-images/...',
    },
  ],

  /* ------------- CONTACT ------------- */
  contact: {
    message: "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
  },
}