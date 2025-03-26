import React from 'react';

interface XLogoProps {
  size?: number;
  className?: string;
}

const XLogo: React.FC<XLogoProps> = ({ size = 20, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.01l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.491-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default XLogo; 