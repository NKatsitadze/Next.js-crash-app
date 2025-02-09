import type { Metadata } from "next"
import { ClerkProvider } from '@clerk/nextjs'
import { Navigation } from "./components/navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`flex flex-col h-screen antialiased`}
        >

        <header className="bg-slate-900 text-white p-4 text-center">
          <Navigation />
        </header>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
        <footer className="bg-slate-900 text-white p-4 text-center">
          <p>Footer text</p>
        </footer>

        </body>
      </html>
    </ClerkProvider>
  )
}
