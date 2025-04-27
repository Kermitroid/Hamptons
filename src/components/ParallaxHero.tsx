import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface ParallaxHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink = '/booking',
}) => {
  return (
    <div className="parallax w-full h-[90vh] min-h-[600px]">
      <div 
        className="parallax-layer parallax-back bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-navy bg-opacity-50"></div>
      </div>
      
      <div className="parallax-layer parallax-base flex items-center">
        <div className="container mx-auto px-4 md:px-8 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display text-cream mb-6">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl font-accent text-cream mb-8">
              {subtitle}
            </p>
            
            {ctaText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button variant="gold" to={ctaLink}>
                  {ctaText}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;