'use client'

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Social Media Icons */}
      <div className="fixed top-6 right-6 flex gap-4 z-20">
        <Link href="#" className="text-white hover:text-gray-300">
          <Facebook size={20} />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          <Twitter size={20} />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          <Linkedin size={20} />
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 relative z-10">
        {/* Main Title */}
        <motion.h1 
          className="text-center text-6xl md:text-8xl font-light tracking-tighter mb-32 relative"
        >
          Agentic AI Corporation
        </motion.h1>

        {/* Navigation */}
        <div className="flex justify-center gap-16 mb-96 mt-96">
          <Link href="#try-cogni" className="text-white hover:text-gray-300 flex items-center">
            Try Cogni
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
        </div>

        {/* Content Sections Container with Dark Overlay */}
        <div className="relative w-full bg-black/90 mt-64">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 relative z-10 min-h-screen flex items-center container mx-auto px-4">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-light tracking-tighter mb-8">About Us</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to Agentic AI Corporation (AAIC). We are creating web of AI Agents, a giant web of AI Agents where
              each agent is specialized in one particular niche and the agents can communicate to each other, can
              collaborate among themselves, can share relevant data if needed and can do the given work in a highly
              efficient manner.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently AI is limited to ideation and information retrieval. Now, we are pioneering a
              new era—one where AI doesn't just think, it acts. We are driving the shift from
              passive intelligence to active execution, enabling AI to carry out tasks with real world
              impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              It has endless possibilities- from personal assistants to business automation, the AI
              web works like a global AI workforce.
            </p>
          </div>
          </motion.div>

          {/* Introduction Video Section */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-screen flex flex-col items-center justify-center relative z-10 py-4">
          <h2 className="text-4xl font-light tracking-tighter mb-16 text-center">Introduction Video</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            This video will give a feel of what Web of Agents will look like
          </p>
          <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl relative group">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Agentic AI Vision"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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

          {/* Try Cogni Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-screen flex flex-col items-center justify-center relative z-10 py-4"
            id="try-cogni"
          >
            <div className="flex justify-center items-center mb-16">
              <div className="relative w-[280px] h-[100px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/4.png"
                  alt="Cogni"
                  width={240}
                  height={80}
                  className="object-contain hover:opacity-80 transition-opacity duration-300"
                  priority
                />
              </div>
            </div>
            <div className="max-w-6xl w-full mx-auto px-4">
              <div className="space-y-6 max-w-xl">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Experience the future of AI assistance with Cogni. Our advanced AI agent understands context,
                  learns from interactions, and executes tasks with unprecedented precision.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  From coding and data analysis to content creation and automation, Cogni adapts to your needs
                  while maintaining security and reliability.
                </p>
                <div className="mt-8">
                  <Link
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-300"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Text */}
      <div className="fixed top-[35%] left-1/2 transform -translate-x-1/2 z-0 w-full text-center">
        <h2 className="text-[#f5e9d3] text-[15vw] leading-none font-light opacity-30 whitespace-nowrap tracking-tighter">Web of Agents</h2>
      </div>
    </div>
  )
}

