"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clock, ArrowLeft, CheckCircle } from "lucide-react"

export default function JoinQueuePage({ params }: { params: { id: string } }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState("")
  const [joined, setJoined] = useState(false)
  const [queuePosition, setQueuePosition] = useState(0)
  const [estimatedWait, setEstimatedWait] = useState(0)

  const queueInfo = {
    id: params.id,
    name: "Café Mocha",
    type: "Walk-in",
    currentWait: "15-20 minutes",
    peopleAhead: 5,
  }

  const handleJoinQueue = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate joining queue
    setJoined(true)
    setQueuePosition(queueInfo.peopleAhead + 1)
    setEstimatedWait(Math.round((queueInfo.peopleAhead + 1) * 3.5))
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
        </div>
      </header>
      <div className="container max-w-md py-6">
        <Link href="/" className="inline-flex items-center mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back</span>
        </Link>

        {!joined ? (
          <Card>
            <CardHeader>
              <CardTitle>Join Queue</CardTitle>
              <CardDescription>Enter your information to join the queue at {queueInfo.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-3 bg-muted rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{queueInfo.name}</span>
                  <span className="text-sm text-muted-foreground">{queueInfo.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Current wait:</span>
                  <span className="text-sm font-medium">{queueInfo.currentWait}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">People ahead:</span>
                  <span className="text-sm font-medium">{queueInfo.peopleAhead}</span>
                </div>
              </div>

              <form onSubmit={handleJoinQueue} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="For SMS notifications"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="For email notifications"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Special Notes (optional)</Label>
                  <Input
                    id="notes"
                    placeholder="Any special requests or notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Join Queue
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>You're in the Queue!</CardTitle>
              <CardDescription>You've successfully joined the queue at {queueInfo.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-4xl font-bold mb-1">#{queuePosition}</div>
                  <div className="text-sm text-muted-foreground">Your position in line</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <div className="text-2xl font-bold mb-1">{estimatedWait}</div>
                    <div className="text-sm text-muted-foreground">Minutes wait</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <div className="text-2xl font-bold mb-1">{queueInfo.peopleAhead}</div>
                    <div className="text-sm text-muted-foreground">People ahead</div>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">What happens next?</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    We'll send you SMS notifications as your turn approaches. You can also check your position anytime
                    by returning to this page.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    When it's almost your turn, please make your way to {queueInfo.name}.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full" variant="default">
                View in App
              </Button>
              <Button className="w-full" variant="outline">
                Share Position
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

