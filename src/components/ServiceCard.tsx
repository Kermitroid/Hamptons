import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  featured?: boolean;
  duration?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  icon,
  featured = false,
  duration,
}) => {
  return (
    <motion.div 
      className={`p-6 md:p-8 rounded-none relative overflow-hidden ${
        featured 
          ? 'border-2 border-gold bg-navy text-cream' 
          : 'border border-navy-light bg-ivory'
      }`}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 30px -15px rgba(20, 39, 78, 0.3)',
        transition: { duration: 0.3 }
      }}
    >
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-gold text-navy font-display text-sm px-4 py-1 transform rotate-45 translate-x-2 -translate-y-1">
            Premium
          </div>
        </div>
      )}
      
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
        featured ? 'bg-gold text-navy' : 'bg-navy text-gold'
      }`}>
        {icon}
      </div>
      
      <h3 className={`font-display text-xl mb-3 ${featured ? 'text-gold' : 'text-navy'}`}>
        {title}
      </h3>
      
      <p className={`mb-4 ${featured ? 'text-cream opacity-80' : 'text-navy-light'}`}>
        {description}
      </p>
      
      {duration && (
        <div className={`text-sm mb-4 ${featured ? 'text-cream opacity-70' : 'text-navy-light'}`}>
          Duration: {duration}
        </div>
      )}
      
      <div className="flex items-center justify-between mt-6">
        <span className={`font-display text-xl ${featured ? 'text-gold-light' : 'text-navy'}`}>
          {price}
        </span>
        <Button 
          variant={featured ? "gold" : "secondary"} 
          to="/booking"
          className="text-xs py-2 px-4"
        >
          Book Now
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;