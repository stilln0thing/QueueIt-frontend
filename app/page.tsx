import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, Bell, Calendar, CheckCircle } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">QueueIt</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6 md:flex">
            <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary nav-link">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary nav-link">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary nav-link">
              About
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium transition-colors hover:text-primary">
              Login
            </Link>
            <Link href="/signup">
              <Button className="btn-bounce">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/50">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <RevealOnScroll className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
                    Never Wait In Line Again
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    QueueIt revolutionizes the way people and businesses manage queues in everyday life. Join, monitor,
                    and manage queues virtually from anywhere.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup?type=business">
                    <Button className="w-full btn-bounce glow">For Businesses</Button>
                  </Link>
                  <Link href="/signup?type=customer">
                    <Button variant="outline" className="w-full btn-bounce">
                      For Customers
                    </Button>
                  </Link>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={200} className="flex items-center justify-center">
                <div className="relative w-full h-[400px] bg-gradient-to-b from-primary/20 to-background rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[280px] h-[560px] bg-card rounded-[40px] border-8 border-muted shadow-xl overflow-hidden float">
                      <div className="w-full h-full bg-gradient-to-b from-primary/10 to-background p-4">
                        <div className="flex justify-between items-center mb-6">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-primary mr-2" />
                            <span className="font-semibold">QueueIt</span>
                          </div>
                          <Bell className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-4">
                          <div className="bg-card rounded-lg p-4 shadow-sm card-hover">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="font-medium">Café Mocha</h3>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                #3 in line
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Est. wait: 12 min</span>
                            </div>
                          </div>
                          <div className="bg-card rounded-lg p-4 shadow-sm card-hover">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="font-medium">Dr. Smith</h3>
                              <span className="text-xs bg-green-900 text-green-100 px-2 py-1 rounded-full">Ready</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>Today, 2:30 PM</span>
                            </div>
                          </div>
                          <div className="bg-card rounded-lg p-4 shadow-sm card-hover">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="font-medium">Tech Support</h3>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                #1 in line
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Est. wait: 3 min</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <RevealOnScroll className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  QueueIt simplifies queue management for both businesses and customers
                </p>
              </RevealOnScroll>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <RevealOnScroll delay={100} className="flex flex-col justify-center space-y-4 text-center group">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <Users className="h-10 w-10 text-primary feature-icon" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  Join Virtually
                </h3>
                <p className="text-muted-foreground">
                  Join queues remotely through the web or mobile app without physically waiting in line
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={200} className="flex flex-col justify-center space-y-4 text-center group">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <Bell className="h-10 w-10 text-primary feature-icon" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  Get Notified
                </h3>
                <p className="text-muted-foreground">
                  Receive real-time updates about your position and get notified when it's your turn
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={300} className="flex flex-col justify-center space-y-4 text-center group">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <CheckCircle className="h-10 w-10 text-primary feature-icon" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  Skip The Wait
                </h3>
                <p className="text-muted-foreground">
                  Arrive just in time for your turn, eliminating unnecessary waiting and improving efficiency
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <RevealOnScroll className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                    For Businesses
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Streamline your operations, improve customer satisfaction, and gain valuable insights
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Create and manage virtual queues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Set custom queue rules and priorities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Integrate with existing systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Access analytics and insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Improve staff allocation and customer flow</span>
                  </li>
                </ul>
                <div>
                  <Link href="/signup?type=business">
                    <Button className="btn-bounce glow">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={200} className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                    For Customers
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Never waste time waiting in line again. Join queues virtually and get notified when it's your turn
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Join multiple queues from anywhere</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Track your position in real-time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Receive notifications when your turn approaches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Schedule spots in advance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Share queues with friends and family</span>
                  </li>
                </ul>
                <div>
                  <Link href="/signup?type=customer">
                    <Button className="btn-bounce glow">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">© 2025 QueueIt. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

