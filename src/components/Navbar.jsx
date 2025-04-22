"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const navLinks = [
  {
    title: "ABOUT",
    href: "#",
    dropdown: [
      {
        href: "/about-conference",
        title: "About Conference"
      },
      {
        href: "/about-organizers",
        title: "About Organizers"
      }
    ]
  },
  {
    title: "PROGRAM",
    href: "#",
    dropdown: [
      {
        href: "/theme-and-topics",
        title: "Themes and Topics"
      },
      {
        href: "/papers-format",
        title: "Paper Formats"
      },
      {
        href: "/mode-of-presentation",
        title: "Mode of Presentation"
      },
      {
        href: "/schedule",
        title: "Conference Schedule"
      }
    ]
  },
  {
    title: "COMMITTEE",
    href: "/committee",
  },
  {
    title: "SUBMISSION",
    href: "/submission",
  },
  {
    title: "JOURNALS",
    href: "/journals",
  },
  {
    title: "AWARDS",
    href: "/awards",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
  {
    title: "EXHIBIT & SPONSOR",
    href: "/exhibit-and-sponsor",
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const handleDropdownHover = (title) => {
    setActiveDropdown(title)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/10 backdrop-blur-lg border-b border-purple-500/30" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center mt-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold tracking-wider text-white"
            >
              <Image src={'/Logox.svg'} className="drop-shadow-2xl " alt="logo" height={170} width={170}/>
             
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="relative"
                onMouseEnter={() => link.dropdown && handleDropdownHover(link.title)}
                onMouseLeave={handleDropdownLeave}
              >
                {link.dropdown ? (
                  <div className="group">
                    <button className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors flex items-center">
                      {link.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                      <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-64 rounded-md overflow-hidden border border-purple-500/30 backdrop-blur-xl bg-black/80 shadow-lg shadow-purple-500/20"
                        >
                          <div className="py-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-500/20 hover:text-white transition-colors"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="group px-3 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors relative"
                  >
                    {link.title}
                    <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}
              </div>
            ))}
            <Link href="/registration">
              <Button className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none relative overflow-hidden group">
                <span className="relative z-10">REGISTER NOW</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:opacity-0 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-black/95 border-purple-500/30 backdrop-blur-xl p-0">
              <div className="h-full flex flex-col">
                <div className="p-4 border-b border-purple-500/30">
                  <div className="text-xl font-bold tracking-wider text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                      METAVERSE
                    </span>
                  </div>
                </div>
                <nav className="flex-1 overflow-auto py-4">
                  {navLinks.map((link) => (
                    <div key={link.title} className="mb-1">
                      {link.dropdown ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-200 hover:bg-purple-500/20 hover:text-white transition-colors">
                              {link.title}
                              <ChevronDown className="h-4 w-4 text-gray-400" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-full bg-black/95 border-purple-500/30">
                            {link.dropdown.map((item) => (
                              <DropdownMenuItem key={item.href} asChild>
                                <Link
                                  href={item.href}
                                  className="w-full cursor-pointer"
                                >
                                  {item.title}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link
                          href={link.href}
                          className="block px-4 py-3 text-sm font-medium text-gray-200 hover:bg-purple-500/20 hover:text-white transition-colors"
                        >
                          {link.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="p-4 border-t border-purple-500/30">
                  <Link href="/registration" className="block w-full">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      REGISTER NOW
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
