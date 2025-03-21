"use client"

import type React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Clock } from "lucide-react"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const [userType, setUserType] = useState("customer")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    const type = searchParams.get("type")
    if (type === "business" || type === "customer") {
      setUserType(type)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    const payload = {
      firstname: name.split(" ")[0],
      lastname: name.split(" ").slice(1).join(" "),
      password,
      email,
    }
    console.log(payload
    )
  

  try {
    // Send the signup request to the backend
    const response = await axios.post("http://localhost:8080/users/signup", payload)
    console.log("Signup successful:", response.data)

    // Handle successful signup (e.g., redirect to login page or show success message)
  } catch (error) {
    console.error("Signup failed:", error)
    // Handle error (e.g., show error message to the user)
  }
    
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">
        <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center">
          <Clock className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">QueueIt</span>
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your information to create your account</p>
          </div>
          <div className="grid gap-6 fade-in">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Account Type</Label>
                  <RadioGroup defaultValue={userType} onValueChange={setUserType} className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="customer" id="customer" />
                      <Label htmlFor="customer">Customer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="business" id="business" />
                      <Label htmlFor="business">Business</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">{userType === "business" ? "Business Name" : "Full Name"}</Label>
                  <Input
                    id="name"
                    placeholder={userType === "business" ? "Your Business Name" : "Your Name"}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoCapitalize="none"
                    autoCorrect="off"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoCapitalize="none"
                    autoComplete="new-password"
                    autoCorrect="off"
                    required
                  />
                </div>
                <Button type="submit" className="w-full btn-bounce">
                  Create Account
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full btn-bounce">
                Google
              </Button>
              <Button variant="outline" className="w-full btn-bounce">
                Apple
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary underline-offset-4 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

