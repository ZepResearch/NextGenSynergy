"use client"

import { useRef, useEffect } from "react"
import { Star } from "lucide-react"

export function ReviewsSection() {
  const scrollRef = useRef(null)

  // Sample review data
  const reviews = [
    {
      name: "Dr. Ananya Mehta",
      location: "Stanford University",
      date: "March 15",
      rating: 5,
      comment:
        "NextGen Synergy nailed the hybrid experience. The speaker lineup was top-notch, and the ability to interact with people both in-person and virtually made it feel truly global. Super impressed with the smooth organization!"
    },
    {
      name: "Prof. Julian Morales",
      location: "Massachusetts Institute of Technology (MIT)",
      date: "March 12",
      rating: 5,
      comment:
        "The sessions on cross-disciplinary innovation in climate science were incredibly engaging. It’s rare to find a forum where content quality, networking, and accessibility align this well — NextGen Synergy delivered on all fronts."
    },
    {
      name: "Dr. Amina Hassan",
      location: "University of Oxford",
      date: "March 14",
      rating: 4,
      comment:
        "The conversations around blending social sciences with data were eye-opening. I appreciated being able to join virtually without missing out on Q&As or interactions. Looking forward to attending in person next year!"
    },
    {
      name: "Daniel Kim",
      location: "Google DeepMind",
      date: "March 10",
      rating: 5,
      comment:
        "This conference redefined how our team thinks about collaboration. The hybrid format helped us connect with experts in AI, ethics, and education that we wouldn't have otherwise crossed paths with."
    },
    {
      name: "Dr. Keiko Sakamoto",
      location: "Tokyo Institute of Technology",
      date: "March 13",
      rating: 4,
      comment:
        "Brilliant discussions across disciplines, especially during the workshops. The mix of live interaction and on-demand content made it easy to stay engaged, even across time zones."
    },
    {
      name: "Elena Fischer",
      location: "Berlin Institute for Advanced Study",
      date: "March 11",
      rating: 5,
      comment:
        "I loved the flexibility of attending virtually while still being part of breakout sessions and panels. It was well-curated, and the topics reflected real interdisciplinary trends happening now."
    }
  ];
  
  // Ratings data
  const ratingsData = {
    overall: 4.8,
    totalCount: 1247,
    categories: [
      { name: "Content Quality", rating: 4.9 },
      { name: "Virtual Experience", rating: 4.7 },
      { name: "Interdisciplinary Value", rating: 4.8 },
      { name: "Accessibility", rating: 4.6 },
    ],
  }

  // Animation for infinite scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId
    let isPaused = false

    const scroll = () => {
      if (!scrollContainer || isPaused) return

      scrollContainer.scrollTop += 0.5

      // Reset scroll position when reaching the bottom
      if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
        scrollContainer.scrollTop = 0
      }

      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    // Pause animation on hover
    const handleMouseEnter = () => {
      isPaused = true
    }

    const handleMouseLeave = () => {
      isPaused = false
      animationId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                Reviews and Ratings
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

              <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
                Explore what past attendees have to say about their NextGenSynergy experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {/* Left side - Overall ratings */}
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-purple-900/30 backdrop-blur-md rounded-2xl border border-purple-400/20 p-8 w-full">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-medium text-white mb-6">Overall Rating</h3>

                    <div className="flex flex-col items-center md:items-start mb-8">
                      <div className="text-6xl font-bold text-white mb-2">{ratingsData.overall}</div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${i < Math.floor(ratingsData.overall) ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-purple-100/70">Based on {ratingsData.totalCount} ratings</div>
                    </div>

                    <div className="space-y-4">
                      {ratingsData.categories.map((category, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-purple-100">{category.name}</span>
                            <span className="text-sm text-purple-100">{category.rating}</span>
                          </div>
                          <div className="h-2 rounded-full bg-purple-900/50 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                              style={{ width: `${(category.rating / 5) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Testimonials */}
              <div
                ref={scrollRef}
                className="h-[500px] overflow-hidden rounded-2xl border border-purple-400/20 bg-purple-900/30 backdrop-blur-md"
              >
                <div className="p-4 space-y-4">
                  {/* Duplicate reviews for continuous scrolling effect */}
                  {[...reviews, ...reviews].map((review, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-purple-900/40 border border-purple-400/10 backdrop-blur-sm"
                    >
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`}
                          />
                        ))}
                      </div>

                      <p className="text-purple-100 mb-4">{review.comment}</p>

                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-white">{review.name}</div>
                          <div className="text-sm text-purple-100/70">{review.location}</div>
                        </div>
                        <div className="text-xs text-purple-100/50">{review.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}