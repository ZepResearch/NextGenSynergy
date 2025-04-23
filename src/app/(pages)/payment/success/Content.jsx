"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ChevronRight, Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
export default function PaymentSuccessPage() {
  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md mb-6">
              <span>NextGenSynergy</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Payment Successful
            </motion.h1>

            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-8 rounded-full"></div>

            <motion.p
              className="text-lg text-purple-100/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Thank you for registering for NextGenSynergy: The Virtual Interdisciplinary Forum
            </motion.p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative p-8 md:p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-cyan-500 p-0.5 mb-6"
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                    <CheckCircle className="h-10 w-10 text-green-400" />
                  </div>
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Your Registration is Confirmed</h2>

                <div className="space-y-6 text-purple-100/90 max-w-2xl mx-auto">
                  <p>
                    Thank you for registering for NextGenSynergy: The Virtual Interdisciplinary Forum. Your payment has
                    been successfully processed and your registration is now confirmed.
                  </p>

                  <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl border border-purple-400/20 p-6 text-left">
                    <h3 className="text-xl font-medium text-white mb-4">What Happens Next?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-purple-900">1</span>
                        </div>
                        <span>
                          You will receive a confirmation email with your registration details and receipt shortly.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-purple-900">2</span>
                        </div>
                        <span>
                          One week before the conference, you will receive access instructions for the virtual platform.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-purple-900">3</span>
                        </div>
                        <span>
                          Add the conference dates to your calendar and prepare for an exciting virtual experience!
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-4 mt-8">
                    <Calendar className="h-5 w-5 text-cyan-400" />
                    <span>Mark your calendar: NextGenSynergy will take place on June 15-17, 2025</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 rounded-lg"
                  >
                    <Link href="/">
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Return to Home
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white border-0 rounded-lg"
                  >
                    <Link href="/schedule">View Conference Schedule</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
