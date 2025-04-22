"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CreditCard } from "lucide-react"

export function CCavenuePaymentForm({ isOpen, onClose, ticketName, amount, taxRate, currency, onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    billing_email: "",
    billing_name: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    billing_country: "",
    billing_tel: "",
    billing_organization: "",
    billing_designation: "",
  })

  // Calculate tax amount and total - ensure proper calculation and decimal precision
  const taxAmount = Number((amount * taxRate).toFixed(2))
  const totalAmount = Number((amount + taxAmount).toFixed(2))


  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const currencySymbol = currency === "USD" ? "$" : "₹"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-blue-950 to-purple-950 border border-purple-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
            Payment Details
          </DialogTitle>
        </DialogHeader>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_name" className="text-purple-200">
                Full Name
              </Label>
              <Input
                id="billing_name"
                name="billing_name"
                required
                onChange={handleChange}
                className="bg-purple-900/50 border-purple-500/30 text-white placeholder:text-purple-300/50"
              />
            </div>
            <div>
              <Label htmlFor="billing_email" className="text-purple-200">
                Email
              </Label>
              <Input
                id="billing_email"
                name="billing_email"
                type="email"
                required
                onChange={handleChange}
                className="bg-purple-900/50 border-purple-500/30 text-white placeholder:text-purple-300/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_organization" className="text-purple-200">
                Organization
              </Label>
              <Input
                id="billing_organization"
                name="billing_organization"
                required
                onChange={handleChange}
                className="bg-purple-900/50 border-purple-500/30 text-white placeholder:text-purple-300/50"
              />
            </div>
            <div>
              <Label htmlFor="billing_designation" className="text-purple-200">
                Designation
              </Label>
              <Input
                id="billing_designation"
                name="billing_designation"
                required
                onChange={handleChange}
                className="bg-purple-900/50 border-purple-500/30 text-white placeholder:text-purple-300/50"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billing_address" className="text-purple-200">
              Address
            </Label>
            <Input
              id="billing_address"
              name="billing_address"
              required
              onChange={handleChange}
              className="bg-purple-900/50 border-purple-500/30 text-white placeholder:text-purple-300/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_city" className="text-purple-200">
                City
              </Label>
              <Input
                id="billing_city"
                name="billing_city"
                required
                onChange={handleChange}
                className="bg-purple-900/50 border-purple-500/30 text-white placeholder:text-purple-300/50"
              />
            </div>
            <div>
              <Label htmlFor="billing_state" className="text-purple-200">
                State
              </Label>
              <Input
                id="billing_state"
                name="billing_state"
                required
                onChange={handleChange}
                className="bg-purple-900/50 border-purple-500/30 text-white placeholder:text-purple-300/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_zip" className="text-purple-200">
                ZIP Code
              </Label>
              <Input
                id="billing_zip"
                name="billing_zip"
                required
                onChange={handleChange}
                className="bg-purple-900/50 border-purple-500/30 text-white placeholder:text-purple-300/50"
              />
            </div>
            <div>
              <Label htmlFor="billing_country" className="text-purple-200">
                Country
              </Label>
              <Input
                id="billing_country"
                name="billing_country"
                required
                onChange={handleChange}
                className="bg-purple-900/50 border-purple-500/30 text-white placeholder:text-purple-300/50"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billing_tel" className="text-purple-200">
              Phone Number
            </Label>
            <Input
              id="billing_tel"
              name="billing_tel"
              type="tel"
              required
              onChange={handleChange}
              className="bg-purple-900/50 border-purple-500/30 text-white placeholder:text-purple-300/50"
            />
          </div>

          <div className="mt-6 space-y-2 p-4 bg-purple-900/40 rounded-xl border border-purple-500/20">
            <div className="flex justify-between">
              <Label className="text-purple-200">Ticket Type:</Label>
              <div className="font-medium text-white">{ticketName}</div>
            </div>
            <div className="flex justify-between">
              <Label className="text-purple-200">Subtotal:</Label>
              <div className="font-medium text-white">
                {currencySymbol}
                {amount.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between">
              <Label className="text-purple-200">Tax ({(taxRate * 100).toFixed(0)}%):</Label>
              <div className="font-medium text-white">
                {currencySymbol}
                {taxAmount.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between pt-2 border-t border-purple-500/20">
              <Label className="text-purple-200">Total Amount:</Label>
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                {currencySymbol}
                {totalAmount.toFixed(2)}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 h-12"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" /> Proceed to Payment
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}