"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronRight, Users, GraduationCap, User, FileText, Sparkles } from "lucide-react"
import { CCavenuePaymentForm } from "./components/payment-form"
import { RegistrationCard } from "./components/registration-card"

export default function RegistrationPage() {
  const router = useRouter()
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleTicketSelect = (ticket) => {
    // Recalculate tax and total to ensure consistency
    const taxAmount = Number((ticket.price * ticket.taxRate).toFixed(2))
    const totalAmount = Number((ticket.price + taxAmount).toFixed(2))
    
    // Set selectedTicket with properly calculated values
    setSelectedTicket({
      ...ticket,
      taxAmount: taxAmount,
      totalAmount: totalAmount
    })
    setIsPaymentFormOpen(true)
  }

  const handlePaymentFormClose = () => {
    setIsPaymentFormOpen(false)
  }

  // Update the handlePaymentFormSubmit function to fix the undefined route issue
  const handlePaymentFormSubmit = async (formData) => {
    setIsLoading(true)
    try {
      // Combine ticket data with form data
      const paymentData = {
        ...formData,
        order_id: `ORDER-${Date.now()}`,
        currency: selectedTicket.currency,
        amount: selectedTicket.totalAmount,
        redirect_url: `${window.location.origin}/api/ccavenue/handle`,
        cancel_url: `${window.location.origin}/api/ccavenue/handle`,
        language: "EN",
        ticket_type: selectedTicket.type,
        ticket_category: selectedTicket.category,
        ticket_name: selectedTicket.name,
      }

      // Send notification email
      await fetch("/api/payment-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      // Get encrypted order data
      const encResponse = await fetch("/api/ccavenue/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      const { encRequest } = await encResponse.json()

      // Create and submit form to CCAvenue
      const form = document.createElement("form")
      form.method = "post"
      // Use the exact CCAvenue URL with the command parameter
      form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"
      form.style.display = "none"

      const encRequestInput = document.createElement("input")
      encRequestInput.name = "encRequest"
      encRequestInput.value = encRequest
      form.appendChild(encRequestInput)

      const accessCodeInput = document.createElement("input")
      accessCodeInput.name = "access_code"
      accessCodeInput.value = process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE
      form.appendChild(accessCodeInput)

      // Add merchant_id as well
      const merchantIdInput = document.createElement("input")
      merchantIdInput.name = "merchant_id"
      merchantIdInput.value = process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID
      form.appendChild(merchantIdInput)

      document.body.appendChild(form)
      form.submit()
    } catch (error) {
      console.error("Payment processing error:", error)
      setIsLoading(false)
      alert("There was an error processing your payment. Please try again.")
    }
  }

  // Registration fee data
  const registrationFees = [
    {
      category: "Students",
      type: "International",
      currency: "USD",
      options: [
        {
          name: "Paper Presentation",
          price: 99,
          taxRate: 0.06,
          description: "Present your research paper at the conference",
        },
        {
          name: "Listener",
          price: 79,
          taxRate: 0.06,
          description: "Attend all sessions without presenting",
        },
      ],
    },
    {
      category: "Academicians",
      type: "International",
      currency: "USD",
      options: [
        {
          name: "Paper Presentation",
          price: 159,
          taxRate: 0.06,
          description: "Present your research paper at the conference",
        },
        {
          name: "Listener",
          price: 79,
          taxRate: 0.06,
          description: "Attend all sessions without presenting",
        },
      ],
    },
    {
      category: "Students",
      type: "Indian",
      currency: "INR",
      options: [
        {
          name: "Paper Presentation",
          price: 2000,
          taxRate: 0.18,
          description: "Present your research paper at the conference",
        },
        {
          name: "Listener",
          price: 1500,
          taxRate: 0.18,
          description: "Attend all sessions without presenting",
        },
      ],
    },
    {
      category: "Academicians",
      type: "Indian",
      currency: "INR",
      options: [
        {
          name: "Paper Presentation",
          price: 3000,
          taxRate: 0.18,
          description: "Present your research paper at the conference",
        },
        {
          name: "Listener",
          price: 1500,
          taxRate: 0.18,
          description: "Attend all sessions without presenting",
        },
      ],
    },
  ]

  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
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
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Conference Registration
            </motion.h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <motion.p
              className="text-lg text-purple-100/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join us at NextGenSynergy: The Virtual Interdisciplinary Forum
            </motion.p>
          </div>
        </div>
      </section>

      {/* Registration Options Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden mb-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/70">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>

                <motion.h2
                  className="text-2xl md:text-3xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Select Your Registration Type
                </motion.h2>

                <motion.div
                  className="space-y-6 text-purple-100/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p>
                    Choose the registration option that best suits your needs. All registrations include access to
                    keynote presentations, panel discussions, and networking opportunities.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-medium">Student Registration</h3>
                      <p className="text-purple-200/70 text-sm">Discounted rates for enrolled students</p>
                    </div>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 flex items-center justify-center mr-4">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-medium">Academic Registration</h3>
                      <p className="text-purple-200/70 text-sm">For faculty and research professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationFees.map((category, categoryIndex) =>
              category.options.map((option, optionIndex) => {
                const taxAmount = option.price * option.taxRate
                const totalAmount = option.price + taxAmount

                return (
                  <RegistrationCard
                    key={`${categoryIndex}-${optionIndex}`}
                    title={`${category.category} ${option.name}`}
                    price={option.price}
                    currency={category.currency}
                    taxRate={option.taxRate}
                    taxAmount={taxAmount}
                    totalAmount={totalAmount}
                    description={option.description}
                    type={category.type}
                    category={category.category}
                    name={option.name}
                    onSelect={() =>
                      handleTicketSelect({
                        type: category.type,
                        category: category.category,
                        name: option.name,
                        price: option.price,
                        taxRate: option.taxRate,
                        taxAmount,
                        totalAmount,
                        currency: category.currency,
                      })
                    }
                  />
                )
              }),
            )}
          </div>
        </div>
      </section>

      {/* Conference Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Registration Benefits
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden p-6 group hover:bg-purple-900/30 transition-all">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                    <FileText className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">Conference Materials</h3>
                <p className="text-purple-100/70">
                  Access to all conference proceedings, papers, and presentation materials
                </p>
              </div>
            </div>

            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden p-6 group hover:bg-purple-900/30 transition-all">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                    <Users className="h-6 w-6 text-fuchsia-400" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">Networking Opportunities</h3>
                <p className="text-purple-100/70">
                  Connect with researchers and professionals from diverse disciplines
                </p>
              </div>
            </div>

            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden p-6 group hover:bg-purple-900/30 transition-all">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                    <Sparkles className="h-6 w-6 text-purple-400" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">Interactive Sessions</h3>
                <p className="text-purple-100/70">Participate in workshops, panel discussions, and Q&A sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form Dialog */}
      <CCavenuePaymentForm
  isOpen={isPaymentFormOpen}
  onClose={handlePaymentFormClose}
  ticketName={selectedTicket?.name}
  amount={selectedTicket?.price || 0}
  taxRate={selectedTicket?.taxRate || 0}
  currency={selectedTicket?.currency || "USD"}
  onSubmit={handlePaymentFormSubmit}
  isLoading={isLoading}
/>
    </main>
  )
}
