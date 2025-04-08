import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Navigation, Building, Coffee, Utensils, Landmark, Trees } from "lucide-react"

export default function Venue() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md mb-6">
              <span>MetaConnect 2025</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Conference Venue
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">Join us at the Tech Innovation Center in San Francisco</p>
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
                      The Tech Innovation Center is San Francisco's premier venue for technology conferences and events.
                      Located in the heart of the city's innovation district, this state-of-the-art facility offers
                      cutting-edge amenities and a dynamic environment perfect for MetaConnect 2025.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-white">Venue Features</h3>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>30,000 sq ft of flexible event space</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Main auditorium with seating for 500 attendees</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>12 breakout rooms for parallel sessions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Dedicated networking spaces and exhibition areas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>High-speed WiFi and advanced AV capabilities</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>On-site catering and refreshment services</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl border border-purple-400/10 p-5 mt-8">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="h-5 w-5 text-cyan-400" />
                        <h3 className="text-lg font-medium text-white">Address</h3>
                      </div>
                      <p className="text-purple-100/90">
                        123 Innovation Boulevard
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
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
                      src="/placeholder.svg?height=400&width=600"
                      alt="Tech Innovation Center"
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
                      <h3 className="text-2xl font-bold text-white mb-1">Tech Innovation Center</h3>
                      <p className="text-purple-100/90">San Francisco's premier event space</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.77791667087!2d-122.43129831322481!3d37.77492951404477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a253%3A0x70b8c1b4e71be321!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1649451018385!5m2!1sen!2sus"
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
                  20 minutes from San Francisco International Airport (SFO) by taxi or rideshare
                </p>
              </div>

              <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-fuchsia-400" />
                  <h3 className="text-lg font-medium text-white">Public Transit</h3>
                </div>
                <p className="text-purple-100/80">
                  5-minute walk from Powell Street BART station and multiple Muni bus lines
                </p>
              </div>

              <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <h3 className="text-lg font-medium text-white">Parking</h3>
                </div>
                <p className="text-purple-100/80">
                  On-site parking available for $25/day, with additional public parking nearby
                </p>
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
              Explore San Francisco during your visit to MetaConnect 2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Golden Gate Park",
                description: "Expansive urban park with gardens, museums, and recreational areas",
                distance: "3.5 miles",
                icon: <Trees className="h-8 w-8 text-green-400" />,
                gradient: "from-green-500 to-teal-600",
              },
              {
                title: "Fisherman's Wharf",
                description: "Popular waterfront area with seafood restaurants and sea lion viewing",
                distance: "2.1 miles",
                icon: <Landmark className="h-8 w-8 text-blue-400" />,
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                title: "Museum of Modern Art",
                description: "World-class collection of modern and contemporary artwork",
                distance: "0.8 miles",
                icon: <Landmark className="h-8 w-8 text-purple-400" />,
                gradient: "from-purple-500 to-indigo-600",
              },
              {
                title: "Ferry Building Marketplace",
                description: "Historic ferry terminal with gourmet food vendors and farmers market",
                distance: "1.2 miles",
                icon: <Building className="h-8 w-8 text-amber-400" />,
                gradient: "from-amber-500 to-orange-600",
              },
              {
                title: "Chinatown",
                description: "Vibrant neighborhood with authentic cuisine and cultural experiences",
                distance: "1.5 miles",
                icon: <Landmark className="h-8 w-8 text-red-400" />,
                gradient: "from-red-500 to-rose-600",
              },
              {
                title: "Union Square",
                description: "Premier shopping district with luxury retailers and boutiques",
                distance: "0.6 miles",
                icon: <Coffee className="h-8 w-8 text-fuchsia-400" />,
                gradient: "from-fuchsia-500 to-pink-600",
              },
            ].map((attraction, index) => (
              <div
                key={index}
                className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden p-6 group hover:bg-purple-900/30 transition-all"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${attraction.gradient} p-0.5 mb-4`}
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
                    San Francisco is known for its diverse culinary scene. While the conference will provide catered
                    lunches and refreshments, you may want to explore these nearby dining options for dinner or
                    additional meals.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-5">
                      <h3 className="text-lg font-medium text-white mb-3">On-Site Options</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>Innovation Café (ground floor) - breakfast and lunch</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>Skyline Lounge (top floor) - light fare and beverages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>Tech Bar - coffee, pastries, and snacks</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-5">
                      <h3 className="text-lg font-medium text-white mb-3">Nearby Restaurants</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>Pixel Bistro (2-min walk) - modern American</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>Byte & Brew (5-min walk) - craft coffee and sandwiches</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2"></div>
                          <span>Code Kitchen (7-min walk) - international fusion</span>
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
                  Register for MetaConnect 2025 today and experience our state-of-the-art venue in San Francisco.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 rounded-lg">
                    Register Now
                  </Button>
                  <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white border-0 rounded-lg">
                    Book Accommodation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
