'use client';

import { useEffect, useRef } from 'react';

export default function NeuralNetworkAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only run this on the client side
    if (typeof window === 'undefined') return;

    // Load Three.js and other dependencies
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/three@0.157.0/build/three.min.js';
    script.async = true;
    
    script.onload = () => {
      // Once Three.js is loaded, create a simplified version of the animation
      const THREE = window.THREE;
      
      // Create scene, camera, renderer
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0f172a);
      
      const camera = new THREE.PerspectiveCamera(
        75, 
        containerRef.current.clientWidth / containerRef.current.clientHeight, 
        0.1, 
        1000
      );
      camera.position.z = 50;
      
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);
      
      // Add lights
      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
      scene.add(ambientLight);
      
      const pointLight = new THREE.PointLight(0x4ade80, 1, 100);
      pointLight.position.set(10, 10, 10);
      scene.add(pointLight);
      
      // Create nodes in a sphere pattern
      const nodes = [];
      const numNodes = 50;
      const radius = 20;
      
      for (let i = 0; i < numNodes; i++) {
        const phi = Math.acos(-1 + (2 * i) / numNodes);
        const theta = Math.sqrt(numNodes * Math.PI) * phi;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        const geometry = new THREE.SphereGeometry(0.5, 8, 8);
        const material = new THREE.MeshPhongMaterial({
          color: 0x4ade80,
          emissive: 0x4ade80,
          emissiveIntensity: 0.5,
          shininess: 100
        });
        
        const node = new THREE.Mesh(geometry, material);
        node.position.set(x, y, z);
        scene.add(node);
        nodes.push(node);
      }
      
      // Create connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.random() < 0.05) {
            const material = new THREE.LineBasicMaterial({ 
              color: 0x60a5fa,
              transparent: true,
              opacity: 0.3
            });
            const points = [nodes[i].position, nodes[j].position];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, material);
            scene.add(line);
          }
        }
      }
      
      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        
        // Rotate the entire scene
        scene.rotation.y += 0.005;
        scene.rotation.x += 0.001;
        
        renderer.render(scene, camera);
      }
      
      animate();
      
      // Handle window resize
      const handleResize = () => {
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '500px', 
        overflow: 'hidden',
        borderRadius: '8px',
        position: 'relative'
      }}
    />
  );
} 