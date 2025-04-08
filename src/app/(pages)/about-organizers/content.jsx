import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ChevronRight, Target, Globe, Award } from "lucide-react"

export default function AboutOrganizers() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md mb-6">
              <span>MetaConnect 2025</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              About The Organizers
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">
              Learn about Zep Research, the organization behind MetaConnect 2025
            </p>
          </div>
        </div>
      </section>

      {/* About Zep Research Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">About Zep Research</h2>

                  <div className="space-y-6 text-purple-100/90">
                    <p>
                      Zep Research is a global leader in advancing academic excellence and fostering innovation.
                      Specializing in organizing impactful conferences, research initiatives, and collaboration
                      opportunities, Zep Research creates dynamic environments where researchers, academics, and
                      industry professionals come together to share knowledge, exchange ideas, and collaborate on
                      groundbreaking work across various industries.
                    </p>

                    <p>
                      With a commitment to providing a platform for high-quality research dissemination, Zep Research
                      enables individuals and institutions to engage in meaningful discussions about emerging trends,
                      challenges, and solutions. The focus spans diverse fields such as tourism, hospitality, education,
                      sustainability, and technology. By connecting experts, thought leaders, and innovators, Zep
                      Research drives progress and fosters advancements that leave a lasting impact on both academia and
                      industry.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="relative h-[300px] w-full rounded-2xl overflow-hidden border border-purple-400/20">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Zep Research team"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>

                    {/* Floating elements */}
                    <div className="absolute top-1/4 right-1/4 h-12 w-12 rounded-full bg-cyan-400 blur-xl opacity-70 animate-pulse"></div>
                    <div
                      className="absolute bottom-1/3 left-1/3 h-16 w-16 rounded-full bg-fuchsia-400 blur-xl opacity-70 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      <Target className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
                </div>

                <div className="space-y-6 text-purple-100/90">
                  <p>
                    Zep Research, in partnership with the International Conference on Sustainable Tourism and
                    Hospitality Management, is committed to driving innovation and fostering collaboration within the
                    tourism and hospitality industries. The mission is to create a platform for global knowledge
                    exchange, promote sustainable practices, and highlight emerging trends and solutions.
                  </p>

                  <p>
                    By connecting industry leaders, researchers, and professionals, the goal is to inspire progress,
                    share valuable insights, and contribute to the growth and sustainability of tourism and hospitality.
                    Through impactful conferences and research initiatives, this mission aims to shape a more innovative
                    and resilient future for the global tourism industry.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-6 text-center">
                      <Globe className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-white mb-2">Global Reach</h3>
                      <p className="text-purple-100/70 text-sm">Connecting researchers across continents</p>
                    </div>

                    <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-6 text-center">
                      <Award className="h-10 w-10 text-fuchsia-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-white mb-2">Excellence</h3>
                      <p className="text-purple-100/70 text-sm">Promoting high-quality research and innovation</p>
                    </div>

                    <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-6 text-center">
                      <Target className="h-10 w-10 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-white mb-2">Impact</h3>
                      <p className="text-purple-100/70 text-sm">Creating meaningful change in industries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Conference Highlights
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
              Discover what makes our conferences unique and impactful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Speakers",
                description: "Industry leaders and academic experts sharing cutting-edge insights",
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                title: "Global Networking",
                description: "Connect with professionals and researchers from around the world",
                gradient: "from-fuchsia-500 to-purple-600",
              },
              {
                title: "Research Showcase",
                description: "Platform for presenting innovative research and receiving feedback",
                gradient: "from-purple-500 to-indigo-600",
              },
              {
                title: "Publication Opportunities",
                description: "Selected papers published in prestigious indexed journals",
                gradient: "from-pink-500 to-rose-600",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden p-6 group hover:bg-purple-900/30 transition-all"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className={`h-2 w-16 bg-gradient-to-r ${highlight.gradient} rounded-full mb-6`}></div>

                <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                <p className="text-purple-100/70">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue & Date Card */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative backdrop-blur-sm bg-purple-900/30 rounded-2xl border border-purple-400/20 overflow-hidden p-6">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-50"></div>

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      <Calendar className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-purple-100/70">Date</p>
                    <p className="text-white font-medium">June 15-17, 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      <MapPin className="h-6 w-6 text-fuchsia-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-purple-100/70">Venue</p>
                    <p className="text-white font-medium">Tech Innovation Center, San Francisco</p>
                  </div>
                </div>

                <Link href="/venue">
                  <Button
                    variant="outline"
                    className="border-purple-400/30 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20 rounded-lg backdrop-blur-md whitespace-nowrap"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
