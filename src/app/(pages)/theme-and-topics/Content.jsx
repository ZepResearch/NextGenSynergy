"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, FileText, Plus, Minus } from "lucide-react"
import Link from "next/link"

export default function ThemeAndTopics() {
  const [openTopicIndex, setOpenTopicIndex] = useState(0)

  const toggleTopic = (index) => {
    setOpenTopicIndex(openTopicIndex === index ? null : index)
  }

  const topics = [
    {
      title: "Future of Technology and Innovation",
      subtopics: [
        "Emerging Tech Trends (AI, Blockchain, Quantum Computing)",
        "The Role of 5G and Beyond in Smart Connectivity",
        "Sustainability and Green Tech Innovations",
        "The Rise of Spatial Computing and Immersive Experiences (AR/VR/XR)",
      ],
    },
    {
      title: "Next-Generation Leadership",
      subtopics: [
        "Leading in a Disruptive World",
        "Building Adaptive and Resilient Teams",
        "Diversity, Equity, and Inclusion for the Future",
        "Mindful Leadership: Emotional Intelligence at Scale",
      ],
    },
    {
      title: "Data, Cybersecurity and Trust",
      subtopics: [
        "Data-Driven Decision Making for 2030",
        "Building Cyber-Resilient Organizations",
        "Digital Identity and Trust Frameworks",
        "Navigating the Ethics of Data and AI",
      ],
    },
    {
      title: "Sustainability and Impact",
      subtopics: [
        "ESG (Environmental, Social, Governance) in Action",
        "Climate Tech: Innovations Saving the Planet",
        "Corporate Responsibility and the Circular Economy",
        "Measuring Impact Beyond Profit",
      ],
    },
    {
      title: "Social Innovation & Global Impact",
      subtopics: [
        "Community Resilience & Policy Innovation",
        "Interdisciplinary Approaches to Inequality",
        "Youth Empowerment & Civic Tech",
        "Migration, Identity & Global Mobility",
      ],
    },
  ]

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
              Theme and Topics
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">Explore the research areas and themes for NextGenSynergy 2025</p>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Conference Theme</h2>

                <div className="space-y-6 text-purple-100/90">
                  <p className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                    "Converging Perspectives: Advancing Interdisciplinary Research in Virtual Spaces"
                  </p>

                  <p>
                    NextGenSynergy 2025 explores how virtual forums are revolutionizing interdisciplinary research and
                    collaboration. As traditional boundaries between academic fields continue to blur, digital
                    technologies are enabling unprecedented opportunities for knowledge integration and discovery.
                  </p>

                  <p>
                    This virtual forum brings together researchers, innovators, and thought leaders from diverse disciplines
                    to examine the current state and future possibilities of virtual interdisciplinary collaboration. 
                    We invite contributions that highlight innovative approaches to crossing disciplinary boundaries, 
                    novel applications of digital tools for collaborative research, and critical perspectives on the 
                    methodological and ethical implications of these emerging collaborative frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Cover Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              What We'll Cover
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
              Research topics and areas that can be selected for paper submissions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-purple-400/20 bg-purple-900/30 backdrop-blur-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleTopic(index)}
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <span className="text-lg font-medium text-white">{topic.title}</span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-800/50 text-purple-100">
                      {openTopicIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openTopicIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0">
                      <ul className="space-y-2">
                        {topic.subtopics.map((subtopic, subIndex) => (
                          <li key={subIndex} className="flex items-start gap-2 text-purple-100/80">
                            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 mt-2"></div>
                            <span>{subtopic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Submit Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">How to Submit Your Work</h2>

                <div className="space-y-6 text-purple-100/90">
                  <p>
                    We welcome submissions from researchers, practitioners, and students across all disciplines. The
                    submission process involves the following steps:
                  </p>

                  <div className="space-y-6 mt-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Prepare Your Abstract</h3>
                        <p className="text-purple-100/80">
                          Submit a 300-word abstract outlining your research question, methodology, findings, and
                          relevance to the interdisciplinary forum theme.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Abstract Review</h3>
                        <p className="text-purple-100/80">
                          Abstracts will be reviewed by our interdisciplinary committee. If accepted, you'll be invited to
                          submit a full paper.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Full Paper Submission</h3>
                        <p className="text-purple-100/80">
                          Submit your full paper (8-12 pages) following our formatting guidelines. All papers will
                          undergo a double-blind peer review by experts from relevant disciplines.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Virtual Presentation</h3>
                        <p className="text-purple-100/80">
                          Accepted papers will be presented in our virtual environment either as interactive sessions or digital posters,
                          depending on the committee's recommendation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6 justify-center">
            <Button asChild className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 rounded-lg px-8 py-6 text-lg">
             <Link href="/registration">
              Register Now
            </Link>
            </Button>

            <Button asChild className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white border-0 rounded-lg px-8 py-6 text-lg">
             <Link href="/submission">       
              Submit Paper
            </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}