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
      title: "Virtual Research Environments",
      subtopics: [
        "Design and implementation of virtual research spaces",
        "Collaborative tools for remote scientific inquiry",
        "Virtual reality applications in laboratory settings",
        "Data visualization in immersive environments",
      ],
    },
    {
      title: "Cross-Disciplinary Methodologies",
      subtopics: [
        "Integrating qualitative and quantitative approaches",
        "Adapting methods across disciplinary boundaries",
        "Novel frameworks for interdisciplinary collaboration",
        "Case studies of successful cross-disciplinary projects",
      ],
    },
    {
      title: "AI and Machine Learning in Research",
      subtopics: [
        "AI-assisted literature review and knowledge synthesis",
        "Machine learning for data analysis across disciplines",
        "Ethical considerations in AI-augmented research",
        "Predictive modeling for complex systems",
      ],
    },
    {
      title: "Digital Twins and Simulation",
      subtopics: [
        "Creating digital twins of physical research environments",
        "Simulation techniques for hypothesis testing",
        "Real-time data integration with virtual models",
        "Applications in urban planning, healthcare, and engineering",
      ],
    },
    {
      title: "Ethics and Governance",
      subtopics: [
        "Ethical frameworks for virtual research",
        "Data privacy and security in collaborative environments",
        "Governance models for multidisciplinary projects",
        "Inclusivity and accessibility in virtual research spaces",
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
              <span>MetaConnect 2025</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Theme and Topics
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">Explore the research areas and themes for MetaConnect 2025</p>
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
                    "Bridging Worlds: The Future of Multidisciplinary Research in Virtual Environments"
                  </p>

                  <p>
                    MetaConnect 2025 explores how virtual environments are transforming the landscape of
                    multidisciplinary research. As traditional boundaries between academic disciplines continue to
                    dissolve, new technologies are enabling unprecedented forms of collaboration and discovery.
                  </p>

                  <p>
                    This conference brings together researchers, technologists, and visionaries to examine the current
                    state and future potential of virtual research environments. We invite contributions that showcase
                    innovative approaches to multidisciplinary collaboration, novel applications of virtual and
                    augmented reality in research, and critical perspectives on the ethical and methodological
                    implications of these emerging technologies.
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
                          relevance to the conference theme.
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
                          Abstracts will be reviewed by our scientific committee. If accepted, you'll be invited to
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
                          undergo a double-blind peer review.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Presentation</h3>
                        <p className="text-purple-100/80">
                          Accepted papers will be presented at the conference either as oral presentations or posters,
                          depending on the scientific committee's recommendation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl border border-purple-400/20 p-6 mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="h-6 w-6 text-cyan-400" />
                      <h3 className="text-lg font-medium text-white">Important Dates</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between">
                        <span className="text-purple-100/80">Abstract Submission Deadline:</span>
                        <span className="text-white font-medium">January 15, 2025</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-purple-100/80">Abstract Acceptance Notification:</span>
                        <span className="text-white font-medium">February 15, 2025</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-purple-100/80">Full Paper Submission Deadline:</span>
                        <span className="text-white font-medium">April 1, 2025</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-purple-100/80">Final Acceptance Notification:</span>
                        <span className="text-white font-medium">May 1, 2025</span>
                      </div>
                    </div>
                  </div> */}
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
