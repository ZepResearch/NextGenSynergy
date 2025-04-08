import { Button } from "@/components/ui/button"
import { ChevronRight, Mic, ImageIcon, Video } from "lucide-react"
import Link from "next/link"

export default function ModeOfPresentation() {
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
              Mode of Presentation
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">
              Learn about the different ways to present your research at MetaConnect 2025
            </p>
          </div>
        </div>
      </section>

      {/* Presentation Modes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Speak at the Event */}
            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden group hover:bg-purple-900/30 transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative p-8 md:p-10 h-full flex flex-col">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                    <Mic className="h-8 w-8 text-cyan-400" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-white">Speak at the Event</h2>

                <div className="space-y-4 text-purple-100/90 flex-grow">
                  <p>
                    Present your research in a 15-minute oral presentation followed by a 5-minute Q&A session. This
                    format is ideal for sharing detailed findings and engaging directly with the audience.
                  </p>

                  <h3 className="text-lg font-medium text-white mt-6">What to Prepare:</h3>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2"></div>
                      <span>PowerPoint or PDF presentation (16:9 format)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2"></div>
                      <span>Concise overview of your research methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2"></div>
                      <span>Clear presentation of key findings and implications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2"></div>
                      <span>Brief bio for the session chair's introduction</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 rounded-lg">
                <Link href={"/submission"} className="w-full">
                  Submit for Oral Presentation
                </Link>
                </Button>
              </div>
            </div>

            {/* Show a Poster */}
            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden group hover:bg-purple-900/30 transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative p-8 md:p-10 h-full flex flex-col">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                    <ImageIcon className="h-8 w-8 text-fuchsia-400" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-white">Show a Poster</h2>

                <div className="space-y-4 text-purple-100/90 flex-grow">
                  <p>
                    Present your research in a visual format during our dedicated poster sessions. This interactive
                    format allows for in-depth discussions with interested attendees.
                  </p>

                  <h3 className="text-lg font-medium text-white mt-6">What to Prepare:</h3>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500 mt-2"></div>
                      <span>A0 size poster (841 × 1189 mm) in portrait orientation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500 mt-2"></div>
                      <span>Clear visual representation of your research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500 mt-2"></div>
                      <span>QR code linking to additional resources (optional)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500 mt-2"></div>
                      <span>Handouts or business cards for interested attendees</span>
                    </li>
                  </ul>
                </div>

                <Button className="mt-8 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white border-0 rounded-lg">
                <Link href={"/submission"} className="w-full">
                  Submit for Poster Presentation
                </Link>
                </Button>
              </div>
            </div>

            {/* Present Online */}
            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden group hover:bg-purple-900/30 transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative p-8 md:p-10 h-full flex flex-col">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                    <Video className="h-8 w-8 text-purple-400" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-white">Present Online</h2>

                <div className="space-y-4 text-purple-100/90 flex-grow">
                  <p>
                    Can't attend in person? Present your research virtually through our dedicated online platform. This
                    option provides flexibility while still allowing for meaningful engagement.
                  </p>

                  <h3 className="text-lg font-medium text-white mt-6">What to Prepare:</h3>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 mt-2"></div>
                      <span>PowerPoint or PDF presentation (16:9 format)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 mt-2"></div>
                      <span>Stable internet connection (minimum 5 Mbps upload)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 mt-2"></div>
                      <span>Webcam and quality microphone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 mt-2"></div>
                      <span>Pre-recorded backup of your presentation</span>
                    </li>
                  </ul>
                </div>

                <Button className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-0 rounded-lg">
                <Link href={"/submission"} className="w-full">        
                  Submit for Virtual Presentation
                </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Presentation Guidelines</h2>

                <div className="space-y-6 text-purple-100/90">
                  <p>
                    Regardless of your presentation mode, please adhere to the following guidelines to ensure a smooth
                    and engaging experience for all participants:
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-xs">
                        1
                      </div>
                      <span>
                        <strong className="text-white">Be concise and focused.</strong> Clearly communicate your
                        research question, methodology, findings, and implications within the allotted time.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white font-bold text-xs">
                        2
                      </div>
                      <span>
                        <strong className="text-white">Use visuals effectively.</strong> Incorporate clear, high-quality
                        visuals that enhance understanding of your research.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-bold text-xs">
                        3
                      </div>
                      <span>
                        <strong className="text-white">Practice your presentation.</strong> Rehearse to ensure smooth
                        delivery and timing, especially for oral presentations.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white font-bold text-xs">
                        4
                      </div>
                      <span>
                        <strong className="text-white">Prepare for questions.</strong> Anticipate potential questions
                        and prepare thoughtful responses.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold text-xs">
                        5
                      </div>
                      <span>
                        <strong className="text-white">Engage with your audience.</strong> Encourage questions and
                        discussion to maximize the impact of your presentation.
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8 text-center">
                    <Button asChild className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg px-8 py-6 text-lg">
                    <Link  href={"/submission"} >
                 
                         Submit Your Presentation
                        </Link>  
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
