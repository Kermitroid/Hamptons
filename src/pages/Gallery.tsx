import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ParallaxHero from '../components/ParallaxHero';
import PageSection from '../components/PageSection';

// Gallery data with placeholders
const galleryData = [
  {
    id: 1,
    title: "Golden Retriever Transformation",
    before: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg",
    after: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
    breed: "Golden Retriever",
    service: "Full Groom"
  },
  {
    id: 2,
    title: "Poodle Styling",
    before: "https://images.pexels.com/photos/5255220/pexels-photo-5255220.jpeg",
    after: "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg",
    breed: "Poodle",
    service: "Breed-Specific Styling"
  },
  {
    id: 3,
    title: "Yorkie Makeover",
    before: "https://images.pexels.com/photos/6291919/pexels-photo-6291919.jpeg",
    after: "https://images.pexels.com/photos/7789255/pexels-photo-7789255.jpeg",
    breed: "Yorkshire Terrier",
    service: "The Gatsby Experience"
  },
  {
    id: 4,
    title: "Shih Tzu Pampering",
    before: "https://images.pexels.com/photos/4587984/pexels-photo-4587984.jpeg",
    after: "https://images.pexels.com/photos/4587982/pexels-photo-4587982.jpeg",
    breed: "Shih Tzu",
    service: "Luxury Bath & Blowout"
  },
  {
    id: 5,
    title: "Labrador Refresh",
    before: "https://images.pexels.com/photos/2795879/pexels-photo-2795879.jpeg",
    after: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",
    breed: "Labrador",
    service: "Montauk Refresh"
  },
  {
    id: 6,
    title: "Schnauzer Classic Cut",
    before: "https://images.pexels.com/photos/5255164/pexels-photo-5255164.jpeg",
    after: "https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg",
    breed: "Schnauzer",
    service: "The Hampton Classic"
  }
];

// Featured pet data
const featuredPet = {
  name: "Bella",
  breed: "Cocker Spaniel",
  owner: "Elizabeth Anderson",
  image: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
  description: "Bella is our featured pet for June! This sweet 4-year-old Cocker Spaniel loves her monthly grooming sessions and always leaves with a special bow. Her owner Elizabeth says Bella prances around the house showing off her fresh cut to anyone who visits!"
};

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  
  const filteredGallery = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => {
        if (activeFilter.startsWith('breed-')) {
          return item.breed.toLowerCase() === activeFilter.replace('breed-', '').toLowerCase();
        }
        if (activeFilter.startsWith('service-')) {
          return item.service.toLowerCase() === activeFilter.replace('service-', '').toLowerCase();
        }
        return true;
      });
  
  const breedOptions = Array.from(new Set(galleryData.map(item => item.breed.toLowerCase())))
    .sort()
    .map(breed => ({
      value: `breed-${breed}`,
      label: breed.charAt(0).toUpperCase() + breed.slice(1)
    }));
  
  const serviceOptions = Array.from(new Set(galleryData.map(item => item.service.toLowerCase())))
    .sort()
    .map(service => ({
      value: `service-${service}`,
      label: service.charAt(0).toUpperCase() + service.slice(1)
    }));
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveFilter(e.target.value);
  };
  
  const openLightbox = (id: number) => {
    setSelectedItem(id);
  };
  
  const closeLightbox = () => {
    setSelectedItem(null);
  };
  
  const getItemById = (id: number) => {
    return galleryData.find(item => item.id === id);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxHero
        title="Our Gallery"
        subtitle="Before & After Transformations"
        backgroundImage="https://images.pexels.com/photos/5255244/pexels-photo-5255244.jpeg"
      />
      
      <PageSection title="Grooming Transformations" artDeco>
        <div className="mb-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <select
            className="border border-navy py-3 px-4 bg-cream"
            value={activeFilter}
            onChange={handleFilterChange}
          >
            <option value="all">All Transformations</option>
            <optgroup label="Filter by Breed">
              {breedOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </optgroup>
            <optgroup label="Filter by Service">
              {serviceOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item) => (
            <motion.div 
              key={item.id}
              className="transition-all duration-300 hover:shadow-lg border border-gold border-opacity-50"
              whileHover={{ y: -5 }}
            >
              <div className="relative pb-[56.25%] overflow-hidden">
                <div className="absolute inset-0 bg-navy">
                  <Carousel 
                    showStatus={false} 
                    showThumbs={false}
                    className="h-full"
                  >
                    <div className="h-full">
                      <div className="absolute top-0 left-0 bg-navy text-cream text-xs py-1 px-2">
                        Before
                      </div>
                      <img 
                        src={item.before} 
                        alt={`${item.title} - Before`} 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div className="h-full">
                      <div className="absolute top-0 left-0 bg-gold text-navy text-xs py-1 px-2">
                        After
                      </div>
                      <img 
                        src={item.after} 
                        alt={`${item.title} - After`} 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
              <div className="p-4 bg-ivory">
                <h3 className="font-display text-lg mb-2">{item.title}</h3>
                <div className="flex justify-between text-sm text-navy-light">
                  <span>{item.breed}</span>
                  <span>{item.service}</span>
                </div>
                <button 
                  onClick={() => openLightbox(item.id)}
                  className="mt-3 text-gold hover:text-gold-dark transition-colors text-sm font-display uppercase tracking-wider"
                >
                  View Larger
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-navy-light">No transformations found with the current filter.</p>
          </div>
        )}
      </PageSection>
      
      <section className="py-20 bg-ivory border-t border-b border-gold-light border-opacity-30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display mb-6 art-deco-border pb-6">
                Featured Pet of the Month
              </h2>
              <h3 className="text-2xl font-display text-gold-dark mb-4">{featuredPet.name}</h3>
              <p className="mb-4 text-lg">{featuredPet.description}</p>
              <div className="text-navy-light">
                <p><strong>Breed:</strong> {featuredPet.breed}</p>
                <p><strong>Owner:</strong> {featuredPet.owner}</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={featuredPet.image} 
                alt={featuredPet.name} 
                className="w-full h-auto shadow-lg border-8 border-cream"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-light p-4 hidden md:block">
                <div className="font-display text-navy text-xl">
                  June 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {selectedItem !== null && (
        <div className="fixed inset-0 bg-navy bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-cream relative">
            <button 
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-navy text-cream"
            >
              ✕
            </button>
            
            {selectedItem && (
              <div className="p-6">
                <h3 className="font-display text-2xl mb-4">
                  {getItemById(selectedItem)?.title}
                </h3>
                
                <Carousel showStatus={false} showThumbs={true}>
                  <div>
                    <img 
                      src={getItemById(selectedItem)?.before} 
                      alt={`${getItemById(selectedItem)?.title} - Before`} 
                      className="max-h-[70vh] object-contain" 
                    />
                    <p className="legend">Before</p>
                  </div>
                  <div>
                    <img 
                      src={getItemById(selectedItem)?.after} 
                      alt={`${getItemById(selectedItem)?.title} - After`} 
                      className="max-h-[70vh] object-contain" 
                    />
                    <p className="legend">After</p>
                  </div>
                </Carousel>
                
                <div className="mt-4 text-navy-light">
                  <p><strong>Breed:</strong> {getItemById(selectedItem)?.breed}</p>
                  <p><strong>Service:</strong> {getItemById(selectedItem)?.service}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Gallery;