"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import Image from "next/image";

const features = [
  "Licensed and certified fire safety professionals",
  "State-of-the-art equipment and technology",
  "Comprehensive risk assessment services",
  "Customized solutions for every facility",
  "Ongoing maintenance and support",
  "Full regulatory compliance assistance",
];

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Clock, value: "24/7", label: "Emergency Response" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 relative h-72 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Firepro1.jpg"
                  alt="FirePro Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
              </div>

              {/* Secondary Images */}
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Firepro2.jpg"
                  alt="Fire Equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Firepro3.jpg"
                  alt="Fire Safety Training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-r from-fire-red to-fire-orange rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-white">
                <p className="text-4xl font-bold">98%</p>
                <p className="text-white/90">Client Satisfaction</p>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -z-10 -top-8 -left-8 w-72 h-72 bg-fire-red/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-fire-red/10 text-fire-red font-semibold rounded-full text-sm mb-4">
              About FirePro
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Your Trusted Partner in{" "}
              <span className="gradient-text">Fire Safety</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              FirePro is a leading private fire service contracting company dedicated 
              to ensuring public safety and property protection from fire-related 
              hazards. With over 15 years of experience, we provide comprehensive 
              fire safety, oil spill cleanup, and security solutions.
            </p>

            <p className="text-gray-600 mb-8">
              Our team of certified professionals is committed to delivering 
              exceptional service, utilizing state-of-the-art equipment and 
              industry best practices to protect what matters most to you.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-fire-red flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-fire-red/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-fire-red" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
