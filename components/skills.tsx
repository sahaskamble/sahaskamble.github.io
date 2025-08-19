"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Server, Smartphone, Settings, Star, Trophy } from "lucide-react"

export function Skills() {
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({})

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      level: 85,
      xp: 8500,
      maxXp: 10000,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"],
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      progressColor: "bg-blue-600",
    },
    {
      title: "Backend Development",
      icon: Server,
      level: 78,
      xp: 7800,
      maxXp: 10000,
      skills: ["Node.js", "Nest.js", "Flask", "C++ Crow", "Drogon Framework", "REST APIs"],
      color: "text-green-600",
      bgColor: "bg-green-100",
      progressColor: "bg-green-600",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      level: 82,
      xp: 8200,
      maxXp: 10000,
      skills: ["React Native", "Expo", "Java", "Cross-platform Apps", "Mobile UI/UX"],
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      progressColor: "bg-purple-600",
    },
    {
      title: "System Administration",
      icon: Settings,
      level: 70,
      xp: 7000,
      maxXp: 10000,
      skills: ["Debian", "CentOS", "RHEL", "ALMA Linux", "Server Management", "Networking"],
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      progressColor: "bg-orange-600",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated: { [key: string]: number } = {}
      skillCategories.forEach((category, index) => {
        setTimeout(() => {
          animated[category.title] = category.level
          setAnimatedLevels((prev) => ({ ...prev, ...animated }))
        }, index * 200)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Skill Tree</h2>
            <Trophy className="h-8 w-8 text-yellow-500" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Level up your projects with my comprehensive tech stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="relative flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${category.bgColor}`}>
                    <category.icon className={`h-12 w-12 ${category.color}`} />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-black font-bold">
                    LVL {category.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-heading">{category.title}</CardTitle>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>XP: {category.xp.toLocaleString()}</span>
                    <span>{category.maxXp.toLocaleString()}</span>
                  </div>
                  <Progress value={animatedLevels[category.title] || 0} className="h-2" />
                  <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < Math.floor(category.level / 20) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">Character Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-card border">
              <div className="text-4xl font-bold text-blue-600 mb-2">85</div>
              <div className="text-muted-foreground font-semibold">Frontend Mastery</div>
              <div className="text-xs text-muted-foreground mt-1">React, Next.js, Modern CSS</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border">
              <div className="text-4xl font-bold text-green-600 mb-2">78</div>
              <div className="text-muted-foreground font-semibold">Backend Power</div>
              <div className="text-xs text-muted-foreground mt-1">Node.js, APIs, Databases</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border">
              <div className="text-4xl font-bold text-purple-600 mb-2">82</div>
              <div className="text-muted-foreground font-semibold">Mobile Agility</div>
              <div className="text-xs text-muted-foreground mt-1">React Native, Cross-platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
