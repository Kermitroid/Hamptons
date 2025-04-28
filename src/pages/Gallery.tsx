import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'lazysizes'; // <-- Import lazysizes
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // assuming you use this for Carousel styles

const Gallery = ({ featuredPet, selectedItem, closeLightbox, getItemById }) => {
  return (
    <motion.div>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-display text-gold-dark mb-4">{featuredPet.name}</h3>
              <p className="mb-4 text-lg">{featuredPet.description}</p>
              <div className="text-navy-light">
                <p><strong>Breed:</strong> {featuredPet.breed}</p>
                <p><strong>Owner:</strong> {featuredPet.owner}</p>
              </div>
            </div>

            <div className="relative">
              <img
                data-src={featuredPet.image}
                alt={featuredPet.name}
                className="lazyload w-full h-auto shadow-lg border-8 border-cream"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-light p-4 hidden md:block">
                <div className="font-display text-navy text-xl">
                  June 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedItem !== null && (
        <div className="fixed inset-0 bg-navy bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-cream relative">
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-navy text-cream"
            >
              ✕
            </button>

            {selectedItem && (
              <div className="p-6">
                <h3 className="font-display text-2xl mb-4">
                  {getItemById(selectedItem)?.title}
                </h3>

                <Carousel showStatus={false} showThumbs={true}>
                  <div>
                    <img
                      data-src={getItemById(selectedItem)?.before}
                      alt={`${getItemById(selectedItem)?.title} - Before`}
                      className="lazyload max-h-[70vh] object-contain"
                    />
                    <p className="legend">Before</p>
                  </div>
                  <div>
                    <img
                      data-src={getItemById(selectedItem)?.after}
                      alt={`${getItemById(selectedItem)?.title} - After`}
                      className="lazyload max-h-[70vh] object-contain"
                    />
                    <p className="legend">After</p>
                  </div>
                </Carousel>

                <div className="mt-4 text-navy-light">
                  <p><strong>Breed:</strong> {getItemById(selectedItem)?.breed}</p>
                  <p><strong>Service:</strong> {getItemById(selectedItem)?.service}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Gallery;
