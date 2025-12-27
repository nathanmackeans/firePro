"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Flame,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Fire Prevention & Control",
  "Fire Safety Inspection",
  "Equipment Maintenance",
  "Alarm Installation",
  "Fire Safety Training",
  "Emergency Planning",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark relative">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative -top-16 bg-gradient-to-r from-fire-red to-fire-orange rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to secure your property?
            </h3>
            <p className="text-white/90">
              Get a free fire safety assessment from our experts today.
            </p>
          </div>
          <Link
            href="#contact"
            className="bg-white text-fire-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <Flame className="w-8 h-8 text-fire-red" />
              <span className="text-2xl font-bold text-white">
                Fire<span className="text-fire-orange">Pro</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Expert fire safety, oil spill cleanup, and security solutions. 
              Protecting lives and property since 2009.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-fire-red transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-fire-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-fire-orange transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-fire-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Safety Street<br />
                  Fire City, FC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-fire-red flex-shrink-0" />
                <a
                  href="tel:+12345678900"
                  className="text-gray-400 hover:text-fire-orange transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-fire-red flex-shrink-0" />
                <a
                  href="mailto:info@firepro.com"
                  className="text-gray-400 hover:text-fire-orange transition-colors"
                >
                  info@firepro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 FirePro. All rights reserved. | 
              Licensed & Insured Fire Safety Contractor
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-fire-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-fire-orange transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-fire-red to-fire-orange rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
}
