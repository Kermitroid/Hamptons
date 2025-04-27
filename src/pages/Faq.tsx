import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

import ParallaxHero from '../components/ParallaxHero';
import PageSection from '../components/PageSection';
import FaqItem from '../components/FaqItem';
import Button from '../components/Button';

// FAQ categories and questions
const faqData = {
  services: [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of grooming services including full grooms, bath and brush packages, breed-specific styling, specialty treatments, and more. Our signature services include The Hampton Classic, The Gatsby Experience, and the Montauk Refresh. Visit our Services page for complete details and pricing."
    },
    {
      question: "How long does a grooming session take?",
      answer: "Grooming times vary depending on your dog's size, coat condition, and the service selected. A basic bath and brush might take about an hour, while a full grooming service can take 2-3 hours. For certain specialty services or dogs requiring extra attention, it may take longer. We'll provide you with a time estimate when you book your appointment."
    },
    {
      question: "Do you offer any specialized treatments?",
      answer: "Yes, we offer several specialized treatments including de-shedding treatments, flea treatments, medicated baths for skin conditions, aromatherapy, pawdicures, and facial care. Our Canine Spa Day package includes multiple specialty treatments for a comprehensive luxury experience."
    }
  ],
  booking: [
    {
      question: "How far in advance should I book an appointment?",
      answer: "We recommend booking at least 1-2 weeks in advance, especially during busy seasons (summer and holidays). For new clients or specific time requests, earlier booking is advisable. We do keep a waiting list for cancellations if you need an earlier appointment."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for cancellations or rescheduling. Late cancellations (less than 24 hours) or no-shows may incur a fee of 50% of the scheduled service. We understand emergencies happen, so please contact us as soon as possible if you need to change your appointment."
    },
    {
      question: "Can I stay with my pet during grooming?",
      answer: "For most standard appointments, we ask that owners drop off their pets and return at the scheduled pickup time. This minimizes distractions and anxiety for your pet and other animals in our care. However, for special circumstances or dogs with severe anxiety, we can discuss arrangements on a case-by-case basis."
    }
  ],
  preparation: [
    {
      question: "How should I prepare my dog for grooming?",
      answer: "Before your appointment, please take your dog for a short walk to allow them to relieve themselves. If possible, brush your dog before the appointment to remove loose hair and tangles, especially if they have a longer coat. For heavily matted coats, please don't bathe your dog before grooming as it can make mats tighter and more difficult to remove."
    },
    {
      question: "What information do you need for first-time clients?",
      answer: "For your first visit, we'll need your contact information, your pet's name, breed, age, and health information including vaccination records. We'll also ask about any behavioral concerns, previous grooming experiences, and your preferences for your pet's grooming style. Please arrive 10-15 minutes early to complete our new client form."
    },
    {
      question: "Are there any health requirements for grooming?",
      answer: "Yes, all pets must be current on their core vaccinations (rabies, distemper, parvovirus). Please provide vaccination records before or at your first appointment. We also recommend that your pet be free of fleas and ticks; if we find evidence of parasites, we may need to perform a flea treatment at an additional cost before proceeding with grooming."
    }
  ],
  about: [
    {
      question: "Who is Philip Schafmayer?",
      answer: "Philip Schafmayer is the founder and master groomer at The Hamptons Groomer. With over 15 years of experience, Philip has built a reputation for excellence in luxury dog grooming. He holds multiple certifications in professional grooming and has worked with some of the most prestigious salons before establishing The Hamptons Groomer. His philosophy centers on creating a stress-free, positive grooming experience with exceptional results."
    },
    {
      question: "What makes The Hamptons Groomer different from other grooming services?",
      answer: "The Hamptons Groomer offers a truly luxury experience that goes beyond standard grooming. We focus on creating a calm, stress-free environment and use only premium, eco-friendly products. Our attention to detail, personalized approach to each dog's needs, and the artistic aspect of our styling set us apart. Additionally, we limit the number of appointments each day to ensure quality and individualized attention for every pet."
    },
    {
      question: "Do you work with all dog breeds and sizes?",
      answer: "Yes, we welcome dogs of all breeds and sizes. Philip has extensive experience with a wide range of breeds from tiny Yorkies to large Newfoundlands. Our facility and equipment are designed to accommodate dogs of various sizes, and our techniques are adapted to each breed's specific needs and coat types."
    }
  ],
  products: [
    {
      question: "What products do you use?",
      answer: "We use only premium, eco-friendly, and hypoallergenic grooming products. Our shampoos and conditioners are specifically formulated for dogs and selected based on coat type and skin needs. For our luxury services, we use organic and botanical-based products that are gentle yet effective. If your dog has specific allergies or sensitivities, please let us know so we can select appropriate products."
    },
    {
      question: "Do you sell any products for home care?",
      answer: "Yes, we offer a curated selection of the same high-quality products we use in our salon. These include specialty shampoos and conditioners, coat sprays, brushes, combs, and other grooming tools. Philip is happy to recommend specific products for your dog's coat type and demonstrate proper brushing techniques to maintain your dog's appearance between grooming sessions."
    }
  ]
};

const Faq: React.FC = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Flatten all FAQs for search
  const allFaqs = Object.values(faqData).flat();
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? allFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqData[activeTab as keyof typeof faqData];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
        backgroundImage="https://images.pexels.com/photos/1329742/pexels-photo-1329742.jpeg"
      />
      
      <PageSection>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/4">
            <div className="sticky top-24">
              <h3 className="text-xl font-display mb-4">Categories</h3>
              <ul className="space-y-2 mb-8">
                {Object.entries(faqData).map(([key, questions]) => (
                  <li key={key}>
                    <button
                      className={`text-left w-full py-2 px-4 transition-colors ${
                        activeTab === key && !searchQuery
                          ? 'bg-navy text-cream'
                          : 'bg-ivory hover:bg-gold-light'
                      }`}
                      onClick={() => {
                        setActiveTab(key);
                        setSearchQuery('');
                      }}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)} ({questions.length})
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  className="w-full p-3 pr-10 border border-navy-light focus:border-gold focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-navy-light">
                  <Search size={18} />
                </span>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="mb-8">
              <h2 className="text-3xl font-display mb-2 art-deco-border pb-6">
                {searchQuery 
                  ? 'Search Results' 
                  : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Questions`}
              </h2>
              {searchQuery && (
                <p className="text-navy-light">
                  {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} found for "{searchQuery}"
                </p>
              )}
            </div>
            
            {filteredFaqs.length > 0 ? (
              <div className="space-y-2">
                {filteredFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-navy-light mb-4">
                  No results found for your search. Please try different keywords.
                </p>
                <button
                  className="text-gold hover:text-gold-dark transition-colors"
                  onClick={() => setSearchQuery('')}
                >
                  Clear search and show all questions
                </button>
              </div>
            )}
            
            <div className="mt-16 p-8 bg-ivory border-l-4 border-gold">
              <h3 className="font-display text-xl mb-3">Still Have Questions?</h3>
              <p className="mb-4">
                Can't find the answer you're looking for? Feel free to contact us directly and we'll be happy to help.
              </p>
              <Button to="/booking" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </PageSection>
    </motion.div>
  );
};

export default Faq;