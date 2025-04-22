"use client"

import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="relative backdrop-blur-sm bg-red-900/20 rounded-3xl border border-red-400/20 overflow-hidden p-8 max-w-2xl mx-auto text-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative">
          <AlertTriangle className="h-16 w-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
          <p className="text-red-200 mb-6">
            We encountered an error while loading the journals. Please try again or contact support if the problem
            persists.
          </p>
          <Button
            onClick={reset}
            className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white"
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  )
}
