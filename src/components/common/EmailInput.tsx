"use client"

import React, { useState } from 'react';
import { MdPerson } from 'react-icons/md';
import { supabase } from '../../utils/supabaseClient'; // Import the Supabase client
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleSubmit = async () => {
    if (!isValid || email.trim() === '') {
      toast.error('Invalid Email Buddy!', {
        position: "bottom-center",
      });
      return;
    }

    const { error } = await supabase
      .from('email')
      .insert([{ email }]);

    if (error) {
      toast.error('Failed to Subscribe, please try again', {
        position: "bottom-center",
      });
    } else {
      toast.success("Boom! You're In!", {
        position: "bottom-center",
      });
      setEmail('');
    }
  };

  return (
    <>
    <div className="flex flex-col md:flex-row items-center md:justify-center">
        <div className="relative w-full md:w-80 m-4">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <MdPerson size={20} />
        </span>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Your Awesome Email Please!"
          className={`w-full p-3 pl-10 border ${isValid ? 'border-white/80' : 'border-red-500'} rounded-lg focus:outline-none focus:ring-6 focus:ring-[#4a208a] hover:ring-6 hover:ring-[#4a208a] shadow-[0px_0px_12px_#8c45ff] h-12`}
          style={{ color: 'black', backgroundColor: 'white' }}
        />
        </div>
      <button
        onClick={handleSubmit}
        className='relative py-3 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'
      >
        <div className='absolute inset-0'>
          <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image: linear-gradient(to_bottom, black, transparent)]'></div>
          <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image: linear-gradient(to_top, black, transparent)]'></div>  
          <div className='absolute inset-0 shadow-[0_0_10px_rgb(140, 69, 255, .7)_inset] rounded-lg'>
          </div>
        </div>
        <span>Join Waitlist</span>
      </button>
    </div>
    <ToastContainer 
      position="bottom-center"
    />
    </>
  );
};

export default EmailInput; 