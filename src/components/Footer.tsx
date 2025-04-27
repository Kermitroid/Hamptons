import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center">
              <Logo className="h-12 w-auto" />
              <span className="ml-2 font-display text-xl text-gold">
                The Hamptons Groomer
              </span>
            </div>
            <p className="text-sm max-w-xs">
              Luxury dog grooming services in the Hamptons, providing exceptional care with a touch of elegance.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@hamptonsgroomer.com" className="text-cream hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gold font-display text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-display text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-gold transition-colors">Full Groom</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Bath & Brush</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Show Preparation</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Breed-Specific Styling</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Specialty Treatments</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-display text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-gold" />
                <span>123 Gatsby Lane, East Hampton, NY 11937</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-gold" />
                <span>(631) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-gold" />
                <span>info@hamptonsgroomer.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="art-deco-divider my-10">
          <span className="font-accent text-gold-light text-2xl px-4">TH<span className="text-gold">G</span></span>
        </div>
        
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} The Hamptons Groomer. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-gold transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;