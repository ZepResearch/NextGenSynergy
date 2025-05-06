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

// Speaker card component
const SpeakerCard = ({ speaker, onMoreInfo }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative backdrop-blur-sm bg-purple-900/20 rounded-xl border border-purple-400/20 overflow-hidden"
    >
      {/* Decorative elements */}

      <div className="relative p-1">
        {/* Speaker image */}
        <div className="relative h-[280px] w-full rounded-lg overflow-hidden mb-4 border border-purple-400/30">
          <Image 
            src={`https://conference.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`} 
            alt={speaker.name} 
            fill 
            className="object-contain" 
          />

          {/* Floating elements */}
         
        </div>

        {/* Speaker info */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
          <p className="text-cyan-300 font-medium mb-1">{speaker.role}</p>
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
              <Image 
                src={`https://conference.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`} 
                alt={speaker.name} 
                fill 
                className="object-contain" 
              />
            
              {/* Floating elements */}
              
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
  const [speakers, setSpeakers] = useState({}) // Initialize with empty object
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        // Initialize empty speakers object with all categories
        const initialSpeakers = {}
        speakerCategories.forEach(({ id }) => {
          initialSpeakers[id] = []
        })
        
        // Fetch speakers
        const records = await pb.collection("NextGenSynergy_speakers").getFullList({
          sort: "name",
          requestKey: null,
        })

        if (records && records.length > 0) {
          // Group speakers by category
          records.forEach(speaker => {
            const category = speaker.category
            if (category && initialSpeakers[category] !== undefined) {
              initialSpeakers[category].push({
                name: speaker.name,
                role: speaker.role,
                image: speaker.image,
                bio: speaker.bio,
                id: speaker.id,
                collectionId: speaker.collectionId,
                college: speaker.college,
                country: speaker.country,
              })
            }
          })
        }

        setSpeakers(initialSpeakers)
        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch speakers:", err)
        setError("Failed to load speakers. Please try again later.")
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
              {speakers[activeCategory] && speakers[activeCategory].length > 0 ? (
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
                  <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-xl border border-purple-400/20 p-8 max-w-md mx-auto">
                    <div className="mb-4">
                      <div className="relative h-24 w-24 mx-auto">
                        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 opacity-30 animate-pulse"></div>
                        <div className="absolute inset-4 rounded-full border-2 border-transparent border-l-fuchsia-400 opacity-30 animate-pulse" style={{ animationDuration: "1.5s" }}></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300 mb-2">Coming Soon</h3>
                    <p className="text-purple-100/80">Speakers will be announced soon. Please check back later.</p>
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