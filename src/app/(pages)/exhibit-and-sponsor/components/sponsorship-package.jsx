"use client"

import { motion } from "framer-motion"
import { Check, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SponsorshipPackage({ title, price, color, icon, benefits, onSelect }) {
  const getGradientClasses = () => {
    return `bg-gradient-to-r ${color}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity"></div>

      <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden h-full transition-all group-hover:bg-purple-900/30">
        <div className={`absolute top-0 left-0 right-0 h-2 ${getGradientClasses()}`}></div>

        <div className="p-6 flex flex-col h-full">
          <div className="mb-4 flex justify-between items-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900/50 text-purple-200 border border-purple-500/20">
              Sponsorship
            </span>
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${getGradientClasses()} p-0.5`}>
              <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">{icon}</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

          <div className="mb-4">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              ${price.toLocaleString()}
            </span>
          </div>

          <div className="space-y-3 mb-6 flex-grow">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-purple-200/80 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={onSelect}
            className={`w-full ${getGradientClasses()} hover:brightness-110 text-white border-0`}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Choose {title}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
