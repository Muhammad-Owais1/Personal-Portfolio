export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },

  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/meeting-companio.png',
    title: 'Meeting Companion',
    description:
      'Full meeting automation platform with transcripts, minutes of meeting, and action items generation. Features real-time audio processing and AI-powered summaries.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'AssemblyAI',
      'DeepSeek',
      'TypeScript',
      'Cloudinary',
    ],
    links: {
      preview: 'https://meeting-companion.vercel.app/',
      github: 'https://github.com/MuhammadFareed2/Meeting-Companion-Frontend',
    },
  },
  {
    image: '/images/brief-ai.png',
    title: 'Brief AI',
    description:
      'AI-powered tool that transforms messy creative briefs into structured, professional documents with intelligent clarifying questions. Includes dashboard and history tracking.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'OpenAI API',
      'Tailwind',
      'JWT',
    ],
    links: {
      preview: 'https://brief-ai-frontend.vercel.app/',
      github: 'https://github.com/MuhammadFareed2/Brief-AI',
    },
  },
  {
    image: '/images/ai-finance-application.png',
    title: 'AI Money & Budget App',
    description:
      'AI-powered finance app with multi-wallet tracking, smart budgets, and real-time insights. Includes chat-based transaction entry, auto-categorization, and OCR receipt scanning.',
    technologies: [
      'React Native',
      'NativeWind',
      'Node.js',
      'MongoDB',
      'Clerk',
      'OpenAI',
      'OCR',
    ],
    links: {
      preview: '',
      github: '',
    },
  },
  {
    image: '/images/ai-crm-dashboard.png',
    title: 'CRM Dashboard',
    description:
      'Comprehensive dashboard for tracking leads, customers, and sales metrics. Features real-time updates and interactive visualizations using Recharts.',
    technologies: [
      'React',
      'TypeScript',
      'LangChain',
      'LangGraph',
      'Node.js',
      'Express',
      'MongoDB',
      'Zustand',
      'Recharts',
    ],
    links: {
      preview: '',
      github: '',
    },
  },
] as const;

export const educationData = [
  {
    title: 'Data Science & Artificial Intelligence',
    company: 'SMIT',
    period: '2025 – Present',
    description:
      'Deepening expertise in AI/ML pipelines, handling complex datasets with Pandas/NumPy, and building predictive models. Focusing on practical applications of GenAI and LLMs.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'GenAI'],
  },
  {
    title: 'Web & App Development Diploma',
    company: 'SMIT',
    description:
      'Intensive 1-year bootcamp mastering the MERN stack. Built multiple production-grade applications, learned agile methodologies, and collaborated on team projects.',
    period: '2024',
    technologies: [
      'MERN Stack',
      'TypeScript',
      'Next.js',
      'NativeWind',
      'PostgreSQL',
    ],
  }
] as const;

export const experienceData = [
  {
    title: 'AI Developer',
    company: 'AI Freelancer',
    description:
      'Built AI chatbot, AI agent, AI automation, AI tools, AI applications & RAG systems.',
    period: '2024 – Present',
    technologies: [
      'Python', 'LangChain', 'LangGraph', 'OpenAI', 'DeepSeek', 'Google Gemini', 'Hugging Face', 'n8n'
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Full-Stack Freelancer',
    description:
      'Built and deployed full-stack applications using modern frameworks. Integrated third-party APIs and delivered production-ready features with scalable architecture and CI/CD pipelines.',
    period: '2024 – Present',
    technologies: [
      // Frontend
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript ES6',
      'TypeScript',
      'React',
      'Next.js',
      'Angular',
      'Redux',

      // Backend
      'Node.js',
      'Express.js',
      'REST API',

      // Realtime / Integrations
      'Socket.IO',
      'Firebase',
      'Supabase',
      'Stripe',
      'OpenAI',

      // Databases
      'MongoDB',
      'PostgreSQL',

      // DevOps (Freelance only)
      'Docker',
      'GitHub Actions (CI/CD)',

      // Mobile
      'React Native',
    ],
  },

] as const;

export const skillsData = [
  {
    category: 'AI / LLM Tools',
    skills: ['OpenAI API', 'LangChain', 'LangGraph', 'Prompt Engineering', 'Claude'],
  },
  {
    category: 'Automation & Tools',
    skills: [
      'n8n',
      'Cursor',
      'Antigravity',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSockets (Socket.io)',
      'FastAPI',
      'Python',
    ],
  },
  {
    category: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'Redux',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    category: 'Mobile Development',
    skills: ['React Native', 'NativeWind', 'Expo'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'Pincone', 'Firebase (Firestore)', 'Appwrite'],
  },
  {
    category: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn (basics)'],
  },
  {
    category: 'DevOps',
    skills: ['Git',
      'GitHub Actions',
      'CI/CD',
      'Docker',
      'Kubernetes', 'AWS', 'Azure', 'Vercel', 'Netlify'],
  },
] as const;
