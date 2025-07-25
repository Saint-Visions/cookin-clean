"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "🛡️",
    title: "HACP™ Technology",
    subtitle: "Patented Intelligence",
    description: "Human-AI Connection Protocol that adapts to your thinking patterns, creating a truly personalized AI experience.",
    highlight: "US Patent Pending"
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    subtitle: "Azure-Backed Protection",
    description: "SOC 2 compliant infrastructure with AES-256 encryption. Your data stays yours, always.",
    highlight: "Bank-Level Security"
  },
  {
    icon: "🔗",
    title: "Real Integrations",
    subtitle: "Not Just APIs",
    description: "Native CRM, billing, voice, SMS, and email integrations that actually work together seamlessly.",
    highlight: "20+ Platforms"
  },
  {
    icon: "🌍",
    title: "Global Scale",
    subtitle: "Built for Growth",
    description: "Multi-region deployment ready with 99.9% uptime SLA. From startup to enterprise scale.",
    highlight: "5 Continents"
  }
];

const stats = [
  { value: "10-20x", label: "Faster Learning", sublabel: "with HACP™" },
  { value: "99.9%", label: "Uptime SLA", sublabel: "Enterprise Grade" },
  { value: "<2s", label: "Response Time", sublabel: "Global CDN" },
  { value: "SOC 2", label: "Compliant", sublabel: "Security First" }
];

export default function WhySection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            Why SaintSal™?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Innovation is in our DNA. SaintSal™ fuses intelligence and elegance — powered by the world's most advanced AI.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <div className="text-yellow-400 font-semibold text-sm mb-3">
                      {feature.subtitle}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 text-yellow-400 text-sm font-medium">
                    {feature.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 mb-8">
              Join thousands of professionals who've already upgraded their workflow with SaintSal™.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 transform hover:-translate-y-1">
                Choose Your GOTTA GUY™
              </button>
              <button className="border border-gray-600 hover:border-yellow-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-yellow-500/10">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
