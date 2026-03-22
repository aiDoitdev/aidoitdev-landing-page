/**
 * Email input component for waitlist subscription
 * Handles email validation and Supabase integration
 */

"use client";

import React, { useState, useCallback } from "react";
import { MdPerson } from "react-icons/md";
import { supabase } from "@/utils/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createLogger } from "@/utils/logger";

const logger = createLogger("EmailInput");

/* Email validation regex pattern */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface EmailInputProps {
  /** Callback when email is successfully subscribed */
  onSuccess?: (email: string) => void;
  /** Custom placeholder text */
  placeholder?: string;
}

/**
 * Email input component for newsletter/waitlist subscription
 *
 * @example
 * <EmailInput onSuccess={(email) => console.log(email)} />
 */
const EmailInput: React.FC<EmailInputProps> = ({
  onSuccess,
  placeholder = "Your Awesome Email Please!",
}) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Validate email format
   */
  const validateEmail = useCallback((value: string): boolean => {
    return EMAIL_REGEX.test(value);
  }, []);

  /**
   * Handle email input change with validation
   */
  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
      setIsValid(value === "" || validateEmail(value));
    },
    [validateEmail]
  );

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(async (): Promise<void> => {
    try {
      const trimmedEmail = email.trim();

      /* Validate email input */
      if (!trimmedEmail || !isValid) {
        toast.error("Invalid Email Buddy!", {
          position: "bottom-center",
        });
        return;
      }

      setIsLoading(true);

      /* Insert email into Supabase */
      const { error } = await supabase.from("email").insert([{ email: trimmedEmail }]);

      if (error) {
        logger.error("Failed to subscribe email:", error);

        /* Handle duplicate email error */
        if (error.code === "23505") {
          toast.info("You're already in our waitlist! 🎉", {
            position: "bottom-center",
          });
        } else {
          toast.error("Failed to Subscribe, please try again", {
            position: "bottom-center",
          });
        }
        return;
      }

      /* Success handling */
      toast.success("Boom! You're In!", {
        position: "bottom-center",
      });

      setEmail("");
      onSuccess?.(trimmedEmail);

      logger.info("Email subscribed successfully:", { email: trimmedEmail });
    } catch (error) {
      logger.error("Unexpected error during subscription:", error);
      toast.error("Something went wrong, please try again later", {
        position: "bottom-center",
      });
    } finally {
      setIsLoading(false);
    }
  }, [email, isValid, onSuccess]);

  /**
   * Handle Enter key press
   */
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !isLoading) {
        handleSubmit();
      }
    },
    [handleSubmit, isLoading]
  );

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-4">
        {/* Email Input Field */}
        <div className="relative w-full md:w-80">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <MdPerson size={20} aria-hidden="true" />
          </span>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={isLoading}
            aria-label="Email address"
            className={`w-full p-3 pl-10 border ${
              isValid ? "border-white/80" : "border-red-500"
            } rounded-lg focus:outline-none focus:ring-6 focus:ring-[#4a208a] hover:ring-6 hover:ring-[#4a208a] shadow-[0px_0px_12px_#8c45ff] h-12 disabled:opacity-50 disabled:cursor-not-allowed transition-all`}
            style={{ color: "black", backgroundColor: "white" }}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading || !email}
          aria-label="Join waitlist"
          className="relative py-3 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_20px_#8c45ff] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <div className="absolute inset-0">
            <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image: linear-gradient(to_bottom, black, transparent)]" />
            <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image: linear-gradient(to_top, black, transparent)]" />
            <div className="absolute inset-0 shadow-[0_0_10px_rgb(140, 69, 255, .7)_inset] rounded-lg" />
          </div>
          <span className="relative block">
            {isLoading ? "Subscribing..." : "Join Waitlist"}
          </span>
        </button>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default EmailInput; 