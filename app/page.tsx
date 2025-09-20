'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define types for our components
interface FeatureProps {
  title: string;
  description: string;
  icon?: string;
}

// Header Component
const Header = ({ title }: { title: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Home</Link></li>
              <li><Link href="#about" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">About</Link></li>
              <li><Link href="#services" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Services</Link></li>
              <li><Link href="#contact" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/" className="block py-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Home</Link></li>
              <li><Link href="#about" className="block py-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">About</Link></li>
              <li><Link href="#services" className="block py-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Services</Link></li>
              <li><Link href="#contact" className="block py-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      {icon && (
        <div className="mb-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full inline-block">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

// Footer Component
const Footer = ({ title }: { title: string }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <p className="text-gray-300">
              A creative website built with Next.js.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="#about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>Email: info@tester.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to tester</h1>
            <p className="text-xl mb-6">
              A modern creative website built with Next.js and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium shadow-md transition duration-300">
                Get Started
              </a>
              <a href="#about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <div className="w-full h-64 md:h-80 bg-gray-200 rounded relative overflow-hidden">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function Home() {
  // Features data
  const features = [
    {
      title: "Responsive Design",
      description: "Fully responsive layout that looks great on all devices from mobile phones to desktop monitors.",
      icon: "responsive"
    },
    {
      title: "Modern Framework",
      description: "Built with Next.js, the React framework for production that gives you the best developer experience.",
      icon: "code"
    },
    {
      title: "Tailwind CSS",
      description: "Styled with Tailwind CSS, a utility-first CSS framework for rapidly building custom designs.",
      icon: "design"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header title="tester" />
      
      <HeroSection />
      
      <main className="flex-grow">
        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Us</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We are a team of passionate individuals dedicated to creating amazing creative experiences.
                Our mission is to deliver high-quality solutions that meet our clients' needs and exceed their expectations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Our Services</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We offer a range of services to help you achieve your goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  title={feature.title} 
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Get in touch with us to learn more about our services or to request a quote.
              </p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer title="tester" />
    </div>
  );
}