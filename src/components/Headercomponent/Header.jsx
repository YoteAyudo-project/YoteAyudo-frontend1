import React from 'react';
import Image from 'next/image';

 
function Header() {
  return (
    <>
    <div className="bg-black text-white h-20 flex justify-between items-center">
      <div className="w-1/2 ml-40">
        <p className="te-ayudo">yo te ayudo si nos ayudamos, y quieres ayudar, ayuda.</p>
        <p className="font-bold underline">Compra o vende</p>
      </div>
      <p className="w-20 mr-20 text-right">English <i className="bi bi-chevron-down text-white"></i></p>
    </div>

    <header className="bg-white py-4 px-1 flex justify-around items-center">
      <div>
      <Image
        src="/img/logo-yoteayudo.png"
        width={300}
        height={300}
        alt="logo Yoteayudo"
        className=''
      />
      </div>
      <nav className="w-1/5 flex justify-between">
        <a className="inline-block px-4 py-2 bg-gray-300 rounded-lg mr-2" href="#">YTA</a>
        <a className="inline-block px-4 py-2 bg-gray-300 rounded-lg mr-2" href="#">Anuncios</a>
        <a className="inline-block px-4 py-2 bg-gray-300 rounded-lg mr-2" href="#">Contacto</a>
        <a className="inline-block px-4 py-2 bg-gray-300 rounded-lg" href="#">Regístrate</a>
      </nav>
      <div className="w-1/5 flex justify-between">
        <input className="bg-gray-200 mr-2 py-2 px-4 rounded-lg w-2/3" type="text" placeholder="Usuario" /> 
        <input className="bg-gray-200 mr-2 py-2 px-4 rounded-lg w-2/3" type="text" placeholder="Contraseña" /> 
        <button className="bg-black text-white py-2 px-4 rounded-lg text-lg font-bold">Login</button>
      </div>
    </header>
    </>
  );
}

export default Header;
