// Portfolio data — all real content extracted from suryatomar.tech audit
// DO NOT invent information. If a field is [PLACEHOLDER], user must fill it.

export const siteConfig = {
  name: "Surya Tomar",
  firstName: "Surya",
  initials: "ST",
  title: "Full-Stack Developer",
  tagline: "I build fast, scalable web applications — from clean frontends to solid backends.",
  bio: [
    "I'm a full-stack developer focused on building products that are fast, well-engineered, and actually useful. I work across the entire stack — React and Next.js on the frontend, Node.js and Express on the backend, MongoDB and PostgreSQL for data.",
    "I care about performance, clean architecture, and shipping things that work. Currently exploring AI-integrated applications and scalable backend systems."
  ],
  philosophy: "I believe good software is invisible — users don't think about it, they just use it. The craft is in making something complex feel simple.",

  location: "India",
  available: true,

  email: "suryat6574@gmail.com",
  emailAlt: "suryatomar@zohomail.in",

  links: {
    github: "https://github.com/suryapratapsingh5674",
    linkedin: "https://linkedin.com/in/surya-pratap-singh-tomar",
    twitter: "https://x.com/suryat6574",
    blog: "https://devexplorer.hashnode.dev",
    resume: "https://drive.google.com/file/d/1msdO621xjhdbp5KANAlZGV61TpyDUtfG/view?usp=sharing", // [PLACEHOLDER] — replace with your actual resume PDF link
  },

  certifications: [
    {
      title: "Google Cloud Cloud Engineer Professional Certificate",
      issuer: "Google Cloud · Coursera",
      year: "2026",
      icon: "☁️",
      url: "https://www.coursera.org/account/accomplishments/specialization/VZ0TO238P60E"
    },
    {
      title: "Meta Database Engineer Professional Certificate",
      issuer: "Meta · Coursera",
      year: "2025",
      icon: "🗄️",
      url: "https://www.coursera.org/account/accomplishments/specialization/ISTNZTQ0IJ89"
    },
    {
      title: "Meta Back-End Developer Professional Certificate",
      issuer: "Meta · Coursera",
      year: "2025",
      icon: "⚙️",
      url: "https://www.coursera.org/account/accomplishments/specialization/JWW9AHSU2TGI"
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta · Coursera",
      year: "2024",
      icon: "🏆",
      url: "https://www.coursera.org/account/accomplishments/specialization/AY9RY5GKLLLU"
    }
  ]
};

export const projects = [
  {
    id: "01",
    name: "Resumind",
    tagline: "AI-powered resume analysis that gives real feedback.",
    description: "An intelligent resume analyzer that uses Google's Gemini API to parse, evaluate, and score resumes. Gives candidates actionable feedback on how to improve their CVs against job descriptions.",
    problem: "Job seekers waste hours tailoring resumes without objective feedback.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    icon: "🤖",
    image: "/resumind.png",
    featured: true,
    links: {
      github: "https://github.com/suryapratapsingh5674", // [PLACEHOLDER — add exact repo URL]
      demo: "https://ai-resume-analyzer-neon.vercel.app/" // [PLACEHOLDER — add live URL if deployed]
    }
  },
  {
    id: "02",
    name: "Foodly",
    tagline: "Role-based food discovery & management platform.",
    description: "A full-stack food management platform with role-based access for admins and users. Features menu management, image hosting via ImageKit, JWT auth, and a clean UX.",
    problem: "Restaurants needed a scalable way to manage digital menus with different access levels.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "ImageKit"],
    icon: "🍽️",
    featured: false,
    links: {
      github: "https://github.com/suryapratapsingh5674", // [PLACEHOLDER]
      demo: "https://foodly-frontend-brown.vercel.app/"
    }
  },
  {
    id: "03",
    name: "DevEvents",
    tagline: "SEO-optimized event discovery for developers.",
    description: "A Next.js event discovery platform for the developer community. Built with SEO-first architecture using server-side rendering and structured metadata, resulting in strong organic visibility.",
    problem: "Developer events are scattered — no single SEO-friendly, fast-loading hub.",
    tech: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
    icon: "🗓️",
    featured: false,
    links: {
      github: "https://github.com/suryapratapsingh5674", // [PLACEHOLDER]
      demo: "#"
    }
  },
  {
    id: "04",
    name: "Movie Info App",
    tagline: "Fast movie discovery powered by TMDB.",
    description: "A clean movie discovery application that fetches real-time data from TMDB API. Features search, filtering, and detailed movie pages.",
    problem: "Simple TMDB wrappers are usually slow and poorly designed.",
    tech: ["React", "Axios", "TMDB API", "Tailwind CSS"],
    icon: "🎬",
    featured: false,
    links: {
      github: "https://github.com/suryapratapsingh5674", // [PLACEHOLDER]
      demo: "https://movei-info-react.vercel.app/"
    }
  },
  {
    id: "05",
    name: "URL Shortener",
    tagline: "Link shortening with analytics.",
    description: "A backend-focused URL shortening platform with click analytics, custom slugs, and a clean dashboard for tracking link performance.",
    problem: "Most URL shorteners don't expose analytics or allow custom branding.",
    tech: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    icon: "🔗",
    featured: false,
    links: {
      github: "https://github.com/suryapratapsingh5674", // [PLACEHOLDER]
      demo: "https://url-chi-five.vercel.app/"
    }
  }
];

export const skills = {
  frontend: {
    label: "Frontend",
    icon: "◈",
    items: [
      "React.js", "Next.js", "TypeScript", "JavaScript ES6+",
      "HTML5 / CSS3", "Redux Toolkit", "GSAP", "Tailwind CSS", "Sass"
    ]
  },
  backend: {
    label: "Backend",
    icon: "◎",
    items: [
      "Node.js", "Express.js", "NestJS", "Hono",
      "Django", "Django REST Framework", "REST APIs", "JWT Auth"
    ]
  },
  database: {
    label: "Database",
    icon: "◉",
    items: [
      "MongoDB", "PostgreSQL", "MySQL", "Mongoose"
    ]
  },
  tools: {
    label: "Tools & Infra",
    icon: "◐",
    items: [
      "Git", "GitHub", "Docker", "Vercel", "Netlify",
      "Axios", "Gemini API", "TMDB API", "ImageKit"
    ]
  }
};

export const timeline = [
  {
    date: "Present",
    title: "Kodr Offline Bootcamp",
    subtitle: "Sheryians Coding School · Intensive Full-Stack Program",
    description: "Immersive offline full-stack development cohort focusing on deep JavaScript internals, React/Next.js architectures, scalable Node.js backend systems, and production engineering practices.",
    credentialUrl: "https://bootcamp.sheryians.com/",
    tags: ["Full-Stack", "JavaScript", "React", "Node.js", "System Design"]
  },
  {
    date: "June 2026",
    title: "Google Cloud Cloud Engineer Professional Certificate",
    subtitle: "Google Cloud · Coursera",
    description: "Preparing for and mastering enterprise cloud solutions, deploying scalable applications on GCP, container management with Google Kubernetes Engine, and IAM security.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/VZ0TO238P60E",
    previewImage: "https://coursera-certificate-images.s3.amazonaws.com/VZ0TO238P60E",
    tags: ["Google Cloud", "GCP", "Kubernetes", "Cloud Architecture"]
  },
  {
    date: "May 2025",
    title: "Meta Database Engineer Professional Certificate",
    subtitle: "Meta · Coursera",
    description: "Advanced database engineering covering relational database management (MySQL, PostgreSQL), data modeling, normalization, indexing, query optimization, and Python database connectivity.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/ISTNZTQ0IJ89",
    previewImage: "https://coursera-certificate-images.s3.amazonaws.com/ISTNZTQ0IJ89",
    tags: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization", "Python"]
  },
  {
    date: "March 2025",
    title: "Meta Back-End Developer Professional Certificate",
    subtitle: "Meta · Coursera",
    description: "In-depth backend architecture covering server-side programming with Python and Django, RESTful API design, database migrations, authentication, testing, and CI/CD deployment pipelines.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/JWW9AHSU2TGI",
    previewImage: "https://coursera-certificate-images.s3.amazonaws.com/JWW9AHSU2TGI",
    tags: ["Python", "Django", "REST APIs", "Backend Architecture", "Authentication"]
  },
  {
    date: "July 2024",
    title: "Meta Front-End Developer Professional Certificate",
    subtitle: "Meta · Coursera",
    description: "Rigorous front-end specialization covering React, state management, modern JavaScript (ES6+), responsive UI/UX principles, accessibility standards, and test-driven development.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/AY9RY5GKLLLU",
    previewImage: "https://coursera-certificate-images.s3.amazonaws.com/AY9RY5GKLLLU",
    tags: ["React", "JavaScript", "UI/UX", "Responsive Design", "TDD"]
  }
];

export const blogPosts = [
  {
    title: "Frontend Is Not Easy, Backend Is Not Hard — This Is the Lie",
    date: "Dec 15, 2025",
    url: "https://devexplorer.hashnode.dev"
  },
  {
    title: "Mastering Web Animations with GSAP: A Comprehensive Guide",
    date: "Feb 19, 2024",
    url: "https://devexplorer.hashnode.dev"
  },
  {
    title: "JS DOM Manipulation Best Practices – with Examples",
    date: "Jan 14, 2024",
    url: "https://devexplorer.hashnode.dev"
  }
];
