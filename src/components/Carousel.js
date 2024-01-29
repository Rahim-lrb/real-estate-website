import React, { useRef, useEffect } from 'react';

export default function Carousel({ images }) {
  const imageContainerRef = useRef(null);

  const prev = () => {
    imageContainerRef.current.scrollLeft -= 600;
  };

  const next = () => {
    imageContainerRef.current.scrollLeft += 600;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      prev();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const shouldHideButtons = images && images.length <= 1;

  return (
    <div className='overflow-hidden rounded-lg flex justify-between items-center space-x-6 select-none'>
      {!shouldHideButtons && (
        <div onClick={prev} className='text-white cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </div>
      )}

      {/* carousel */}
      <div id='carousel' ref={imageContainerRef} className='flex items-center w-[600px] h-[400px] overflow-x-scroll snap-mandatory scroll-smooth rounded-lg'>
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <img key={index} src={image.url} alt={`try ${index + 1}`} className='snap-star min-w-full' />
          ))}
      </div>
      
      {!shouldHideButtons && (
        <div onClick={next} className='text-white cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
      )}
    </div>
  );
}
