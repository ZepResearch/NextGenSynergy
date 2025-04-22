import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-16 w-16 text-purple-400 animate-spin mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300 mb-2">
          Loading Journals
        </h2>
        <p className="text-purple-200/70">Please wait while we fetch the latest journals...</p>
      </div>
    </div>
  )
}
