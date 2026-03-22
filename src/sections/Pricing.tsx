"use client";

import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import Link from "next/link";

// Define types for our pricing data
type PricingFeature = {
  text: string;
};

type PricingPlan = {
  name: string;
  price: number;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
};

// Pricing data that can be easily edited
const pricingPlans: PricingPlan[] = [
  {
    name: "Starter MVP",
    price: 799,
    period: "One-time",
    description: "Perfect for early-stage startups looking to launch quickly with essential features.",
    features: [
      { text: "MVP delivery in 1 week" },
      { text: "Fully responsive Web & Mobile App" },
      { text: "1 Month Free Maintenance & Bug Fixes" },
      { text: "Basic Analytics Dashboard" },
      { text: "Email Support & Ticket System" },
      { text: "Essential integrations (Payments, Auth, etc.)" },
      { text: "Scalable codebase with modern tech stack" },
      { text: "Transparent development process with regular updates" },
    ],
    buttonText: "Get Started with Starter →",
  },
  {
    name: "Pro Growth",
    price: 2099,
    period: "One-time",
    description: "Comprehensive development with advanced features for scaling businesses.",
    features: [
      { text: "MVP delivery in 1 week" },
      { text: "Advanced Web & Mobile App with custom UI/UX" },
      { text: "3 Months Premium Maintenance & Support" },
      { text: "In-depth Analytics & Performance Reporting" },
      { text: "Priority Support & Strategy Consultations" },
      { text: "Custom Integrations & API Setup" },
      { text: "SEO & Performance Optimization" },
      { text: "Automated Testing & Deployment Setup" },
    ],
    buttonText: "Get Started with Pro →",
    isPopular: true,
  },
  {
    name: "Enterprise Scale",
    price: 4999,
    period: "One-time",
    description: "For startups needing maximum customization, dedicated support, and enterprise features.",
    features: [
      { text: "MVP delivery in 3-4 weeks with custom features" },
      { text: "Enterprise-grade Web & Mobile App" },
      { text: "6 Months Free Maintenance & Optimization" },
      { text: "Custom AI-powered Analytics & Insights" },
      { text: "Dedicated Account Manager" },
      { text: "Full API Development & Third-party Integrations" },
      { text: "Scalability & Cloud Optimization" },
      { text: "Priority Feature Development & Roadmap Planning" },
      { text: "Security Audits & Compliance Checks" },
      { text: "24/7 Priority Support" },
    ],
    buttonText: "Get Started with Enterprise →",
  },
];

export const Pricing = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="pricing" className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm text-white/70 mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include 1-week delivery and full support.
          </p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                plan.isPopular
                  ? "border border-white/20 bg-white/5 ring-2 ring-white/10 transform md:scale-105"
                  : "border border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white">
                    ✨ MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8 md:p-10 flex flex-col h-full">
                {/* Plan Name */}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-white/70 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/70 ml-3 text-lg">/{plan.period}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="https://cal.com/aidoit.dev/mvp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 text-center transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] text-white hover:shadow-lg hover:shadow-purple-500/50"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  {plan.buttonText}
                </Link>

                {/* Features */}
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white/70 text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <p className="text-white/70 mb-6">
            Have questions? Let's discuss what works best for your project.
          </p>
          <Link
            href="https://cal.com/aidoit.dev/mvp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};
