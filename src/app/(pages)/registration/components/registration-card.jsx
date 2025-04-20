"use client"

import { motion } from "framer-motion"
import { CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RegistrationCard({
  title,
  price,
  currency,
  taxRate,
  taxAmount,
  totalAmount,
  description,
  type,
  category,
  name,
  onSelect,
}) {
  const currencySymbol = currency === "USD" ? "$" : "₹"
  const isInternational = type === "International"
  const gradientFrom = isInternational ? "from-cyan-500" : "from-fuchsia-500"
  const gradientTo = isInternational ? "to-blue-600" : "to-purple-600"
  const iconColor = isInternational ? "text-cyan-400" : "text-fuchsia-400"

  // Ensure tax amount is calculated correctly and formatted
  const displayTaxAmount = Number.parseFloat(taxAmount.toFixed(2))
  const displayTotalAmount = Number.parseFloat(totalAmount.toFixed(2))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity"></div>

      <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden h-full transition-all group-hover:bg-purple-900/30">
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}></div>

        <div className="p-6 flex flex-col h-full">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900/50 text-purple-200 border border-purple-500/20">
              {type}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

          <div className="mb-4">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              {currencySymbol}
              {price}
            </span>
          </div>

          <p className="text-purple-200/70 mb-6 flex-grow">{description}</p>

          <div className="space-y-2 mb-6 p-3 bg-purple-900/40 rounded-lg border border-purple-500/20">
            <div className="flex justify-between text-sm">
              <span className="text-purple-200/70">Base Price:</span>
              <span className="text-white">
                {currencySymbol}
                {price.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-purple-200/70">Tax ({(taxRate * 100).toFixed(0)}%):</span>
              <span className="text-white">
                {currencySymbol}
                {displayTaxAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm font-medium pt-2 border-t border-purple-500/20">
              <span className="text-purple-200">Total:</span>
              <span className="text-white">
                {currencySymbol}
                {displayTotalAmount.toFixed(2)}
              </span>
            </div>
          </div>

          <Button
            onClick={onSelect}
            className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:brightness-110 text-white border-0`}
          >
            <CreditCard className={`mr-2 h-4 w-4 ${iconColor}`} />
            Register Now
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
