import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-display text-gold mb-6">404</h1>
        <div className="art-deco-divider mb-8">
          <span className="text-3xl font-accent">•</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display mb-6">
          Oops! This Page Has Gone Astray
        </h2>
        <p className="text-xl text-navy-light max-w-2xl mx-auto mb-10">
          Like a wandering pup, this page seems to have strayed from our sight.
          Let's get you back to where you belong.
        </p>
        
        <div className="max-w-md mx-auto mb-16">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg"
              alt="Confused dog"
              className="w-full h-auto border-8 border-ivory shadow-lg"
            />
            <div className="absolute -bottom-6 right-1/2 transform translate-x-1/2 bg-gold p-3 text-navy font-accent text-xl">
              "Where am I?"
            </div>
          </div>
        </div>
        
        <div className="space-x-4">
          <Button to="/" variant="primary">
            Return Home
          </Button>
          <Button to="/services" variant="secondary">
            View Services
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;