"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  CuboidIcon as Cube,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Sparkles,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-purple-200 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
  >
    <ArrowRight className="h-3 w-0 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-1 text-cyan-400" />
    {children}
  </Link>
)

const SocialIcon = ({ href, icon: Icon }) => (
  <Link href={href} className="group">
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center border border-purple-500/30 group-hover:border-cyan-400/50 transition-colors duration-300"
    >
      <Icon className="h-5 w-5 text-purple-300 group-hover:text-cyan-300 transition-colors duration-300" />
    </motion.div>
  </Link>
)

const FloatingOrb = ({ delay, size, top, left, color }) => (
  <motion.div
    className={`absolute rounded-full ${color} blur-sm opacity-70 pointer-events-none`}
    style={{
      width: size,
      height: size,
      top: `${top}%`,
      left: `${left}%`,
      boxShadow: `0 0 20px 5px ${color === "bg-cyan-400" ? "#22d3ee" : "#c084fc"}`,
    }}
    animate={{
      y: [0, -15, 0],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      delay: delay,
    }}
  />
)

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-950 to-purple-950 border-t border-purple-500/30 overflow-hidden">
      {/* Animated orbs */}
      <FloatingOrb delay={0} size={60} top={20} left={5} color="bg-purple-500" />
      <FloatingOrb delay={1.5} size={40} top={70} left={15} color="bg-cyan-400" />
      <FloatingOrb delay={2.3} size={30} top={30} left={80} color="bg-purple-500" />
      <FloatingOrb delay={3.2} size={50} top={60} left={90} color="bg-cyan-400" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-4">
              {/* <Cube className="h-8 w-8 mr-2 text-cyan-400" /> */}
              <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                METACONNECT 
              </span>
            </div>
            <p className="text-purple-200/80 mb-6">
              Explore the next generation of digital experiences in our immersive METACONNECT    platform. Connect, create,
              and collaborate in ways never before possible.
            </p>
            <div className="flex space-x-3">
              <SocialIcon href="#" icon={Facebook} />
              <SocialIcon href="#" icon={Twitter} />
              <SocialIcon href="#" icon={Instagram} />
              <SocialIcon href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/about-conference">About Conference</FooterLink>
              </li>
              <li>
                <FooterLink href="/theme-and-topics">Themes and Topics</FooterLink>
              </li>
              <li>
                <FooterLink href="/committee">Committee</FooterLink>
              </li>
              <li>
                <FooterLink href="/submission">Submission</FooterLink>
              </li>
              <li>
                <FooterLink href="/venue">Venue</FooterLink>
              </li>
              <li>
                <FooterLink href="/awards">Awards</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-cyan-400 mt-0.5" />
                <span className="text-purple-200/80">
                  123 METACONNECT    Boulevard, Digital District, Virtual City, VC 10101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-cyan-400" />
                <span className="text-purple-200/80">+1 (888) META-VERSE</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-cyan-400" />
                <span className="text-purple-200/80">info@METACONNECT   -conference.com</span>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 mr-3 text-cyan-400" />
                <span className="text-purple-200/80">www.METACONNECT    -conference.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
              Join Our Newsletter
            </h3>
            <p className="text-purple-200/80 mb-4">
              Stay updated with the latest METACONNECT   developments and conference news.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-black/20 border-purple-500/30 text-purple-100 placeholder:text-purple-300/50 focus:border-cyan-400/70 h-11"
                />
                <Sparkles className="absolute right-3 top-3 h-5 w-5 text-cyan-400 pointer-events-none" />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-500/30 text-center">
          <p className="text-purple-200/60">© {new Date().getFullYear()} METACONNECT     Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

