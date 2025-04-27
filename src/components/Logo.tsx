import React from 'react';
import { Scissors } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-center">
        <div className="absolute w-10 h-10 bg-gold-light opacity-20 rotate-45"></div>
        <Scissors className="w-8 h-8 text-gold z-10" />
      </div>
    </div>
  );
};

export default Logo;