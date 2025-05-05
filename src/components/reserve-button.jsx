"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ReserveForm } from "./reserve-form"
import { Button } from "./ui/button"
import { Sparkles, X, CheckCircle } from "lucide-react"

export function ReserveButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  // Auto-open form after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const handleFormSubmitSuccess = () => {
    setIsOpen(false)
    setShowThankYou(true)
  }

  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
        className="relative"
      >
        {/* Pulsing glow effect */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-70 blur-md animate-pulse"></div>

        <Button
          onClick={() => setIsOpen(true)}
          className="relative bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-full px-8 py-6 overflow-hidden group"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-full bg-gradient-to-r from-cyan-600 to-fuchsia-600 opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-all duration-1000"></div>
          </div>
          <div className="relative flex items-center">
            <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
            <span className="text-lg font-medium">Reserve Your Spot</span>
          </div>
        </Button>
      </motion.div>

      <ReserveForm isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmitSuccess={handleFormSubmitSuccess} />

      {/* Thank You Popup */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative backdrop-blur-md bg-purple-900/70 rounded-2xl border border-purple-400/30 p-8 max-w-md w-full shadow-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="text-center relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 mx-auto flex items-center justify-center mb-6"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-20 blur-md animate-pulse"></div>
                  <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                      <CheckCircle className="h-10 w-10 text-cyan-300" />
                    </div>
                  </div>
                </motion.div>

                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300 mb-4">
                  Thank You!
                </h2>

                <p className="text-purple-100/80 mb-8">
                  Your reservation has been successfully submitted. Our team will contact you shortly with confirmation
                  details.
                </p>

                <Button
                  onClick={() => setShowThankYou(false)}
                  className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg px-8 py-2.5 group"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-full bg-gradient-to-r from-cyan-600 to-fuchsia-600 opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-all duration-1000"></div>
                  </div>
                  <div className="relative flex items-center">
                    <X className="mr-2 h-4 w-4" />
                    Close
                  </div>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
