import Link from "next/link"
import { Award, MapPin, Handshake, Users, Calendar, BookA, Book } from "lucide-react"

export function CtaSection() {
  const ctaCards = [
    {
      title: "Awards",
      description: "Recognizing groundbreaking contributions across disciplines — from AI and sustainability to education, health, and technology.",
      icon: <Award className="w-10 h-10 text-cyan-400" />,
      link: "/awards",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Venue",
      description: "Attend in person at Delhi or join our vibrant virtual platform — wherever you are in the world.",
      icon: <MapPin className="w-10 h-10 text-fuchsia-400" />,
      link: "/venue",
      gradient: "from-fuchsia-500 to-purple-600",
    },
    {
      title: "Sponsorship",
      description: "Showcase your organization’s commitment to innovation and interdisciplinary advancement by partnering with NextGen Synergy.",
      icon: <Handshake className="w-10 h-10 text-purple-400" />,
      link: "/sponsorship",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Committee",
      description: "Meet the diverse panel of experts, researchers, and thought leaders driving the vision and quality of this hybrid forum.",
      icon: <Users className="w-10 h-10 text-pink-400" />,
      link: "/committee",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Schedule",
      description: "Explore our dynamic 2-day agenda filled with live sessions, networking opportunities, virtual lounges, and interactive panels.",
      icon: <Calendar className="w-10 h-10 text-cyan-400" />,
      link: "/schedule",
      gradient: "from-cyan-500 to-teal-600",
    },
    {
      title: "Journal",
      description: "Access a curated library of cross-disciplinary publications and research papers contributed by global participants.",
      icon: <Book className="w-10 h-10 text-lime-400" />,
      link: "/journals",
      gradient: "from-lime-500 to-teal-600",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
            Explore NextGenSynergy
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
            Discover all aspects of our conference and find the information you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ctaCards.map((card, index) => (
            <Link
              href={card.link}
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-purple-400/20 bg-purple-900/20 backdrop-blur-sm transition-all hover:bg-purple-900/30 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

              {/* Decorative elements */}
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${card.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
              ></div>

              <div className="relative p-6 flex flex-col h-full">
                <div className="mb-4">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} p-0.5`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      {card.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-purple-100/70 mb-4 flex-grow">{card.description}</p>

                <div className="inline-flex items-center text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors mt-auto">
                  <span>Learn more</span>
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

