import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Bath, Star, Clock, Nut as Cut, Droplet, Sparkles, Heart } from 'lucide-react';

import ParallaxHero from '../components/ParallaxHero';
import PageSection from '../components/PageSection';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const services = [
    {
      id: 'classic',
      title: 'The Hampton Classic',
      description: 'A complete grooming package including bath, haircut, nail trim, ear cleaning, and style finish.',
      price: 'From $120',
      icon: <Scissors className="w-8 h-8" />,
      duration: '1.5 - 2 hours',
      category: 'full-groom'
    },
    {
      id: 'gatsby',
      title: 'The Gatsby Experience',
      description: 'Our premium service featuring organic products, specialty shampoo treatments, and extended massage.',
      price: 'From $180',
      icon: <Star className="w-8 h-8" />,
      duration: '2 - 2.5 hours',
      category: 'full-groom',
      featured: true
    },
    {
      id: 'refresh',
      title: 'Montauk Refresh',
      description: 'A quick refresh with bath, blow-dry, brush-out, nail trim, and ear cleaning.',
      price: 'From $80',
      icon: <Bath className="w-8 h-8" />,
      duration: '1 hour',
      category: 'bath'
    },
    {
      id: 'luxury-bath',
      title: 'Luxury Bath & Blowout',
      description: 'Premium bath experience with specialty shampoo, conditioner, and fluff dry styling.',
      price: 'From $95',
      icon: <Droplet className="w-8 h-8" />,
      duration: '1 - 1.5 hours',
      category: 'bath'
    },
    {
      id: 'breed-specific',
      title: 'Breed-Specific Styling',
      description: 'Expert grooming tailored to your dog\'s breed standard or a custom cut of your choice.',
      price: 'From $140',
      icon: <Cut className="w-8 h-8" />,
      duration: '2 - 3 hours',
      category: 'specialty'
    },
    {
      id: 'spa-day',
      title: 'Canine Spa Day',
      description: 'The ultimate pampering session including specialty treatment mask, pawdicure, and aromatherapy.',
      price: 'From $200',
      icon: <Sparkles className="w-8 h-8" />,
      duration: '3 hours',
      category: 'specialty',
      featured: true
    },
    {
      id: 'senior-gentle',
      title: 'Senior Gentle Groom',
      description: 'A careful, patient approach for older dogs with extra attention to comfort and safety.',
      price: 'From $130',
      icon: <Heart className="w-8 h-8" />,
      duration: '1.5 - 2 hours',
      category: 'specialty'
    },
    {
      id: 'maintenance',
      title: 'Touch-Up Maintenance',
      description: 'Quick trim around face, feet, and sanitary areas to maintain your dog\'s look between full grooms.',
      price: 'From $60',
      icon: <Clock className="w-8 h-8" />,
      duration: '30 - 45 minutes',
      category: 'addon'
    }
  ];
  
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxHero
        title="Our Services"
        subtitle="Luxury Grooming Tailored to Your Dog's Needs"
        backgroundImage="https://images.pexels.com/photos/2695827/pexels-photo-2695827.jpeg"
      />
      
      <PageSection>
        <div className="text-center mb-16">
          <div className="inline-block border border-gold">
            <div className="flex flex-wrap">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'full-groom', label: 'Full Grooms' },
                { id: 'bath', label: 'Bath Services' },
                { id: 'specialty', label: 'Specialty' },
                { id: 'addon', label: 'Add-Ons' }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`py-3 px-5 font-display text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'bg-navy text-cream'
                      : 'bg-cream text-navy hover:bg-gold-light'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              icon={service.icon}
              featured={service.featured}
              duration={service.duration}
            />
          ))}
        </div>
      </PageSection>
      
      <section className="py-20 bg-navy text-cream relative">
        <div className="absolute inset-0 bg-art-deco-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-gold">
                Premium Grooming Experience
              </h2>
              <p className="mb-4 text-lg">
                At The Hamptons Groomer, we understand that each dog is unique. Our services 
                are tailored to meet your pet's specific needs, taking into consideration their 
                breed, coat type, temperament, and your personal preferences.
              </p>
              <p className="mb-8">
                All of our services include a thorough health check, looking for any skin issues, 
                ear problems, or other concerns that might need attention. We believe in a holistic 
                approach to grooming that goes beyond aesthetics.
              </p>
              <Button variant="gold" to="/booking">
                Book Your Pet's Luxury Experience
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6568770/pexels-photo-6568770.jpeg"
                alt="Dog being groomed"
                className="w-full h-auto shadow-lg"
              />
              <div className="absolute -top-6 -right-6 p-4 bg-gold text-navy">
                <p className="font-display text-lg">Premium Products Only</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <PageSection
        title="Service Comparison"
        subtitle="Explore our different service tiers to find the perfect option for your furry friend."
        artDeco
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-navy text-cream">
                <th className="p-4 text-left font-display">Service Feature</th>
                <th className="p-4 text-center font-display">Montauk Refresh</th>
                <th className="p-4 text-center font-display">Hampton Classic</th>
                <th className="p-4 text-center font-display">Gatsby Experience</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gold-light border-opacity-20">
                <td className="p-4 font-medium">Bath & Blow Dry</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-gold-light border-opacity-20">
                <td className="p-4 font-medium">Nail Trim</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-gold-light border-opacity-20">
                <td className="p-4 font-medium">Ear Cleaning</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-gold-light border-opacity-20">
                <td className="p-4 font-medium">Full Haircut</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-gold-light border-opacity-20">
                <td className="p-4 font-medium">Premium Shampoo</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-gold-light border-opacity-20">
                <td className="p-4 font-medium">Specialty Conditioner</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">Basic</td>
                <td className="p-4 text-center">Premium</td>
              </tr>
              <tr className="border-b border-gold-light border-opacity-20">
                <td className="p-4 font-medium">Coat Treatment</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-gold-light border-opacity-20">
                <td className="p-4 font-medium">Extended Massage</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-gold-light border-opacity-20">
                <td className="p-4 font-medium">Teeth Brushing</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">Add-on</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-gold-light border-opacity-20">
                <td className="p-4 font-medium">Paw Treatment</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Starting Price</td>
                <td className="p-4 text-center font-display">$80</td>
                <td className="p-4 text-center font-display">$120</td>
                <td className="p-4 text-center font-display">$180</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-12">
          <Button to="/booking" variant="primary">
            Book Your Appointment
          </Button>
        </div>
      </PageSection>
    </motion.div>
  );
};

export default Services;