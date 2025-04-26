"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Zap, Users, Star, FileText, Award } from "lucide-react"
import PocketBase from "pocketbase"
import { pb } from "@/lib/pocketbase"

// Icon mapping for different event types
const iconMapping = {
  "early-bird": Calendar,
  abstract: FileText,
  "full-paper": Star,
  registration: Users,
  conference: Calendar,
  notification: Clock,
  award: Award,
  default: Zap,
}

// Sample timeline data (will be replaced with PocketBase data)
const sampleTimelineData = [
  {
    id: "1",
    name: "Abstract Submission Deadline",
    description: "Last date to submit your abstract for review",
    date: "March 15, 2025",
    type: "abstract",
  },
  {
    id: "2",
    name: "Abstract Acceptance Notification",
    description: "Notification of abstract acceptance decisions",
    date: "April 10, 2025",
    type: "notification",
  },
  {
    id: "3",
    name: "Early Bird Registration",
    description: "Register early for discounted rates",
    date: "May 1, 2025",
    type: "early-bird",
  },
  {
    id: "4",
    name: "Full Paper Submission",
    description: "Deadline for full paper submissions",
    date: "June 20, 2025",
    type: "full-paper",
  },
  {
    id: "5",
    name: "Registration Deadline",
    description: "Last date to register for the conference",
    date: "July 30, 2025",
    type: "registration",
  },
  {
    id: "6",
    name: "Conference Dates",
    description: "MetaConnect 2025 Conference",
    date: "August 21-22, 2025",
    type: "conference",
  },
]

export function DateTimeline() {
  const [timelineData, setTimelineData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        // Initialize PocketBase
       

        // Fetch timeline data
        const records = await pb.collection("NextGenSynergy_date").getFullList({
          sort: "date",
          requestKey: null
        })

        if (records && records.length > 0) {
          // Transform the records to match our timeline format
          const formattedData = records.map((record) => ({
            id: record.id,
            name: record.name,
            description: record.description,
            date: record.date,
            type: record.type || "default",
          }))

          setTimelineData(formattedData)
        }

        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch timeline data:", err)
        // Keep using sample data if fetch fails
        setLoading(false)
      }
    }

    fetchTimelineData()
  }, [])

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
            Conference Timeline
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">Key dates to remember for MetaConnect 2025</p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin"></div>
              <div
                className="absolute inset-2 rounded-full border-2 border-transparent border-l-fuchsia-400 animate-spin"
                style={{ animationDuration: "1.5s" }}
              ></div>
              <div
                className="absolute inset-4 rounded-full border-2 border-transparent border-r-purple-400 animate-spin"
                style={{ animationDuration: "2s" }}
              ></div>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="relative backdrop-blur-sm bg-red-900/20 rounded-xl border border-red-400/20 p-6 max-w-md mx-auto">
            <p className="text-red-300 text-center">{error}</p>
          </div>
        )}

        {/* Timeline */}
        {!loading && !error && (
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-fuchsia-400/50 rounded-full"></div>

            {/* Timeline items */}
            {timelineData.map((item, index) => {
              const IconComponent = iconMapping[item.type] || iconMapping.default
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-16 last:mb-0"
                >
                  <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
                    {/* Timeline node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-0.5 shadow-lg shadow-purple-500/20">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/90 backdrop-blur-sm">
                          <IconComponent className={`h-5 w-5 ${isEven ? "text-cyan-400" : "text-fuchsia-400"}`} />
                        </div>
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? "md:pr-12" : "md:pl-12"} mt-12 md:mt-0`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative backdrop-blur-sm bg-purple-900/20 rounded-xl border border-purple-400/20 overflow-hidden p-6"
                      >
                        {/* Decorative elements */}
                        <div
                          className={`absolute -inset-px rounded-xl bg-gradient-to-r ${isEven ? "from-cyan-500/20 via-transparent to-transparent" : "from-transparent via-transparent to-fuchsia-500/20"} opacity-50`}
                        ></div>

                        <div className="relative">
                          <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                          <p className="text-purple-100/80 mb-3">{item.description}</p>
                          <div
                            className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${isEven ? "bg-cyan-500/10 text-cyan-300 border border-cyan-400/30" : "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-400/30"}`}
                          >
                            <Calendar className="mr-1.5 h-3.5 w-3.5" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
