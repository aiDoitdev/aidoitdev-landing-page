"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "AiDOiT delivered our MVP in just 1 week. The quality and speed were exceptional. They understood our vision and executed flawlessly.",
    name: "Sophia Perez",
    title: "Founder @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "Working with AiDOiT was a game-changer. They built our AI agent from scratch and integrated it seamlessly into our existing systems.",
    name: "Jamie Lee",
    title: "CTO @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "The team at AiDOiT is incredibly responsive and professional. They delivered exactly what we needed, on time, and within budget.",
    name: "Alisa Hester",
    title: "Product Manager @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "Amazing experience! AiDOiT built our entire MVP faster than we expected. Their attention to detail and modern tech stack impressed us.",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm text-white/70 mb-4">
            Social Proof
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real feedback from founders and CTOs who shipped their products with us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[250px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate={index === current ? "center" : "exit"}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute w-full"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 h-full flex flex-col justify-between">
                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src={testimonial.avatarImg}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/70">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "bg-white w-8"
                    : "bg-white/30 w-2 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
