import { ArrowRight, Target, Lightbulb, Handshake, Globe } from "lucide-react"

export function ObjectivesSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto mb-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                  Objectives of Conference
                </h2>

                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

                <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
                  MetaConnect aims to revolutionize how researchers collaborate across disciplines by leveraging virtual
                  environments and emerging technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ObjectiveCard
                  icon={<Target className="h-10 w-10" />}
                  title="Foster Interdisciplinary Collaboration"
                  description="Break down silos between academic disciplines by creating virtual spaces where researchers from diverse fields can collaborate on complex problems."
                  gradient="from-cyan-400 to-blue-500"
                />

                <ObjectiveCard
                  icon={<Lightbulb className="h-10 w-10" />}
                  title="Accelerate Innovation"
                  description="Provide a platform for sharing cutting-edge research methodologies and technologies that can accelerate scientific discovery across multiple domains."
                  gradient="from-fuchsia-400 to-purple-500"
                />

                <ObjectiveCard
                  icon={<Handshake className="h-10 w-10" />}
                  title="Build Global Research Networks"
                  description="Connect researchers, institutions, and industry partners to form lasting collaborations that transcend geographical and disciplinary boundaries."
                  gradient="from-purple-400 to-indigo-500"
                />

                <ObjectiveCard
                  icon={<Globe className="h-10 w-10" />}
                  title="Address Complex Global Challenges"
                  description="Harness collective expertise to tackle pressing global issues that require multidisciplinary approaches, from climate change to public health."
                  gradient="from-pink-400 to-fuchsia-500"
                />
              </div>

              <div className="mt-16 text-center">
                <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400">
                  <div className="px-6 py-2 rounded-full bg-purple-900/70 backdrop-blur-sm text-white font-medium">
                    Join us in shaping the future of research
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



function ObjectiveCard({ icon, title, description, gradient }) {
  return (
    <div className="group relative rounded-2xl border border-purple-400/20 bg-purple-900/20 p-6 backdrop-blur-sm transition-all hover:bg-purple-900/30">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

      <div className="relative flex flex-col gap-4">
        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} p-0.5`}>
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-purple-900/70 text-white">
            {icon}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="text-purple-100/70">{description}</p>

        <div className="mt-2">
          <div className="inline-flex items-center text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors">
            <span>Learn more</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

