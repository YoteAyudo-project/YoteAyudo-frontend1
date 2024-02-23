import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="bg-black py-16 px-6 h-56 w-3/4 m-4">
                <h2 className='text-white text-3xl'> Publica tu anuncio <br /> en <span className='text-bold'>#YoteAyudo</span> recibe coins y <span>&#128155;</span>
                </h2>
                <button className="bg-white p-3 m-3 text-black rounded-md">Ve todos los anuncios</button>
            </div>
        </div>
        
    );
};

export default Banner;