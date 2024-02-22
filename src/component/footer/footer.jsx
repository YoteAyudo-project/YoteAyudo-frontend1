import React from 'react';
import './Footer.css'

// Habría que importar estos links en la head del index pero no la veo, son los dibus de logos 
// <link href="css/stylesheet.css" rel="stylesheet" type="text/css" />
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


function Footer() {


    return (
        <>
            <footer class="pie-pagina">
                <div class="grupo-1">
                    <div class="box">
                        <div class="logo" ><h1>#YoteAyudo</h1>
                            <h2>Anunciate gratis</h2>
                            <h4>Consigue 10 coins</h4>
                        </div>
                    </div>
                    <div class="box">


                        <h2>Contacto</h2>
                        <p>Mercado del Carmen, oficina 1-1ºA</p>
                        <p>Málaga, Spain</p>
                    </div>
                    <div class="box">
                        <h2>SIGUENOS</h2>
                        <div class="red-social">
                            <a
                                href="https://www.facebook.com/"
                                class="fa fa-facebook"
                                target="_blank"
                            >                                
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                class="fa fa-instagram"
                                target="_blank"
                            ></a>
                            <a
                                href="https://www.youtube.com/"
                                class="fa fa-youtube"
                                target="_blank"
                            ></a>
                            <a
                                href="https://linkedin.com/"
                                class="fa fa-linkedin"
                                target="_blank"
                            ></a>
                        </div>
                    </div>
                </div>

                <div class="grupo-2">
                    <small
                    >&copy; 2025 <b>Globant 2024</b> -Todos los Derechos
                        Reservados-</small
                    >
                </div>
            </footer>

        </div >

        </div >
      
    </>
    )
}

export default Footer;