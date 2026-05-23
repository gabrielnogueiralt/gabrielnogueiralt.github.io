export type FocusArea = {
  title: string
  description: string
}

export type ExperienceItem = {
  company: string
  role: string
  start: string
  end: string
  location: string
  description?: string
  stack?: string[]
  current?: boolean
}

export type EducationItem = {
  institution: string
  degree: string
  period: string
}

export type SkillGroup = {
  name: string
  items: string[]
}

export const profile = {
  name: 'Gabriel Nogueira',
  title: 'Software Engineer (MSc)',
  tagline: 'Scala · Vue · React · LLM · Data Science',
  avatar: '/profile.png',
  avatarAlt: 'Portrait of Gabriel Nogueira',
  location: 'Recife, Pernambuco, Brazil',
  email: 'gabrielnogueiraleite@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gabrielnogueiralt',
  summary:
    "Software Engineer with a Master's in Computer Science (MSc), specializing in scalable web systems and AI-powered software engineering. I work at the intersection of modern frontend architecture, high-performance backend systems, and LLM-driven software solutions, building robust, production-ready applications.",
  focusAreas: [
    {
      title: 'Frontend Systems',
      description:
        'I specialize in Vue.js, designing maintainable component architectures and high-performance interfaces for complex applications. I also maintain proficiency in React, allowing flexibility across modern frontend stacks.',
    },
    {
      title: 'Backend Systems',
      description:
        'I focus on Scala and functional programming paradigms to build resilient, concurrent backend services, alongside Python for data-driven and AI-integrated applications.',
    },
    {
      title: 'LLM & AI Engineering',
      description:
        'I work with LLM-powered systems to enhance automation, specification generation, and developer workflows. My research background in LLMs and Formal Verification strengthens my ability to design reliable and verifiable systems.',
    },
    {
      title: 'Infrastructure & Delivery',
      description:
        'I apply DevOps practices using Docker and AWS, contributing across the full software lifecycle — from requirements and system design to deployment and production monitoring.',
    },
  ] satisfies FocusArea[],
  topSkills: ['Scala', 'Data Science', 'Blockchain'],
  skillGroups: [
    {
      name: 'Languages',
      items: ['Scala', 'Python', 'JavaScript', 'TypeScript', 'Java'],
    },
    {
      name: 'Frontend',
      items: ['Vue.js', 'React', 'Angular', 'HTML', 'CSS'],
    },
    {
      name: 'Backend',
      items: ['Scala', 'Python', 'Node.js', 'Django', 'Flask'],
    },
    {
      name: 'AI & Data',
      items: ['LLMs', 'NLP', 'Formal Verification', 'Data Science'],
    },
    {
      name: 'Infrastructure',
      items: ['Docker', 'AWS', 'Terraform', 'Firebase', 'Postgres'],
    },
  ] satisfies SkillGroup[],
  interests: [
    'Scalable frontend architecture with Vue.js',
    'Functional, high-performance backend systems with Scala',
    'AI-assisted software engineering',
    'LLM applications in development workflows',
  ],
  experience: [
    {
      company: 'TXODDS (UK) Limited',
      role: 'Software Engineer',
      start: 'November 2024',
      end: 'Present',
      location: 'London Area, United Kingdom',
      description:
        'Building reliable Scala APIs, shaping system architecture, and delivering frontend applications for production sports-data products.',
      current: true,
    },
    {
      company: 'University of Oxford',
      role: 'Academic Visitor',
      start: 'July 2024',
      end: 'November 2024',
      location: 'Oxfordshire, England, United Kingdom',
      description:
        'My work focuses on blockchain, smart contracts, formal methods, formal verification, natural language processing (NLP), and large language models (LLM). I develop strategies and frameworks to extract and verify formal specifications from natural language descriptions, aiming to enhance the reliability and security of blockchain applications.',
    },
    {
      company: 'Vigil',
      role: 'Software Engineer',
      start: 'August 2022',
      end: 'July 2024',
      location: 'London, England, United Kingdom',
      description:
        'Worked on the development, maintenance, and scalability of web applications.',
    },
    {
      company: 'Brainy Resolution',
      role: 'Software Developer',
      start: 'December 2020',
      end: 'September 2022',
      location: 'Recife, Pernambuco, Brazil',
      description:
        'Maintained the products, created new features and improved existing ones.',
      stack: ['Vue.js', 'Django', 'Firebase', 'React', 'Node.js', 'Docker'],
    },
    {
      company: 'Brainy Resolution',
      role: 'Software Developer',
      start: 'June 2020',
      end: 'November 2020',
      location: 'Recife, Pernambuco, Brazil',
      description:
        'Developed Dissertio, a spelling, grammar and syntactic checker that uses resources built with Artificial Intelligence.',
      stack: ['Vue.js', 'Firebase', 'AWS'],
    },
    {
      company: 'Neurotech',
      role: 'Software Engineer',
      start: 'December 2021',
      end: 'August 2022',
      location: 'Recife, Pernambuco, Brazil',
      description:
        "Developed improvements to the automation of the company's data lake crawler system. Designed and implemented a multi-platform credential management API for new employees.",
      stack: ['Python', 'AWS', 'Docker', 'Terraform'],
    },
    {
      company: 'Viitra Inovações',
      role: 'Software Developer',
      start: 'December 2020',
      end: 'November 2021',
      location: 'Recife, Pernambuco, Brazil',
      description:
        'Innovation project with the National Council of Justice (CNJ). The project involved research in process mining, study of existing tools and design and development of a process mining tool with a focus on the Brazilian judiciary.',
      stack: ['Angular', 'Flask', 'Postgres', 'Docker'],
    },
  ] satisfies ExperienceItem[],
  academic: [
    {
      company: 'PET-Informática',
      role: 'Member',
      start: 'May 2019',
      end: 'April 2023',
      location: 'Recife, Pernambuco, Brazil',
      description:
        'Students from the Centro de Informática at the Federal University of Pernambuco involved in teaching, research and extension activities, seeking to improve the undergraduate experience for the entire academic community.',
    },
    {
      company: 'Centro de Informática UFPE',
      role: 'Teacher Assistant — Introduction to Computer Science',
      start: 'June 2019',
      end: 'November 2021',
      location: 'Recife, Pernambuco, Brazil',
      description:
        'Formulated tests about computer history and provided lectures on JavaScript, HTML, CSS, Git and LaTeX for over 50 students across 2 classes of first-semester computer science undergraduates.',
    },
    {
      company: 'Centro de Informática UFPE',
      role: 'Teacher Assistant — Introduction to Programming',
      start: 'August 2019',
      end: 'December 2020',
      location: 'Recife, Pernambuco, Brazil',
      description:
        'Provided lectures and formulated tests for over 60 students on Java and Object Oriented Programming, helping students with their first contact with programming languages.',
    },
  ] satisfies ExperienceItem[],
  education: [
    {
      institution: 'Centro de Informática UFPE',
      degree: "Master's degree, Computer Science",
      period: 'August 2023 – August 2025',
    },
    {
      institution: 'Centro de Informática UFPE',
      degree: "Bachelor's degree, Computer Science",
      period: '2019 – May 2023',
    },
    {
      institution:
        'Instituto Federal de Educação, Ciência e Tecnologia do Sertão Pernambucano',
      degree: 'Technical, Computer Science',
      period: '2015 – December 2018',
    },
  ] satisfies EducationItem[],
}

export type Profile = typeof profile
