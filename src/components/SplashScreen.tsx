// src/components/SplashScreen.tsx
import React from 'react';
import logo from '../media/signageblue.svg';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-50 animate-fadeOut">
      <div className="relative p-12 border-4 border-blue-600 rounded-2xl shadow-lg shadow-blue-500/50">

        {/* Ping Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-2 -left-2 w-5 h-5 bg-blue-600 rounded-full animate-ping" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 rounded-full animate-ping animation-delay-300" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full animate-ping animation-delay-700" />
        </div>

        {/* Logo */}
        <img
          src={logo}
          alt="signage logo"
          className="w-32 h-32 animate-pulse"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
