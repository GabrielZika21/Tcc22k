import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';

import './home.css';
import { useState } from "react";

import api from "../../services/api";
import React, { Component } from 'react';
import App from "../../App";

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



import Fiat from '/src/IMG/Fiat.png'
import chevrolet from '/src/IMG/chevrolet.png'
import  citroen from '/src/IMG/citroen.jpg'
import Nissan from '/src/IMG/Nissan.png'
import toyota from '/src/IMG/toyota.png'
import peugeot from '/src/IMG/peugeot.png'
import renault from '/src/IMG/renault.png'
import w from '/src/IMG/w.png'
import raam from '/src/IMG/raam.png'
function Home () { 

 

    

 
      return (
        <div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https: //fonts.googleapis.com/css2? family= Noto+Sans+Display:wght@200 & family= Roboto:ital,wght@0,300;1,300 & family= Ubuntu:wght@300 & display=swap" rel="stylesheet " />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
          <link rel="shortcut icon" type="image/png" href="./assets/img/WEGGIE-PROJECT-TCC-2K24/3.png" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <meta charSet="UTF-8" />
          <title>Home</title>
          <header className="css-selector">
            <div className="navbar">
              <a href="index.html"><img src="./src/IMG/10.png" id="logo" /></a>
              
            </div>
            <section className="slogan">
              <h1>Seja bem vindo a
                <p></p> WEGGIE</h1>
            </section>
            
          </header>
         
           
           
          
      


        
            <div className="banner">
              <section className="cards">
                <div className="itens-c1">
                  <img src="./src/IMG/garantia-png.png" id="l-c1" />
                  <h1>TERMO DE RESPONSABILIDADE</h1>
                  <p>
                    sobre o produto,
                    contra qualquer defeito de fabricação que o mesmo venha a apresentar.
                  </p>
                </div>
              </section>
              
              <section className="cards3">
                <div className="itens-c3">
                  <img src="./src/IMG/suporte.png" id="l-c3" />
                  <h1>SUPORTE</h1>
                  <p>
                    Suporte disposto a responder qualquer dúvida a qualquer momento do dia,
                    tentando sempre ajudar o cliente em situações embaraçosas!
                  </p>
                </div>
              </section>
            </div>
            <div className="cellphone-app">
              <div className="cellphone-content">
                <div className="cellphone-content-left">
                  <img src="./src/IMG/cellphone-app.png" />
                </div>
                <div className="cellphone-content-right">
                  <h1>Baixe o nosso app gratuitamente</h1>
                  <p>Utilizando o app, você terá descontos exclusivos toda semana!</p>
                  <button>
                    <a href="#">
                      <img src="./src/IMG/disponivel-google-play-badge.png" />
                    </a>
                    <a href="#">
                      <img src="./src/IMG/disponivel-appstore-badge.png" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="services-weggie">
              <div className="services-weggie-content">
                <div className="tittle-services-weggie">
                  <h1>Na WEGGIE</h1>
                </div>
                <div className="cards-services-weggie">
               
                  <a href="aluguel.html">
                    <button>Alugar</button>
                  </a>
  
                </div>
                </div>
              </div>
              
              <footer>
        <div class="footer-container">
            <div class="footer-section about">
                <h3>Sobre Nós</h3>
                <p>Nos dedicamos a oferecer soluções criativas e eficientes para nossos clientes. Com uma equipe apaixonada pela inovação, buscamos sempre a excelência em nossos serviços.</p>
            </div>
            <div class="footer-section contact-info">
                <h3>Contato</h3>
                <p>Email: <a href="mailto:contato@exemplo.com">contato@exemplo.com</a></p>
                <p>Telefone: (11) 1234-5678</p>
                <p>Endereço: Rua Exemplo, 123, São Paulo, SP</p>
            </div>
            <div class="footer-section social-links">
                <h3>Siga-nos</h3>
                <a href="#" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Nome da Empresa. Todos os direitos reservados.</p>
        </div>
    </footer>
   
          </div>


  


      );

      
     
      
    }
    




  export default Home;