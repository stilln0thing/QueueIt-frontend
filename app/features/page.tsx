import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Clock,
  Users,
  Bell,
  Calendar,
  CheckCircle,
  BarChart3,
  MessageSquare,
  QrCode,
  Smartphone,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export default function FeaturesPage() {
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
            <Link href="/features" className="text-sm font-medium text-primary nav-link">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/20 to-background">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <RevealOnScroll className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                  Features That Revolutionize Queue Management
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  QueueIt offers a comprehensive suite of features designed to eliminate unnecessary waiting and enhance
                  customer satisfaction
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <RevealOnScroll className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter gradient-text">Core Features</h2>
                <p className="text-muted-foreground">
                  Our platform offers a comprehensive set of features to transform the way people and businesses manage
                  queues
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={200} className="flex items-center justify-center lg:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="QueueIt Features"
                  className="rounded-lg shadow-lg"
                  width={600}
                  height={400}
                />
              </RevealOnScroll>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
              <RevealOnScroll delay={100} className="card-hover group glass-card rounded-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Users className="h-6 w-6 text-primary feature-icon" />
                  </div>
                  <CardTitle>Virtual Queue Management</CardTitle>
                  <CardDescription>Create and manage virtual queues for your business</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Custom queue rules and priorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Integration with existing systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Unified management of appointments and walk-ins</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/queue-management">
                    <Button variant="ghost" className="btn-bounce">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </RevealOnScroll>

              <RevealOnScroll delay={200} className="card-hover group glass-card rounded-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Bell className="h-6 w-6 text-primary feature-icon" />
                  </div>
                  <CardTitle>Real-Time Queue Tracking</CardTitle>
                  <CardDescription>Monitor your position in line with real-time updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Live position updates and wait time estimates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>SMS, app, and email notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Alerts when your turn is approaching</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/real-time-tracking">
                    <Button variant="ghost" className="btn-bounce">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </RevealOnScroll>

              <RevealOnScroll delay={300} className="card-hover group glass-card rounded-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Calendar className="h-6 w-6 text-primary feature-icon" />
                  </div>
                  <CardTitle>Queue Scheduling</CardTitle>
                  <CardDescription>Schedule spots in advance and manage your time efficiently</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Reserve spots at restaurants, clinics, or service centers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Swap spots with others or request time changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Priority queues for premium users or special needs</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/queue-scheduling">
                    <Button variant="ghost" className="btn-bounce">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </RevealOnScroll>

              <RevealOnScroll delay={400} className="card-hover group glass-card rounded-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Globe className="h-6 w-6 text-primary feature-icon" />
                  </div>
                  <CardTitle>Universal Event System</CardTitle>
                  <CardDescription>Manage queues for large-scale events and special occasions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Pre-queue for ticket sales and merchandise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Countdown system with timely notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Special event management tools</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/event-system">
                    <Button variant="ghost" className="btn-bounce">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </RevealOnScroll>

              <RevealOnScroll delay={500} className="card-hover group glass-card rounded-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Zap className="h-6 w-6 text-primary feature-icon" />
                  </div>
                  <CardTitle>Delivery Queue Tracking</CardTitle>
                  <CardDescription>Track your delivery or service in real-time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Join virtual queues for delivery services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Live tracking of packages and food delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Integration with logistics and delivery platforms</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/delivery-tracking">
                    <Button variant="ghost" className="btn-bounce">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </RevealOnScroll>

              <RevealOnScroll delay={600} className="card-hover group glass-card rounded-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Smartphone className="h-6 w-6 text-primary feature-icon" />
                  </div>
                  <CardTitle>Multiple Queue Participation</CardTitle>
                  <CardDescription>Join and manage multiple queues simultaneously</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Join multiple queues across various locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Time management recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Optimize your schedule based on queue data</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/multiple-queues">
                    <Button variant="ghost" className="btn-bounce">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <RevealOnScroll className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter gradient-text">Advanced Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the powerful tools that make QueueIt the ultimate queue management solution
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
              <RevealOnScroll delay={100} className="card-hover group glass-card rounded-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <BarChart3 className="h-6 w-6 text-primary feature-icon" />
                  </div>
                  <CardTitle>Queue Analytics</CardTitle>
                  <CardDescription>Gain valuable insights into queue performance and customer behavior</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Detailed analytics on queue times and patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Identify peak hours and optimize staffing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Customer behavior insights and trends</span>
                    </li>
                  </ul>
                </CardContent>
              </RevealOnScroll>

              <RevealOnScroll delay={200} className="card-hover group glass-card rounded-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <QrCode className="h-6 w-6 text-primary feature-icon" />
                  </div>
                  <CardTitle>Contactless Check-In</CardTitle>
                  <CardDescription>Streamline the check-in process with contactless options</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>QR code scanning for quick queue joining</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Geo-fenced automatic check-in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Touchless entry for physical locations</span>
                    </li>
                  </ul>
                </CardContent>
              </RevealOnScroll>

              <RevealOnScroll delay={300} className="card-hover group glass-card rounded-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <MessageSquare className="h-6 w-6 text-primary feature-icon" />
                  </div>
                  <CardTitle>Wait Time Experiences</CardTitle>
                  <CardDescription>Enhance the waiting experience with custom content</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Custom content for waiting customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Entertainment options during wait time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Promotional content and special offers</span>
                    </li>
                  </ul>
                </CardContent>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <RevealOnScroll className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter gradient-text">
                  Ready to Transform Your Queue Experience?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses and customers who are already saving time with QueueIt
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={200} className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup?type=business">
                  <Button className="w-full btn-bounce glow">For Businesses</Button>
                </Link>
                <Link href="/signup?type=customer">
                  <Button variant="outline" className="w-full btn-bounce">
                    For Customers
                  </Button>
                </Link>
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

