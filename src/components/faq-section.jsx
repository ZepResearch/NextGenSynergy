"use client"

import { useState } from "react"
import { Mail, Phone, Globe } from 'lucide-react'


export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)
  
  const faqItems = [
    {
      question: "What is NextGen Synergy?",
      answer: "NextGen Synergy is a groundbreaking hybrid interdisciplinary forum that brings together visionaries from research, industry, education, and policy to explore bold, collaborative solutions to todays most complex challenges. Whether in-person or online, its a space where ideas from diverse disciplines converge to spark innovation."
    },
    {
      question: "Who should attend NextGen Synergy?",
      answer: "This event is perfect for researchers, professionals, educators, policymakers, entrepreneurs, and students who are passionate about innovation, interdisciplinary collaboration, and pushing the boundaries of their fields. If you are curious, forward-thinking, and eager to connect with others who are reimagining the future — this is the place for you."
    },
    {
      question: "How do I access the virtual sessions?",
      answer: "Virtual attendees will receive personalized access links via email about a week before the conference. Our online platform is browser-based, mobile-friendly, and requires no downloads. A dedicated support team will be available throughout to ensure a seamless experience."
    },
    {
      question: "Are there networking opportunities for both virtual and in-person attendees?",
      answer: "Yes! Whether you are attending on-site or online, you will have access to curated networking experiences — from AI-powered matchmaking and virtual lounges to in-person mixers and collaborative workshops. We have built the conference to ensure valuable connections happen across both formats."
    },
    {
      question: "How can I present my research at NextGen Synergy?",
      answer: "We are actively accepting proposals through our Call for Papers. All submissions are peer-reviewed by our interdisciplinary committee — including experts like Dr. Ayesha Narang (AI & Society) and Prof. Michael Tanaka (Urban Systems). Selected speakers will present live during the event with opportunities for real-time engagement. Check our website for submission details and deadlines."
    },
    {
      question: "Will the sessions accommodate different time zones?",
      answer: "Absolutely. Our schedule includes repeat sessions and live broadcasts in multiple time slots to support global participation. All sessions will also be recorded and available on-demand for 30 days after the event, so you can catch up anytime, anywhere."
    }
  ];
  
  
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
                      <p className="text-white">info@thenextgensynergy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-500/20 text-fuchsia-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-100/70">Support Hotline</p>
                      <p className="text-white ">+91  78488  54815</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-100/70">Organizer</p>
                      <p className="text-white">zepresearch.com</p>
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