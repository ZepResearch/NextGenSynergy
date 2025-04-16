"use client"

import { useState } from "react"
import { Mail, Phone, Globe } from 'lucide-react'


export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)
  
  const faqItems = [
    {
      question: "What is NextGenSynergy?",
      answer: "NextGenSynergy is a cutting-edge virtual interdisciplinary forum focused on bridging diverse academic disciplines. It brings together researchers, educators, and practitioners to explore innovative approaches to complex problems through collaborative dialogue and knowledge exchange."
    },
    {
      question: "Who should attend NextGenSynergy?",
      answer: "NextGenSynergy is ideal for researchers, academics, industry professionals, policy makers, and students interested in interdisciplinary approaches, cross-disciplinary methodologies, and collaborative solutions to complex global challenges. Anyone seeking to expand their perspectives beyond traditional disciplinary boundaries will benefit."
    },
    {
      question: "How do I access the virtual sessions?",
      answer: "All registered participants will receive secure login credentials to our virtual conference platform one week before the event. The platform is accessible via web browser on any device with internet connectivity. Technical support will be available throughout the conference."
    },
    {
      question: "Are there opportunities for networking in a virtual format?",
      answer: "Absolutely! NextGenSynergy features specialized virtual networking rooms, themed discussion lounges, and AI-powered matchmaking to connect attendees with shared interests. Our platform enables both scheduled and spontaneous meetings, as well as persistent chat functionality throughout the event."
    },
    {
      question: "How can I present my research at NextGenSynergy?",
      answer: "We welcome research presentations through our call for papers. Submissions are reviewed by our interdisciplinary committee, and accepted papers will be presented in virtual sessions with interactive Q&A components. Visit the 'Call for Papers' section on our website for submission guidelines and deadlines."
    },
    {
      question: "Will sessions accommodate different time zones?",
      answer: "Yes, the conference schedule is designed with global participation in mind. Key sessions will be offered at multiple times to accommodate different time zones, and all presentations will be recorded and available on-demand to registered participants for 30 days after the event."
    }
  ]
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                Frequently Asked Questions
              </h2>
              
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
              
              <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
                Find answers to common questions about NextGenSynergy
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div 
                    key={index}
                    className="rounded-xl border border-purple-400/20 bg-purple-900/30 backdrop-blur-sm overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex items-center justify-between w-full p-6 text-left"
                    >
                      <span className="text-lg font-medium text-white">{item.question}</span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-800/50 text-purple-100">
                        {openIndex === index ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-6 pt-0 text-purple-100/80">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Contact Information */}
              <div className="mt-16 p-6 rounded-xl border border-purple-400/20 bg-purple-900/30 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-100/70">Email</p>
                      <p className="text-white">info@nextgensynergy.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-500/20 text-fuchsia-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-100/70">Support Hotline</p>
                      <p className="text-white">+1 (800) 555-0123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-100/70">Virtual Platform</p>
                      <p className="text-white">platform.nextgensynergy.org</p>
                    </div>
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