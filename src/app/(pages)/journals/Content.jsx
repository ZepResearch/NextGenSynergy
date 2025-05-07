"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight, BookOpen, Search, Loader2, ExternalLink, FileText } from "lucide-react"

import { JournalCard } from "./components/journal-card"
import { Input } from "@/components/ui/input"
import { pb } from "@/lib/pocketbase"


export default function JournalsPage() {
  const [journals, setJournals] = useState([])
  const [filteredJournals, setFilteredJournals] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const records = await pb.collection("NextGenSynergy_journals").getFullList({
          sort: "title",
          requestKey: null
        })
        setJournals(records)
        setFilteredJournals(records)
      } catch (err) {
        console.error("Error fetching journals:", err)
        setError("Failed to load journals. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchJournals()
  }, [])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredJournals(journals)
    } else {
      const filtered = journals.filter((journal) => journal.title.toLowerCase().includes(searchQuery.toLowerCase()))
      setFilteredJournals(filtered)
    }
  }, [searchQuery, journals])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md mb-6">
              <span>NextGenSynergy</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Scientific Journals
            </motion.h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <motion.p
              className="text-lg text-purple-100/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our collection of peer-reviewed journals for multidisciplinary research
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search journals by title..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 bg-purple-900/30 border-purple-500/30 text-white placeholder:text-purple-300/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journals Section */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-12 w-12 text-purple-400 animate-spin mb-4" />
              <p className="text-purple-200">Loading journals...</p>
            </div>
          ) : error ? (
            <div className="relative backdrop-blur-sm bg-red-900/20 rounded-3xl border border-red-400/20 overflow-hidden p-8 max-w-2xl mx-auto text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative">
                <p className="text-red-200 text-lg mb-4">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg text-white"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : filteredJournals.length === 0 ? (
            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden p-8 max-w-2xl mx-auto text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative">
                <FileText className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <p className="text-purple-200 text-lg mb-2">No journals found matching your search.</p>
                <p className="text-purple-300/70">Try a different search term or browse all journals.</p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-cyan-600 to-fuchsia-600 rounded-lg text-white"
                  >
                    Show All Journals
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJournals.map((journal, index) => (
                <JournalCard key={journal.id} journal={journal} index={index} pocketbaseUrl={pb.baseUrl} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Journal Submission CTA */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative backdrop-blur-sm bg-purple-900/30 rounded-2xl border border-purple-400/20 overflow-hidden p-8 text-center">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-50"></div>

              <div className="relative">
                <BookOpen className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Interested in Publishing Your Research?</h3>
                <p className="text-purple-100/80 mb-6 max-w-2xl mx-auto">
                  Submit your research paper to one of our peer-reviewed journals and contribute to the advancement of
                  interdisciplinary knowledge.
                </p>

                <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400">
                  <a
                    href="/submission"
                    className="flex items-center px-6 py-2 rounded-full bg-purple-900/70 backdrop-blur-sm text-white font-medium hover:bg-purple-900/50 transition-colors"
                  >
                    Submit Your Paper
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
