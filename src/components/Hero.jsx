import Image from "next/image"
import { GeometricShapes } from "@/components/ui/geometric-shapes"
import { FeatureCard } from "@/components/ui/feature-card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Braces, Network, Microscope } from "lucide-react"

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
              The Virtual  <span className="text-fuchsia-400 font-medium">Interdisciplinary Forum </span>
              </h2>

              <p className="text-lg text-purple-100/80 max-w-md">
                We bring together the brightest minds across disciplines to forge new connections between virtual worlds
                and scientific discovery.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white border-0 rounded-lg px-8 py-6 text-lg">
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-400/30 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20 rounded-lg px-6 py-6 text-lg backdrop-blur-md"
                >
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] w-full md:h-[500px] rounded-2xl overflow-hidden border border-purple-400/20 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1637664067109-a6a00840d894?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              title="Virtual Research Environments"
              description="Experience cutting-edge virtual spaces designed for collaborative scientific discovery."
            />
            <FeatureCard
              icon={<Microscope className="h-8 w-8 text-purple-400" />}
              title="Future Research Paradigms"
              description="Explore how metaverse technologies are transforming the landscape of scientific inquiry."
            />
          </div>
        </div>
      </main>
    </div>
  )
}

