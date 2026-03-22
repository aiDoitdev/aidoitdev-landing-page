/**
 * Animated join waitlist button component
 * Features gradient background with glowing border effect
 */
import React from "react";

interface JoinWaitlistButtonProps {
  /** Click handler function */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Aria label for accessibility */
  ariaLabel?: string;
}

/**
 * Animated waitlist button with gradient background and glowing effects
 *
 * @example
 * <JoinWaitlistButton onClick={handleJoinWaitlist} />
 */
const JoinWaitlistButton: React.FC<JoinWaitlistButtonProps> = ({
  onClick,
  className = "",
  ariaLabel = "Join Waitlist",
}) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`relative py-3 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] transition-all hover:shadow-[0px_0px_20px_#8c45ff] ${className}`}
  >
    {/* Top border with gradient mask */}
    <div className="absolute inset-0">
      <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image: linear-gradient(to_bottom, black, transparent)]" />

      {/* Bottom border with gradient mask */}
      <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image: linear-gradient(to_top, black, transparent)]" />

      {/* Inner glow effect */}
      <div className="absolute inset-0 shadow-[0_0_10px_rgb(140, 69, 255, .7)_inset] rounded-lg" />
    </div>

    <span className="relative block">Join Waitlist</span>
  </button>
);

export default JoinWaitlistButton; 