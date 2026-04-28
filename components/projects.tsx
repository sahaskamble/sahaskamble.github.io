"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Lock, CheckCircle, Star, Zap, Shield, Gamepad2 } from "lucide-react"
import { QuestChallenge } from "@/components/quest-challenge"
import { useRouter } from "next/navigation"
import { projects, canUnlockProject, calculateTotalXP } from "@/data/projects"

// Map icon names to actual components
const iconMap: Record<string, React.ElementType> = {
  Star,
  Zap,
  Shield,
  Gamepad2,
}

export function Projects() {
  const router = useRouter()
  const [unlockedProjects, setUnlockedProjects] = useState<string[]>(["study-wings-platform"])
  const [showChallenge, setShowChallenge] = useState<string | null>(null)

  // Load unlocked projects from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("unlockedProjects")
    if (saved) {
      try {
        setUnlockedProjects(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse unlockedProjects from localStorage:", e)
      }
    }
  }, [])

  // Save to localStorage only when unlockedProjects changes
  useEffect(() => {
    localStorage.setItem("unlockedProjects", JSON.stringify(unlockedProjects))
  }, [unlockedProjects])

  // Memoize the canUnlock check to prevent unnecessary recalculations
  const checkCanUnlock = useCallback(
    (slug: string) => canUnlockProject(slug, unlockedProjects),
    [unlockedProjects]
  )

  // Memoize total XP calculation
  const totalXP = useMemo(() => calculateTotalXP(unlockedProjects), [unlockedProjects])

  const handleUnlockQuest = useCallback((slug: string) => {
    if (!unlockedProjects.includes(slug) && checkCanUnlock(slug)) {
      setShowChallenge(slug)
    }
  }, [unlockedProjects, checkCanUnlock])

  const handleChallengeComplete = useCallback(() => {
    if (showChallenge !== null) {
      setUnlockedProjects((prev) => [...prev, showChallenge])
      setShowChallenge(null)
    }
  }, [showChallenge])

  const handleViewDetails = useCallback((slug: string) => {
    if (unlockedProjects.includes(slug)) {
      router.push(`/project/${slug}`)
    }
  }, [router, unlockedProjects])

  const getDifficultyIcon = useCallback((difficulty: string) => {
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
  }, [])

  const currentChallengeProject = useMemo(
    () => projects.find((p) => p.slug === showChallenge),
    [showChallenge]
  )

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
                {totalXP.toLocaleString()} XP Earned
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isUnlocked = unlockedProjects.includes(project.slug)
            const canUnlock = checkCanUnlock(project.slug)
            const IconComponent = iconMap[project.icon] || Star

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

      {showChallenge !== null && currentChallengeProject && (
        <QuestChallenge
          projectName={currentChallengeProject.title}
          onComplete={handleChallengeComplete}
          onCancel={() => setShowChallenge(null)}
        />
      )}
    </section>
  )
}
