module.exports = {
  /* ------------- MY BIOGRAPHY ------------- */
  bio: {
    name: 'Adrian Davila',
    headline: "I'm a CS student @UWaterloo.",
    paragraph: "I am studying Computer Science at the University of Waterloo working towards a specialization in Artificial Intelligence. Currently, I'm honing my skills in Python, Flask, Vue and TypeScript in preparation for my Junior Developer role at H2Analytics.",
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
  // Image size: 2874 x 1530
  projects: [
    {
      type: 'featured',
      title: 'Portfolio Website',
      category: "fullstack",
      description: "My personal portfolio website built with Next.JS and styled with SCSS. Complete with Hero, About, Experience, Projects, Research, Contact and more.",
      technologies: ["Next.JS", "JavaScript", "React", "SCSS", "JSX"],
      git: 'https://github.com/adriandavila/portfolio-website',
      live: 'www.localhost:3000',
      image: '/project-images/personal-portfolio-website.png',
    },
    {
      type: 'featured',
      title: 'MERN Productivity App',
      category: "fullstack",
      description: "CRUD productivity app built using React and Node with MongoDB as a database and using Passport to protect API routes behind Google OAuth2.0 Authentication.",
      technologies: ["MongoDB", "Express", "React", "Node.JS", "Passport", "OAuth2.0"],
      git: '',
      live: '',
      image: '/project-images/mernProductivityApp.png',
    },
    {
      type: '',
      title: '',
      category: "",
      description: "",
      technologies: [],
      git: '',
      live: '',
      image: '/project-images/',
    },
    {
      type: 'displayed',
      title: 'COVID Dashboard',
      category: 'fullstack',
      description: "Canadian COVID-19 dashboard built with React fetching case and vaccination data from the opencovid.ca API using ajax and displayed with ChartJS & Material UI.",
      technologies: ["React", "JavaScript", "MaterialUI", "Chart.JS"],
      git: '',
      live: '',
      image: '/project-images/...',
    },
    {
      type: 'displayed',
      title: 'Task Master',
      category: 'fullstack',
      description: "Todo Flask app employing RAKE keyword extraction to recommend YouTube resources that can help accomplish the task.",
      technologies: ["Python", "Flask", "Heroku", "SQLAlchemy"],
      git: 'fullstack',
      live: '',
      image: '',
    },
    {
      type: 'displayed',
      title: 'Sudoku',
      category: 'frontend',
      description: "Sudoku web game with HTML/CSS UI and a JavaScript backend including a recursive backtracking solving algorithm to solve the inputted boards.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Ajax"],
      git: '',
      live: '',
      image: '',
    },
    {
      type: 'displayed',
      title: 'OOP Banking System',
      category: 'backend',
      description: "Object-oriented sample banking transaction system in Java",
      technologies: ["Java"],
      git: '',
      live: '',
      image: '',
    },
    {
      type: '',
      title: '',
      category: '',
      description: "",
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
  // Image size: 2874 x 1530
  research: [
    {
      category: '',
      title: "",
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