"use client"


import { useState, useEffect } from "react"
import { ChevronRight, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Youtube } from "lucide-react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
  })
  const [phoneNumber, setPhoneNumber] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Update formData when phoneNumber changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, phoneNumber }))
  }, [phoneNumber])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phoneNumber: "",
      })
      setPhoneNumber(undefined)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsSubmitting(false)
    }
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Contact Us
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">
              Get in touch with the NextGenSynergy team for any inquiries or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden h-full">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative p-8 flex flex-col h-full">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300 mb-6">
                    Get In Touch
                  </h2>

                  <p className="text-purple-100/80 mb-8">
                    Have questions about NextGenSynergy? Our team is here to help. Reach out to us using the contact
                    information below or fill out the form.
                  </p>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                          <Mail className="h-5 w-5 text-cyan-400" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-purple-100/70">Email</p>
                        <p className="text-white font-medium">info@zepresearch.com</p>
                        <p className="text-white font-medium">info@thenextgensynergy.com</p>

                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                          <Phone className="h-5 w-5 text-fuchsia-400" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-purple-100/70">Phone</p>
                        <p className="text-white font-medium">+91 78488 54815</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                          <MapPin className="h-5 w-5 text-purple-400" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-purple-100/70">Virtual Office</p>
                        <p className="text-white font-medium">DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</p>
                        {/* <p className="text-purple-100/70">Access via our digital platform</p> */}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-purple-400/20">
                    <h3 className="text-lg font-medium text-white mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=61561809783777&sk=reels_tab"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-900/50 border border-purple-400/30 text-cyan-400 hover:text-white hover:bg-cyan-500/50 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/zepresearch/"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-900/50 border border-purple-400/30 text-cyan-400 hover:text-white hover:bg-cyan-500/50 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    
                      <a
                        href="https://x.com/Zepresearch"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-900/50 border border-purple-400/30 text-cyan-400 hover:text-white hover:bg-cyan-500/50 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/zep-research/"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-900/50 border border-purple-400/30 text-cyan-400 hover:text-white hover:bg-cyan-500/50 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                     
                      <a href="https://www.youtube.com/@Zepresearch" className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-900/50 border border-purple-400/30 text-cyan-400 hover:text-white hover:bg-cyan-500/50 transition-colors">
                        <Youtube  />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative p-8">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300 mb-6">
                    Send Us a Message
                  </h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-900/30 backdrop-blur-sm border border-green-400/30 text-green-100 rounded-xl flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Message Sent Successfully!</p>
                        <p className="text-green-100/80">
                          Thank you for contacting us. We'll get back to you as soon as possible.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-900/30 backdrop-blur-sm border border-red-400/30 text-red-100 rounded-xl flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Error Sending Message</p>
                        <p className="text-red-100/80">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-purple-100">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                          placeholder="Enter your name"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-purple-100">
                          Phone Number
                        </label>
                        <PhoneInput
                          international
                          defaultCountry="US"
                          value={phoneNumber}
                          onChange={setPhoneNumber}
                          className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-purple-100">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-purple-100">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                          placeholder="What is your message about?"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-purple-100">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-purple-900 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-full w-full bg-gradient-to-r from-cyan-600 to-fuchsia-600 opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-all duration-1000"></div>
                        </div>
                        <div className="relative flex items-center">
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                              Send Message
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-xl border border-purple-400/20 overflow-hidden p-6">
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-30"></div>
                <div className="relative">
                  <h3 className="text-lg font-medium text-white mb-2">
                    When is the NextGenSynergy forum taking place?
                  </h3>
                  <p className="text-purple-100/80">
                    NextGenSynergy: The Virtual Interdisciplinary Forum will take place on June 15-17, 2025. All
                    sessions will be accessible through our virtual platform.
                  </p>
                </div>
              </div>

              <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-xl border border-purple-400/20 overflow-hidden p-6">
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-30"></div>
                <div className="relative">
                  <h3 className="text-lg font-medium text-white mb-2">How can I register for the forum?</h3>
                  <p className="text-purple-100/80">
                    Registration is available through our website. Visit the Registration page to secure your spot.
                    Early bird registration ends on January 15, 2025.
                  </p>
                </div>
              </div>

              <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-xl border border-purple-400/20 overflow-hidden p-6">
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-30"></div>
                <div className="relative">
                  <h3 className="text-lg font-medium text-white mb-2">What technology do I need to participate?</h3>
                  <p className="text-purple-100/80">
                    You'll need a computer with a stable internet connection, a modern web browser, and optionally a
                    webcam and microphone for interactive sessions. Our virtual platform is compatible with most
                    devices.
                  </p>
                </div>
              </div>

              <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-xl border border-purple-400/20 overflow-hidden p-6">
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-30"></div>
                <div className="relative">
                  <h3 className="text-lg font-medium text-white mb-2">Will sessions be recorded?</h3>
                  <p className="text-purple-100/80">
                    Yes, all keynote presentations and panel discussions will be recorded and available to registered
                    participants for 30 days after the event. Some interactive workshops may not be recorded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
