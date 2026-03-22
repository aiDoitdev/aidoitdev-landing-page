/**
 * @fileoverview Hero section component - Main headline and value proposition
 */

"use client";

import Button from "@/components/common/Button";
import starsBg from "@/assets/stars.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMousePosition } from "@/hooks";
import {
  ANIMATION_CONFIG,
  ANIMATION_EASING,
  EXTERNAL_LINKS,
  HERO_CONFIG,
} from "@/constants";

interface ValueProp {
  icon: string;
  text: string;
}

interface TrustBadge {
  text: string;
}

const VALUE_PROPS: ValueProp[] = [
  { icon: "⚡", text: "1-Week Delivery" },
  { icon: "🤖", text: "AI-Powered" },
  { icon: "📦", text: "Production-Ready" },
];

const TRUST_BADGES: TrustBadge[] = [
  { text: "Rapid Delivery" },
  { text: "Expert Team" },
  { text: "Tech Stack" },
  { text: "24/7 Support" },
];

/**
 * Hero section component with animated background and interactive effects
 * Features mouse-tracking gradient orbs and staggered animations
 */
export const Hero: React.FC = () => {
  const mousePosition = useMousePosition();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATION_CONFIG.STAGGER_DELAY,
        delayChildren: ANIMATION_CONFIG.INITIAL_DELAY,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: ANIMATION_CONFIG.TRANSITION_DURATION,
        type: "spring",
        stiffness: ANIMATION_CONFIG.SPRING_STIFFNESS,
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: ANIMATION_CONFIG.FLOAT_DURATION,
        repeat: Infinity,
        ease: ANIMATION_EASING.EASE_IN_OUT,
      },
    },
  };

  const rotatingVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: ANIMATION_CONFIG.ROTATE_DURATION,
        repeat: Infinity,
        ease: ANIMATION_EASING.LINEAR,
      },
    },
  };

  return (
    <section
      className="min-h-screen pt-[80px] sm:pt-[140px] flex items-center relative overflow-hidden perspective"
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", damping: 30 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 pointer-events-none"
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20" />
      </div>

      {/* Gradient overlays for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container px-4 md:px-6 relative z-10"
      >
        {/* Badge with 3D effect */}
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05, rotateY: 5 }} className="flex justify-center mb-8">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-white/80">
              <span className="sm:inline hidden">
                ⏰ Limited Availability: Only {HERO_CONFIG.AVAILABLE_SPOTS} spots remaining for{" "}
                {HERO_CONFIG.AVAILABLE_MONTH}
              </span>
              <span className="sm:hidden">{HERO_CONFIG.AVAILABLE_SPOTS} spots left for {HERO_CONFIG.AVAILABLE_MONTH}</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Main Headline with 3D text effect */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
            {/* First line */}
            <motion.span
              className="block bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mb-3"
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 1, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: ANIMATION_EASING.EASE_IN_OUT }}
            >
              {HERO_CONFIG.HEADLINE_1}
            </motion.span>

            {/* Second line - Main focus */}
            <motion.span
              className="block bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(59,130,246,.5))] text-transparent bg-clip-text relative inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
              }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: ANIMATION_EASING.EASE_IN_OUT, delay: 0.2 }}
            >
              {HERO_CONFIG.HEADLINE_2}
            </motion.span>

            {/* Third line */}
            <motion.span
              className="block bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(139,93,168,.5))] text-transparent bg-clip-text mt-3"
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, -1, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: ANIMATION_EASING.EASE_IN_OUT, delay: 0.4 }}
            >
              {HERO_CONFIG.HEADLINE_3}
            </motion.span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {HERO_CONFIG.SUBHEADLINE}
          </motion.p>
        </motion.div>

        {/* Value Props with 3D cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 text-center">
          {VALUE_PROPS.map((item, idx) => (
            <motion.div
              key={item.text}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.08,
                rotateY: 10,
                y: -10,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <motion.span
                className="text-2xl block"
                variants={rotatingVariants}
                initial="initial"
                animate={idx === 1 ? "animate" : "initial"}
              >
                {item.icon}
              </motion.span>
              <p className="text-white/80 text-sm mt-2">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={EXTERNAL_LINKS.CALENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-lg overflow-hidden"
            >
              {/* Animated background shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["200%", "-200%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <svg
                className="w-5 h-5 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="relative z-10">Schedule Your Call</span>
              <motion.svg
                className="w-5 h-5 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Signal with staggered animations */}
        <motion.div variants={itemVariants} className="mt-16 pt-16 border-t border-white/10">
          <p className="text-center text-white/60 text-sm mb-8">Trusted by founders building the future of software</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {TRUST_BADGES.map((badge, idx) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ x: 5, color: "#fff" }}
                className="flex items-center gap-2 text-white/70 text-sm cursor-pointer transition-colors"
              >
                <motion.svg
                  className="w-4 h-4 text-green-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </motion.svg>
                {badge.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
