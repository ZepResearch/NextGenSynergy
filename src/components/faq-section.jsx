"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Plus, Minus } from 'lucide-react'


export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)
  
  const faqItems = [
    {
      question: "What is MetaConnect?",
      answer: "MetaConnect is a cutting-edge conference focused on the future of multidisciplinary research. It brings together researchers, technologists, and visionaries to explore the intersection of virtual worlds and scientific discovery across various disciplines."
    },
    {
      question: "Who should attend MetaConnect?",
      answer: "MetaConnect is ideal for researchers, academics, industry professionals, technologists, and students interested in multidisciplinary approaches to research, virtual research environments, and emerging technologies that bridge different fields of study."
    },
    {
      question: "Will the sessions be recorded?",
      answer: "Yes, all keynote presentations and panel discussions will be recorded and made available to registered attendees after the conference. Workshop sessions may have limited recording availability depending on the presenter's preferences."
    },
    {
      question: "Are there opportunities for networking?",
      answer: "MetaConnect features dedicated networking sessions, virtual collaboration spaces, and interactive discussion forums. Our custom-built virtual networking platform allows attendees to connect based on research interests and potential collaboration opportunities."
    },
    {
      question: "How can I present my research at MetaConnect?",
      answer: "We welcome research presentations through our call for papers. Submissions are reviewed by our scientific committee, and accepted papers will be presented in either oral or poster sessions. Visit the 'Call for Papers' section on our website for submission guidelines and deadlines."
    },
    {
      question: "Is there financial support available for students?",
      answer: "Yes, we offer a limited number of student scholarships that cover registration fees. Priority is given to students presenting research and those from underrepresented institutions. Applications for financial support can be submitted through the registration portal."
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
                Find answers to common questions about MetaConnect
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
                        {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
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
                      <p className="text-white">info@metaconnect.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-500/20 text-fuchsia-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-100/70">Phone</p>
                      <p className="text-white">+91 82600 80050</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-100/70">Address</p>
                      <p className="text-white">DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</p>
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
