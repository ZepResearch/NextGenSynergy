import { Button } from "@/components/ui/button"
import { ChevronRight, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function PapersFormat() {
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
              Paper Format Guidelines
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">Download templates and learn how to format your submission</p>
          </div>
        </div>
      </section>

      {/* Paper Format Guidelines Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Paper Format Guidelines</h2>

                <div className="space-y-6 text-purple-100/90">
                  <p>
                    All submissions to MetaConnect 2025 must follow our formatting guidelines to ensure consistency and
                    readability. We provide templates for different types of submissions to make this process easier.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-white">General Requirements</h3>

                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 mt-2"></div>
                        <span>Use the provided templates without modifying margins, font sizes, or styles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 mt-2"></div>
                        <span>Abstract submissions should not exceed 300 words</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 mt-2"></div>
                        <span>Full papers should be between 8-12 pages, including figures, tables, and references</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 mt-2"></div>
                        <span>
                          Poster presentations should follow the A0 format (841 × 1189 mm) in portrait orientation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 mt-2"></div>
                        <span>All submissions must be in PDF format</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-white">Citation Style</h3>

                    <p>
                      MetaConnect 2025 uses the IEEE citation style for all submissions. Please ensure that your
                      references are formatted according to this style. The templates provided include examples of how
                      to format different types of references.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-white">Language</h3>

                    <p>
                      All submissions must be in English. We recommend having your paper proofread by a native English
                      speaker or professional editing service before submission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Download Templates
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
              Use our official templates for your submissions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Abstract Format",
                description: "Template for 300-word abstract submissions",
                formats: ["file"],
                gradient: "from-cyan-500 to-blue-600",
                icon: <FileText className="h-10 w-10 text-cyan-400" />,
                href: "/templates/Abstract_Template.docx",
              },
              {
                title: "Full Paper Format",
                description: "Template for 8-12 page full paper submissions",
                formats: ["file"],
                gradient: "from-fuchsia-500 to-purple-600",
                icon: <FileText className="h-10 w-10 text-fuchsia-400" />,
                href: "/templates/Fullpaper_Template.doc",
              },
              {
                title: "Poster Format",
                description: "Template for A0 poster presentations",
                formats: ["file"],
                gradient: "from-purple-500 to-indigo-600",
                icon: <FileText className="h-10 w-10 text-purple-400" />,
                href: "/templates/poster.jpg",
              },
            ].map((template, index) => (
              <div
                key={index}
                className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden p-6 group hover:bg-purple-900/30 transition-all"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${template.gradient} p-0.5 mb-4`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      {template.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{template.title}</h3>
                  <p className="text-purple-100/70 mb-6">{template.description}</p>

                  <div className="space-y-3">
                    {template.formats.map((format, formatIndex) => (
                      <Button
                      asChild
                        key={formatIndex}
                        variant="outline"
                        className="w-full border-purple-400/30 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20 rounded-lg backdrop-blur-md"
                      >
                        <Link href={template.href} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download {format}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
