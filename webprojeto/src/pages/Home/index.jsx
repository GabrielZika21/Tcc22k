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
           

          <div>
        <section className="tittle-logos">
          <h1>MARCAS</h1>
        </section>
        <div className="swiper">
          <div className="swiper-wrapper ">
            <div className="swiper-slide">
              <img src="./src/IMG/Fiat.png" />
            </div>
            <div className="swiper-slide">
              <img src="./src/IMG/w.png" />
            </div>
            <div className="swiper-slide">
              <img src="./src/IMG/chevrolet.png" />
            </div>
            <div className="swiper-slide">
              <img src="./src/IMG/toyota.png" />
            </div>
            <div className="swiper-slide">
              <img src="./src/IMG/renault.png" />
            </div>
            <div className="swiper-slide">
              <img src="./src/IMG/peugeot.png" />
            </div>
            <div className="swiper-slide">
              <img src="./src/IMG/citroen.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="./src/IMG/Nissan.png" />
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </div>
      



          <div class="header-inner-content">
        <div class="header-bottom-side">
            <div class="header-bottom-side-left">
                <h1>Alugue o Carro dos Seus Sonhos</h1>
                <p>
                    Alugue ja o carro do seu interesse para o dia a dia, com ofertas exclusivas da WEGGIE, seu desejo automobilistico deve ser atendido!
                </p>
                <div class="button">
                <a href="aluguel.html">
                <button>Saiba Mais</button>
                </a>
                </div>
            </div>
            <div class="header-bottom-side-right">
                <img src="./src/IMG/nivus-cinza.png" />
            </div>
        </div>
    </div>
           
           
          
      


           <div className="off">
           <h1><center>Na Weggie oferecemos :</center></h1>
           </div>
            <div className="banner">
              <section className="cards">
                <div className="itens-c1">
                  <img src="./src/IMG/garantia-png.png" id="l-c1" />
                  <h1>TERMO DE RESPONSABILIDADE</h1>
                  <p>
                    
                  </p>
                </div>
              </section>
              
              <section className="cards3">
                <div className="itens-c3">
                  <img src="./src/IMG/suporte.png" id="l-c3" />
                  <h1>SUPORTE</h1>
                  <p>
                    
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
                  
                </div>
                <div className="cards-services-weggie">
               
                  <a href="aluguel.html">
                    
                  </a>
  
                </div>
                </div>
              </div>
              
              <footer>
              
              <div class="footer-container">
              <div className="iig">
              <img src="./src/IMG/10.png" />
              </div>
            <div class="footer-section about">
                <h3>Sobre Nós</h3>
                <p>Nos dedicamos a oferecer soluções criativas e eficientes para nossos clientes. Com uma equipe apaixonada pela inovação, buscamos sempre a excelência em nossos serviços.</p>
            </div>
            <div class="footer-section contact-info">
                <h3>Contato</h3>
                <p>Email: <a href="mailto:contato@exemplo.com">weggiesuport@exemplo.com</a></p>
                <p>Telefone: (11) 1234-5678</p>
                <p>Endereço: Rua Interna Grupo Bandeirante, 123, Barueri, SP</p>
            </div>
            
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Weggie. Todos os direitos reservados.</p>
        </div>
    </footer>
   
          </div>


  


      );

      
     
      
    }
  




  export default Home;