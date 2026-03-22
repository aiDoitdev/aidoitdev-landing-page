"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "Fast Development",
    description: "Build your MVP in just 1 week with our streamlined development process and proven workflows.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "AI-Powered Building",
    description: "Leverage the latest AI tools and agents to deliver production-ready code faster than ever before.",
    isNew: true,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Quality & Scale",
    description: "Enterprise-grade architecture from day one. Your MVP is built to scale as your business grows.",
    isNew: false,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-20 md:py-32 px-4 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm text-white/70 mb-4">
            Why Choose AiDOiT
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mb-4">
            Why We're Different
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We combine cutting-edge AI tools with expert development to deliver your MVP faster and better than anyone else.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-20"
        >
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedTab(index)}
              className={`relative group cursor-pointer rounded-2xl transition-all duration-300 overflow-hidden ${
                selectedTab === index
                  ? "bg-white/10 border border-white/20"
                  : "bg-white/5 border border-white/10 hover:bg-white/8"
              }`}
            >
              {/* New Badge */}
              {tab.isNew && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </span>
                </div>
              )}

              <div className="p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="h-20 w-20 mb-6 relative">
                  <DotLottieReact
                    src={tab.icon}
                    loop
                    autoplay
                    className="w-full h-full"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {tab.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed flex-grow">
                  {tab.description}
                </p>

                {/* Indicator */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-1 flex-grow bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: "30%" }}
                      animate={{ width: selectedTab === index ? "100%" : "30%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white/5 via-white/[0.02] to-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            What's Included in Every Project
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Stack",
                items: [
                  "Next.js / React for modern web apps",
                  "Mobile-ready responsive design",
                  "AI integrations (GPT-4, Claude, etc.)",
                  "Database design & setup",
                  "API development & deployment",
                ],
              },
              {
                title: "Support & Delivery",
                items: [
                  "1-week rapid development cycle",
                  "Weekly progress updates",
                  "Post-launch support & maintenance",
                  "Performance optimization",
                  "SEO-ready architecture",
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
