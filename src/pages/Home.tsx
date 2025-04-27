import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scissors, Bath, Award, Clock, Heart } from 'lucide-react';

import ParallaxHero from '../components/ParallaxHero';
import PageSection from '../components/PageSection';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxHero
        title="Luxury Dog Grooming in the Hamptons"
        subtitle="Where Elegance Meets Expert Care"
        backgroundImage="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg"
        ctaText="Book an Appointment"
      />
      
      <PageSection
        title="Welcome to The Hamptons Groomer"
        subtitle="Offering premier dog grooming services with a touch of luxury to the Hamptons community."
        artDeco
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-lg">
              At The Hamptons Groomer, Philip Schafmayer combines his passion for dogs with his 
              expertise in grooming to deliver an exceptional experience. Each pet receives 
              personalized attention, ensuring they not only look their best but feel their best.
            </p>
            <p className="mb-8">
              Using only premium, eco-friendly products and advanced techniques, we create a 
              stress-free environment where your beloved companion can be pampered in style.
            </p>
            <Button to="/about" variant="secondary">
              Our Story
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg" 
                alt="Philip Schafmayer grooming a dog" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold p-4 md:p-6">
              <p className="font-display text-navy text-sm md:text-base">
                "Every dog deserves to look and feel extraordinary."
              </p>
              <p className="text-right text-xs mt-2">— Philip Schafmayer</p>
            </div>
          </div>
        </div>
      </PageSection>
      
      <div className="bg-navy py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              ref={ref}
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center text-cream"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
                <Scissors className="text-navy w-8 h-8" />
              </div>
              <h3 className="font-display text-xl mb-2">Expert Styling</h3>
              <p className="text-cream-light opacity-80">
                Breed-specific cuts and custom styling by experienced professionals.
              </p>
            </motion.div>
            
            <motion.div 
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center text-cream"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
                <Bath className="text-navy w-8 h-8" />
              </div>
              <h3 className="font-display text-xl mb-2">Premium Products</h3>
              <p className="text-cream-light opacity-80">
                Luxury, eco-friendly shampoos and conditioning treatments.
              </p>
            </motion.div>
            
            <motion.div 
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center text-cream"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
                <Heart className="text-navy w-8 h-8" />
              </div>
              <h3 className="font-display text-xl mb-2">Stress-Free Experience</h3>
              <p className="text-cream-light opacity-80">
                Calm, patient handling in a soothing environment for your pet.
              </p>
            </motion.div>
            
            <motion.div 
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center text-cream"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
                <Award className="text-navy w-8 h-8" />
              </div>
              <h3 className="font-display text-xl mb-2">Certified Excellence</h3>
              <p className="text-cream-light opacity-80">
                Industry-recognized qualifications and continual education.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <PageSection
        title="Our Signature Services"
        subtitle="Discover our range of luxury grooming services tailored to your pet's needs."
        artDeco
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="The Hampton Classic"
            description="A complete grooming package including bath, haircut, nail trim, ear cleaning, and style finish."
            price="From $120"
            duration="1.5 - 2 hours"
            icon={<Scissors className="w-8 h-8" />}
          />
          
          <ServiceCard
            title="The Gatsby Experience"
            description="Our premium service featuring organic products, specialty shampoo treatments, and extended massage."
            price="From $180"
            duration="2 - 2.5 hours"
            icon={<Bath className="w-8 h-8" />}
            featured
          />
          
          <ServiceCard
            title="Montauk Refresh"
            description="A quick refresh with bath, blow-dry, brush-out, nail trim, and ear cleaning."
            price="From $80"
            duration="1 hour"
            icon={<Clock className="w-8 h-8" />}
          />
        </div>
        
        <div className="text-center mt-12">
          <Button to="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </PageSection>
      
      <section className="py-20 bg-navy text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-art-deco-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-gold">
              Client Testimonials
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience with The Hamptons Groomer.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TestimonialCard
              name="Victoria Hamilton"
              date="March 15, 2025"
              rating={5}
              review="Philip transformed my Goldendoodle, Max. He was patient, professional, and the results were better than I could have imagined. Max was actually calm during the process, which is a miracle!"
              petName="Max"
              service="The Gatsby Experience"
            />
          </div>
          
          <div className="text-center mt-8">
            <Button to="/testimonials" variant="gold">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>
      
      <PageSection className="text-center">
        <h2 className="text-3xl md:text-4xl font-display mb-6">Ready to Book?</h2>
        <p className="text-lg text-navy-light max-w-2xl mx-auto mb-8">
          Schedule an appointment for your furry friend today and experience the difference of luxury grooming.
        </p>
        <Button to="/booking" variant="primary" className="mx-auto">
          Book an Appointment
        </Button>
      </PageSection>
    </motion.div>
  );
};

export default Home;