"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Star } from "lucide-react"
import { projects, getProjectBySlug, type Project } from "@/data/projects"

// Map icon names to actual components
const iconMap: Record<string, React.ElementType> = {
  Star: Star,
  Zap: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Shield: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Gamepad2: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  ),
}

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [isUnlocked, setIsUnlocked] = useState(false)

  const project = useMemo(() => {
    const slug = params.slug as string
    return getProjectBySlug(slug)
  }, [params.slug])

  useEffect(() => {
    if (project) {
      // Check if project is unlocked from localStorage
      const unlockedProjects = JSON.parse(localStorage.getItem("unlockedProjects") || '["study-wings-platform"]')
      setIsUnlocked(unlockedProjects.includes(project.slug))
    }
  }, [project])

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

  const IconComponent = iconMap[project.icon] || Star

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
