import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  date: string;
  rating: number;
  review: string;
  petName?: string;
  service?: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  date,
  rating,
  review,
  petName,
  service,
  image,
}) => {
  return (
    <div className="testimonial-card mb-8">
      <div className="flex items-center mb-4">
        {image && (
          <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-display text-lg">{name}</h4>
          <p className="text-sm text-navy-light">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i}
            size={16}
            className={i < rating ? "text-gold fill-gold mr-1" : "text-navy-light mr-1"}
          />
        ))}
      </div>
      
      <p className="mb-4">{review}</p>
      
      {(petName || service) && (
        <div className="text-sm text-navy-light pt-3 border-t border-gold-light border-opacity-30">
          {petName && <span>Pet: {petName}</span>}
          {petName && service && <span className="mx-2">•</span>}
          {service && <span>Service: {service}</span>}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;