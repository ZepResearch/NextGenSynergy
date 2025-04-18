import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Calendar, Video } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                About The Conference
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

              <p className="text-lg text-purple-100/90 mb-8">
              In a world where change is the only constant, Nextgen Synergy is your catalyst for transformation. Designed for industry leaders, visionary entrepreneurs, tech pioneers, and change-makers, this conference ignites collaboration across industries — driving innovation that makes a real impact. From cutting-edge AI and sustainable technologies to leadership strategies and the future of work, every session is built to inspire, challenge, and empower.

              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center p-4 rounded-xl bg-purple-500/10 backdrop-blur-sm border border-purple-400/20">
                  <Calendar className="h-8 w-8 text-cyan-400 mb-3" />
                  <h3 className="text-white font-medium">July 17th-18th, 2025</h3>
                  <p className="text-purple-200/70 text-sm">2 Days of Innovation</p>
                </div>

                <div className="flex flex-col items-center p-4 rounded-xl bg-purple-500/10 backdrop-blur-sm border border-purple-400/20">
                  <Video className="h-8 w-8 text-fuchsia-400 mb-3" />
                  <h3 className="text-white font-medium">Virtual Conference</h3>
                  <p className="text-purple-200/70 text-sm">Global Accessibility</p>
                </div>

                <div className="flex flex-col items-center p-4 rounded-xl bg-purple-500/10 backdrop-blur-sm border border-purple-400/20">
                  <Users className="h-8 w-8 text-purple-400 mb-3" />
                  <h3 className="text-white font-medium">500+ Attendees</h3>
                  <p className="text-purple-200/70 text-sm">Global Participants</p>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg px-8 py-6 text-lg group"
              >
                <Link href="/about-conference">
                  Learn More About NextGenSynergy
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}