import React from "react";

function Sections() {
    return (
        <div className="bg-gray-100 min-h-screen">
        {/* Encabezado */}
  
        {/* Sección de Categorías */}
        <section className="py-8">
          <div className="container mx-auto flex justify-center">
          </div>
        </section>
  
        {/* Sección de Contenido */}
        <section className="py-8">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card imageUrl="/image1.jpg" title="Tarjeta 1" />
            <Card imageUrl="/image2.jpg" title="Tarjeta 2" />
            <Card imageUrl="/image3.jpg" title="Tarjeta 4" />
            <Card imageUrl="/image4.jpg" title="Tarjeta 5" />
            <Card imageUrl="/image5.jpg" title="Tarjeta 6" />
            {/* Agrega más tarjetas según sea necesario */}
          </div>
        </section>
      </div>
    );
  };
  
  const CategoryIcon = ({ label, icon }) => {
    return (
      <div className="flex flex-col items-center">
        <span className="text-3xl">{icon}</span>
        <span className="mt-2">{label}</span>
      </div>
    );
  };
  
  const Card = ({ imageUrl, title }) => {
    return (
      <div className="bg-white p-4 w-9/11 rounded-lg shadow-md">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4 rounded-md" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">Descripción corta de la tarjeta.</p>
      </div>
    );
  };
  
  export default Sections;