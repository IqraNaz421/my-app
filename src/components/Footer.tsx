'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Footer Left Section */}
          <div className="mb-4 sm:mb-0">
            <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} My Blog</p>
            <p className="text-sm text-gray-400">All Rights Reserved</p>
          </div>

          {/* Footer Right Section - Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Made with <span className="text-red-500">♥</span> by My Blog Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
