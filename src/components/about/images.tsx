import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // React Icons

const ImageCarousel = () => {
  const images = [
    'screenshot1.webp',
    'screenshot2.webp',
    'screenshot3.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic image change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  // Change to the next image (slide to the right)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Change to the previous image (slide to the left)
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full rounded-3xl border-4 border-purple-400 overflow-hidden">
      {/* Previous Button (using React Icons) */}
    

      {/* Carousel Images with Continuous Slide */}
      <div
        className="flex transition-transform rounded-3xl duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={index === 0 ? {} : { x: '100%' }} // No initial animation for first image
            animate={{ x: 0 }} // Slide into view for others
            exit={{ x: '-100%' }} // Slide out for others
            transition={{ duration: 1 }}
            className="flex-shrink-0 rounded-3xl  w-full h-full"
          >
            <img
              src={image}
              alt={`carousel-image-${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
  

      <button
      aria-label='left'
        onClick={prevImage}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-200"
      >
        <AiOutlineLeft size={30} />
      </button>
      {/* Next Button (using React Icons) */}
      <button
      aria-label='rightf'
        onClick={nextImage}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-200"
      >
        <AiOutlineRight size={30} />
      </button>
    </div>
  );
};

export default ImageCarousel;
