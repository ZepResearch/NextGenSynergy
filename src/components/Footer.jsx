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
  Quote,
  ExternalLink,
  Star,
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
              <Image src={'/Logox.svg'} className="drop-shadow-2xl  " alt="logo" height={200} width={300}/>
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
              {/* <li>
                <FooterLink href="/venue">Venue</FooterLink>
              </li> */}
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
                  href="https://www.zepresearch.com/"
                  className="text-purple-200/80 hover:text-cyan-300 transition-colors flex items-center"
                >
                www.zepresearch.com
                  <ExternalLink className="h-3 w-3 ml-1 text-cyan-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - CEO Note (replacing Newsletter) */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
              From Our CEO
            </h3>
            <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden p-5">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-30"></div>

              <div className="relative flex flex-col items-center">
                <div className="relative h-20 w-20 rounded-full p-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-md opacity-50"></div>
                  <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-purple-900/50">
                    <Image
                      src="/anikit.jpeg?height=80&width=80"
                      alt="CEO"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>

                <Quote className="h-6 w-6 text-cyan-400 mb-2" />

                <p className="text-purple-200/90 text-center italic mb-3">
                  "At NextGenSynergy, we're bridging disciplines to create a future where virtual collaboration
                  accelerates scientific discovery and innovation."
                </p>

                <p className="text-cyan-300 font-medium">Ankit Rath</p>
                <p className="text-purple-300/70 text-sm">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
          <div className="mt-10 text-center md:flex-row flex flex-col items-center justify-center gap-4 text-xs">
        
            <Link href="/privacy-policy" className="text-pink-500 drop-shadow-2xl">Privacy Policy</Link>
            <span className="text-purple-200/60">|</span>
            <Link href="/terms-and-conditions" className="text-pink-500 drop-shadow-2xl">Terms & Condition</Link>    
            <span className="text-purple-200/60">|</span>     
            <Link href="/cancellation-policy" className="text-pink-500 drop-shadow-2xl">Cancellation Policy</Link>  

          </div>      
        <div className="mt-2 pt-8 border-t border-purple-500/30 text-center">
          <p className="text-purple-200/60">
            © {new Date().getFullYear()} NextGenSynergy: The Virtual Interdisciplinary Forum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
