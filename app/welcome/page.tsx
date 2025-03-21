"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, ArrowRight, CheckCircle, Users, Bell, Calendar } from "lucide-react"

export default function WelcomePage() {
  const [userType, setUserType] = useState("customer")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // In a real app, this would come from authentication
    const storedUserType = localStorage.getItem("userType") || "customer"
    const storedUserName = localStorage.getItem("userName") || "User"

    setUserType(storedUserType)
    setUserName(storedUserName)
  }, [])

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
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center fade-in">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Welcome to QueueIt, {userName}!</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {userType === "business"
                    ? "Let's set up your business and start managing your queues efficiently."
                    : "Let's get started with managing your time better and skipping the wait."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {userType === "customer" ? (
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="card-hover group">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Users className="h-6 w-6 text-primary feature-icon" />
                    </div>
                    <CardTitle>Join Your First Queue</CardTitle>
                    <CardDescription>Start saving time by joining a virtual queue</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Search for businesses, scan a QR code, or enter a queue code to join your first virtual queue.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/dashboard">
                      <Button className="btn-bounce">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="card-hover group">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Bell className="h-6 w-6 text-primary feature-icon" />
                    </div>
                    <CardTitle>Set Up Notifications</CardTitle>
                    <CardDescription>Never miss your turn with timely alerts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Configure your notification preferences to receive alerts via SMS, email, or push notifications.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/settings/notifications">
                      <Button variant="outline" className="btn-bounce">
                        Configure <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="card-hover group">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Calendar className="h-6 w-6 text-primary feature-icon" />
                    </div>
                    <CardTitle>Schedule a Queue</CardTitle>
                    <CardDescription>Plan ahead by scheduling a spot in line</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Book your spot in advance at restaurants, clinics, or service centers to save even more time.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/dashboard">
                      <Button variant="outline" className="btn-bounce">
                        Schedule Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-16 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Ready to get started?</h2>
                  <p className="text-muted-foreground">Head to your dashboard to begin managing your queues</p>
                </div>
                <Link href="/dashboard">
                  <Button size="lg" className="btn-bounce">
                    Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="card-hover group">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Users className="h-6 w-6 text-primary feature-icon" />
                    </div>
                    <CardTitle>Create Your First Queue</CardTitle>
                    <CardDescription>Set up a virtual queue for your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Create a customized queue with your business rules, priorities, and service options.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/business/dashboard">
                      <Button className="btn-bounce">
                        Create Queue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="card-hover group">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <CheckCircle className="h-6 w-6 text-primary feature-icon" />
                    </div>
                    <CardTitle>Complete Your Profile</CardTitle>
                    <CardDescription>Add your business details and branding</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Add your business information, logo, and customize the appearance of your queue for customers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/business/settings/profile">
                      <Button variant="outline" className="btn-bounce">
                        Complete Profile <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="card-hover group">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Bell className="h-6 w-6 text-primary feature-icon" />
                    </div>
                    <CardTitle>Set Up Staff Access</CardTitle>
                    <CardDescription>Invite your team to manage queues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Add staff members and assign roles to help manage your queues and serve customers efficiently.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/business/settings/team">
                      <Button variant="outline" className="btn-bounce">
                        Invite Team <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-16 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Ready to manage your queues?</h2>
                  <p className="text-muted-foreground">Head to your business dashboard to get started</p>
                </div>
                <Link href="/business/dashboard">
                  <Button size="lg" className="btn-bounce">
                    Go to Business Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">© 2025 QueueIt. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/help" className="text-sm text-muted-foreground hover:text-primary">
              Help Center
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

