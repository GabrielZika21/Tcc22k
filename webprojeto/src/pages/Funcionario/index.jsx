// npm install react-hook-form
//import  {useForm} from "react-hook-form";

import React from 'react';
import { Link } from 'react-router-dom';
import './funcionario.css';



function Funcionario(){

   
    return(

        <div>
    
        <div class="container">
            
        <form action="">
            <div className='square'>
                <div className='container-img'>
            <img src="./src/IMG/cinco-log.png"></img>
            </div>
            </div>
      
            <div className='log-log'>
            <h1>Faça o Login</h1>
            </div>

            <input type="email" placeholder="Email" class="input-log"></input>
            <input type="password" placeholder="Senha" class="input-log"></input>
            <a button class="button-log"  href="">Enviar</a>
            
            

            <p class="reg-log">Não tem uma conta?</p>
            <p></p>
            <p className='reg'><Link to ='/usuario'>Registre-se</Link></p>
    

    </form>
    </div>
    </div>
    
    )
    }
     

export default Funcionario
