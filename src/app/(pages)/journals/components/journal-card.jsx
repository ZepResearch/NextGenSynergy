"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function JournalCard({ journal, index, pocketbaseUrl }) {
  // Determine the image source - use the file field (imgs) if available
  const imageUrl = journal.img
    ? `https://${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${journal.collectionId}/${journal.id}/${journal.img}`
    : journal.img || "/placeholder.svg?height=300&width=200"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity"></div>

      <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden h-full transition-all group-hover:bg-purple-900/30">
        {/* <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500"></div> */}

        <div className="p-6 flex flex-col h-full">
          <div className="relative h-[300px] w-full mb-6 overflow-hidden rounded-xl border border-purple-500/30">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={journal.title || "Journal cover"}
              fill
              className="object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.src = "/placeholder.svg?height=300&width=200"
              }}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div> */}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{journal.title}</h3>

          {journal.issncode && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900/50 text-purple-200 border border-purple-500/20">
                ISSN: {journal.issncode}
              </span>
            </div>
          )}

          <div className="mt-auto pt-4 flex justify-between items-center">
           <Link
            href={'https://www.zepresearch.com/journals'}
           >
            <Button
                variant="outline"
                className="border-purple-400/30 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20 rounded-lg backdrop-blur-md"
                >
              <FileText className="mr-2 h-4 w-4 text-cyan-400" />
              View Details
            </Button>
        </Link>

            {/* <Button className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Journal
            </Button> */}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
