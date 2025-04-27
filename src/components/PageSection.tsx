import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
  artDeco?: boolean;
}

const PageSection: React.FC<PageSectionProps> = ({
  children,
  className = '',
  title,
  subtitle,
  fullWidth = false,
  artDeco = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  return (
    <section className={`py-16 ${fullWidth ? '' : 'container mx-auto px-4 md:px-8'} ${className}`}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-display mb-4 ${artDeco ? 'art-deco-border' : ''}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-navy-light max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default PageSection;