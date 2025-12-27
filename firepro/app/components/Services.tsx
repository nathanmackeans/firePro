"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Flame,
  Search,
  Wrench,
  Bell,
  GraduationCap,
  ClipboardList,
  Droplets,
  Shield,
  X,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Fire Prevention & Control",
    shortDesc: "Comprehensive fire suppression systems and control measures to prevent and manage fire emergencies effectively.",
    details: {
      description: "Our fire prevention and control services are designed to safeguard your property from fire-related hazards.",
      features: [
        "Fire suppression system design and installation",
        "Automatic sprinkler system maintenance",
        "Fire extinguisher servicing and placement",
        "Hazard identification and mitigation",
        "Fire risk assessments",
        "Suppression system inspections",
      ],
      benefits: "Reduces fire damage, protects lives, ensures regulatory compliance, and lowers insurance premiums.",
    },
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Search,
    title: "Fire Safety Inspection",
    shortDesc: "Thorough facility inspections to identify fire hazards, ensure code compliance, and recommend safety improvements.",
    details: {
      description: "Comprehensive inspections to identify potential fire hazards and ensure full code compliance.",
      features: [
        "NFPA-compliant facility inspections",
        "Fire code compliance verification",
        "Emergency exit and lighting checks",
        "Fire extinguisher accessibility review",
        "Hazard documentation and reporting",
        "Compliance recommendations",
      ],
      benefits: "Identifies risks early, prevents violations, protects occupants, and maintains insurance coverage.",
    },
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    shortDesc: "Professional servicing and maintenance of fire extinguishers, hydrants, and all firefighting equipment.",
    details: {
      description: "Regular maintenance ensures all fire safety equipment is operational and ready when needed.",
      features: [
        "Fire extinguisher servicing and refilling",
        "Hydrant maintenance and testing",
        "Hose and nozzle inspections",
        "Equipment certification and tagging",
        "Maintenance records and reporting",
        "Emergency repair services",
      ],
      benefits: "Guarantees equipment reliability, ensures regulatory compliance, extends equipment lifespan.",
    },
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Bell,
    title: "Alarm Installation",
    shortDesc: "State-of-the-art fire alarm system installation, monitoring, and maintenance for early detection and response.",
    details: {
      description: "Advanced fire alarm systems with professional monitoring and continuous maintenance.",
      features: [
        "Fire alarm system design and installation",
        "24/7 professional monitoring",
        "Smoke and heat detector installation",
        "System testing and certification",
        "Battery backup and power management",
        "Emergency response coordination",
      ],
      benefits: "Early warning saves lives, professional monitoring ensures rapid response, reduces property damage.",
    },
    color: "from-red-600 to-red-400",
  },
  {
    icon: GraduationCap,
    title: "Fire Safety Training",
    shortDesc: "Comprehensive training programs for staff and personnel on fire prevention, evacuation, and emergency response.",
    details: {
      description: "Expert-led training to prepare your team for fire emergencies and prevention.",
      features: [
        "Employee fire safety training",
        "Evacuation procedure drills",
        "Fire extinguisher use training",
        "Emergency response procedures",
        "Hazard recognition training",
        "Customized training programs",
      ],
      benefits: "Empowers employees, reduces panic in emergencies, ensures coordinated response, saves lives.",
    },
    color: "from-orange-600 to-orange-400",
  },
  {
    icon: ClipboardList,
    title: "Emergency Planning",
    shortDesc: "Custom emergency response plans and procedures tailored to your facility's specific needs and layout.",
    details: {
      description: "Comprehensive emergency plans designed specifically for your facility.",
      features: [
        "Custom emergency response plans",
        "Evacuation route planning",
        "Communication protocol development",
        "Assembly point identification",
        "Accountability procedures",
        "Plan testing and updating",
      ],
      benefits: "Coordinated response, faster evacuation, clear communication, accountability, and saved lives.",
    },
    color: "from-amber-600 to-amber-400",
  },
  {
    icon: Droplets,
    title: "Oil Spill Cleanup",
    shortDesc: "Rapid response oil spill containment and cleanup services to minimize environmental and property damage.",
    details: {
      description: "Professional oil spill response and cleanup to protect environment and property.",
      features: [
        "24/7 emergency response",
        "Spill containment and control",
        "Environmental cleanup",
        "Hazmat handling and disposal",
        "Damage assessment and reporting",
        "Regulatory compliance assistance",
      ],
      benefits: "Minimizes environmental impact, protects property, ensures regulatory compliance, rapid response.",
    },
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    shortDesc: "Integrated security services to protect your property, assets, and personnel around the clock.",
    details: {
      description: "Comprehensive security solutions integrated with your fire safety systems.",
      features: [
        "Security system installation",
        "24/7 monitoring services",
        "Access control systems",
        "CCTV and surveillance",
        "Alarm system integration",
        "Emergency response coordination",
      ],
      benefits: "Complete property protection, deterrence, quick response, asset security, peace of mind.",
    },
    color: "from-slate-600 to-slate-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  return (
    <section id="services" className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-fire-red/10 text-fire-red font-semibold rounded-full text-xs sm:text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Comprehensive Fire Safety{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            From prevention to emergency response, we provide end-to-end fire safety 
            services to keep your people and property protected.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(index)}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-white/20 transition-colors`}
                >
                  <service.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white mb-2 sm:mb-3 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-white/90 transition-colors text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-fire-red group-hover:text-white font-medium text-sm transition-colors">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-fire-red/5 to-fire-orange/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Need a custom solution for your facility?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-fire-red to-fire-orange text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-fire-red/30 transition-all hover:scale-105"
          >
            Request Custom Quote
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Modal - Service Details */}
      {selectedService !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Service Header */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[selectedService].color} flex items-center justify-center flex-shrink-0`}
              >
                {services[selectedService].icon && 
                  (() => {
                    const IconComponent = services[selectedService].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()
                }
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {services[selectedService].title}
                </h2>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {services[selectedService].details.description}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services[selectedService].details.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-fire-red flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-fire-red/10 to-fire-orange/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Benefits</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {services[selectedService].details.benefits}
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={() => setSelectedService(null)}
              className="block w-full bg-gradient-to-r from-fire-red to-fire-orange text-white py-3 px-6 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-fire-red/30 transition-all text-sm sm:text-base"
            >
              Get Free Quote for This Service
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
