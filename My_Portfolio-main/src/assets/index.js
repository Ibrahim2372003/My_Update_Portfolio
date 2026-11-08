
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import LinkedinBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon'
import MailLineIcon from 'remixicon-react/MailLineIcon'

/* eslint-disable react/jsx-key */

// Hero
// Keep the icon and destination together so each social link opens the right place.
export const heroIcons = [
  { icon: <GithubLineIcon />, href: 'https://github.com/ibrahim237123456-code', label: 'GitHub' },
  { icon: <LinkedinBoxLineIcon />, href: 'https://linkedin.com/in/ibrahim-mohamed-a4b531164/', label: 'LinkedIn' },
  { icon: <MailLineIcon />, href: 'mailto:IbrahimMohammedIbrahim2372003@gmail.com' },
]

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
  {
    title: 'Public Repositories',
    amount: 15,
    icon: <GithubFillIcon />,
  },
  {
    title: 'Featured Projects',
    amount: 4,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Client Testimonials',
    amount: 0,
    icon: <GroupLineIcon />,
  },
  {
    title: 'Awards',
    amount: 0,
    icon: <AwardFillIcon />,
  },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
  "Hi, I'm Ibrahim Mohammed Ibrahim, a Junior Full Stack Developer with a strong interest in backend development and building practical web applications. I work with JavaScript, TypeScript, React, Next.js, Node.js, and Express.js, and I have experience with databases, REST APIs, authentication, and modern development tools. I enjoy turning ideas into functional applications, improving code quality, and continuously developing my software engineering skills."

// End of About Me

// Experience
export const experienceData = [
  {
    year: 1,
    title: 'Starting My Programming Journey',
    education:
      'Started learning programming in late 2023 while studying at the Faculty of Commerce, Helwan University. Focused on building a strong foundation in web development and programming fundamentals.',
    experience: [
      'Learned HTML, CSS, JavaScript, and the fundamentals of building responsive websites.',
      'Started creating personal projects and exploring frontend development tools.',
    ],
  },
  {
    year: 2,
    title: 'Frontend Development',
    education:
      'Continued learning modern frontend development, including React, TypeScript, state management, and component-based application architecture.',
    experience: [
      'Worked with React, Next.js, Tailwind CSS, and related frontend tools.',
      'Practiced building interactive interfaces and integrating frontend applications with APIs.',
    ],
  },
  {
    year: 3,
    title: 'Backend Development',
    education:
      'Expanded into backend development with Node.js and Express.js, while studying backend architecture, databases, authentication, and API development.',
    experience: [
      'Worked with REST APIs, middleware, authentication, and server-side application logic.',
      'Explored MongoDB, PostgreSQL, Prisma, and NestJS through learning and project work.',
    ],
  },
  {
    year: 4,
    title: 'Building Real-World Projects',
    education:
      'Continued strengthening full-stack development skills through personal projects, practical training, testing, and exploring AI-powered applications.',
    experience: [
      'Built projects involving AI integrations, workflow automation, job application management, and lead capture.',
      'Continuously improving software design, testing practices, documentation, and deployment workflows.',
    ],
  },
]

// Skills
export const skillsData = [
  {
    name: 'HTML',
    icon: '/skills/html.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png',
  },
  {
    name: 'TypeScript',
    icon: '/skills/ts.png',
  },
  {
    name: 'React',
    icon: '/skills/react.png',
  },
  {
    name: 'Next.js',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'Tailwind CSS',
    icon: '/skills/tailwind.png',
  },
  {
    name: 'Node.js',
    icon: '/skills/NodeJs.webp',
  },
  {
    name: 'Express.js',
    icon: null,
  },
  {
    name: 'NestJS',
    icon: '/skills/NestJs.webp',
  },
  {
    name: 'MongoDB',
    icon: '/skills/mongodb.png',
  },
  {
    name: 'PostgreSQL',
    icon: '/skills/Postgress SQL.webp',
  },
  {
    name: 'Prisma',
    icon: null,
  },
  {
    name: 'GitHub',
    icon: '/skills/github.png',
  },
  {
    name: 'Vite',
    icon: '/skills/vite.png',
  },
  {
    name: 'Framer Motion',
    icon: '/skills/framer.png',
  },
  {
  {
    name: 'AI Integration',
    icon: '/skills/ai.png',
  },
]

// Reviews
// No fabricated testimonials.
// Keep the export so existing imports do not break.
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = []

// Projects
// The url field currently points to project preview images.
// Replace these image files with screenshots of the actual projects.
export const projectsData = [
  {
    name: 'AI Audit Chat',
    desc: 'An AI-powered SEO auditing application featuring a conversational interface, AI integration, interactive WebGL visuals, and automated testing. Built with Next.js, TypeScript, and the Vercel AI SDK.',
    url: '/projects/image-1.jpg',
    tech: ['NextJS', 'TypeScript', 'AI', 'WebGL', 'Vitest'],
  },
  {
    name: 'Job Hunt Command Center',
    desc: 'A full-stack job search management application built to organize job applications and support AI-powered resume tailoring. The project uses React, Express, Prisma, and PostgreSQL.',
    url: '/projects/image-2.jpg',
    tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'Prisma', 'PostgreSQL', 'AI'],
  },
  {
    name: 'AI Workflow Builder',
    desc: 'A visual workflow automation project exploring node-based workflow design and event-driven execution using React Flow and Inngest.',
    url: '/projects/image-3.jpg',
    tech: ['ReactJS', 'ReactFlow', 'Inngest'],
  },
  {
    name: 'Lead Capture Platform',
    desc: 'A lead capture application designed to collect and manage lead information, with a focus on reliable functionality and automated testing. The project uses SQLite and includes a test suite with 55 passing tests.',
    url: '/projects/image-4.jpg',
    tech: ['NodeJS', 'SQLite', 'Testing'],
  },
]

export const projectsButton = [
  'All',
  'NextJS',
  'ReactJS',
  'NodeJS',
  'ExpressJS',
  'TypeScript',
  'Prisma',
  'PostgreSQL',
  'AI',
  'WebGL',
  'Vitest',
  'ReactFlow',
  'Inngest',
  'SQLite',
  'Testing',
]

// Pricing
import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Q & A
export const questions = [
  {
    question: 'What kind of projects can you build?',
    answer:
      'I can build responsive websites, full-stack web applications, REST APIs, and backend services. My main interests include backend development, database integration, authentication, and AI-powered web applications. The final scope depends on the project requirements.',
  },
  {
    question: 'Which technologies do you work with?',
    answer:
      'I primarily work with JavaScript, TypeScript, React, Next.js, Node.js, and Express.js. I also have experience with MongoDB, PostgreSQL, Prisma, REST APIs, and authentication. I continue to improve my skills through practical projects and ongoing learning.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'The timeline depends on the scope, complexity, and required features. A smaller website may take a few days, while a full-stack application with authentication, database integration, and external APIs may take several weeks. I prefer to clarify the requirements before estimating the timeline.',
  },
  {
    question: 'How do we communicate during a project?',
    answer:
      'I value clear communication, regular progress updates, and early feedback. We can discuss requirements, review implemented features, and address questions through email, messaging, or online meetings, depending on what works best for the project.',
  },
  {
    question: 'What information do you need to get started?',
    answer:
      'I need an overview of your idea, its main goals, the intended users, and the features you want. Existing designs, examples, or technical requirements are helpful but not essential. We can clarify the details together before development begins.',
  },
  {
    question: 'Can you work on both frontend and backend?',
    answer:
      'Yes. My development focus covers both sides of web applications. I build user interfaces with React and Next.js and work on backend functionality with Node.js and Express.js, including API development, authentication, business logic, and database integration.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Pricing depends on the project scope, complexity, integrations, and estimated development effort. I prefer to understand the requirements first so that the proposed cost reflects the actual work involved rather than relying on a fixed price for every project.',
  },
  {
    question: 'Can you integrate AI features into a web application?',
    answer:
      'I have worked on AI-powered web projects and explored integrations with AI APIs and the Vercel AI SDK. Depending on the requirements, I can help develop application features that connect a user interface to AI services and present their responses in a useful way.',
  },
  {
    question: 'Will the application work on mobile devices?',
    answer:
      'I aim to build responsive interfaces that adapt to mobile phones, tablets, laptops, and desktop screens. Layout, usability, and consistency across screen sizes are important considerations during frontend development.',
  },
  {
    question: 'Can you maintain or improve an existing project?',
    answer:
      'I can review an existing codebase, help understand its structure, implement agreed changes, fix issues, and improve selected parts of the application. The best approach depends on the current architecture, code quality, and project requirements.',
  },
  {
    question: 'Do you write tests for your applications?',
    answer:
      'I have experience working with automated testing and test-driven verification in personal projects. The testing approach depends on the application, but I value testing because it helps catch regressions and makes changes safer.',
  },
  {
    question: 'Are you open to job opportunities and collaborations?',
    answer:
      'Yes. I am open to suitable junior software development roles, internships, freelance opportunities, and collaborations. If you are interested in my work or have an opportunity that matches my skills, feel free to contact me through my professional links.',
  },
]

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'

export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'My Journey',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: 'questions',
    name: 'FAQ',
    icon: <QuestionAnswerLineIcon />,
  },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
