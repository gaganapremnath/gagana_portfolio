module.exports = {
  siteTitle: 'Gagana Premnath | Software Developer | Graduate Student',
  siteDescription:
    'Gagana Premnath is a Software Developer Intern at Greif, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Gagana Premnath, Gagana, Premnath, GaganaPremnath28, software developer, software engineer, web developer, java developer, masters, student, computer science, syracuse, university, greif ',
  siteUrl: 'https://GaganaPremnath28.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Gagana Premnath',
  location: 'New York, USA',
  email: 'premnathgagana95@gmail.com',
  github: 'https://github.com/gaganapremnath',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/gaganapremnath',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gagana-premnath-60227695',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gagana_premnath/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/1128Gagana',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    // {
    //   name: 'Projects',
    //   url: '/#projects',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
    blue: '#bee7f8'
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
