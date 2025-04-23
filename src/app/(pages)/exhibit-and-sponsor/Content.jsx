"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Award, Sparkles, Zap, Star, Check } from "lucide-react"
import { SponsorshipPackage } from "./components/sponsorship-package"
import { CCavenuePaymentForm } from "./components/payment-form"

export default function ExhibitAndSponsorPage() {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePackageSelect = (packageData) => {
    setSelectedPackage(packageData)
    setIsPaymentFormOpen(true)
  }

  const handlePaymentFormClose = () => {
    setIsPaymentFormOpen(false)
  }

  const handlePaymentFormSubmit = async (formData) => {
    setIsLoading(true)
    try {
      // Combine package data with form data
      const paymentData = {
        ...formData,
        order_id: `SPONSOR-${Date.now()}`,
        currency: "USD",
        amount: selectedPackage.price,
        redirect_url: `${window.location.origin}/api/ccavenue/handle`,
        cancel_url: `${window.location.origin}/api/ccavenue/handle`,
        language: "EN",
        package_name: selectedPackage.title,
        package_type: "Sponsorship",
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

  // Sponsorship packages data
  const sponsorshipPackages = [
    {
      title: "Platinum",
      price: 15000,
      color: "from-fuchsia-500 to-purple-600",
      icon: <Award className="h-8 w-8 text-fuchsia-400" />,
      benefits: [
        "1 VIP participating in the conference",
        "Complementary registration for 12 Students and 5 Faculties",
        "Stage honor to the Sponsor Party",
        "Full Page add on the conference proceeding book",
        "Brand carried in all website and promotional activities",
        "Event called by title sponsor",
        "Networking opportunities with different delegates",
        "Media Coverage",
        "2 Feedback video bites featured on YouTube channel",
      ],
    },
    {
      title: "Diamond",
      price: 12000,
      color: "from-cyan-500 to-blue-600",
      icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
      benefits: [
        "1 Session Chair participating from the sponsor side",
        "Complementary registration for 10 Students and 3 Faculties",
        "Full Page add on the conference proceeding book",
        "Brand carried in all website and promotional activities",
        "Public announcement recognizing the Sponsor",
        "Networking opportunities with different delegates",
        "Logo used on all website activities and campaigns",
        "5 minutes slot for media Coverage",
        "1 Feedback video featured on the YouTube channel",
      ],
    },
    {
      title: "Gold",
      price: 10000,
      color: "from-amber-500 to-orange-600",
      icon: <Star className="h-8 w-8 text-amber-400" />,
      benefits: [
        "Complementary registration for 8 Students and 2 Faculties",
        "Full page add on conference proceedings",
        "Announcement recognition of the sponsor during valedictory",
        "Logos used in all promotional materials",
        "One anchor can join from the sponsor side",
        "Networking opportunities with different delegates",
        "A standee of the sponsor side on the registration desk",
      ],
    },
    {
      title: "Silver",
      price: 7500,
      color: "from-slate-400 to-slate-600",
      icon: <Zap className="h-8 w-8 text-slate-400" />,
      benefits: [
        "Complementary registration for 5 Students and 1 Faculty",
        "2 volunteers at the registration desk from the sponsor side",
        "Half page add on Conference proceeding book",
        "Brand carried out in few promotional activities",
        "Networking opportunities with different delegates",
        "Print media coverage",
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
              Exhibit & Sponsorship
            </motion.h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <motion.p
              className="text-lg text-purple-100/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Partner with NextGenSynergy to showcase your commitment to innovation and research
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sponsorship Introduction */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden mb-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold mb-6 text-white text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Why Sponsor NextGenSynergy?
                </motion.h2>

                <motion.div
                  className="space-y-6 text-purple-100/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p>
                    NextGenSynergy: The Virtual Interdisciplinary Forum offers a unique opportunity to connect with
                    leading researchers, academics, and industry professionals across multiple disciplines. By
                    sponsoring our conference, you'll gain visibility among a diverse audience of innovators and
                    decision-makers.
                  </p>

                  <p>
                    Our sponsorship packages are designed to provide maximum exposure for your brand while supporting
                    the advancement of interdisciplinary research and collaboration. Choose the package that best aligns
                    with your goals and budget.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4 text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-1">
                      500+
                    </div>
                    <div className="text-purple-100/80">Expected Attendees</div>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4 text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-purple-300 mb-1">
                      Global
                    </div>
                    <div className="text-purple-100/80">Audience Reach</div>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4 text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300 mb-1">
                      12+
                    </div>
                    <div className="text-purple-100/80">Research Disciplines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Sponsorship Packages
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
              Select the sponsorship package that best suits your organization's goals and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipPackages.map((pkg, index) => (
              <SponsorshipPackage
                key={index}
                title={pkg.title}
                price={pkg.price}
                color={pkg.color}
                icon={pkg.icon}
                benefits={pkg.benefits}
                onSelect={() => handlePackageSelect(pkg)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
                  Additional Sponsorship Benefits
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Brand Visibility</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">
                          Logo placement on conference website, virtual platform, and promotional materials
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">Recognition in opening and closing ceremonies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">
                          Inclusion in conference proceedings and digital materials
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Networking Opportunities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-fuchsia-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">
                          Direct access to researchers and academics from multiple disciplines
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-fuchsia-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">
                          Opportunity to host a virtual booth in our exhibition space
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-fuchsia-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">
                          Facilitated introductions to key participants and speakers
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Content Opportunities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">
                          Opportunity to present a sponsored session or workshop
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">Feature your organization's research or case studies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">Participate in panel discussions and Q&A sessions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Post-Conference Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">Access to conference recordings and materials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">
                          Recognition in post-conference publications and reports
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-purple-100/90">
                          Opportunity for continued engagement with conference participants
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Sponsorship */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative backdrop-blur-sm bg-purple-900/30 rounded-2xl border border-purple-400/20 overflow-hidden p-8">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-50"></div>

              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-4">Looking for a Custom Package?</h3>
                <p className="text-purple-100/80 mb-6 max-w-2xl mx-auto">
                  We understand that every organization has unique goals and requirements. Contact us to discuss a
                  customized sponsorship package tailored to your specific needs.
                </p>

                <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400">
                  <a
                    href="mailto:sponsorship@nextgensynergy.com"
                    className="px-6 py-2 rounded-full bg-purple-900/70 backdrop-blur-sm text-white font-medium hover:bg-purple-900/50 transition-colors"
                  >
                    Contact Our Sponsorship Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form Dialog */}
      <CCavenuePaymentForm
        isOpen={isPaymentFormOpen}
        onClose={handlePaymentFormClose}
        packageName={selectedPackage?.title}
        amount={selectedPackage?.price || 0}
        onSubmit={handlePaymentFormSubmit}
        isLoading={isLoading}
      />
    </main>
  )
}
