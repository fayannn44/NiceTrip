import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Side - Newsletter */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Sign up to get the inside scoop on everything happening in Reno Tahoe delivered right to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition duration-200 font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Side - Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">About Reno Tahoe</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-red-500">Sustainable Tourism</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-500">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-500">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Meeting Planners</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-red-500">Travel Planners</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-500">Sports Planners</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-500">Event Venues</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Media</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-red-500">Accessibility</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-500">Travel Health & Safety</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-500">Plan Your Trip</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section - Endorsements & Visitor Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Endorsements */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Endorsed By</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-800 w-16">USA</span>
                <a href="#" className="text-blue-500 hover:text-blue-600">VisitTheUSA.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-800 w-16">LEVEL</span>
                <span className="text-gray-600">Photo Partner</span>
              </div>
            </div>
          </div>

          {/* Visitor Guide */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-2">Grab Our Visitor Guide</h4>
            <p className="text-gray-600 text-sm mb-4">
              It's like we're handing you a ticket to the raddest days of your life.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm transition duration-200">
              Free Download
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            ©2025 Reno Tahoe USA. All Rights Reserved.{' '}
            <a href="#" className="text-gray-600 hover:text-red-500">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;