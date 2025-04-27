import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

import ParallaxHero from '../components/ParallaxHero';
import PageSection from '../components/PageSection';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Victoria Hamilton",
    date: "March 15, 2025",
    rating: 5,
    review: "Philip transformed my Goldendoodle, Max. He was patient, professional, and the results were better than I could have imagined. Max was actually calm during the process, which is a miracle!",
    petName: "Max",
    service: "The Gatsby Experience"
  },
  {
    id: 2,
    name: "Jonathan Pierce",
    date: "February 28, 2025",
    rating: 5,
    review: "I can't say enough good things about The Hamptons Groomer. My Yorkie, Bella, has severe anxiety, and Philip took the time to make her comfortable. The outcome was beautiful, and Bella wasn't stressed at all.",
    petName: "Bella",
    service: "Breed-Specific Styling"
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    date: "January 12, 2025",
    rating: 4,
    review: "Great attention to detail! My Shih Tzu looks absolutely fantastic after his appointment. The only reason for 4 stars instead of 5 is that the wait time was a bit longer than expected, but the results were worth it.",
    petName: "Oliver",
    service: "The Hampton Classic"
  },
  {
    id: 4,
    name: "Michael Washington",
    date: "December 5, 2024",
    rating: 5,
    review: "As a show dog owner, I have extremely high standards. Philip exceeded them all. His understanding of breed standards is impeccable, and my Poodle has never looked better for competition.",
    petName: "Duchess",
    service: "Show Preparation"
  },
  {
    id: 5,
    name: "Emma Thompson",
    date: "November 20, 2024",
    rating: 5,
    review: "The salon is gorgeous, and the experience feels so luxurious from start to finish. My dog Charlie actually gets excited when we pull up to the building now! Worth every penny for the personalized service.",
    petName: "Charlie",
    service: "Canine Spa Day"
  },
  {
    id: 6,
    name: "Robert Chen",
    date: "October 8, 2024",
    rating: 5,
    review: "Philip is a true artist. He understood exactly what I wanted for my Bichon, even though I struggled to explain it. The cut was perfect, and the special touches like the bow and cologne were lovely.",
    petName: "Snowball",
    service: "The Gatsby Experience"
  }
];

interface SubmitFormValues {
  name: string;
  email: string;
  petName: string;
  service: string;
  rating: number;
  review: string;
}

const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState<SubmitFormValues>({
    name: '',
    email: '',
    petName: '',
    service: '',
    rating: 5,
    review: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(item => {
        if (activeFilter === '5-star') {
          return item.rating === 5;
        }
        if (activeFilter.startsWith('service-')) {
          return item.service.toLowerCase().includes(activeFilter.replace('service-', '').toLowerCase());
        }
        return true;
      });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormValues({
        name: '',
        email: '',
        petName: '',
        service: '',
        rating: 5,
        review: ''
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setShowForm(false);
      }, 5000);
    }, 1500);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRatingChange = (rating: number) => {
    setFormValues(prev => ({
      ...prev,
      rating
    }));
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxHero
        title="Client Testimonials"
        subtitle="What Our Clients Have to Say"
        backgroundImage="https://images.pexels.com/photos/1449358/pexels-photo-1449358.jpeg"
      />
      
      <PageSection>
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
          <select
            className="border border-navy py-2 px-4 bg-cream mb-4 sm:mb-0"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            <option value="all">All Testimonials</option>
            <option value="5-star">5-Star Reviews</option>
            <optgroup label="Filter by Service">
              <option value="service-gatsby">Gatsby Experience</option>
              <option value="service-classic">Hampton Classic</option>
              <option value="service-spa">Spa Services</option>
              <option value="service-breed">Breed-Specific</option>
            </optgroup>
          </select>
          
          <Button
            variant="secondary"
            onClick={() => setShowForm(!showForm)}
            className="text-sm"
          >
            {showForm ? 'Cancel' : 'Share Your Experience'}
          </Button>
        </div>
        
        {showForm && !isSuccess && (
          <div className="mb-12 p-8 bg-ivory border border-gold">
            <h3 className="font-display text-2xl mb-6 text-center">Share Your Experience</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-display mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-navy-light p-3 bg-cream focus:border-gold focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-display mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-navy-light p-3 bg-cream focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="petName" className="block font-display mb-2">
                    Pet's Name
                  </label>
                  <input
                    type="text"
                    id="petName"
                    name="petName"
                    value={formValues.petName}
                    onChange={handleChange}
                    required
                    className="w-full border border-navy-light p-3 bg-cream focus:border-gold focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block font-display mb-2">
                    Service Received
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formValues.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-navy-light p-3 bg-cream focus:border-gold focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="The Gatsby Experience">The Gatsby Experience</option>
                    <option value="The Hampton Classic">The Hampton Classic</option>
                    <option value="Montauk Refresh">Montauk Refresh</option>
                    <option value="Breed-Specific Styling">Breed-Specific Styling</option>
                    <option value="Canine Spa Day">Canine Spa Day</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block font-display mb-2">
                  Your Rating
                </label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="text-2xl mr-2 focus:outline-none"
                    >
                      <Star 
                        className={star <= formValues.rating ? "text-gold fill-gold" : "text-navy-light"} 
                        size={24}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="review" className="block font-display mb-2">
                  Your Review
                </label>
                <textarea
                  id="review"
                  name="review"
                  value={formValues.review}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-navy-light p-3 bg-cream focus:border-gold focus:outline-none"
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  className="min-w-[200px]"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </Button>
              </div>
            </form>
          </div>
        )}
        
        {isSuccess && (
          <div className="mb-12 p-8 bg-ivory border border-gold text-center">
            <div className="inline-block p-4 rounded-full bg-success bg-opacity-20 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-2xl mb-3">Thank You for Your Review!</h3>
            <p className="text-navy-light">
              We appreciate you taking the time to share your experience with The Hamptons Groomer.
              Your feedback helps us continue to improve our services.
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              date={testimonial.date}
              rating={testimonial.rating}
              review={testimonial.review}
              petName={testimonial.petName}
              service={testimonial.service}
            />
          ))}
        </div>
        
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-navy-light">No testimonials found with the current filter.</p>
          </div>
        )}
      </PageSection>
      
      <section className="py-20 bg-navy text-cream relative">
        <div className="absolute inset-0 bg-art-deco-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-gold">
            Experience The Hamptons Groomer Difference
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-80">
            Join our family of satisfied clients and give your furry friend the luxury 
            treatment they deserve. Book your appointment today.
          </p>
          <Button variant="gold" to="/booking">
            Book Your Appointment
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;