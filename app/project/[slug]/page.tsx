"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Star, Zap } from "lucide-react"

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
    icon: Zap,
    difficultyColor: "text-orange-500",
    achievements: ["POS Master", "Integration Expert", "Inventory Specialist"],
    challenges: ["Real-time inventory synchronization", "Third-party API integration", "Complex billing calculations"],
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
  // Add other projects with slugs...
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    const slug = params.slug as string
    const foundProject = projects.find((p) => p.slug === slug)

    if (foundProject) {
      setProject(foundProject)

      // Check if project is unlocked from localStorage
      const unlockedProjects = JSON.parse(localStorage.getItem("unlockedProjects") || '["study-wings-platform"]')
      setIsUnlocked(unlockedProjects.includes(slug))
    }
  }, [params.slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => router.push("/#projects")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    )
  }

  if (!isUnlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-2xl font-bold mb-4">Quest Locked</h1>
            <p className="text-muted-foreground mb-6">Complete the coding challenge to unlock this project details.</p>
            <Button onClick={() => router.push("/#projects")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Quest Log
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const IconComponent = project.icon

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button variant="outline" onClick={() => router.push("/#projects")} className="mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Quest Log
        </Button>

        <div className="space-y-8">
          {/* Project Header */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={project.questType === "Main Quest" ? "default" : "secondary"}>
                        {project.questType}
                      </Badge>
                      <Badge variant="outline" className={project.difficultyColor}>
                        {project.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl font-heading">{project.title}</CardTitle>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-yellow-600 mb-1">
                    <Star className="h-4 w-4" />
                    <span className="font-semibold">+{project.xpReward} XP</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{project.detailedDescription}</p>
            </CardHeader>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🏆 Achievements Unlocked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.achievements.map((achievement: string, index: number) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  >
                    🏆 {achievement}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">⚙️ Technical Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {project.technicalDetails && (
                <div>
                  <h4 className="font-semibold mb-3">Technical Details</h4>
                  <ul className="space-y-2">
                    {project.technicalDetails.map((detail: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Challenges & Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🎯 Challenges Overcome</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {project.keyLearnings && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">📚 Key Learnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.keyLearnings.map((learning: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                        {learning}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
