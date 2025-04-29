import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

import ParallaxHero from '../components/ParallaxHero';
import PageSection from '../components/PageSection';
import ContactForm from '../components/ContactForm';

const Booking: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxHero
        title="Book Your Appointment"
        subtitle="Schedule a luxury grooming experience for your pet"
        backgroundImage="https://pub-7567c3b5b0184d44a64d834a198f2607.r2.dev/images%20(4).jpeg"
      />
      
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-display mb-8 art-deco-border pb-8">Request an Appointment</h2>
            <ContactForm />
          </div>
          
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <h3 className="text-2xl font-display mb-6">Contact Information</h3>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start">
                  <div className="mt-1 mr-4">
                    <Phone className="text-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display mb-1">Phone</h4>
                    <p className="text-navy-light">(631) 555-1234</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 mr-4">
                    <Mail className="text-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display mb-1">Email</h4>
                    <p className="text-navy-light">info@hamptonsgroomer.com</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 mr-4">
                    <Clock className="text-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display mb-1">Business Hours</h4>
                    <p className="text-navy-light">Tuesday - Saturday: 9am - 6pm</p>
                    <p className="text-navy-light">Sunday & Monday: Closed</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 mr-4">
                    <MapPin className="text-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display mb-1">Location</h4>
                    <p className="text-navy-light">123 Gatsby Lane</p>
                    <p className="text-navy-light">East Hampton, NY 11937</p>
                  </div>
                </li>
              </ul>
              
              <div className="h-64 bg-navy-light relative">
                <div className="absolute inset-0 flex items-center justify-center text-cream">
                  <p className="font-display text-lg">Google Maps Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      
      <section className="py-20 bg-navy text-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-gold">
              Booking Policies
            </h2>
            <p className="max-w-3xl mx-auto text-lg opacity-80">
              To ensure the best experience for all our clients, please review our booking policies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-navy-light p-6 border-l-4 border-gold">
              <h3 className="font-display text-xl mb-3 text-gold-light">Cancellations</h3>
              <p className="opacity-80">
                We understand that plans change. We kindly request at least 24 hours notice for 
                any cancellations or rescheduling. Last-minute cancellations may incur a fee.
              </p>
            </div>
            
            <div className="bg-navy-light p-6 border-l-4 border-gold">
              <h3 className="font-display text-xl mb-3 text-gold-light">Late Arrivals</h3>
              <p className="opacity-80">
                Please arrive on time for your appointment. If you are more than 15 minutes late, 
                we may need to reschedule or adjust your service to accommodate our schedule.
              </p>
            </div>
            
            <div className="bg-navy-light p-6 border-l-4 border-gold">
              <h3 className="font-display text-xl mb-3 text-gold-light">New Clients</h3>
              <p className="opacity-80">
                First-time clients should arrive 10 minutes early to complete paperwork regarding 
                your pet's health, behavior, and grooming preferences.
              </p>
            </div>
            
            <div className="bg-navy-light p-6 border-l-4 border-gold">
              <h3 className="font-display text-xl mb-3 text-gold-light">Health Requirements</h3>
              <p className="opacity-80">
                All pets must be current on vaccinations. Please inform us of any health concerns, 
                allergies, or special requirements your pet may have before their appointment.
              </p>
            </div>
            
            <div className="bg-navy-light p-6 border-l-4 border-gold">
              <h3 className="font-display text-xl mb-3 text-gold-light">Payment</h3>
              <p className="opacity-80">
                We accept cash, all major credit cards, and digital payment methods. Payment is 
                expected at the time of service. Gratuities are appreciated but not required.
              </p>
            </div>
            
            <div className="bg-navy-light p-6 border-l-4 border-gold">
              <h3 className="font-display text-xl mb-3 text-gold-light">Service Duration</h3>
              <p className="opacity-80">
                Grooming times vary based on your pet's size, coat condition, and temperament. 
                We'll provide an estimated completion time at drop-off.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Booking;
