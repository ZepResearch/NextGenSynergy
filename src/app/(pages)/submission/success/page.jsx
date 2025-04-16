import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight, ArrowLeft, Calendar } from "lucide-react"

export default function SubmissionSuccess() {
  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md mb-6">
              <span>NextGenSynergy</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Submission Successful
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">
              Thank you for contributing to NextGenSynergy: The Virtual Interdisciplinary Forum
            </p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      <section className=" pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative p-8 md:p-12 text-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-cyan-500 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                    <CheckCircle className="h-10 w-10 text-green-400" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Your Paper Has Been Submitted</h2>

                <div className="space-y-6 text-purple-100/90 max-w-2xl mx-auto">
                  <p>
                    Thank you for submitting your paper to NextGenSynergy: The Virtual Interdisciplinary Forum. Your
                    contribution is an important part of advancing interdisciplinary research and collaboration.
                  </p>

                  <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl border border-purple-400/20 p-6 text-left">
                    <h3 className="text-xl font-medium text-white mb-4">What Happens Next?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">1</span>
                        </div>
                        <span>
                          Our scientific committee will review your submission and evaluate it based on relevance,
                          originality, and quality.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">2</span>
                        </div>
                        <span>
                          You will receive a notification regarding the status of your submission within 4-6 weeks.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">3</span>
                        </div>
                        <span>
                          If accepted, you will receive further instructions on preparing your final paper and
                          presentation.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-4 mt-8">
                    <Calendar className="h-5 w-5 text-cyan-400" />
                    <span>Mark your calendar: NextGenSynergy will take place on July 17th - 18th, 2025</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 rounded-lg"
                  >
                    <Link href="/">
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Return to Home
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white border-0 rounded-lg"
                  >
                    <Link href="/schedule">View Conference Schedule</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
