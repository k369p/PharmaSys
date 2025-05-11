"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

type UserRole = "admin" | "pharmacist" | "cashier" | "patient"

type User = {
  id: string
  name: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string, role?: UserRole) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("pharmacy-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Redirect based on role
  useEffect(() => {
    if (!isLoading && user) {
      // If patient tries to access staff pages
      if (
        user.role === "patient" &&
        pathname &&
        !pathname.startsWith("/patient") &&
        pathname !== "/login" &&
        pathname !== "/signup"
      ) {
        router.push("/patient")
      }

      // If staff tries to access patient pages
      if (user.role !== "patient" && pathname && pathname.startsWith("/patient")) {
        router.push("/")
      }
    }
  }, [user, isLoading, pathname, router])

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, accept any email/password with basic validation
      if (!email || !password) {
        return false
      }

      // Determine role based on email for demo purposes
      const role: UserRole = email.includes("patient") ? "patient" : "admin"

      // Create mock user
      const newUser: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        name: email
          .split("@")[0]
          .replace(".", " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        email,
        role,
      }

      // Save to localStorage
      localStorage.setItem("pharmacy-user", JSON.stringify(newUser))
      setUser(newUser)

      // Redirect based on role
      if (role === "patient") {
        router.push("/patient")
      } else {
        router.push("/")
      }

      return true
    } catch (error) {
      console.error("Login error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Mock signup function
  const signup = async (name: string, email: string, password: string, role: UserRole = "patient") => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, accept any valid input
      if (!name || !email || !password) {
        return false
      }

      // Create mock user
      const newUser: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        name,
        email,
        role,
      }

      // Save to localStorage
      localStorage.setItem("pharmacy-user", JSON.stringify(newUser))
      setUser(newUser)

      // Redirect based on role
      if (role === "patient") {
        router.push("/patient")
      } else {
        router.push("/")
      }

      return true
    } catch (error) {
      console.error("Signup error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("pharmacy-user")
    setUser(null)
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
