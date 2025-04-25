import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Globe, Users, Lightbulb, Target, Zap, ChevronRight, MapPin } from "lucide-react"

export default function AboutConference() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md mb-6">
              <span>NextGenSynergy 2025</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              About The Conference
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">
              Discover the vision, mission, and purpose behind NextGenSynergy 2025
            </p>
          </div>
        </div>
      </section>

      {/* About the Conference Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">About the Conference</h2>

                <div className="space-y-6 text-purple-100/90">
                  <p>
                  NextGenSynergy 2025 is a groundbreaking hybrid interdisciplinary forum designed to break down traditional boundaries between academic disciplines. This premier event brings together researchers, technologists, innovators, and change-makers from around the world — both in-person in Delhi and online — to explore collaborative approaches to today’s most complex challenges.
                  </p>
                  <p>
                  In a world where knowledge and innovation span across fields, NextGenSynergy creates a vibrant space for the cross-pollination of ideas, methodologies, and technologies. From keynote presentations by global thought leaders to interactive workshops, live panel discussions, and dynamic networking opportunities, every aspect of the conference is crafted to spark impactful, cross-disciplinary collaboration.
                  </p>

                  <p>
                  Whether you're a seasoned researcher, an industry expert, an emerging innovator, or a student exploring new frontiers, NextGenSynergy offers an inclusive and inspiring platform to engage with bold ideas and connect with a global community — both on the ground in Delhi and online from anywhere in the world.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
                  NextGenSynergy’s mission is to accelerate discovery, innovation, and collaboration by building a bridge between disciplines in a flexible, inclusive hybrid environment. We aim to:

                  </p>

                  <ul className="space-y-4 pl-6">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-xs">
                        1
                      </div>
                      <span>Break down silos between academic disciplines and research methods.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white font-bold text-xs">
                        2
                      </div>
                      <span>
                      Foster bold, collaborative approaches to global challenges.  
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-bold text-xs">
                        3
                      </div>
                      <span>
                      Showcase hybrid technologies that enable new forms of inquiry and connection.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white font-bold text-xs">
                        4
                      </div>
                      <span>Build a diverse, worldwide community of changemakers — no matter where they are.  </span>
                    </li>
                  </ul>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "World-Class Speakers",
                description:
                  "Hear from leading scientists, technologists, entrepreneurs, and artists reshaping the world through cross-disciplinary work.",
                icon: <Users className="h-8 w-8 text-cyan-400" />,
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                title: "Interactive Workshops",
                description:
                  "Take part in hands-on hybrid sessions exploring collaborative research tools and innovative frameworks.",
                icon: <Lightbulb className="h-8 w-8 text-fuchsia-400" />,
                gradient: "from-fuchsia-500 to-purple-600",
              },
              {
                title: "Networking Opportunities",
                description: "Connect with peers, mentors, investors, and potential collaborators — in-person or virtually — through smart networking tools and curated meetups.",
                icon: <Zap className="h-8 w-8 text-purple-400" />,
                gradient: "from-purple-500 to-indigo-600",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden p-6 group hover:bg-purple-900/30 transition-all"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${highlight.gradient} p-0.5 mb-4`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      {highlight.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                  <p className="text-purple-100/70">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Why Attend NextGenSynergy 2025</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Unparalleled Insights</h3>
                      <p className="text-purple-100/80">
                      Get inspired by world-renowned speakers, bold thinkers, and trailblazers from diverse domains.

                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Hands-on Innovation</h3>
                      <p className="text-purple-100/80">
                      Join live demonstrations, problem-solving labs, and collaborative design sprints that turn ideas into impact.

                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Global Networking                      </h3>
                      <p className="text-purple-100/80">
                      Build meaningful connections with global professionals — whether you're on-site in Delhi or joining remotely.

                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Nextgen Awards Gala</h3>
                      <p className="text-purple-100/80">
                      Celebrate boundary-pushing individuals and teams driving change across disciplines and sectors.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Attend Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Who Can Attend</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Researchers and industry experts",
                      description: "Faculty, postdoctoral researchers, and graduate students from all disciplines",
                      gradient: "from-cyan-400 to-blue-500",
                    },
                    {
                      title: "Business and technology leaders",
                      description: "R&D specialists, technology developers, and innovation leaders",
                      gradient: "from-fuchsia-400 to-purple-500",
                    },
                    {
                      title: "Interdisciplinary forum participants",
                      description: "Those interested in the future of virtual collaboration and research",
                      gradient: "from-purple-400 to-indigo-500",
                    },
                    {
                      title: "Students",
                      description: "Undergraduate and graduate students exploring interdisciplinary research",
                      gradient: "from-pink-400 to-fuchsia-500",
                    },
                  ].map((attendee, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${attendee.gradient} mt-2`}></div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">{attendee.title}</h3>
                        <p className="text-purple-100/80">{attendee.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg px-8 py-6 text-lg">
                    Register Now
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Card */}
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
                    <p className="text-white font-medium">August 21<sup>st</sup> - 22<sup>nd</sup>, 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      <MapPin className="h-6 w-6 text-fuchsia-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-purple-100/70">Hybrid - Accessible Worldwide</p>
                    <p className="text-white font-medium"> Delhi</p>
                  </div>
                </div>

                <Link href="/registration">
                  <Button
                    variant="outline"
                    className="border-purple-400/30 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20 rounded-lg backdrop-blur-md whitespace-nowrap"
                  >
                   Registrater Now
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