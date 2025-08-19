"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Lock, CheckCircle, Star, Zap, Shield, Gamepad2 } from "lucide-react"
import { QuestChallenge } from "@/components/quest-challenge"
import { useRouter } from "next/navigation"

export function Projects() {
  const router = useRouter()
  const [unlockedProjects, setUnlockedProjects] = useState<string[]>(["study-wings-platform"])
  const [showChallenge, setShowChallenge] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("unlockedProjects")
    if (saved) {
      setUnlockedProjects(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("unlockedProjects", JSON.stringify(unlockedProjects))
  }, [unlockedProjects])

  const projects = [
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
      icon: Star,
      difficultyColor: "text-green-500",
      achievements: ["First Steps", "UI Designer", "System Thinker"],
      challenges: [
        "Learning React fundamentals",
        "Understanding component architecture",
        "Implementing responsive design",
      ],
      detailedDescription:
        "My first major project that introduced me to the world of React development. Built a comprehensive platform where students could browse universities, submit applications, and track their progress. This project taught me the fundamentals of component-based architecture and responsive design principles.",
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
      icon: Zap,
      difficultyColor: "text-orange-500",
      achievements: ["POS Master", "Integration Expert", "Inventory Specialist"],
      challenges: [
        "Real-time inventory synchronization",
        "Third-party API integration",
        "Complex billing calculations",
      ],
      detailedDescription:
        "A full-featured restaurant management system that handles everything from order taking to inventory management. Integrated with major food delivery platforms and includes advanced features like staff performance tracking and automated low-stock alerts.",
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
      icon: Shield,
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
      icon: Gamepad2,
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
      icon: Gamepad2,
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
      icon: Gamepad2,
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
      icon: Shield,
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
      icon: Zap,
      difficultyColor: "text-red-500",
      achievements: ["Full-Stack Master", "Real-time Specialist", "API Integrator"],
      challenges: ["Real-time GPS integration", "Complex route algorithms", "Multi-tenant architecture"],
      detailedDescription:
        "A cutting-edge logistics management platform featuring real-time GPS tracking, AI-powered route optimization, and comprehensive inventory management. Built with modern web technologies and designed for scalability and performance.",
    },
  ]

  const handleUnlockQuest = (slug: string) => {
    if (!unlockedProjects.includes(slug) && canUnlockProject(slug)) {
      setShowChallenge(slug)
    }
  }

  const canUnlockProject = (slug: string) => {
    const projectIndex = projects.findIndex((p) => p.slug === slug)
    if (projectIndex === 0) return true

    const previousProject = projects[projectIndex - 1]
    return previousProject ? unlockedProjects.includes(previousProject.slug) : false
  }

  const handleChallengeComplete = () => {
    if (showChallenge !== null) {
      setUnlockedProjects((prev) => [...prev, showChallenge])
      setShowChallenge(null)
    }
  }

  const handleViewDetails = (slug: string) => {
    if (unlockedProjects.includes(slug)) {
      router.push(`/project/${slug}`)
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "★"
      case "Intermediate":
        return "★★"
      case "Advanced":
        return "★★★"
      case "Expert":
        return "★★★★"
      default:
        return "★"
    }
  }

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">Quest Log</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Epic adventures in code - from tutorial quests to legendary challenges
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>{unlockedProjects.length} Quests Completed</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>
                {projects
                  .filter((p) => unlockedProjects.includes(p.slug))
                  .reduce((sum, p) => sum + p.xpReward, 0)
                  .toLocaleString()}{" "}
                XP Earned
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isUnlocked = unlockedProjects.includes(project.slug)
            const canUnlock = canUnlockProject(project.slug)
            const IconComponent = project.icon

            return (
              <Card
                key={project.slug}
                className={`transition-all duration-300 h-full flex flex-col ${
                  isUnlocked
                    ? "hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/50 cursor-pointer"
                    : canUnlock
                      ? "opacity-80 border-dashed border-2 border-yellow-400 hover:border-yellow-500"
                      : "opacity-40 border-dashed border-2 border-gray-400"
                }`}
                onClick={() => isUnlocked && handleViewDetails(project.slug)}
              >
                <CardHeader className="flex-shrink-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-2">
                      <Badge variant={project.questType === "Main Quest" ? "default" : "secondary"} className="text-xs">
                        {project.questType}
                      </Badge>
                      <Badge variant="outline" className={`text-xs ${project.difficultyColor}`}>
                        {getDifficultyIcon(project.difficulty)} {project.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-yellow-600">
                      <Star className="h-4 w-4" />+{project.xpReward} XP
                    </div>
                  </div>

                  <CardTitle className="text-xl font-heading flex items-center gap-2">
                    {project.title}
                    {!isUnlocked && <Lock className="h-4 w-4 text-gray-400" />}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {isUnlocked
                      ? project.description
                      : canUnlock
                        ? "Complete the challenge to unlock this quest..."
                        : "Complete previous quests to unlock..."}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-between">
                  {isUnlocked ? (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Achievements Unlocked:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.achievements.map((achievement, achIndex) => (
                            <Badge
                              key={achIndex}
                              variant="secondary"
                              className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            >
                              🏆 {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-blue-600 hover:bg-blue-700"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleViewDetails(project.slug)
                          }}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 flex flex-col items-center justify-center flex-grow">
                      <Lock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-4">
                        {canUnlock
                          ? "Complete the coding challenge to unlock this quest!"
                          : "Complete previous quests first!"}
                      </p>
                      {canUnlock && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleUnlockQuest(project.slug)
                          }}
                          className="bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                        >
                          🎯 Start Challenge
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {showChallenge !== null && (
        <QuestChallenge
          projectName={projects.find((p) => p.slug === showChallenge)?.title || ""}
          onComplete={handleChallengeComplete}
          onCancel={() => setShowChallenge(null)}
        />
      )}
    </section>
  )
}
