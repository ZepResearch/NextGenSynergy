import { Inter } from "next/font/google"
import "./globals.css"
import { GeometricShapes } from "@/components/ui/geometric-shapes"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NextGen Synergy: The Virtual Interdisciplinary Forum",
  description:
    "A conference bringing together researchers, technologists, and visionaries to explore the intersection of virtual worlds and scientific discovery.",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Fixed background with geometric elements */}
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-950 via-purple-950 to-fuchsia-900">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* 3D Geometric elements */}
          <GeometricShapes />
        </div>
        <Navbar/>
        <div className="relative z-10">
          {children}
          </div>
          <Footer/>
      </body>
    </html>
  )
}

