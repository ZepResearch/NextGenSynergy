import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Navigation, Building, Wifi, Coffee, Users } from 'lucide-react'

export function VenueDetailCard() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
            Conference Venue
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg text-purple-100/90 max-w-2xl mx-auto">
            Join us at our state-of-the-art venue for an immersive conference experience
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Venue image */}
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-purple-400/20">
                  <Image 
                    src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Conference venue - The Lalit New Delhi" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-1/4 right-1/4 h-12 w-12 rounded-full bg-cyan-400 blur-xl opacity-70 animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-1/3 h-16 w-16 rounded-full bg-fuchsia-400 blur-xl opacity-70 animate-pulse" style={{ animationDelay: "1s" }}></div>
                  
                  {/* Venue name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* <h3 className="text-2xl font-bold text-white mb-1">The Lalit New Delhi</h3>
                    <p className="text-purple-100/90">Connaught Place, New Delhi</p> */}
                  </div>
                </div>
                
                {/* Right side - Venue details */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-purple-100/70">Date</p>
                        <p className="text-white font-medium">August 21-22, 2025</p>
                        <p className="text-sm text-purple-100/70">2 Days of Innovation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500/20 text-fuchsia-400">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-purple-100/70">Time</p>
                        <p className="text-white font-medium">9:00 AM - 6:00 PM (Daily)</p>
                        <p className="text-sm text-purple-100/70">Registration opens at 8:00 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-purple-100/70">Address</p>
                        {/* <p className="text-white font-medium">Barakhamba Avenue</p>
                        <p className="text-white">Connaught Place, New Delhi 110001</p> */}
                   <p className="text-white">Declare soon  </p>   
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"></div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">Venue Amenities</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-purple-100/80">
                        <Wifi size={16} className="text-cyan-400" />
                        <span>High-speed WiFi</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-100/80">
                        <Building size={16} className="text-fuchsia-400" />
                        <span>Luxury Facilities</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-100/80">
                        <Coffee size={16} className="text-purple-400" />
                        <span>Premium Catering</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-100/80">
                        <Users size={16} className="text-cyan-400" />
                        <span>Networking Lounges</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="https://maps.app.goo.gl/mfuiMQLEPBc9gdpA7">
                    <Button className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg px-6 py-5">
                      <Navigation className="mr-2 h-5 w-5" />
                      Get Directions
                    </Button>
                    </Link> 
                    <Link href="/venue">
                    <Button variant="outline" className="border-purple-400/30 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20 rounded-lg px-6 py-5 backdrop-blur-md">
                      View Detail page
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Transportation info */}
              <div className="mt-8 p-6 rounded-xl border border-purple-400/20 bg-purple-900/40 backdrop-blur-sm">
                <h4 className="text-lg font-medium text-white mb-4">Transportation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-cyan-300 mb-2">From Airport</p>
                    <p className="text-purple-100/80">Indira Gandhi International Airport (DEL) is 16 km from the venue. Taxi services, airport express metro, and ride-sharing options are available, with an average travel time of 30-45 minutes.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fuchsia-300 mb-2">Public Transportation</p>
                    <p className="text-purple-100/80">The venue is easily accessible via Delhi Metro. Barakhamba Road Metro Station (Blue Line) is just a 5-minute walk from the venue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
