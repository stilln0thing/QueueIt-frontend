"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Clock, Search, Plus, Settings, Bell, LogOut, Calendar, CheckCircle, X } from "lucide-react"

export default function DashboardPage() {
  const [activeQueues, setActiveQueues] = useState([
    {
      id: 1,
      name: "Café Mocha",
      position: 3,
      estimatedWait: 12,
      status: "waiting",
    },
    {
      id: 2,
      name: "Dr. Smith",
      position: 0,
      estimatedWait: 0,
      status: "ready",
    },
    {
      id: 3,
      name: "Tech Support",
      position: 1,
      estimatedWait: 3,
      status: "waiting",
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")

  const handleLeaveQueue = (id: number) => {
    setActiveQueues(activeQueues.filter((queue) => queue.id !== id))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">QueueIt</span>
            </Link>
          </div>
          <div className="relative w-full max-w-sm px-4">
            <Search className="absolute left-6 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search queues..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="btn-bounce">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="btn-bounce">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="btn-bounce">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[200px] flex-col border-r px-4 py-6 md:flex">
          <nav className="grid gap-2">
            <Link href="/dashboard" className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-primary">
              <Clock className="h-5 w-5" />
              <span>My Queues</span>
            </Link>
            <Link href="/dashboard/explore" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <Search className="h-5 w-5" />
              <span>Explore</span>
            </Link>
            <Link href="/dashboard/history" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <Calendar className="h-5 w-5" />
              <span>History</span>
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">My Queues</h1>
            <Button className="btn-bounce">
              <Plus className="mr-2 h-4 w-4" /> Join New Queue
            </Button>
          </div>
          <Tabs defaultValue="active">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active Queues</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4 slide-in">
              {activeQueues.length === 0 ? (
                <Card className="card-hover">
                  <CardContent className="flex flex-col items-center justify-center py-10">
                    <Clock className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="text-center text-muted-foreground">You're not in any queues right now.</p>
                    <Button className="mt-4 btn-bounce">
                      <Plus className="mr-2 h-4 w-4" /> Join a Queue
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                activeQueues.map((queue) => (
                  <div
                    key={queue.id}
                    className="flex items-center justify-between rounded-lg bg-muted hover:shadow-md p-3 shadow-sm transition-shadow queue-item"
                  >
                    <Card className="card-hover">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle>{queue.name}</CardTitle>
                          {queue.status === "ready" ? (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Ready</span>
                          ) : (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              #{queue.position} in line
                            </span>
                          )}
                        </div>
                        <CardDescription>
                          {queue.status === "ready" ? (
                            <span className="flex items-center text-green-600">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              It's your turn now!
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              Est. wait: {queue.estimatedWait} min
                            </span>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-auto btn-bounce"
                          onClick={() => handleLeaveQueue(queue.id)}
                        >
                          <X className="h-4 w-4 mr-1" /> Leave Queue
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))
              )}
            </TabsContent>
            <TabsContent value="upcoming">
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <Calendar className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-center text-muted-foreground">You don't have any upcoming queues scheduled.</p>
                  <Button className="mt-4 btn-bounce">
                    <Plus className="mr-2 h-4 w-4" /> Schedule a Queue
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history">
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <Clock className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-center text-muted-foreground">Your queue history will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

