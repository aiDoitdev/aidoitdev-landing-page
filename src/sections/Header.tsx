/**
 * @fileoverview Header component with navigation and branding
 */

"use client";

import { useState, useCallback } from "react";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import JoinWaitlistButton from "@/components/common/JoinWaitlistButton";
import { NAVIGATION_LINKS, EXTERNAL_LINKS } from "@/constants";
import { Z_INDEX } from "@/constants";

/* Navigation link configuration */
const NAV_LINKS = [
  {
    label: "Use Cases",
    href: NAVIGATION_LINKS.USECASES,
    external: false,
  },
  {
    label: "How it works",
    href: NAVIGATION_LINKS.HOW_IT_WORKS,
    external: false,
  },
  {
    label: "Connect on X",
    href: EXTERNAL_LINKS.TWITTER,
    external: true,
  },
] as const;

/**
 * Header component with responsive navigation
 * Features desktop and mobile menu with brand logo and CTA button
 */
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggle mobile menu visibility
   */
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  /**
   * Close mobile menu when a link is clicked
   */
  const handleNavClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      className="py-4 sm:py-6 border-b border-white/15 md:border-none fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm transition-all duration-300"
      style={{ zIndex: Z_INDEX.HEADER }}
    >
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-4 rounded-xl mx-auto">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="border h-12 w-12 rounded-lg inline-flex justify-center items-center border-white/15 hover:border-white/30 transition-colors">
              <LogoIcon className="h-10 w-10" alt="AiDOiT Logo" />
            </div>
            <h1 className="text-xl font-bold text-white">AiDOiT</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-base">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex gap-4 items-center flex-shrink-0">
            <a
              href={EXTERNAL_LINKS.CALENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] p-[1px] rounded-lg group transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black hover:bg-black/90 transition text-base font-medium">
                Let's Talk
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 8H15M15 8L8 1M15 8L8 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon className="h-7 w-7" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/50 backdrop-blur-sm rounded-lg mt-4 p-4 border border-white/10">
            <nav className="flex flex-col gap-4 text-base">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={handleNavClick}
                  className="text-white/70 hover:text-white transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile CTA Button */}
              <a
                href={EXTERNAL_LINKS.CALENDAR}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] p-[1px] rounded-lg group transition-all"
              >
                <span className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-black w-full hover:bg-black/90 transition text-base font-medium">
                  Let's Talk
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 8H15M15 8L8 1M15 8L8 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
