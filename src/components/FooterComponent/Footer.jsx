import React from 'react';

function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="mb-4">
                        <h1 className="text-xl font-bold">#YoteAyudo</h1>
                        <h2>Anúnciate gratis</h2>
                        <h4>Consigue 10 coins</h4>
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="mb-4">Contacto</h2>
                    <p>Mercado del Carmen, oficina 1-1ºA</p>
                    <p>Málaga, Spain</p>
                </div>
                <div className="text-center">
                    <h2 className="mb-4">SÍGUENOS</h2>
                    <div className="flex justify-center">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-2xl mx-2">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-2xl mx-2">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-2xl mx-2">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-2xl mx-2">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-black py-4 text-center text-gray-300">
                <small>&copy; 2025 <b>Globant 2024</b> - Todos los Derechos Reservados -</small>
            </div>
        </footer>
    );
}

export default Footer;
