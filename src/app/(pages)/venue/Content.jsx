import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  MapPin,
  Navigation,
  Building,
  Utensils,
  Landmark,
  Trees,
  ShoppingBag,
  Palette,
} from "lucide-react"
import Link from "next/link"

export default function Venue() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md mb-6">
              <span>NextGenSynergy 2025</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Conference Venue
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">Join us at The Lalit New Delhi</p>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                        <Building className="h-6 w-6 text-cyan-400" />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Conference Venue</h2>
                  </div>

                  <div className="space-y-6 text-purple-100/90">
                    <p>
                      The Lalit New Delhi is one of the city's premier luxury hotels and conference venues. Located in
                      the heart of Connaught Place, this 5-star property offers world-class facilities and an elegant
                      environment perfect for NextGenSynergy 2025.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-white">Venue Features</h3>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>25,000 sq ft of sophisticated event space</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Grand Ballroom with seating for 400 attendees</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>8 breakout rooms for parallel sessions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Luxury networking lounges and exhibition areas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>High-speed WiFi and cutting-edge AV technology</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Premium catering with international cuisine options</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl border border-purple-400/10 p-5 mt-8">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="h-5 w-5 text-cyan-400" />
                        <h3 className="text-lg font-medium text-white">Address</h3>
                      </div>
                      <p className="text-purple-100/90">
                        declare soon
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg">
                      <Navigation className="mr-2 h-5 w-5" />
                      Get Directions
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-purple-400/20">
                    <Image
                      src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="The Lalit New Delhi"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>

                    {/* Floating elements */}
                    <div className="absolute top-1/4 right-1/4 h-12 w-12 rounded-full bg-cyan-400 blur-xl opacity-70 animate-pulse"></div>
                    <div
                      className="absolute bottom-1/3 left-1/3 h-16 w-16 rounded-full bg-fuchsia-400 blur-xl opacity-70 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Venue name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-1"> Delhi</h3>
                      <p className="text-purple-100/90">Delhi's premier luxury hotel and conference venue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Location
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden p-4">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-50"></div>

            <div className="relative rounded-2xl overflow-hidden h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7976686379!2d77.22310491508555!3d28.632160982418996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0x38c0e61b5b99d185!2sThe%20LaLiT%20New%20Delhi!5e0!3m2!1sen!2sin!4v1650012345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <h3 className="text-lg font-medium text-white">From Airport</h3>
                </div>
                <p className="text-purple-100/80">
                  30-45 minutes from Indira Gandhi International Airport (DEL) by taxi or Airport Express Metro
                </p>
              </div>

              <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-fuchsia-400" />
                  <h3 className="text-lg font-medium text-white">Metro Access</h3>
                </div>
                <p className="text-purple-100/80">5-minute walk from Barakhamba Road Metro Station (Blue Line)</p>
              </div>

              <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <h3 className="text-lg font-medium text-white">Parking</h3>
                </div>
                <p className="text-purple-100/80">Valet parking available for hotel guests and conference attendees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Nearby Attractions
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
              Explore Delhi during your visit to NextGenSynergy 2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "India Gate",
                description: "Iconic war memorial with beautiful gardens and boating facilities",
                distance: "3.5 km",
                icon: <Landmark className="h-8 w-8 text-amber-400" />,
                gradient: "from-amber-500 to-orange-600",
                image:
                  "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Red Fort",
                description: "UNESCO World Heritage site and historic Mughal-era fortress",
                distance: "5.2 km",
                icon: <Landmark className="h-8 w-8 text-red-400" />,
                gradient: "from-red-500 to-rose-600",
                image:
                  "https://images.unsplash.com/photo-1689113690757-0205a843a14e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Humayun's Tomb",
                description: "Magnificent garden tomb that inspired the Taj Mahal",
                distance: "7.8 km",
                icon: <Landmark className="h-8 w-8 text-purple-400" />,
                gradient: "from-purple-500 to-indigo-600",
                image:
                  "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Connaught Place",
                description: "Colonial-era shopping district with global brands and local markets",
                distance: "0.5 km",
                icon: <ShoppingBag className="h-8 w-8 text-cyan-400" />,
                gradient: "from-cyan-500 to-blue-600",
                image:
                  "https://images.unsplash.com/photo-1592639296346-560c37a0f711?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "National Museum",
                description: "Extensive collection of artifacts spanning 5,000 years of Indian history",
                distance: "4.2 km",
                icon: <Palette className="h-8 w-8 text-green-400" />,
                gradient: "from-green-500 to-teal-600",
                image:
                  "https://images.unsplash.com/photo-1688406265997-77897c1a31d1?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Lodhi Gardens",
                description: "Historic park with tombs, gardens and jogging paths",
                distance: "6.1 km",
                icon: <Trees className="h-8 w-8 text-green-400" />,
                gradient: "from-green-500 to-emerald-600",
                image:
                  "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((attraction, index) => (
              <div
                key={index}
                className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden group hover:bg-purple-900/30 transition-all"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative">
                  <div className="h-48 w-full overflow-hidden">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${attraction.gradient} p-0.5 mb-4 -mt-12 relative z-10`}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                        {attraction.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">{attraction.title}</h3>
                    <p className="text-purple-100/70 mb-3">{attraction.description}</p>

                    <div className="flex items-center gap-2 text-purple-100/60">
                      <MapPin className="h-4 w-4" />
                      <span>{attraction.distance} from venue</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      <Utensils className="h-6 w-6 text-amber-400" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Dining Options</h2>
                </div>

                <div className="space-y-6 text-purple-100/90">
                  <p>
                    Delhi is renowned for its diverse culinary scene, from street food to fine dining. While the
                    conference will provide catered lunches and refreshments, you may want to explore these dining
                    options for dinner or additional meals.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-5">
                      <h3 className="text-lg font-medium text-white mb-3">Hotel Dining</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>24/7 Restaurant - international cuisine</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>Baluchi - award-winning pan-Indian cuisine</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>OKO - Asian cuisine and sushi</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-5">
                      <h3 className="text-lg font-medium text-white mb-3">Nearby Restaurants</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>Indian Accent (5-min drive) - modern Indian</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>Saravana Bhavan (10-min walk) - South Indian</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>Bukhara (15-min drive) - North Indian tandoor</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative backdrop-blur-sm bg-purple-900/30 rounded-2xl border border-purple-400/20 overflow-hidden p-6">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-50"></div>

              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-3">Ready to Join Us?</h3>
                <p className="text-purple-100/80 mb-6">
                  Register for NextGenSynergy 2025 today and experience our luxury venue in the heart of New Delhi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/registration">
                  <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 rounded-lg">
                    Register Now
                  </Button>
                  </Link>
                  <Link href="/contact">
                  <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white border-0 rounded-lg">
                  Contsct us
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
