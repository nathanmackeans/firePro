"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/Firepro1.jpg"
          alt="FirePro Services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
      </div>

      {/* Animated Fire Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[5, 15, 25, 35, 45, 55, 65, 75, 85, 95].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-fire-orange/30 rounded-full"
            initial={{
              x: `${pos}%`,
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: "-100%",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6"
            >
              <div className="w-3 h-3 bg-fire-orange rounded-full" />
              <span className="text-xs sm:text-sm text-white font-medium">Certified Fire Safety Experts</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Protecting Lives &{" "}
              <span className="gradient-text">Property</span> From Fire Hazards
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xl">
              Expert fire safety, oil spill cleanup, and security solutions. We ensure 
              public safety and property protection with 24/7 emergency response.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link
                href="#contact"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-fire-red to-fire-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:shadow-xl hover:shadow-fire-red/30 transition-all hover:scale-105"
              >
                Get Free Assessment
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+1234567890"
                className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-white/20 transition-all"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-fire-orange" />
                <span className="hidden sm:inline">24/7 Emergency</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-fire-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-2xl font-bold text-fire-orange">15+</span>
                </div>
                <div className="text-sm sm:text-base">
                  <p className="text-white font-semibold">Years</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-fire-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-2xl font-bold text-fire-orange">500+</span>
                </div>
                <div className="text-sm sm:text-base">
                  <p className="text-white font-semibold">Projects</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-fire-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-2xl font-bold text-fire-orange">24/7</span>
                </div>
                <div className="text-sm sm:text-base">
                  <p className="text-white font-semibold">Support</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Floating Card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl p-6 shadow-2xl w-64"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-fire-red/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-fire-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">Fire Prevention</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Comprehensive fire risk assessment and prevention strategies.
                </p>
              </motion.div>

              {/* Main Image Card */}
              <div className="ml-20 mt-20">
                <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Firepro2.jpg"
                    alt="Fire Safety Equipment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fire-red/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg">Professional Equipment</p>
                    <p className="text-white/80 text-sm">State-of-the-art fire safety gear</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-fire-red to-fire-orange rounded-2xl p-6 shadow-2xl w-56"
              >
                <p className="text-white font-bold text-3xl mb-1">98%</p>
                <p className="text-white/90 text-sm">Client Satisfaction Rate</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#services" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors text-xs sm:text-sm">
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
