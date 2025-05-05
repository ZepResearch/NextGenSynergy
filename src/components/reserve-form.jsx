"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { Sparkles, User, Mail, Phone, Globe, Building, Loader2 } from "lucide-react"

export function ReserveForm({ isOpen, onClose, onSubmitSuccess }) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    organization: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/reserveseat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          organization: "",
        })
        onSubmitSuccess() // Call this instead of onClose directly
      } else {
        throw new Error(result.error || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-blue-950 to-purple-950 border border-purple-500/30 text-purple-900">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative">
          <div className="text-center mb-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-0.5 mb-4">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                <Sparkles className="h-6 w-6 text-purple-100" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300 mb-2">
              Reserve Your Seat
            </h2>
            <p className="text-purple-100/80">NextGenSynergy: The Hybrid Interdisciplinary Forum</p>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mt-4"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-purple-100 flex items-center gap-2">
                <User className="h-4 w-4 text-cyan-400" />
                Full Name
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-purple-100/90 border-purple-500/30 text-purple-900 placeholder:text-purple-900/90 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                />
                <div className="absolute inset-0 rounded-md pointer-events-none border border-transparent group-focus-within:border-cyan-400/50 group-focus-within:shadow-[0_0_10px_rgba(34,211,238,0.2)]"></div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-purple-100 flex items-center gap-2">
                <Mail className="h-4 w-4 text-fuchsia-400" />
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-purple-100/90 border-purple-500/30 text-purple-900 placeholder:text-purple-900/90 focus:border-fuchsia-400/50 focus:ring-fuchsia-400/20"
                />
                <div className="absolute inset-0 rounded-md pointer-events-none border border-transparent group-focus-within:border-fuchsia-400/50 group-focus-within:shadow-[0_0_10px_rgba(217,70,239,0.2)]"></div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-purple-100 flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                Phone Number
              </Label>
              <div className="relative phone-input-container">
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="US"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="flex h-10 w-full  rounded-md border border-purple-500/30 bg-purple-100/90 px-3 py-2 text-sm text-purple-800 placeholder:text-purple-900/90 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                />
                <div className="absolute inset-0 rounded-md pointer-events-none border border-transparent group-focus-within:border-cyan-400/50 group-focus-within:shadow-[0_0_10px_rgba(34,211,238,0.2)]"></div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country" className="text-purple-100 flex items-center gap-2">
                <Globe className="h-4 w-4 text-fuchsia-400" />
                Country
              </Label>
              <div className="relative">
                <Input
                  id="country"
                  name="country"
                  placeholder="Your country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="bg-purple-100/90 border-purple-500/30 text-purple-900 placeholder:text-purple-900/90 focus:border-fuchsia-400/50 focus:ring-fuchsia-400/20"
                />
                <div className="absolute inset-0 rounded-md pointer-events-none border border-transparent group-focus-within:border-fuchsia-400/50 group-focus-within:shadow-[0_0_10px_rgba(217,70,239,0.2)]"></div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization" className="text-purple-100 flex items-center gap-2">
                <Building className="h-4 w-4 text-cyan-400" />
                Organization/University
              </Label>
              <div className="relative">
                <Input
                  id="organization"
                  name="organization"
                  placeholder="Your organization or university"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="bg-purple-100/90 border-purple-500/30 text-purple-900 placeholder:text-purple-900/90 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                />
                <div className="absolute inset-0 rounded-md pointer-events-none border border-transparent group-focus-within:border-cyan-400/50 group-focus-within:shadow-[0_0_10px_rgba(34,211,238,0.2)]"></div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-purple-400/30 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20 rounded-lg backdrop-blur-md"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-purple-100 border-0 rounded-lg group"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full bg-gradient-to-r from-cyan-600 to-fuchsia-600 opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-all duration-1000"></div>
                </div>
                <div className="relative flex items-center">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Reserve My Seat
                    </>
                  )}
                </div>
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
