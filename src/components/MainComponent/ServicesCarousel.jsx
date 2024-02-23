'use client'
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importa íconos de flechas de la biblioteca de íconos

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: '/image1.jpg', title: 'Imagen 1', description: 'Descripción de la imagen 1' },
    { src: '/image2.jpg', title: 'Imagen 2', description: 'Descripción de la imagen 2' },
    { src: '/image3.jpg', title: 'Imagen 3', description: 'Descripción de la imagen 3' },
    { src: '/image4.jpg', title: 'Imagen 3', description: 'Descripción de la imagen 4' },
  ];

  const goToPrevious = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center m-8">Popular</h2>
      <div className="relative">
        <button
          className="m-3 absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-400"
          onClick={goToPrevious}
        >
          <FaArrowLeft />
        </button>
        <button
          className="m-4 absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-400"
          onClick={goToNext}
        >
          <FaArrowRight />
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`bg-gray-200 rounded-lg overflow-hidden shadow-md ${
                index === currentImage ? 'border-4 border-black' : ''
              }`}
            >
              <img src={image.src} alt={image.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-700">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
