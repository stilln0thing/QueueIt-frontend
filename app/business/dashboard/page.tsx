"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Clock, Search, Plus, Users, BarChart3, Settings, Bell, LogOut, Calendar, ArrowRight } from "lucide-react"

export default function BusinessDashboardPage() {
  const [activeQueues, setActiveQueues] = useState([
    {
      id: 1,
      name: "Main Service Queue",
      peopleWaiting: 12,
      averageWaitTime: 15,
      nextCustomer: "John Doe",
    },
    {
      id: 2,
      name: "VIP Queue",
      peopleWaiting: 3,
      averageWaitTime: 8,
      nextCustomer: "Jane Smith",
    },
    {
      id: 3,
      name: "Consultation Queue",
      peopleWaiting: 5,
      averageWaitTime: 20,
      nextCustomer: "Robert Johnson",
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")

  const handleNextCustomer = (id: number) => {
    // Logic to call next customer
    console.log("Calling next customer for queue", id)
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
              placeholder="Search..."
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
            <Link
              href="/business/dashboard"
              className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-primary"
            >
              <Clock className="h-5 w-5" />
              <span>Queues</span>
            </Link>
            <Link href="/business/customers" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <Users className="h-5 w-5" />
              <span>Customers</span>
            </Link>
            <Link href="/business/analytics" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
            <Link href="/business/settings" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Queue Management</h1>
            <Button className="btn-bounce">
              <Plus className="mr-2 h-4 w-4" /> Create New Queue
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Waiting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20</div>
                <p className="text-xs text-muted-foreground">+5% from yesterday</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Wait Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14 min</div>
                <p className="text-xs text-muted-foreground">-2 min from yesterday</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Served Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">+12 from yesterday</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="active">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active Queues</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4 slide-in">
              {activeQueues.map((queue) => (
                <Card key={queue.id} className="card-hover queue-item">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>{queue.name}</CardTitle>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {queue.peopleWaiting} waiting
                      </span>
                    </div>
                    <CardDescription>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Avg. wait: {queue.averageWaitTime} min
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Next customer:</p>
                        <p className="text-sm">{queue.nextCustomer}</p>
                      </div>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleNextCustomer(queue.id)}
                        className="btn-bounce"
                      >
                        Call Next <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="outline" size="sm" className="w-full btn-bounce">
                      Manage Queue
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="scheduled">
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <Calendar className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-center text-muted-foreground">You don't have any scheduled queues.</p>
                  <Button className="mt-4 btn-bounce">
                    <Plus className="mr-2 h-4 w-4" /> Schedule a Queue
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="archived">
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <Clock className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-center text-muted-foreground">Your archived queues will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

