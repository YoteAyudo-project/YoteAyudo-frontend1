import React from "react";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Encabezado */}
      <div className="encabezado bg-black text-white h-20 flex justify-between items-center">
        <div className="encabezado__texto w-1/2 flex ml-64">
          <span className="compra-vende font-bold">Compra</span>
          <span className="ml-20">|</span>
          <span className="ml-20 font-bold">Vende</span>
        </div>
        <div className="encabezado__ingles w-7 mr-20">EN</div>
      </div>

      {/* Contenido */}
      <div className="contenedor mx-auto">
        <h2 className="mis-servicios text-4xl text-center mt-8 mb-8">Mis Servicios</h2>

        {/* Formulario */}
        <div className="contenedor-formulario">
          <form className="formulario grid grid-cols-3 gap-8 relative">
            <input className="nombre-servicio bg-gray-200 w-full h-12 rounded-md px-4" type="text" placeholder="Nombre del servicio" />
            <input className="valor-coins bg-gray-200 w-full h-12 rounded-md px-4" type="text" placeholder="Valor en coins" />
            <input className="foto-servicio bg-gray-200 w-full h-12 rounded-md px-4" type="text" placeholder="Foto del servicio" />
            <button className="btn-foto absolute top-2 right-2 bg-black text-white px-4 py-2 rounded-md">Subir</button>
            <textarea className="descripcion-servicio bg-gray-200 col-span-3 rounded-md px-4 py-2" name="" cols="30" rows="10" placeholder="Descripción del Servicio"></textarea>
            <button className="btn-publicar col-start-3 col-span-1 bg-black text-white px-4 py-2 rounded-md mt-4">Publicar</button>
          </form>
        </div>

        {/* Galería de productos */}
        <div className="contenedor-grid grid grid-cols-3 gap-8 mt-10">
          {/* Producto 1 */}
          <div className="contenedor-producto">
            <div className="contenedor-imagen h-96 bg-gray-200"></div>
            <div className="contenedor-texto">
              <h4 className="texto-titulo text-xl font-semibold mb-2">HAVIT HV-G92 Gamepad</h4>
              <p className="texto-precio text-lg font-normal mb-2">$120 <span className="texto-descuento text-gray-500">$160</span></p>
              <div className="flex items-center mb-2">
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <span className="texto-opinion text-gray-500 ml-1">(88)</span>
              </div>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="contenedor-producto">
            <div className="contenedor-imagen h-96 bg-gray-200"></div>
            <div className="contenedor-texto">
              <h4 className="texto-titulo text-xl font-semibold mb-2">AK-900 Wired Keyboard</h4>
              <p className="texto-precio text-lg font-normal mb-2">$960 <span className="texto-descuento text-gray-500">$1160</span></p>
              <div className="flex items-center mb-2">
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star text-yellow-500"></i>
                <span className="texto-opinion text-gray-500 ml-1">(75)</span>
              </div>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="contenedor-producto">
            <div className="contenedor-imagen h-96 bg-gray-200"></div>
            <div className="contenedor-texto">
              <h4 className="texto-titulo text-xl font-semibold mb-2">IPS LCD Gaming Monitor</h4>
              <p className="texto-precio text-lg font-normal mb-2">$370 <span className="texto-descuento text-gray-500">$400</span></p>
              <div className="flex items-center mb-2">
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <span className="texto-opinion text-gray-500 ml-1">(99)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de servicios */}
        <div className="btn-servicios flex justify-center mt-10 mb-10">
          <button className="editar-servicios bg-black text-white px-4 py-2 rounded-md mr-4">Editar Servicios</button>
          <button className="logout bg-black text-white px-4 py-2 rounded-md">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default App;
