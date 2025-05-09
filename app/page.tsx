'use client'

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import XLogo from "./components/XLogo"
import { useEffect, useRef } from "react"

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        // Keep the iframe working but don't adjust its size
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Background Text */}
      <div className="fixed top-[35%] left-1/2 transform -translate-x-1/2 z-0 w-full text-center pointer-events-none">
        <h2 className="text-[#f5e9d3] text-[6.48vw] leading-none font-light opacity-30 whitespace-nowrap tracking-tighter">
          Let your agent surf the browser
        </h2>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 relative z-10">
        {/* Main Title */}
        <motion.h1 
          className="text-center text-5xl md:text-7xl font-light tracking-tighter mb-32 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AutoBro
        </motion.h1>

        {/* Navigation */}
        <div className="flex justify-center gap-8 mb-96 mt-96">
          <Link href="#about" className="bg-[#5a5a58] text-white hover:bg-[#6d6d6b] px-6 py-2 rounded-full font-medium transition-colors">
            About Us
          </Link>
          <Link href="#demo" className="bg-[#5a5a58] text-white hover:bg-[#6d6d6b] px-6 py-2 rounded-full font-medium transition-colors">
            Demo Video
          </Link>
          <Link href="#pricing" className="bg-[#5a5a58] text-white hover:bg-[#6d6d6b] px-6 py-2 rounded-full font-medium transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="bg-[#5a5a58] text-white hover:bg-[#6d6d6b] px-6 py-2 rounded-full font-medium transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Content Sections Container with Dark Overlay */}
        <div className="relative bg-black/90 mt-64 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            className="flex flex-col items-center text-center mb-4 relative z-10 min-h-[60vh] container mx-auto px-4">
            <h2 className="text-4xl font-light tracking-tighter mb-8">About Us</h2>
            <div className="max-w-3xl space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                AutoBro is a browser automation platform that enables AI Agent to interact with web browser just like humans. It allows them to understand content, then intelligently performs actions such as clicking, typing, navigating, or extracting data.
              </p>
            </div>
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full mt-16">
              {/* Multi-tab Management Card */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:transform hover:scale-105">
                <div className="h-12 w-12 bg-[#5a5a58] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-light mb-2">Multi-tab Management</h3>
                <p className="text-gray-400">Automatically handles multiple browser tabs for complex workflows and parallel processing</p>
              </div>
              {/* Custom Actions Card */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:transform hover:scale-105">
                <div className="h-12 w-12 bg-[#5a5a58] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-light mb-2">Custom Actions</h3>
                <p className="text-gray-400">Add your own actions like saving to files, database operations, notifications, or human input handling</p>
              </div>
              {/* Self-correcting Card */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:transform hover:scale-105">
                <div className="h-12 w-12 bg-[#5a5a58] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-light mb-2">Self-correcting</h3>
                <p className="text-gray-400">Intelligent error handling and automatic recovery for robust automation workflows</p>
              </div>
              {/* Any LLM Support Card */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:transform hover:scale-105">
                <div className="h-12 w-12 bg-[#5a5a58] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light mb-2">Any LLM Support</h3>
                <p className="text-gray-400">Compatible with any agent that has LLMs including GPT-4, Claude 3, and Llama 2</p>
              </div>
            </div>
          </motion.div>

          {/* Introduction Video Section */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-[70vh] flex flex-col items-center justify-center relative z-10 py-4 mt-0"
          id="demo">
          <h2 className="text-4xl font-light tracking-tighter mb-16 text-center">Demo Video</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            This video will give a feel of what it will look like when your agent surfs the browser
          </p>
          <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl relative group">
            <iframe
              src="https://www.youtube.com/embed/LylPQ1fQpEM"
              title="Agentic AI Vision"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            <a
              href="https://youtu.be/LylPQ1fQpEM"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-[70vh] flex flex-col items-center justify-center relative z-10 py-16"
          >
            <h2 className="text-4xl font-light tracking-tighter mb-16 text-center">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full px-4">
              {/* Shopping Testimonial */}
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"I am a Hotel Booking agent, and AutoBro helps me in my research to find Hotels within a price range from different sites"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-[#5a5a58] flex items-center justify-center mr-3">
                    <span className="text-white font-medium">PS</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Palvinder Singh</h4>
    
                  </div>
                </div>
              </div>
              
              {/* Research Testimonial */}
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-300 italic mb-6">"I am a B2B seller, AutoBro sorts the list of materials given to it in from online sites and saves my time!"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-[#5a5a58] flex items-center justify-center mr-3">
                    <span className="text-white font-medium">AB</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Abhishek Bassi</h4>
                    
                  </div>
                </div>
              </div>
              
              {/* Business Testimonial */}
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-300 italic mb-6">"AutoBro has been an excellent travel-agent for me. It has helped me book flights, hotels and rental cars"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-[#5a5a58] flex items-center justify-center mr-3">
                    <span className="text-white font-medium">SK</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Suraj Khanna</h4>
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-[70vh] flex flex-col items-center justify-center relative z-10 py-4"
            id="pricing"
          >
            <h2 className="text-4xl font-light tracking-tighter mb-16 text-center">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full px-4">
              {/* Basic Plan */}
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-2xl font-light mb-4">Basic</h3>
                <p className="text-3xl font-light mb-6">$20<span className="text-lg text-gray-400">/mo</span></p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ No installation required</li>
                  <li>✓ Includes 20 USD of API credits per month</li>
                  <li>✓ Unlimited access</li>
                </ul>
                <a 
                  href="mailto:main@agenticaicorporation.com?subject=AutoBro%20Basic%20Plan%20Inquiry&body=Hey%2C%20I%20am%20interested%20to%20purchase%20the%20%2420%20Basic%20Plan!"
                  className="block w-full text-center bg-[#5a5a58] hover:bg-[#6d6d6b] text-white py-2 rounded-full transition-colors"
                >
                  Email Us
                </a>
              </div>
              {/* Enterprise Plan */}
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-2xl font-light mb-4">Enterprise</h3>
                <p className="text-3xl font-light mb-6">Custom</p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓Contact Sales</li>
                  <li>✓24 x 7 dedicated support</li>
                  <li>✓Custom Deployement</li>
                </ul>
                <a 
                  href="mailto:main@agenticaicorporation.com?subject=AutoBro%20Enterprise%20Plan%20Inquiry&body=Hey%2C%20I%20am%20interested%20to%20know%20more%20about%20the%20custom%20plans"
                  className="block w-full text-center bg-[#5a5a58] hover:bg-[#6d6d6b] text-white py-2 rounded-full transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-[70vh] flex flex-col items-center justify-center relative z-10 py-4"
            id="upcoming"
          >
            <h2 className="text-4xl font-light tracking-tighter mb-16 text-center">Upcoming</h2>
            <div className="max-w-6xl mx-auto w-full px-4">
              <div className="relative p-[3px] rounded-lg overflow-hidden bg-gradient-to-r from-transparent via-transparent to-transparent">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg">
                  <div className="absolute inset-[-2px] bg-[#00bfff] opacity-70 blur-[2px] animate-spin-slow"></div>
                  <div className="absolute inset-[-1px] bg-gradient-to-r from-[#00bfff] to-[#0080ff] animate-rotate-gradient rounded-lg"></div>
                </div>
                
                {/* Content */}
                <div className="bg-[#1a1a1a] p-8 rounded-lg relative z-10 transition-all transform hover:scale-[0.99]">
                  <h3 className="text-3xl font-light mb-6 text-center">AutoBro2</h3>
                  <p className="text-xl text-gray-300 mb-8 text-center">Coming Soon &gt;&gt;</p>
                  <div className="space-y-6 text-gray-300">
                    <p className="text-center">Get ready for the next evolution of browser automation</p>
                    <ul className="space-y-4 max-w-2xl mx-auto">
                      <li className="flex items-center gap-3">
                        <span className="text-[#5a5a58]">✦</span>
                        5X Faster performance than current version
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#5a5a58]">✦</span>
                        Enhanced AI capabilities with advanced reasoning
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#5a5a58]">✦</span>
                        Improved performance and reliability
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#5a5a58]">✦</span>
                        Extended browser compatibility
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#5a5a58]">✦</span>
                        New customization options
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-[50vh] flex flex-col items-center justify-center relative z-10 py-4"
            id="contact"
          >
            <h2 className="text-4xl font-light tracking-tighter mb-8 text-center">Contact Us</h2>
            <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
              {/* Names - Horizontal Row */}
              <div className="flex flex-wrap justify-center gap-8 mb-6">
                <div className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors">
                  <a 
                    href="https://www.linkedin.com/in/manglamkartik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Manglam Kartik
                  </a>
                </div>
                <div className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors">
                  <a 
                    href="https://www.linkedin.com/in/neelshah020604/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Neel Shah
                  </a>
                </div>
              </div>
              
              {/* Address */}
              <div className="text-center mb-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  H5, IIT Bombay<br />
                  Powai, Mumbai 400076
                </p>
              </div>

              {/* Email */}
              <div className="text-center mb-8">
                <a 
                  href="mailto:main@agenticaicorporation.com"
                  className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors"
                >
                  main@agenticaicorporation.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative w-full text-center text-gray-500 text-sm py-4">
        <p>© {new Date().getFullYear()} AutoBro. All rights reserved.</p>
      </div>
    </div>
  )
}


'a demo of agent interacting with browser using AutoBro'

