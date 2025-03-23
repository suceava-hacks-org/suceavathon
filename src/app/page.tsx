"use client"

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Calendar, MapPin, Clock, Trophy, Users, Code, Star } from "lucide-react";
import React, { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Home(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#fff5f5] flex flex-col items-center min-h-screen">
      <div 
        className={`fixed inset-0 bg-gradient-to-b from-[#ec3750] to-[#9c162a] z-50 flex flex-col items-center justify-center p-6 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 left-4">
          <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club Orpheus" className="h-16" />
        </div>
        
        <button 
          className="absolute top-4 right-4 text-white" 
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <nav className="w-full max-w-xs">
          <ul className="flex flex-col gap-8 items-center">
            {navItems.map((item, index) => (
              <li key={index} className="w-full">
                <a
                  href={item.href}
                  className="text-white text-2xl font-bold hover:text-yellow-300 transition-colors block text-center py-2 border-b border-white/20"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-8 w-full">
              <Button 
                className="bg-white hover:bg-gray-100 text-[#ec3750] rounded-full px-8 py-4 text-lg font-bold w-full shadow-lg hover:shadow-xl transition-all" 
                onClick={toggleMenu}
              >
                Register Now
              </Button>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-6 text-white/70 text-sm">
          Suceavathon • 2025
        </div>
      </div>

      <header className="w-full max-w-7xl flex justify-between items-center px-4 sticky top-0 bg-white/80 backdrop-blur-sm z-40 border-b border-[#ec375015]">
        <div className="logo flex items-center">
          <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club Orpheus" className="h-16 sm:h-16" />
        </div>
        
        <button 
          className="md:hidden z-50" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-black text-sm font-medium hover:text-[#ec3750] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button className="bg-[#ec3750] hover:bg-[#d42d44] text-white text-sm rounded-full px-5 py-1">
                Register Now
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className="flex flex-col items-center w-full max-w-7xl px-4 pt-6 pb-16">
        <div className={`flex flex-col items-center text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-[#ec375010] text-[#ec3750] font-bold px-6 py-2 rounded-full mb-6 text-sm md:text-base">
            12-HOUR HACKATHON • APRIL 26, 2025
          </div>
          
          <div className="relative mb-12 pt-8">
            <img
              src="svthon.svg"
              alt="Suceavathon Logo"
              className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px]"
            />
            <span className="absolute top-0 right-8 md:right-16 text-sm md:text-base bg-yellow-300 px-3 py-1 rotate-6 font-normal shadow-sm">
              Code, create & succeed!
            </span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-8 max-w-3xl">
            A 12-hour hackathon where <span className="underline decoration-[#ec3750] decoration-wavy decoration-2 underline-offset-4">ideas become reality</span>
          </h2>
          
          <div className="bg-gradient-to-r from-[#ec3750] to-black text-white font-bold px-6 py-3 rounded-lg mb-8 transform rotate-[-1deg] shadow-md">
            <span className="text-lg">✨ Perfect for beginners & first-time hackers! ✨</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-3xl">
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center">
              <Clock className="h-6 w-6 text-[#ec3750] mb-2" />
              <h3 className="font-semibold">12 Hours</h3>
              <p className="text-sm text-gray-600">of coding</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center">
              <MapPin className="h-6 w-6 text-[#ec3750] mb-2" />
              <h3 className="font-semibold">Cool Venue</h3>
              <p className="text-sm text-gray-600">amazing vibes</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center">
              <Calendar className="h-6 w-6 text-[#ec3750] mb-2" />
              <h3 className="font-semibold">April 26</h3>
              <p className="text-sm text-gray-600">2025</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center">
              <Trophy className="h-6 w-6 text-[#ec3750] mb-2" />
              <h3 className="font-semibold">Prizes</h3>
              <p className="text-sm text-gray-600">& swag</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center text-[#ec3750] font-medium rotate-[-1deg]">
              💻 Code together
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center text-[#ec3750] font-medium rotate-[1deg]">
              🍕 Unlimited pizza
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center text-[#ec3750] font-medium rotate-[-1deg]">  
              👕 Custom t-shirts
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center text-[#ec3750] font-medium rotate-[1deg]">
              🎁 Awesome prizes
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="bg-[#ec3750] hover:bg-[#d42d44] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
              Register Now!
            </Button>
            <Button className="bg-black hover:bg-gray-800 text-white border border-black rounded-full px-8 py-6 text-lg font-bold shadow-sm hover:shadow-md transition-all">
              Learn More
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#ec3750] flex flex-col items-center text-center hover:shadow-lg transition-all">
              <Users className="h-12 w-12 text-[#ec3750] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-black">Newcomer Friendly</h3>
              <p className="text-gray-700">
                Never coded before? No problem! We'll have mentors on-site to help you get started and workshops for beginners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-black flex flex-col items-center text-center hover:shadow-lg transition-all">
              <Code className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl font-bold mb-3 text-black">Learn By Doing</h3>
              <p className="text-gray-700">
                Dive into hands-on experience! Build your first project in a supportive environment with no judgment - just fun and learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#ec3750] flex flex-col items-center text-center hover:shadow-lg transition-all">
              <Star className="h-12 w-12 text-[#ec3750] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-black">Create Something Amazing</h3>
              <p className="text-gray-700">
                Form a team, choose a project, and have 12 hours to build. You'll be surprised what you can accomplish in just one day!
              </p>
            </div>
          </div>
        </div>

        <div className="animate-bounce mb-8">
          <ChevronDown size={32} className="text-[#ec3750]" />
        </div>
      </main>
    </div>
  );
}