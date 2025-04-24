"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Globe,
  ExternalLink,
} from "lucide-react"

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-purple-200 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
  >
    <ArrowRight className="h-3 w-0 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-1 text-cyan-400" />
    {children}
  </Link>
)

const SocialIcon = ({ href, icon: Icon, color = "text-purple-300" }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="group">
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-900/80 to-blue-900/80 flex items-center justify-center border border-purple-500/30 group-hover:border-cyan-400/50 transition-colors duration-300 backdrop-blur-sm"
    >
      <Icon className={`h-5 w-5 ${color} group-hover:text-cyan-300 transition-colors duration-300`} />
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

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                NextGenSynergy
              </span>
            </div>
            <p className="text-purple-200/80 mb-6">
              The Virtual Interdisciplinary Forum bringing together researchers, technologists, and visionaries to
              explore the intersection of virtual worlds and scientific discovery.
            </p>
            <div className="flex space-x-3">
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61561809783777"
                icon={Facebook}
                color="text-blue-300"
              />
              <SocialIcon href="https://www.instagram.com/zepresearch/" icon={Instagram} color="text-pink-300" />
              <SocialIcon href="https://x.com/Zepresearch" icon={Twitter} color="text-cyan-300" />
              <SocialIcon href="https://www.linkedin.com/company/zep-research/" icon={Linkedin} color="text-blue-300" />
              <SocialIcon href="https://www.youtube.com/@Zepresearch" icon={Youtube} color="text-red-300" />
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
              <li>
                <FooterLink href="/journals">Journals</FooterLink>
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
                <MapPin className="h-5 w-5 mr-3 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-purple-200/80">
                  DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-cyan-400 shrink-0" />
                <span className="text-purple-200/80">+91 78488 54815</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-purple-200/80">info@zepresearch.com</span>
                  <span className="text-purple-200/80">info@thenextgensynergy.com</span>
                </div>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 mr-3 text-cyan-400 shrink-0" />
                <Link
                  href="https://thenextgensynergy.com"
                  className="text-purple-200/80 hover:text-cyan-300 transition-colors flex items-center"
                >
                  thenextgensynergy.com
                  <ExternalLink className="h-3 w-3 ml-1 text-cyan-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Our Other Conferences */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
              Our Other Conferences
            </h3>
            <div className="space-y-4">
              {/* Conference Card 1 */}
              <Link href="https://icsthm.com" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative backdrop-blur-sm bg-purple-900/20 rounded-lg border border-purple-400/20 overflow-hidden group"
                >
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="flex p-3">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden mr-3 border border-cyan-500/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:opacity-70 transition-opacity"></div>
                      <Image
                        src="/conf/ictmh.svg?height=64&width=64"
                        alt="ICSTHM Conference"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors">ICSTHM 2025</h4>
                      <div className="flex items-center text-xs text-purple-200/70">
                        <MapPin className="h-3 w-3 mr-1 text-purple-400" />
                        <span>Bangkok, Thailand</span>
                      </div>
                      <div className="flex items-center mt-1 text-xs text-purple-200/70 group-hover:text-cyan-300 transition-colors">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        <span>Visit Website</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Conference Card 2 */}
              <Link href="https://www.wfcces.com/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative backdrop-blur-sm bg-purple-900/20 rounded-lg border border-purple-400/20 overflow-hidden group"
                >
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="flex p-3">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden mr-3 border border-cyan-500/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:opacity-70 transition-opacity"></div>
                      <Image
                        src="/conf/wfcces.png?height=64&width=64"
                        alt="ICAIM Conference"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors">WFCCES 2025</h4>
                      <div className="flex items-center text-xs text-purple-200/70">
                        <MapPin className="h-3 w-3 mr-1 text-purple-400" />
                        <span>Kuala Lumpur, Malaysia</span>
                      </div>
                      <div className="flex items-center mt-1 text-xs text-purple-200/70 group-hover:text-cyan-300 transition-colors">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        <span>Visit Website</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Conference Card 3 */}
              <Link href="https://www.icemss.in/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative backdrop-blur-sm bg-purple-900/20 rounded-lg border border-purple-400/20 overflow-hidden group"
                >
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="flex p-3">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden mr-3 border border-cyan-500/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:opacity-70 transition-opacity"></div>
                      <Image
                        src="/conf/icemss.ico?height=64&width=64"
                        alt="ICBDM Conference"
                        width={64}
                        height={64}
                        className="object-cover p-1"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors">ICEMSS 2025</h4>
                      <div className="flex items-center text-xs text-purple-200/70">
                        <MapPin className="h-3 w-3 mr-1 text-purple-400" />
                        <span>GOA</span>
                      </div>
                      <div className="flex items-center mt-1 text-xs text-purple-200/70 group-hover:text-cyan-300 transition-colors">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        <span>Visit Website</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>

      </div>
        <div className="mt-12 pt-8 border-t border-purple-500/30 text-center">
          <p className="text-purple-200/60">
            © {new Date().getFullYear()} NextGenSynergy: The Virtual Interdisciplinary Forum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
