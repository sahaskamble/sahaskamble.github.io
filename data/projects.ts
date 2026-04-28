// Centralized project data for the portfolio
// This eliminates code duplication between projects.tsx and project/[slug]/page.tsx

export interface Project {
  slug: string
  title: string
  description: string
  year: string
  technologies: string[]
  features: string[]
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  xpReward: number
  questType: "Tutorial Quest" | "Main Quest" | "Side Quest"
  icon: string // Icon name from lucide-react
  difficultyColor: string
  achievements: string[]
  challenges: string[]
  detailedDescription: string
  technicalDetails?: string[]
  keyLearnings?: string[]
}

export const projects: Project[] = [
  {
    slug: "study-wings-platform",
    title: "Study Wings Platform",
    description:
      "Educational platform for students to apply to universities worldwide with frontend development and system design.",
    year: "2022",
    technologies: ["React.js", "Frontend Development", "System Design", "UI/UX"],
    features: ["University applications", "Student portal", "Application tracking", "Document management"],
    category: "Web Application",
    difficulty: "Beginner",
    xpReward: 600,
    questType: "Tutorial Quest",
    icon: "Star",
    difficultyColor: "text-green-500",
    achievements: ["First Steps", "UI Designer", "System Thinker"],
    challenges: [
      "Learning React fundamentals",
      "Understanding component architecture",
      "Implementing responsive design",
    ],
    detailedDescription:
      "My first major project that introduced me to the world of React development. Built a comprehensive platform where students could browse universities, submit applications, and track their progress. This project taught me the fundamentals of component-based architecture and responsive design principles.",
    technicalDetails: [
      "Built with React.js using functional components and hooks",
      "Implemented responsive design with CSS Grid and Flexbox",
      "Created reusable UI components for consistent design",
      "Integrated with university APIs for real-time data",
    ],
    keyLearnings: [
      "Component-based architecture principles",
      "State management with React hooks",
      "Responsive web design best practices",
      "API integration and data handling",
    ],
  },
  {
    slug: "eatofy-pos-system",
    title: "Eatofy POS System",
    description:
      "Comprehensive restaurant billing and management system with inventory tracking and third-party integrations.",
    year: "2022-2023",
    technologies: ["React.js", "Node.js", "Inventory Management", "API Integration"],
    features: ["Fast billing system", "Inventory management", "Swiggy/Zomato integration", "Staff management"],
    category: "Web Application",
    difficulty: "Advanced",
    xpReward: 1000,
    questType: "Main Quest",
    icon: "Zap",
    difficultyColor: "text-orange-500",
    achievements: ["POS Master", "Integration Expert", "Inventory Specialist"],
    challenges: [
      "Real-time inventory synchronization",
      "Third-party API integration",
      "Complex billing calculations",
    ],
    detailedDescription:
      "A full-featured restaurant management system that handles everything from order taking to inventory management. Integrated with major food delivery platforms and includes advanced features like staff performance tracking and automated low-stock alerts.",
    technicalDetails: [
      "Full-stack application with React.js frontend and Node.js backend",
      "Real-time inventory tracking with WebSocket connections",
      "Integration with Swiggy and Zomato APIs for order synchronization",
      "Advanced reporting system with data visualization",
    ],
    keyLearnings: [
      "Full-stack development with React and Node.js",
      "Real-time data synchronization techniques",
      "Third-party API integration strategies",
      "Complex business logic implementation",
    ],
  },
  {
    slug: "bbng-business-network",
    title: "BBNG Business Network",
    description:
      "Cross-platform mobile app replicating web platform features with meeting scheduler and user dashboard.",
    year: "2022-2023",
    technologies: ["React Native", "Expo", "PocketBase", "Cross-platform"],
    features: ["User dashboard", "Meeting scheduler", "Response system", "Feature parity"],
    category: "Mobile Application",
    difficulty: "Intermediate",
    xpReward: 800,
    questType: "Main Quest",
    icon: "Shield",
    difficultyColor: "text-yellow-500",
    achievements: ["Business Logic", "Scheduler Pro", "Feature Replicator"],
    challenges: ["Cross-platform compatibility", "Complex scheduling logic", "Real-time synchronization"],
    detailedDescription:
      "Developed a mobile companion app for BBNGlobal's web platform, ensuring feature parity while optimizing for mobile user experience. Implemented complex meeting scheduling algorithms and real-time notification systems.",
  },
  {
    slug: "crossplay-management",
    title: "CrossPlay Management",
    description: "Gaming café management system with device tracking and session management for PlayStation and PCs.",
    year: "2023-2024",
    technologies: ["React Native", "Expo", "PocketBase", "Timer System"],
    features: ["Multi-device support", "Session alerts", "Customer management", "Real-time monitoring"],
    category: "Mobile Application",
    difficulty: "Intermediate",
    xpReward: 900,
    questType: "Side Quest",
    icon: "Gamepad2",
    difficultyColor: "text-yellow-500",
    achievements: ["Cross-Platform Pro", "Session Manager", "Alert System"],
    challenges: ["Real-time session tracking", "Multi-device synchronization", "Background timer management"],
    detailedDescription:
      "Built a comprehensive gaming café management solution that tracks multiple gaming devices simultaneously. Features include real-time session monitoring, automated billing, and push notifications for session management.",
  },
  {
    slug: "game-ground-mobile",
    title: "Game-Ground Mobile",
    description: "Mobile app for gaming cafés to manage console and PC sessions with smart timer system.",
    year: "2024-2025",
    technologies: ["React Native", "Expo", "PocketBase", "Push Notifications"],
    features: ["Device management", "Session tracking", "Smart timers", "Push notifications"],
    category: "Mobile Application",
    difficulty: "Advanced",
    xpReward: 1100,
    questType: "Side Quest",
    icon: "Gamepad2",
    difficultyColor: "text-orange-500",
    achievements: ["Mobile Master", "Timer Specialist", "Notification Expert"],
    challenges: ["Advanced timer algorithms", "Background processing", "Complex notification scheduling"],
    detailedDescription:
      "An enhanced version of the gaming café management system with advanced features like predictive session management, automated device optimization, and intelligent customer flow management.",
  },
  {
    slug: "xtreme-cafe-management",
    title: "Xtreme Cafe Management",
    description: "Desktop gaming café management system with server-client architecture for centralized control.",
    year: "2025",
    technologies: ["Neutralino.js", ".NET", "Desktop App", "Networking"],
    features: ["Centralized control", "Session management", "Billing system", "Cross-platform support"],
    category: "Desktop Application",
    difficulty: "Expert",
    xpReward: 1400,
    questType: "Side Quest",
    icon: "Gamepad2",
    difficultyColor: "text-red-500",
    achievements: ["Desktop Developer", "Network Architect", "System Designer"],
    challenges: ["Server-client architecture", "Network security", "Cross-platform deployment"],
    detailedDescription:
      "A sophisticated desktop application with server-client architecture for managing gaming cafés. Features centralized control, advanced security measures, and cross-platform compatibility using Neutralino.js and .NET technologies.",
  },
  {
    slug: "edu-learn-platform",
    title: "Edu-Learn Platform",
    description:
      "Educational web portal bridging communication between schools, parents, and students with performance tracking.",
    year: "2025",
    technologies: ["React.js", "Next.js", "Dashboard", "Notifications"],
    features: ["Performance tracking", "Parent notifications", "Interactive dashboards", "Progress analytics"],
    category: "Web Application",
    difficulty: "Advanced",
    xpReward: 1200,
    questType: "Main Quest",
    icon: "Shield",
    difficultyColor: "text-orange-500",
    achievements: ["Dashboard Designer", "Notification Master", "Analytics Pro"],
    challenges: ["Complex data visualization", "Multi-role authentication", "Real-time analytics"],
    detailedDescription:
      "A comprehensive educational platform that connects schools, parents, and students. Features advanced analytics dashboards, automated progress tracking, and intelligent notification systems for enhanced educational communication.",
  },
  {
    slug: "link-my-logistics",
    title: "Link My Logistics",
    description:
      "Modern web-based logistics management platform with real-time tracking, route optimization, and inventory management.",
    year: "2025",
    technologies: ["React.js", "Next.js", "GPS Tracking", "Payment Gateway"],
    features: ["Real-time GPS tracking", "Route optimization", "Inventory management", "Automated notifications"],
    category: "Web Application",
    difficulty: "Expert",
    xpReward: 1500,
    questType: "Main Quest",
    icon: "Zap",
    difficultyColor: "text-red-500",
    achievements: ["Full-Stack Master", "Real-time Specialist", "API Integrator"],
    challenges: ["Real-time GPS integration", "Complex route algorithms", "Multi-tenant architecture"],
    detailedDescription:
      "A cutting-edge logistics management platform featuring real-time GPS tracking, AI-powered route optimization, and comprehensive inventory management. Built with modern web technologies and designed for scalability and performance.",
  },
]

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Helper function to check if a project can be unlocked
export function canUnlockProject(slug: string, unlockedProjects: string[]): boolean {
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  if (projectIndex === 0) return true
  
  const previousProject = projects[projectIndex - 1]
  return previousProject ? unlockedProjects.includes(previousProject.slug) : false
}

// Helper function to calculate total XP from unlocked projects
export function calculateTotalXP(unlockedProjects: string[]): number {
  return projects
    .filter((p) => unlockedProjects.includes(p.slug))
    .reduce((sum, p) => sum + p.xpReward, 0)
}
