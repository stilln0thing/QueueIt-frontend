import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Users, BarChart3, Globe } from "lucide-react"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-primary nav-link">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 fade-in">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Mission</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    At QueueIt, we're on a mission to eliminate unnecessary waiting and transform the way people and
                    businesses manage queues in everyday life.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="QueueIt Team"
                  className="rounded-lg shadow-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  How QueueIt came to be and our journey so far
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">The Beginning</h3>
                <p className="text-muted-foreground">
                  QueueIt was founded in 2023 by a team of entrepreneurs who were frustrated with the amount of time
                  wasted waiting in lines. After spending hours in a hospital waiting room, our founder had a simple
                  idea: what if there was a better way to manage queues that respected people's time?
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">The Problem</h3>
                <p className="text-muted-foreground">
                  Every day, millions of people wait in line for services, events, deliveries, or appointments, wasting
                  valuable time in physical or digital queues. Businesses also suffer from inefficiency and customer
                  dissatisfaction because they lack a streamlined process to handle these queues.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Our Solution</h3>
                <p className="text-muted-foreground">
                  We created QueueIt as an all-in-one virtual queue management solution that allows users to join,
                  monitor, and manage queues virtually — whether for physical locations like restaurants and clinics, or
                  for online services such as tech support or event ticketing.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Today</h3>
                <p className="text-muted-foreground">
                  Today, QueueIt serves thousands of businesses and millions of users worldwide. Our platform has saved
                  countless hours of waiting time and has helped businesses improve customer satisfaction and
                  operational efficiency. We continue to innovate and expand our offerings to meet the evolving needs of
                  our users.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide everything we do
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Clock className="h-10 w-10 text-primary feature-icon" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  Time is Valuable
                </h3>
                <p className="text-muted-foreground">
                  We believe that everyone's time is precious and should be respected. Our platform is designed to
                  minimize waiting and maximize efficiency.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="h-10 w-10 text-primary feature-icon" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  Customer First
                </h3>
                <p className="text-muted-foreground">
                  We put our customers at the center of everything we do. Their needs and feedback drive our product
                  development and service improvements.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <BarChart3 className="h-10 w-10 text-primary feature-icon" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  Data-Driven Innovation
                </h3>
                <p className="text-muted-foreground">
                  We use data and analytics to continuously improve our platform and provide insights that help
                  businesses optimize their operations.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Globe className="h-10 w-10 text-primary feature-icon" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  Global Impact
                </h3>
                <p className="text-muted-foreground">
                  We're committed to making a positive impact globally by reducing wait times and improving efficiency
                  in businesses of all sizes around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the people behind QueueIt
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
              <div className="flex flex-col items-center text-center space-y-4 card-hover p-4 rounded-lg">
                <div className="h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-muted-foreground">CEO & Co-Founder</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 card-hover p-4 rounded-lg">
                <div className="h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Michael Chen</h3>
                  <p className="text-muted-foreground">CTO & Co-Founder</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 card-hover p-4 rounded-lg">
                <div className="h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">David Rodriguez</h3>
                  <p className="text-muted-foreground">Head of Product</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 card-hover p-4 rounded-lg">
                <div className="h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Emily Patel</h3>
                  <p className="text-muted-foreground">Head of Customer Success</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Join Our Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of our mission to revolutionize queue management
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/careers">
                  <Button className="w-full btn-bounce">View Careers</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full btn-bounce">
                    Contact Us
                  </Button>
                </Link>
              </div>
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

