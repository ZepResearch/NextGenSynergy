"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Twitter, Linkedin, ChevronRight, Users, Sparkles, Globe } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { pb } from "@/lib/pocketbase"

export default function OrganizingCommittee() {
  const [committee, setCommittee] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCommittee = async () => {
      try {
        const records = await pb.collection("NextGenSynergy_committee").getFullList({
          sort: "name",
          requestKey: null,
        })
        setCommittee(records)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCommittee()
  }, [])

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-fuchsia-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-0.5 mb-6 animate-pulse">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                Loading Committee Data...
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-fuchsia-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                Error Loading Data
              </h2>
              <p className="mt-4 text-purple-100/90">{error}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
              Organizing Committee
            </motion.h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <motion.p
              className="text-lg text-purple-100/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Meet the visionaries behind NextGenSynergy: The Virtual Interdisciplinary Forum
            </motion.p>
          </div>
        </div>
      </section>

      {/* Committee Introduction */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden mb-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>

                <motion.h2
                  className="text-2xl md:text-3xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Driving Innovation Through Collaboration
                </motion.h2>

                <motion.div
                  className="space-y-6 text-purple-100/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p>
                    Our organizing committee brings together experts from diverse fields to create a truly
                    interdisciplinary forum. With backgrounds spanning technology, science, arts, and humanities, they
                    work together to break down traditional barriers between disciplines and foster innovative
                    approaches to complex challenges.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-1">
                      {committee.length}
                    </div>
                    <div className="text-purple-100/80">Committee Members</div>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-purple-300 mb-1">
                      12+
                    </div>
                    <div className="text-purple-100/80">Disciplines Represented</div>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-1">
                      Global
                    </div>
                    <div className="text-purple-100/80">Collaboration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members Grid */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {committee.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity"></div>

                <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden h-full transition-all group-hover:bg-purple-900/30">
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10"></div>

                  <div className="relative p-6 flex flex-col items-center">
                    <div className="relative h-56 w-56 rounded-full p-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-md opacity-50"></div>
                      <Avatar className="h-full w-full border-2 border-purple-900/50">
                        <AvatarImage
                          src={`http://${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${member.collectionId}/${member.id}/${member.img}`}
                          alt={member.name}
                          className="object-contain bg-purple-900/50"
                        />
                        <AvatarFallback className="bg-purple-900 text-white text-2xl">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300 text-center mb-2">
                      {member.name}
                    </h3>

                    <div className="px-3 py-1 rounded-full bg-purple-900/40 backdrop-blur-sm border border-purple-400/20 mb-4">
                      <p className="text-sm text-purple-100/90 font-medium">{member.designation}</p>
                    </div>

                    <p className="text-purple-100/80 text-center mb-3">{member.details}</p>

                    <div className="flex items-center gap-2 mt-auto">
                      <Globe className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm text-purple-100/70">{member.country}</span>
                    </div>

                    {/* Social Media Links */}
                    {(member.twitter || member.linkedin) && (
                      <div className="flex gap-3 mt-4">
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-900/50 border border-purple-400/30 text-cyan-400 hover:text-white hover:bg-cyan-500/50 transition-colors"
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-900/50 border border-purple-400/30 text-fuchsia-400 hover:text-white hover:bg-fuchsia-500/50 transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
