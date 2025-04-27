import React, { useState } from 'react';
import Button from './Button';

interface FormValues {
  name: string;
  petName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    petName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormValues({
        name: '',
        petName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="bg-ivory border border-gold p-8 md:p-10">
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="inline-block p-4 rounded-full bg-success bg-opacity-20 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl mb-3">Booking Request Sent!</h3>
          <p className="text-navy-light">
            Thank you for your booking request. We will get back to you within 24 hours to confirm your appointment.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-navy font-display mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
                className="w-full border border-navy-light p-3 focus:border-gold focus:outline-none bg-cream"
              />
            </div>
            
            <div>
              <label htmlFor="petName" className="block text-navy font-display mb-2">
                Pet's Name
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formValues.petName}
                onChange={handleChange}
                required
                className="w-full border border-navy-light p-3 focus:border-gold focus:outline-none bg-cream"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-navy font-display mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
                className="w-full border border-navy-light p-3 focus:border-gold focus:outline-none bg-cream"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-navy font-display mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                required
                className="w-full border border-navy-light p-3 focus:border-gold focus:outline-none bg-cream"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="service" className="block text-navy font-display mb-2">
              Service
            </label>
            <select
              id="service"
              name="service"
              value={formValues.service}
              onChange={handleChange}
              required
              className="w-full border border-navy-light p-3 focus:border-gold focus:outline-none bg-cream"
            >
              <option value="">Select a service</option>
              <option value="full-groom">Full Groom</option>
              <option value="bath-brush">Bath & Brush</option>
              <option value="luxury-spa">Luxury Spa Package</option>
              <option value="breed-specific">Breed-Specific Styling</option>
              <option value="nail-trim">Nail Trim & Ear Cleaning</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-navy font-display mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formValues.date}
                onChange={handleChange}
                required
                className="w-full border border-navy-light p-3 focus:border-gold focus:outline-none bg-cream"
              />
            </div>
            
            <div>
              <label htmlFor="time" className="block text-navy font-display mb-2">
                Preferred Time
              </label>
              <select
                id="time"
                name="time"
                value={formValues.time}
                onChange={handleChange}
                required
                className="w-full border border-navy-light p-3 focus:border-gold focus:outline-none bg-cream"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 3pm)</option>
                <option value="evening">Evening (3pm - 6pm)</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-navy font-display mb-2">
              Special Instructions
            </label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-navy-light p-3 focus:border-gold focus:outline-none bg-cream"
            ></textarea>
          </div>
          
          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              className="min-w-[200px]"
            >
              {isSubmitting ? 'Submitting...' : 'Request Appointment'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;