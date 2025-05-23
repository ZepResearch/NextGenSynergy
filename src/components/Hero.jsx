import Image from "next/image"
import { GeometricShapes } from "@/components/ui/geometric-shapes"
import { FeatureCard } from "@/components/ui/feature-card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Braces, Network, Microscope, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { ReserveButton } from "./reserve-button"

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden  pt-8">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
     
      />

      {/* 3D Geometric elements */}
     

      <main className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Hero content */}
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md">
                <span>Explore, Connect, Innovate</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300">
              NextGen<span className="text-white">Synergy</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white">
              The Hybrid  <span className="text-fuchsia-400 font-medium">Interdisciplinary Forum </span>
              </h2>

              <p className="text-lg text-purple-100/80 max-w-2xl">
              Welcome to the Nextgen Synergy Conference — a groundbreaking hybrid experience where the brightest minds, boldest ideas, and breakthrough technologies converge, both in-person and online.
              </p>

              <div className="flex items-center flex-row gap-4 text-white text-xl">
                <div className="inline-flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-purple-400" />
                
                    August 21<sup>st</sup>-22<sup>nd</sup>, 2025
                  
                </div>
                <div  className="inline-flex items-center gap-2">
                 <MapPin className="h-6 w-6 text-purple-400"/>
                 Delhi, India 
                </div>
              </div>

              <div className="flex sm:flex-row flex-col-reverse  items-start sm:items-center justify-center gap-3 px-4 max-w-2xl  backdrop-blur-sm bg-gray-50/30 py-4 rounded-3xl">
              <img
                src="/assets/scopus.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />
              <img
                src="/assets/clarivate.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />

              <img
                src="assets/zepresearch.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />
            </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/registration">
                <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white border-0 rounded-lg px-8 py-6 text-lg">
                  Register Now
                </Button>
                </Link>
                <Link href="/about-conference">
                <Button
                  variant="outline"
                  className="border-purple-400/30 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20 rounded-lg px-6 py-6 text-lg backdrop-blur-md"
                >
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
                <ReserveButton/>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] w-full md:h-[500px] rounded-2xl overflow-hidden border border-purple-400/20 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1730886769116-2cbaf94588d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Virtual conference visualization"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>

                {/* Floating elements */}
                <div className="absolute top-1/4 right-1/4 h-16 w-16 rounded-full bg-cyan-400 blur-xl opacity-70 animate-pulse"></div>
                <div
                  className="absolute bottom-1/3 left-1/3 h-20 w-20 rounded-full bg-fuchsia-400 blur-xl opacity-70 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Braces className="h-8 w-8 text-cyan-400" />}
              title="Cross-Disciplinary Collaboration"
              description="Connect with researchers across fields to discover new perspectives and methodologies."
            />
            <FeatureCard
              icon={<Network className="h-8 w-8 text-fuchsia-400" />}
              title="Hybrid  Research Environments"
              description="Experience cutting-edge spaces — both virtual and physical — designed to foster collaborative scientific discovery and engagement."
            />
            <FeatureCard
              icon={<Microscope className="h-8 w-8 text-purple-400" />}
              title="Future Research Paradigms"
              description="Explore how hybrid and metaverse technologies are transforming the landscape of scientific inquiry and collaboration."
            />
          </div>
        </div>
      </main>
    </div>
  )
}

