import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Trophy, GraduationCap, Star, Users, FileText } from "lucide-react"

export default function Awards() {
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
              Conference Awards
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">
              Recognizing excellence in multidisciplinary research and presentation
            </p>
          </div>
        </div>
      </section>

      {/* Awards Introduction */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Excellence in Research</h2>

                <div className="space-y-6 text-purple-100/90">
                  <p>
                    MetaConnect 2025 is proud to recognize outstanding contributions to multidisciplinary research and
                    presentation excellence. Our awards celebrate innovative approaches, rigorous methodology, and
                    effective communication of complex ideas.
                  </p>

                  <p>
                    Winners will be announced during the closing ceremony on April 24, 2025. All conference
                    participants are eligible for consideration, with special categories for student researchers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-1">
                      3
                    </div>
                    <div className="text-purple-100/80">Award Categories</div>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-purple-300 mb-1">
                      $5,000
                    </div>
                    <div className="text-purple-100/80">Total Prize Value</div>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-1">
                      5
                    </div>
                    <div className="text-purple-100/80">Expert Judges</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Award Categories
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Best Talk Award */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-70"></div>
              
              <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
                
                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 -mt-4 mb-6 shadow-lg shadow-cyan-500/20">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                        <Trophy className="h-10 w-10 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white text-center mb-4">Best Talk Award</h3>

                  <div className="space-y-4 text-purple-100/90 flex-grow">
                    <p>
                      Recognizing exceptional oral presentation skills, clarity of communication, and audience
                      engagement. This award celebrates researchers who can effectively convey complex ideas in an
                      accessible and compelling manner.
                    </p>

                    <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl border border-purple-400/10 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-cyan-400" />
                        <span className="text-white font-medium">Award Criteria</span>
                      </div>

                      <ul className="space-y-2 pl-7">
                        <li className="list-disc text-purple-100/80">Clarity and organization of presentation</li>
                        <li className="list-disc text-purple-100/80">Quality of visual materials</li>
                        <li className="list-disc text-purple-100/80">Engagement with audience</li>
                        <li className="list-disc text-purple-100/80">Handling of Q&A session</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400">
                      <div className="px-6 py-2 rounded-full bg-purple-900/70 backdrop-blur-sm text-white font-medium">
                        $2,000 Prize
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Paper Award */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-70"></div>
              
              <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20"></div>
                
                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 p-0.5 -mt-4 mb-6 shadow-lg shadow-fuchsia-500/20">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                        <FileText className="h-10 w-10 text-fuchsia-400" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white text-center mb-4">Top Paper Award</h3>

                  <div className="space-y-4 text-purple-100/90 flex-grow">
                    <p>
                      Honoring outstanding research papers that demonstrate methodological rigor, innovative approaches,
                      and significant contributions to their field. This award recognizes the highest quality of
                      written scholarship presented at the conference.
                    </p>

                    <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl border border-purple-400/10 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-fuchsia-400" />
                        <span className="text-white font-medium">Award Criteria</span>
                      </div>

                      <ul className="space-y-2 pl-7">
                        <li className="list-disc text-purple-100/80">Originality and innovation</li>
                        <li className="list-disc text-purple-100/80">Methodological rigor</li>
                        <li className="list-disc text-purple-100/80">Significance of findings</li>
                        <li className="list-disc text-purple-100/80">Quality of writing and organization</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-400">
                      <div className="px-6 py-2 rounded-full bg-purple-900/70 backdrop-blur-sm text-white font-medium">
                           $2,000 Prize
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Student Award */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-70"></div>
              
              <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></div>
                
                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex justify-center">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-0.5 -mt-4 mb-6 shadow-lg shadow-purple-500/20">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                        <GraduationCap className="h-10 w-10 text-purple-400" />
                      </div>
                    </div>
                    </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Best Student Award</h3>

                  <div className="space-y-4 text-purple-100/90 flex-grow">
                    <p>
                      Celebrating outstanding research contributions from student participants. This award recognizes
                      emerging scholars who demonstrate exceptional promise, innovative thinking, and high-quality
                      research while still pursuing their academic degrees.
                    </p>

                    <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl border border-purple-400/10 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-purple-400" />
                        <span className="text-white font-medium">Award Criteria</span>
                      </div>

                      <ul className="space-y-2 pl-7">
                        <li className="list-disc text-purple-100/80">Quality of research</li>
                        <li className="list-disc text-purple-100/80">Independence of work</li>
                        <li className="list-disc text-purple-100/80">Presentation skills</li>
                        <li className="list-disc text-purple-100/80">Potential impact of research</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400">
                      <div className="px-6 py-2 rounded-full bg-purple-900/70 backdrop-blur-sm text-white font-medium">
                        $1,000 Prize
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Judging Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Judging Process</h2>
                </div>

                <div className="space-y-6 text-purple-100/90">
                  <p>
                    All submissions and presentations at MetaConnect 2025 will be evaluated by our panel of expert
                    judges, comprising leading researchers, industry professionals, and academic leaders in
                    multidisciplinary research.
                  </p>

                  <div className="space-y-6 mt-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Initial Screening</h3>
                        <p className="text-purple-100/80">
                          All eligible submissions are reviewed by the scientific committee to create a shortlist of
                          candidates for each award category.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Live Evaluation</h3>
                        <p className="text-purple-100/80">
                          Judges attend presentations and evaluate them based on the specific criteria for each award
                          category.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Final Selection</h3>
                        <p className="text-purple-100/80">
                          The judging panel meets to review all evaluations and select the winners for each category.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Award Ceremony</h3>
                        <p className="text-purple-100/80">
                          Winners are announced and recognized during the closing ceremony on April 24, 2025.
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

      {/* CTA Section */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative backdrop-blur-sm bg-purple-900/30 rounded-2xl border border-purple-400/20 overflow-hidden p-6">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-50"></div>

              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-3">Ready to Showcase Your Research?</h3>
                <p className="text-purple-100/80 mb-6">
                  Submit your paper and register for MetaConnect 2025 to be considered for our prestigious awards.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 rounded-lg">
                    Submit Your Paper
                  </Button>
                  <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white border-0 rounded-lg">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
