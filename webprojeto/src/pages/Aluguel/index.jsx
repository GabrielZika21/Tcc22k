import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './cadastrar.css'
import { useState } from "react";
import api from "../../services/api";
import React, { Component } from 'react';



function Cadastrar(){

    return(
<div>
            
        
        <div className="cars-section">
          <div className="filter-banner">
            <h1>FILTRAR</h1>
            <div className="filter">
              <input type="text" placeholder="Marca" className="botton-filter" />
              <input type="text" placeholder="Modelo" className="botton-filter" />
              <input type="text" placeholder="Tipo" className="botton-filter" />
              <input type="text" placeholder="Tipo Combustivel" className="botton-filter" />
              <input type="text" placeholder="Cor" className="botton-filter" />
            </div>
          </div>
          <div className="container-cards">
            {/* Card 1 */}
            <div className="card">
              <div className="card-header">
                <img src="./src/IMG/versa.png" className="card-img" />
              </div>
              <div className="card-body">
                <h3 className="card-local">Barueri-SP</h3>
                <h2 className="card-titulo">Nissan Versa </h2>
                <p className="card-texto">
                 Carro 1.6, Tipo sedã, motor flex, 50.000 km, Cor Preto.
                </p>
                <h2 className="card-preco">R$120/dia</h2>
                <p className="card-year">2012</p>
                <div className="favorite-star">
                  <i className="bi bi-star favorite" />
                </div>
              </div>
              {/* card-footer */}
              <div className="card-footer">
                <a href="compra.htm">Reserve</a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card">
              <div className="card-header">
                <img src="./src/IMG/hiluxxx.png" className="card-img" />
              </div>
              <div className="card-body">
                <h3 className="card-local">São Paulo</h3>
                <h2 className="card-titulo">Toyota SW4</h2>
                <p className="card-texto">
                  Carro 2.8, Tipo SUV, Movido a Diesel, 0km, Cor Branca
                </p>
                <h2 className="card-preco">R$250/dia</h2>
                <p className="card-year">2019</p>
              </div>
              {/* card-footer */}
              <div className="card-footer">
                <a href="compra.htm">Reserve</a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card">
              <div className="card-header">
                <img src="./src/IMG/hb200.webp" className="card-img" />
              </div>
              <div className="card-body">
                <h3 className="card-local">Barueri-SP</h3>
                <h2 className="card-titulo">Hyundai HB20</h2>
                <p className="card-texto">
                  Carro 1.0, Tipo Hatchback,Movido a Diesel, 0km, Cor Prata
                </p>
                <h2 className="card-preco">R$170/dia</h2>
                <p className="card-year">2015</p>
              </div>
              {/* card-footer */}
              <div className="card-footer">
                <a href="compra.htm">Reserve</a>
              </div>
            </div>
             
            </div>
            
           
             </div>
             </div>

      
        
      
    );
  }




export default Cadastrar;