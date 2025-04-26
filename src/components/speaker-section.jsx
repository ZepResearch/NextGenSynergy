"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, MapPin, Briefcase, UniversityIcon } from "lucide-react"
import PocketBase from "pocketbase"
import { Button } from "@/components/ui/button"
import { pb } from "@/lib/pocketbase"

// Speaker categories
const speakerCategories = [
    { id: "Guest Speaker", title: "Guest Speaker" },
    { id: "Keynote Speaker", title: "Keynote Speaker" },
    { id: "Conference Chair", title: "Conference Chair" },
    { id: "Conference Co-Chair", title: "Conference Co-Chair" },
    { id: "Session Chair", title: "Session Chair" },
  ];

// Sample speaker data (will be replaced with PocketBase data)
const sampleSpeakers = {
  keynote: [
    {
      id: "1",
      name: "Dr. Amara Singh",
      role: "Quantum Computing Researcher",
      organization: "Delhi Institute of Technology",
      country: "India",
      bio: "Dr. Singh is a leading researcher in quantum computing applications for multidisciplinary research. Her work bridges the gap between theoretical physics and practical applications in various scientific domains.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "2",
      name: "Prof. Michael Chen",
      role: "Director of Metaverse Studies",
      organization: "Global Research Alliance",
      country: "Singapore",
      bio: "Professor Chen has pioneered research on the intersection of virtual worlds and scientific collaboration. His work focuses on creating immersive environments for cross-disciplinary research teams.",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
  invited: [
    {
      id: "3",
      name: "Dr. Sophia Rodriguez",
      role: "AI Ethics Researcher",
      organization: "Tech Ethics Institute",
      country: "Mexico",
      bio: "Dr. Rodriguez specializes in ethical considerations of AI in research environments. Her work has shaped policies for responsible AI use across multiple disciplines.",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
  session: [
    {
      id: "4",
      name: "Dr. James Wilson",
      role: "Biotechnology Researcher",
      organization: "Life Sciences University",
      country: "United Kingdom",
      bio: "Dr. Wilson leads research on digital twins for biological systems. His session will focus on virtual modeling of complex biological processes.",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
}

// Speaker card component
const SpeakerCard = ({ speaker, onMoreInfo }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative backdrop-blur-sm bg-purple-900/20 rounded-xl border border-purple-400/20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/20 via-transparent to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative p-1">
        {/* Speaker image */}
        <div className="relative h-[280px] w-full rounded-lg overflow-hidden mb-4 border border-purple-400/30">
          <Image src={`https://conference.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`} alt={speaker.name} fill className="object-contain" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent"></div>

          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 h-12 w-12 rounded-full bg-cyan-400 blur-xl opacity-50 animate-pulse"></div>
          <div
            className="absolute bottom-1/3 left-1/3 h-16 w-16 rounded-full bg-fuchsia-400 blur-xl opacity-50 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Speaker info */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
          <p className="text-cyan-300 font-medium mb-1">{speaker.role}</p>
          {/* <div className="flex items-center gap-1.5 text-purple-100/70 text-sm mb-3">
            <Briefcase className="h-3.5 w-3.5" />
            <span>{speaker.organization}</span>
          </div> */}
          <div className="flex items-center gap-1.5 text-purple-100/70 text-sm mb-4">
            <MapPin className="h-3.5 w-3.5" />
            <span>{speaker.country}</span>
          </div>

          <Button
            onClick={() => onMoreInfo(speaker)}
            className="w-full bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg"
          >
            View Profile
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

// Speaker detail drawer component
const SpeakerDrawer = ({ isOpen, onClose, speaker }) => (
  <AnimatePresence>
    {isOpen && speaker && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 "
          onClick={onClose}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-purple-900/90 backdrop-blur-md border-l border-purple-400/20 shadow-2xl z-[100] overflow-y-auto"
        >
          <div className="p-6 flex flex-col h-full relative pt-24">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-purple-800/80 flex items-center justify-center text-purple-100 hover:bg-purple-700/80 transition-colors"
              aria-label="Close drawer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Speaker image */}
            <div className="relative h-[300px] w-full rounded-xl overflow-hidden border border-purple-400/30 mt-6 mb-6">
              <Image src={`  https://conference.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`}alt={speaker.name} fill className="object-contain" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent"></div>
            
              {/* Floating elements */}
              <div className="absolute top-1/4 right-1/4 h-16 w-16 rounded-full bg-cyan-400 blur-xl opacity-50 animate-pulse"></div>
              <div
                className="absolute bottom-1/3 left-1/3 h-20 w-20 rounded-full bg-fuchsia-400 blur-xl opacity-50 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Speaker info */}
            <h2 className="text-2xl font-bold text-white mb-2">{speaker.name}</h2>
            <h3 className="text-xl text-cyan-300 font-medium mb-1">{speaker.role}</h3>

            <div className="flex items-center gap-2 text-purple-100/70 text-sm mb-1 mt-2">
              <UniversityIcon className="h-4 w-4" />
              <span>{speaker.college}</span>
            </div>

            <div className="flex items-center gap-2 text-purple-100/70 text-sm mb-6">
              <MapPin className="h-4 w-4" />
              <span>{speaker.country}</span>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent mb-6"></div>

            <h4 className="text-lg font-medium text-white mb-3">Biography</h4>
            <p className="text-purple-100/80 flex-grow">{speaker.bio}</p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent my-6"></div>

            <Button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg py-6"
            >
              Close
            </Button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
)

export function SpeakerSection() {
  const [activeCategory, setActiveCategory] = useState("Guest Speaker")
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [speakers, setSpeakers] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        // Initialize PocketBase
        
        // Fetch speakers
        const records = await pb.collection("NextGenSynergy_speakers").getFullList({
          sort: "name",
            requestKey: null,
        })

        if (records && records.length > 0) {
          // Group speakers by category
          const groupedSpeakers = records.reduce((acc, speaker) => {
            const category = speaker.category;
            if (!acc[category]) {
              acc[category] = []
            }

            acc[category].push({
                name: speaker.name,
                role: speaker.role,
                image: speaker.image,
                bio: speaker.bio,
                id: speaker.id,
                collectionId: speaker.collectionId,
                college: speaker.college,
                country: speaker.country,
            })

            return acc
          }, {})

          // Ensure all categories exist in the grouped speakers object
          speakerCategories.forEach(({ id }) => {
            if (!groupedSpeakers[id]) {
              groupedSpeakers[id] = []
            }
          })

          setSpeakers(groupedSpeakers)
        }

        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch speakers:", err)
        // Keep using sample data if fetch fails
        setLoading(false)
      }
    }

    fetchSpeakers()
  }, [])

  const handleMoreInfo = (speaker) => {
    setSelectedSpeaker(speaker)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
            Distinguished Speakers
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
            Meet the brilliant minds shaping the future of multidisciplinary research
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {speakerCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/20"
                  : "bg-purple-900/30 text-purple-100 border border-purple-400/20 hover:bg-purple-900/50"
              }`}
            >
              {category.title}
            </motion.button>
          ))}
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

        {/* Speakers grid */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {speakers[activeCategory]?.length > 0 ? (
                speakers[activeCategory].map((speaker, index) => (
                  <motion.div
                    key={speaker.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <SpeakerCard speaker={speaker} onMoreInfo={handleMoreInfo} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-xl border border-purple-400/20 p-6 max-w-md mx-auto">
                    <p className="text-purple-100/80">No speakers found in this category</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Speaker detail drawer */}
        <SpeakerDrawer isOpen={isDrawerOpen} onClose={closeDrawer} speaker={selectedSpeaker} />
      </div>
    </section>
  )
}
