module.exports = {
  /* ------------- MY BIOGRAPHY ------------- */
  bio: {
    name: 'Adrian Davila',
    headline: "I'm a CS student @UWaterloo.",
    paragraph: "Note: I want to create for myself a similar background as this: https://gridcritters.com/ - (I also have a screenshot on my desktop). Can also use this galaxy possibly: https://adobe.ly/3rFvtLJ . Will use same text I have from Brittany Chang Website. Desired navbar: https://www.youtube.com/watch?v=HbBMp6yUXO0",
  },

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
  projects: [
    {
      type: 'featured',
      title: 'Portfolio Website',
      description: "portfolio website with Next.JS, SCSS",
      technologies: ["Next.JS", "SCSS", "React", "Node"],
      git: 'https://github.com/adriandavila/portfolio-website',
      live: 'www.localhost:3000',
      image: '/project-images/...',
    },
    {
      type: 'featured',
      title: '',
      description: "",
      technologies: [],
      git: '',
      live: '',
      image: '/project-images/...',
    },
    {
      type: 'featured',
      title: '',
      description: "",
      technologies: [],
      git: '',
      live: '',
      image: '/project-images/...',
    },
    {
      type: 'featured',
      title: '',
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
  research: [
    {
      type: 'featured',
      title: "",
      authors: [],
      date: "",
      desc: "",
      pdf: '',
      doi: '',
      image: '/research-images/...',
    },
  ],

  /* ------------- MY SOCIALS ------------- */
  email: 'a4davila@uwaterloo.ca',
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
}