'use client';

import { useEffect, useRef } from 'react';

export default function TryCogniPage() {
  const animationRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !animationRef.current) return;

    // Create a canvas element for the animation
    const canvas = document.createElement('canvas');
    
    // Set initial dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Set styles to ensure full viewport coverage
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.position = 'fixed';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.zIndex = '50';
    
    // Ensure the canvas covers the entire viewport width
    canvas.style.maxWidth = 'none'; // Prevent any max-width constraints
    canvas.style.margin = '0';
    canvas.style.padding = '0';
    
    // Clear the container and add the canvas
    document.body.appendChild(canvas);
    
    // Get the 2D context
    const ctx = canvas.getContext('2d');
    
    // Create nodes
    const nodes = [];
    const numNodes = 70;
    
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 2 + Math.random() * 3,
        color: Math.random() < 0.5 ? '#4ade80' : '#60a5fa',
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }
    
    // Animation function
    function animate() {
      // Clear canvas with a solid color that covers the entire area
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${(100 - distance) / 300})`;
            ctx.stroke();
          }
        }
      }
      
      // Update and draw nodes
      nodes.forEach(node => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Add glow effect
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3
        );
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Handle window resize - crucial for maintaining full width
    const handleResize = () => {
      // Update canvas dimensions on resize
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle scroll to show/hide the animation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        canvas.style.opacity = '1';
        canvas.style.pointerEvents = 'auto';
      } else {
        canvas.style.opacity = '0';
        canvas.style.pointerEvents = 'none';
      }
    };
    
    // Initially hide the canvas
    canvas.style.opacity = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.transition = 'opacity 0.3s ease';
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Try Cogni</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Experience AI-Powered Insights</h2>
            <p className="mb-4">
              Cogni uses advanced neural networks to analyze and process information, 
              providing you with intelligent insights and recommendations.
            </p>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-3">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Real-time data processing</li>
                <li>Personalized recommendations</li>
                <li>Advanced pattern recognition</li>
                <li>Natural language understanding</li>
              </ul>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <p className="mb-4">
              Our neural network processes data in real-time, identifying patterns and generating 
              insights that help you make better decisions.
            </p>
            <p className="mb-4">
              The visualization above represents how our AI system connects information across 
              multiple domains to create a comprehensive understanding of your data.
            </p>
          </div>
        </div>
        
        {/* Add more content to enable scrolling */}
        <div className="mt-20 py-20">
          <h2 className="text-2xl font-bold mb-4">Scroll down to see the neural network animation</h2>
          <p className="mb-4">
            As you scroll, you'll see our neural network visualization appear, 
            demonstrating how Cogni processes and connects information.
          </p>
        </div>
      </div>
    </div>
  );
} 