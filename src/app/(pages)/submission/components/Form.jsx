"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Toaster, toast } from "react-hot-toast"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { FileText, Upload, ChevronRight, Send, Sparkles } from "lucide-react"

export default function PaperSubmissionForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)

      // Add phone number to form data
      if (phoneNumber) {
        formData.set("phone_number", phoneNumber)
      }

      // Add file if selected
      if (selectedFile) {
        formData.set("file", selectedFile)
      }

      const response = await fetch("/api/submit-paper", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit paper")
      }

      // Show success toast
      toast.success("Paper submitted successfully!")

      // Redirect to success page
      router.push("/submission/success")
    } catch (err) {
      setError(err.message || "An error occurred while submitting your paper")
      toast.error(err.message || "An error occurred while submitting your paper")
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <div className="pt-20">
      <Toaster position="top-right" />

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md mb-6">
              <span>NextGenSynergy</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Paper Submission
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">
              Share your research at NextGenSynergy: The Virtual Interdisciplinary Forum
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative p-8 md:p-12">
                {error && (
                  <div className="mb-8 p-4 bg-red-900/50 backdrop-blur-sm border border-red-400/30 text-red-100 rounded-xl">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Author Name */}
                    <div className="space-y-2">
                      <label htmlFor="author" className="block text-sm font-medium text-purple-100">
                        Author Name *
                      </label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone_number" className="block text-sm font-medium text-purple-100">
                        Phone Number *
                      </label>
                      <PhoneInput
                        international
                        defaultCountry="US"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-purple-100">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label htmlFor="country" className="block text-sm font-medium text-purple-100">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                        placeholder="Your country"
                      />
                    </div>

                    {/* Co-Author */}
                    <div className="space-y-2">
                      <label htmlFor="co_author" className="block text-sm font-medium text-purple-100">
                        Co-Author(s) *
                      </label>
                      <input
                        type="text"
                        id="co_author"
                        name="co_author"
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                        placeholder="Separate multiple authors with commas"
                      />
                    </div>

                    {/* Paper Title */}
                    <div className="space-y-2">
                      <label htmlFor="paper_title" className="block text-sm font-medium text-purple-100">
                        Paper Title *
                      </label>
                      <input
                        type="text"
                        id="paper_title"
                        name="paper_title"
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                        placeholder="Enter your paper title"
                      />
                    </div>

                    {/* Department */}
                    <div className="space-y-2">
                      <label htmlFor="department" className="block text-sm font-medium text-purple-100">
                        Department *
                      </label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                        placeholder="Your academic department"
                      />
                    </div>

                    {/* Organization */}
                    <div className="space-y-2">
                      <label htmlFor="organization" className="block text-sm font-medium text-purple-100">
                        Organization *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                        placeholder="Your university or organization"
                      />
                    </div>

                    {/* Paper Type */}
                    <div className="space-y-2">
                      <label htmlFor="paper_type" className="block text-sm font-medium text-purple-100">
                        Paper Type *
                      </label>
                      <select
                        id="paper_type"
                        name="paper_type"
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                      >
                        <option value="" className="bg-purple-900">
                          Select Paper Type
                        </option>
                        <option value="Abstract" className="bg-purple-900">
                          Abstract
                        </option>
                        <option value="Full Paper" className="bg-purple-900">
                          Full Paper
                        </option>
                      </select>
                    </div>

                    {/* Presentation Type */}
                    <div className="space-y-2">
                      <label htmlFor="presentation_type" className="block text-sm font-medium text-purple-100">
                        Presentation Type *
                      </label>
                      <select
                        id="presentation_type"
                        name="presentation_type"
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                      >
                        <option value="" className="bg-purple-900">
                          Select Presentation Type
                        </option>
                        <option value="Poster" className="bg-purple-900">
                          Virtual Poster
                        </option>
                        <option value="Oral" className="bg-purple-900">
                          Virtual Oral
                        </option>
                        <option value="Virtual" className="bg-purple-900">
                          Interactive Demo
                        </option>
                      </select>
                    </div>

                    {/* How did you hear about us */}
                    <div className="space-y-2">
                      <label htmlFor="know_to_you" className="block text-sm font-medium text-purple-100">
                        How did you hear about us? *
                      </label>
                      <select
                        id="know_to_you"
                        name="know_to_you"
                        required
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                      >
                        <option value="" className="bg-purple-900">
                          Select an option
                        </option>
                        <option value="Conference Alerts" className="bg-purple-900">
                          Conference Alerts
                        </option>
                        <option value="Email" className="bg-purple-900">
                          Email
                        </option>
                        <option value="Friend or Colleague or Supervisor" className="bg-purple-900">
                          Friend, Colleague, or Supervisor
                        </option>
                        <option value="Facebook" className="bg-purple-900">
                        Facebook
                        </option>
                        <option value="Google Search" className="bg-purple-900">
                          Google Search
                        </option>
                        <option value="Eventbit" className="bg-purple-900">
                        Eventbit
                        </option>
                        <option value="Linkdin" className="bg-purple-900">
                          LinkedIn
                        </option>
                        <option value="Others" className="bg-purple-900">
                          Others
                        </option>
                      </select>
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <label htmlFor="file" className="block text-sm font-medium text-purple-100">
                        Upload Paper (PDF, DOC, DOCX) *
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="file"
                          name="file"
                          onChange={handleFileChange}
                          required
                          accept=".pdf,.doc,.docx"
                          className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-purple-600 file:text-white hover:file:bg-purple-500"
                        />
                        <Upload className="absolute right-3 top-3 h-5 w-5 text-purple-300" />
                      </div>
                      {selectedFile && (
                        <div className="mt-2 px-3 py-2 bg-purple-800/30 rounded-lg border border-purple-400/20 text-sm text-purple-100 flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-cyan-400" />
                          Selected: {selectedFile.name}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-purple-100">
                      Additional Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm"
                      placeholder="Any additional information you'd like to share"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
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
                            <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            Submit Paper
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
      </section>
    </div>
  )
}
