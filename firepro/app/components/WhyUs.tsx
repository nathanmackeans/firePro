"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Award,
  Shield,
  HeadphonesIcon,
  BadgeCheck,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description:
      "Round-the-clock availability for emergencies. Our rapid response team is always ready to act.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description:
      "Our team consists of licensed and certified fire safety experts with years of hands-on experience.",
  },
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description:
      "End-to-end fire safety solutions from prevention and inspection to training and emergency response.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Personal account managers and dedicated support teams ensure your needs are always met.",
  },
  {
    icon: BadgeCheck,
    title: "Regulatory Compliance",
    description:
      "We ensure your facility meets all local and national fire safety codes and regulations.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Quick assessments, rapid installations, and efficient service delivery to minimize downtime.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-fire-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fire-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-fire-red/20 text-fire-orange font-semibold rounded-full text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The FirePro{" "}
            <span className="gradient-text">Advantage</span>
          </h2>
          <p className="text-lg text-gray-300">
            Discover why leading businesses and property owners trust FirePro 
            for their fire safety and security needs.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-fire-red to-fire-orange rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-fire-red to-fire-orange rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">15+</p>
              <p className="text-white/80">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">500+</p>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">50+</p>
              <p className="text-white/80">Expert Technicians</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">98%</p>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
