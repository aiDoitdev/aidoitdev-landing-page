"use client";

import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import pulseLogo from '@/assets/logo-pulse.png'
import echoLogo from '@/assets/logo-echo.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [acmeLogo, quantumLogo, pulseLogo, echoLogo, apexLogo];

export const LogoTicker = () => {
  return (
    <section className='py-20 md:py-24 px-4 bg-white/[0.02] border-b border-white/10'>
      <div className='container mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <p className='text-white/60 text-sm font-medium tracking-wider'>TRUSTED BY INNOVATIVE TEAMS</p>
          <h3 className='text-2xl md:text-3xl font-semibold text-white mt-2'>
            Built with the Tools You Love
          </h3>
        </motion.div>

        {/* Logos Container */}
        <div className='relative'>
          {/* Gradient overlays for fade effect */}
          <div className='absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none' />
          <div className='absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none' />

          {/* Scrolling Container */}
          <div className='overflow-hidden'>
            <motion.div
              className='flex gap-12 md:gap-16'
              initial={{ x: 0 }}
              animate={{ x: -1000 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <motion.div
                  key={`first-${index}`}
                  className='flex-shrink-0'
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className='h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300'
                    priority={false}
                  />
                </motion.div>
              ))}

              {/* Second set of logos (for seamless loop) */}
              {logos.map((logo, index) => (
                <motion.div
                  key={`second-${index}`}
                  className='flex-shrink-0'
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className='h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300'
                    priority={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center'
        >
          {[
            { label: 'Next.js', desc: 'Modern Web Apps' },
            { label: 'React', desc: 'Dynamic Interfaces' },
            { label: 'AI APIs', desc: 'Smart Features' },
            { label: 'Cloud Deploy', desc: 'Scalable Infrastructure' },
          ].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className='p-4'
            >
              <p className='text-white font-semibold text-sm md:text-base'>{tech.label}</p>
              <p className='text-white/50 text-xs md:text-sm mt-1'>{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
