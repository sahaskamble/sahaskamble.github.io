import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Appniche Technologies",
      position: "Frontend Developer",
      period: "2022 - 2023",
      location: "Remote",
      description:
        "Developed comprehensive restaurant billing and management systems with advanced features including inventory management, third-party integrations, and staff performance tracking.",
      achievements: [
        "Built fast and user-friendly billing interface for restaurant operations",
        "Implemented real-time inventory tracking with low-stock alerts",
        "Integrated Swiggy and Zomato APIs for order synchronization",
        "Developed detailed reporting system for sales and staff performance",
        "Created mobile companion app for waitstaff efficiency",
      ],
      technologies: ["React.js", "Node.js", "API Integration", "Mobile Development"],
    },
  ]

  const timeline = [
    {
      year: "2025",
      title: "Advanced Projects",
      description: "Developed complex logistics and education platforms with modern web technologies",
      projects: ["Link My Logistics", "Edu-Learn Platform", "Xtreme Cafe Management"],
    },
    {
      year: "2024",
      title: "Mobile & Desktop Focus",
      description: "Expanded into desktop applications and advanced mobile solutions",
      projects: ["Game-Ground Mobile", "Desktop Gaming Management"],
    },
    {
      year: "2023",
      title: "Cross-Platform Development",
      description: "Specialized in React Native and cross-platform mobile applications",
      projects: ["CrossPlay Management", "BBNG Business Network"],
    },
    {
      year: "2022",
      title: "Professional Start",
      description: "Began professional development career with web applications",
      projects: ["Eatofy POS System", "Study Wings Platform"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">Experience & Timeline</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and project evolution over the years
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg font-heading">{exp.company}</CardTitle>
                      </div>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="font-semibold text-primary">{exp.position}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-2"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Timeline */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">Project Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative w-full flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                    <div className="ml-12 w-full">
                      <Card className="hover:shadow-md transition-shadow duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="h-4 w-4 text-primary" />
                            <Badge variant="outline" className="text-xs font-semibold">
                              {item.year}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg font-heading">{item.title}</CardTitle>
                          <CardDescription className="text-sm">{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Projects: </span>
                            {item.projects.join(", ")}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
