import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Full Stack Developer with hands-on experience in building responsive, high-performance web and mobile
            applications. Passionate about creating user-centric digital products and growing as a tech professional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web and mobile technologies. My journey
                began with a Bachelor's in Computer Application, and I've since built numerous applications ranging from
                restaurant management systems to gaming café solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating responsive web applications using React and Next.js, developing cross-platform
                mobile apps with React Native, and building robust backend systems with Node.js. I'm also experienced in
                system administration and desktop application development.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">Academic Background</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-foreground">Bachelor of Computer Application</div>
                    <div className="text-sm text-muted-foreground">Tilak Maharashtra Vidyapeeth • 2021-2024</div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Higher Secondary Certificate</div>
                    <div className="text-sm text-muted-foreground">E.B.Madhavi Junior College • 2019-2021</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-sm text-muted-foreground">Based in India</p>
                  </div>
                </div>
                <div className="text-foreground">Dombivli, Maharashtra 421201</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Experience</h4>
                    <p className="text-sm text-muted-foreground">Professional Journey</p>
                  </div>
                </div>
                <div className="text-foreground">3+ Years in Full Stack Development</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
