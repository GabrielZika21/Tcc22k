import {BrowserRouter, Routes, Route } from 'react-router-dom'


import Header from './pages/Header';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Funcionario from './pages/Funcionario';
import ListaUsuario from './pages/ListaUsuario';
import Cadastrar from './pages/Aluguel';


function RoutesApp(){
 return(
    
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="/funcionario" element={<Funcionario/>}/>
                <Route path="/listausuario" element={<ListaUsuario/>}/>
                <Route path="/cadastrar" element={<Cadastrar/>}/>
                


            </Routes>
    </BrowserRouter>
 )

 
}
export default RoutesApp;
