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
      totalAmount: totalAmount,
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

  // Registration fee data structured according to the images
  const registrationFees = {
    physical: {
      indian: {
        student: {
          presenter: {
            price: 3000,
            currency: "INR",
            taxRate: 0.18,
            description: "Present your research paper at the conference",
          },
          listener: {
            price: 2000,
            currency: "INR",
            taxRate: 0.18,
            description: "Attend all sessions without presenting",
          },
        },
        academician: {
          presenter: {
            price: 5000,
            currency: "INR",
            taxRate: 0.18,
            description: "Present your research paper at the conference",
          },
          listener: {
            price: 2000,
            currency: "INR",
            taxRate: 0.18,
            description: "Attend all sessions without presenting",
          },
        },
      },
      foreign: {
        student: {
          presenter: {
            price: 199,
            currency: "USD",
            taxRate: 0.06,
            description: "Present your research paper at the conference",
          },
          listener: {
            price: 99,
            currency: "USD",
            taxRate: 0.06,
            description: "Attend all sessions without presenting",
          },
        },
        academician: {
          presenter: {
            price: 249,
            currency: "USD",
            taxRate: 0.06,
            description: "Present your research paper at the conference",
          },
          listener: {
            price: 99,
            currency: "USD",
            taxRate: 0.06,
            description: "Attend all sessions without presenting",
          },
        },
      },
    },
    virtual: {
      foreign: {
        student: {
          presenter: {
            price: 99,
            currency: "USD",
            taxRate: 0.06,
            description: "Present your research paper virtually",
          },
        },
        academician: {
          presenter: {
            price: 99,
            currency: "USD",
            taxRate: 0.06,
            description: "Present your research paper virtually",
          },
        },
      },
    },
  }

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

          {/* Physical Registration Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                Physical Registration
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
            </div>

            {/* Indian Registration Cards */}
            <div className="mb-10">
              <h3 className="text-3xl font-semibold mb-6 text-white text-center">Indian</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {/* Student Presenter */}
                <RegistrationCard
                  title="Student Presenter"
                  price={registrationFees.physical.indian.student.presenter.price}
                  currency={registrationFees.physical.indian.student.presenter.currency}
                  taxRate={registrationFees.physical.indian.student.presenter.taxRate}
                  taxAmount={
                    registrationFees.physical.indian.student.presenter.price *
                    registrationFees.physical.indian.student.presenter.taxRate
                  }
                  totalAmount={
                    registrationFees.physical.indian.student.presenter.price *
                    (1 + registrationFees.physical.indian.student.presenter.taxRate)
                  }
                  description={registrationFees.physical.indian.student.presenter.description}
                  type="Indian"
                  category="Student"
                  name="Presenter"
                  onSelect={handleTicketSelect}
                />

                {/* Student Listener */}
                <RegistrationCard
                  title="Student Listener"
                  price={registrationFees.physical.indian.student.listener.price}
                  currency={registrationFees.physical.indian.student.listener.currency}
                  taxRate={registrationFees.physical.indian.student.listener.taxRate}
                  taxAmount={
                    registrationFees.physical.indian.student.listener.price *
                    registrationFees.physical.indian.student.listener.taxRate
                  }
                  totalAmount={
                    registrationFees.physical.indian.student.listener.price *
                    (1 + registrationFees.physical.indian.student.listener.taxRate)
                  }
                  description={registrationFees.physical.indian.student.listener.description}
                  type="Indian"
                  category="Student"
                  name="Listener"
                  onSelect={handleTicketSelect}
                />

                {/* Academician Presenter */}
                <RegistrationCard
                  title="Academician Presenter"
                  price={registrationFees.physical.indian.academician.presenter.price}
                  currency={registrationFees.physical.indian.academician.presenter.currency}
                  taxRate={registrationFees.physical.indian.academician.presenter.taxRate}
                  taxAmount={
                    registrationFees.physical.indian.academician.presenter.price *
                    registrationFees.physical.indian.academician.presenter.taxRate
                  }
                  totalAmount={
                    registrationFees.physical.indian.academician.presenter.price *
                    (1 + registrationFees.physical.indian.academician.presenter.taxRate)
                  }
                  description={registrationFees.physical.indian.academician.presenter.description}
                  type="Indian"
                  category="Academician"
                  name="Presenter"
                  onSelect={handleTicketSelect}
                />

                {/* Academician Listener */}
                <RegistrationCard
                  title="Academician Listener"
                  price={registrationFees.physical.indian.academician.listener.price}
                  currency={registrationFees.physical.indian.academician.listener.currency}
                  taxRate={registrationFees.physical.indian.academician.listener.taxRate}
                  taxAmount={
                    registrationFees.physical.indian.academician.listener.price *
                    registrationFees.physical.indian.academician.listener.taxRate
                  }
                  totalAmount={
                    registrationFees.physical.indian.academician.listener.price *
                    (1 + registrationFees.physical.indian.academician.listener.taxRate)
                  }
                  description={registrationFees.physical.indian.academician.listener.description}
                  type="Indian"
                  category="Academician"
                  name="Listener"
                  onSelect={handleTicketSelect}
                />
              </div>
            </div>

            {/* Foreign Registration Cards */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-white text-center">Foreign</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Student Presenter */}
                <RegistrationCard
                  title="Student Presenter"
                  price={registrationFees.physical.foreign.student.presenter.price}
                  currency={registrationFees.physical.foreign.student.presenter.currency}
                  taxRate={registrationFees.physical.foreign.student.presenter.taxRate}
                  taxAmount={
                    registrationFees.physical.foreign.student.presenter.price *
                    registrationFees.physical.foreign.student.presenter.taxRate
                  }
                  totalAmount={
                    registrationFees.physical.foreign.student.presenter.price *
                    (1 + registrationFees.physical.foreign.student.presenter.taxRate)
                  }
                  description={registrationFees.physical.foreign.student.presenter.description}
                  type="International"
                  category="Student"
                  name="Presenter"
                  onSelect={handleTicketSelect}
                />

                {/* Student Listener */}
                <RegistrationCard
                  title="Student Listener"
                  price={registrationFees.physical.foreign.student.listener.price}
                  currency={registrationFees.physical.foreign.student.listener.currency}
                  taxRate={registrationFees.physical.foreign.student.listener.taxRate}
                  taxAmount={
                    registrationFees.physical.foreign.student.listener.price *
                    registrationFees.physical.foreign.student.listener.taxRate
                  }
                  totalAmount={
                    registrationFees.physical.foreign.student.listener.price *
                    (1 + registrationFees.physical.foreign.student.listener.taxRate)
                  }
                  description={registrationFees.physical.foreign.student.listener.description}
                  type="International"
                  category="Student"
                  name="Listener"
                  onSelect={handleTicketSelect}
                />

                {/* Academician Presenter */}
                <RegistrationCard
                  title="Academician Presenter"
                  price={registrationFees.physical.foreign.academician.presenter.price}
                  currency={registrationFees.physical.foreign.academician.presenter.currency}
                  taxRate={registrationFees.physical.foreign.academician.presenter.taxRate}
                  taxAmount={
                    registrationFees.physical.foreign.academician.presenter.price *
                    registrationFees.physical.foreign.academician.presenter.taxRate
                  }
                  totalAmount={
                    registrationFees.physical.foreign.academician.presenter.price *
                    (1 + registrationFees.physical.foreign.academician.presenter.taxRate)
                  }
                  description={registrationFees.physical.foreign.academician.presenter.description}
                  type="International"
                  category="Academician"
                  name="Presenter"
                  onSelect={handleTicketSelect}
                />

                {/* Academician Listener */}
                <RegistrationCard
                  title="Academician Listener"
                  price={registrationFees.physical.foreign.academician.listener.price}
                  currency={registrationFees.physical.foreign.academician.listener.currency}
                  taxRate={registrationFees.physical.foreign.academician.listener.taxRate}
                  taxAmount={
                    registrationFees.physical.foreign.academician.listener.price *
                    registrationFees.physical.foreign.academician.listener.taxRate
                  }
                  totalAmount={
                    registrationFees.physical.foreign.academician.listener.price *
                    (1 + registrationFees.physical.foreign.academician.listener.taxRate)
                  }
                  description={registrationFees.physical.foreign.academician.listener.description}
                  type="International"
                  category="Academician"
                  name="Listener"
                  onSelect={handleTicketSelect}
                />
              </div>
            </div>
          </div>

          {/* Virtual Registration Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                Virtual Registration
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
            </div>

            {/* Foreign Registration Cards */}
            <div>
              {/* <h3 className="text-2xl font-semibold mb-6 text-white text-center place-items-center">Foreign</h3> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-3xl mx-auto">
                {/* Student Presenter */}
                <RegistrationCard
                  title="Student Presenter"
                  price={registrationFees.virtual.foreign.student.presenter.price}
                  currency={registrationFees.virtual.foreign.student.presenter.currency}
                  taxRate={registrationFees.virtual.foreign.student.presenter.taxRate}
                  taxAmount={
                    registrationFees.virtual.foreign.student.presenter.price *
                    registrationFees.virtual.foreign.student.presenter.taxRate
                  }
                  totalAmount={
                    registrationFees.virtual.foreign.student.presenter.price *
                    (1 + registrationFees.virtual.foreign.student.presenter.taxRate)
                  }
                  description={registrationFees.virtual.foreign.student.presenter.description}
                  type="Virtual"
                  category="Student"
                  name="Presenter"
                  onSelect={handleTicketSelect}
                />

                {/* Academician Presenter */}
                <RegistrationCard
                  title="Academician Presenter"
                  price={registrationFees.virtual.foreign.academician.presenter.price}
                  currency={registrationFees.virtual.foreign.academician.presenter.currency}
                  taxRate={registrationFees.virtual.foreign.academician.presenter.taxRate}
                  taxAmount={
                    registrationFees.virtual.foreign.academician.presenter.price *
                    registrationFees.virtual.foreign.academician.presenter.taxRate
                  }
                  totalAmount={
                    registrationFees.virtual.foreign.academician.presenter.price *
                    (1 + registrationFees.virtual.foreign.academician.presenter.taxRate)
                  }
                  description={registrationFees.virtual.foreign.academician.presenter.description}
                  type="Virtual"
                  category="Academician"
                  name="Presenter"
                  onSelect={handleTicketSelect}
                />
              </div>
            </div>
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
