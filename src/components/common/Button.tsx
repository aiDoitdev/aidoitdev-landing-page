/**
 * Animated primary button component
 * Features gradient background with animated border effect
 */
interface ButtonProps extends React.PropsWithChildren {
  /** Additional CSS classes to apply */
  className?: string;
  /** Click handler function */
  onClick?: () => void;
  /** Button type */
  type?: "button" | "submit" | "reset";
  /** Disabled state */
  disabled?: boolean;
  /** Aria label for accessibility */
  ariaLabel?: string;
}

/**
 * Primary animated button component with gradient background and hover effects
 *
 * @example
 * <Button onClick={handleClick}>Click Me</Button>
 */
const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`group relative inline-flex items-center overflow-hidden rounded-full px-8 py-3 bg-[#4637B4] transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 flex items-center [container-type:inline-size]">
        <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] transition duration-300" />
      </div>

      {/* Inner background */}
      <div className="absolute inset-0.5 rounded-full bg-black/90" />

      {/* Hover glow effect */}
      <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100" />

      {/* Button content */}
      <div className="relative inline-flex items-center gap-2">
        <span className="mt-px text-lg font-medium text-white">{children}</span>
      </div>
    </button>
  );
};

export default Button;