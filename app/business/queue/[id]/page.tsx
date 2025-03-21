"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, ArrowLeft, Settings, Bell, CheckCircle, MessageSquare, UserPlus } from "lucide-react"

export default function QueueDetailPage({ params }: { params: { id: string } }) {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      position: 1,
      waitTime: 5,
      joinedAt: "10:30 AM",
      status: "waiting",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: 2,
      waitTime: 10,
      joinedAt: "10:35 AM",
      status: "waiting",
    },
    {
      id: 3,
      name: "Robert Johnson",
      position: 3,
      waitTime: 15,
      joinedAt: "10:40 AM",
      status: "waiting",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: 4,
      waitTime: 20,
      joinedAt: "10:45 AM",
      status: "waiting",
    },
    {
      id: 5,
      name: "Michael Wilson",
      position: 5,
      waitTime: 25,
      joinedAt: "10:50 AM",
      status: "waiting",
    },
  ])

  const [queueInfo, setQueueInfo] = useState({
    id: params.id,
    name: "Main Service Queue",
    type: "Walk-in",
    averageWaitTime: 15,
    status: "active",
    createdAt: "Today, 9:00 AM",
  })

  const handleServeCustomer = (id: number) => {
    setCustomers(customers.map((customer) => (customer.id === id ? { ...customer, status: "serving" } : customer)))
  }

  const handleCompleteService = (id: number) => {
    setCustomers(customers.filter((customer) => customer.id !== id))
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
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <div className="container py-6">
        <div className="flex items-center mb-6">
          <Link href="/business/dashboard" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">{queueInfo.name}</h1>
            <p className="text-muted-foreground">Queue ID: {queueInfo.id}</p>
          </div>
          <div className="ml-auto">
            <Button variant="outline" className="mr-2">
              <Settings className="mr-2 h-4 w-4" /> Queue Settings
            </Button>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" /> Add Customer
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Customers Waiting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customers.length}</div>
              <p className="text-xs text-muted-foreground">Updated just now</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Wait Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{queueInfo.averageWaitTime} min</div>
              <p className="text-xs text-muted-foreground">Per customer</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Queue Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-lg font-medium capitalize">{queueInfo.status}</span>
              </div>
              <p className="text-xs text-muted-foreground">Since {queueInfo.createdAt}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Customers in Queue</CardTitle>
            <CardDescription>Manage customers currently waiting in this queue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-6 border-b px-4 py-3 font-medium">
                <div>Position</div>
                <div className="col-span-2">Customer</div>
                <div>Joined At</div>
                <div>Wait Time</div>
                <div className="text-right">Actions</div>
              </div>
              {customers.map((customer) => (
                <div key={customer.id} className="grid grid-cols-6 items-center px-4 py-3 border-b last:border-0">
                  <div>#{customer.position}</div>
                  <div className="col-span-2 font-medium">{customer.name}</div>
                  <div>{customer.joinedAt}</div>
                  <div>{customer.waitTime} min</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => {}}>
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    {customer.status === "serving" ? (
                      <Button variant="default" size="sm" onClick={() => handleCompleteService(customer.id)}>
                        <CheckCircle className="h-4 w-4 mr-1" /> Complete
                      </Button>
                    ) : (
                      <Button variant="default" size="sm" onClick={() => handleServeCustomer(customer.id)}>
                        Serve Now
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

