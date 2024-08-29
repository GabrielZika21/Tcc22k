import { useState } from "react";
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './versa.css';
import App from "../../App";

import versa from '/src/IMG/versa.png'

function Versa () {

    function openTab(event, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("active");
        }
        tablinks = document.getElementsByClassName("tab");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        document.getElementById(tabName).classList.add("active");
        event.currentTarget.classList.add("active");
    }

     return (

         
      <div>
      <header>
        <div className="cabera">
        <h1>Descrição do Veículo</h1>
        </div>
      </header>
      <div className="cont">
        <div className="tabs">
          <div className="tab active" onclick="openTab(event, 'overview')">Visão Geral</div>
          <div className="tab" onclick="openTab(event, 'specs')">Especificações</div>
          <div className="tab" onclick="openTab(event, 'reviews')">Avaliações</div>
        </div>
        <div id="overview" className="tab-content active">
          <div className="weg">
          <img src="./src/IMG/11.png" />
          </div>
          <img src="./src/IMG/versa.png"  className="vehicle-img" />
          <h2>Versa Unique</h2>
          <p>O Versa Unique é um carro com  design moderno e elegante. Com motor potente e interior moderno, é a escolha ideal para quem busca conforto e estilo.</p>
        </div>
        <div id="specs" className="tab-content">
          <h3>Especificações Técnicas:</h3>
          <ul>
            <li>Motor: 1.6 </li>
            <li>Potência: 111 cv</li>
            <li>Transmissão: Manual de 5 marchas</li>
            <li>Consumo: 12,6 km/l cidade (G)<p>14,4 km/l estrada (G)</p><p> 8,4 km/l cidade (A) </p><p /> 10 km/l estrada (A) <p /></li>
            <li>Dimensões: 4.49 x 1.69 x 1.5 m</li>
            <li>Peso: 1.088 kg</li>
          </ul>
        </div>
        <div id="reviews" className="tab-content">
          <h3>Avaliações:</h3>
          <p><strong>João Silva:</strong> "Ótimo carro! Excelente performance e conforto."</p>
          <p><strong>Maria Oliveira:</strong> "Adorei o design e a eficiência do combustível. Recomendo!"</p>
        </div>
      </div></div>



     )


}





export default Versa;