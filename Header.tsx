
import React from 'react';

const LogoIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-500"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-slate-700">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <LogoIcon />
              <span className="text-xl font-bold text-white tracking-wider">
                Catalyst
              </span>
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300">
              Features
            </a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300">
              Solutions
            </a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300">
              About Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
