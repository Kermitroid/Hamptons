import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Heart } from 'lucide-react';

import ParallaxHero from '../components/ParallaxHero';
import PageSection from '../components/PageSection';
import Button from '../components/Button';

const About: React.FC = () => {
  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxHero
        title="About Philip Schafmayer"
        subtitle="Master Groomer & Founder of The Hamptons Groomer"
        backgroundImage="https://images.pexels.com/photos/6568740/pexels-photo-6568740.jpeg"
      />
      
      <PageSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display mb-6 art-deco-border pb-6">The Man Behind the Shears</h2>
            <p className="mb-4">
              Philip Schafmayer's journey into the world of luxury dog grooming began over 15 years ago, 
              when his passion for dogs and attention to detail merged into a career dedicated to canine aesthetics.
            </p>
            <p className="mb-4">
              After training under some of the nation's most prestigious master groomers and earning multiple 
              certifications, Philip decided to bring his unique approach to the Hamptons, where he saw an 
              opportunity to provide a truly exceptional grooming experience.
            </p>
            <p className="mb-4">
              "I believe that every dog deserves to be treated with dignity and care," says Philip. 
              "My approach is to create a calm, positive experience that leaves both the pet and owner satisfied."
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/6568981/pexels-photo-6568981.jpeg" 
              alt="Philip Schafmayer" 
              className="w-full h-auto shadow-lg border-8 border-ivory"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold p-6 hidden md:block">
              <p className="font-display text-navy italic text-lg">
                "Excellence in every detail"
              </p>
            </div>
          </div>
        </div>
      </PageSection>
      
      <div className="bg-navy py-20 text-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-gold">Our Philosophy</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-80">
              At The Hamptons Groomer, we believe in a holistic approach to dog grooming
              that prioritizes your pet's well-being above all else.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-light mb-6">
                <Heart className="w-10 h-10 text-navy" />
              </div>
              <h3 className="font-display text-xl mb-3 text-gold-light">Compassion First</h3>
              <p className="opacity-80">
                We treat every dog with patience, kindness, and respect, creating a stress-free 
                environment that makes grooming a positive experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-light mb-6">
                <Award className="w-10 h-10 text-navy" />
              </div>
              <h3 className="font-display text-xl mb-3 text-gold-light">Exceptional Quality</h3>
              <p className="opacity-80">
                We use only premium products and techniques, paying meticulous attention 
                to every detail from the first brush stroke to the final touch.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-light mb-6">
                <BookOpen className="w-10 h-10 text-navy" />
              </div>
              <h3 className="font-display text-xl mb-3 text-gold-light">Continuous Learning</h3>
              <p className="opacity-80">
                We stay at the forefront of grooming innovations through ongoing education, 
                ensuring your pet receives the most current and effective care.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <PageSection
        title="Professional Journey"
        subtitle="Philip's path to becoming the Hamptons' premier dog groomer."
        artDeco
      >
        <div 
          ref={timelineRef}
          className="relative max-w-3xl mx-auto mt-16 pl-8 border-l-2 border-gold"
        >
          {[
            {
              year: "2010",
              title: "Professional Certification",
              description: "Completed master groomer certification at the New York School of Dog Grooming."
            },
            {
              year: "2012",
              title: "Award-Winning Stylist",
              description: "Won first place in the Northeast Grooming Competition for creative styling."
            },
            {
              year: "2015",
              title: "Luxury Salon Experience",
              description: "Gained experience at Manhattan's most exclusive pet salon, serving high-profile clients."
            },
            {
              year: "2018",
              title: "Advanced Training",
              description: "Completed specialized training in breed-specific cuts and therapeutic grooming techniques."
            },
            {
              year: "2020",
              title: "The Hamptons Groomer",
              description: "Founded The Hamptons Groomer to bring luxury grooming services to Long Island's elite."
            },
            {
              year: "2023",
              title: "Expansion & Recognition",
              description: "Featured in numerous publications and expanded services to meet growing demand."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-14 w-6 h-6 bg-gold rounded-full border-4 border-cream"></div>
              <div className="font-display text-2xl text-gold-dark mb-2">{item.year}</div>
              <h3 className="font-display text-xl mb-2">{item.title}</h3>
              <p className="text-navy-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </PageSection>
      
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/6131445/pexels-photo-6131445.jpeg" 
                alt="Philip with a dog" 
                className="w-full h-auto rounded-none shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-display mb-6">Community Commitment</h2>
              <p className="mb-4">
                Beyond providing exceptional grooming services, Philip is dedicated to giving back 
                to the community that has supported his vision. The Hamptons Groomer regularly 
                participates in charity events and offers complimentary grooming sessions for 
                shelter dogs to improve their adoption prospects.
              </p>
              <p className="mb-8">
                "Every dog deserves to feel their best, regardless of their circumstances," 
                Philip says of his volunteer work. "Sometimes, a good grooming is all it takes 
                to help a shelter dog find their forever home."
              </p>
              <Button to="/booking" variant="primary">
                Book With Philip Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;