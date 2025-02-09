"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import "./globals.css"

export default function Home() {
  const router = useRouter()

  const routeButtonDetails = [
    {
      text: "Forgot password?",
      path: '/forgot-password'
    },
    {
      text: "Login",
      path: '/login'
    },
    {
      text: "Sign up",
      path: '/register'
    },
    {
      text: "Blog",
      path: '/blog'
    },
    {
      text: "Get users",
      path: '/users'
    },
    {
      text: "Products",
      path: '/products'
    },
    {
      text: "Users client",
      path: '/users-client'
    },
  ]

  return (
    <div className="flex flex-col h-full items-center justify-center gap-8 p-16">
      <main className="flex flex-col gap-4 items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="routes flex gap-1">
          {routeButtonDetails.map((route: { text: string, path: string }) => (
            <button key={route.path} className="bg-blue-500 text-white p-2 rounded-md" onClick={() => router.push(route.path)}>{route.text}</button>
          ))}
        </div>
      </main>
    </div>
  )
}
