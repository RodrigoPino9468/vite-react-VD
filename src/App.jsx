import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PaginaInicio from '../Components/PaginaInicio';
import SecondComponent from '../Components/QuienesSomos';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


import Navbar from '../Components/Navbar';
import MainMenu from '../Components/MainMenu';
import Cuerpo from '../Components/Cuerpo';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';



import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/second" element={<SecondComponent />} />
          <Route path="/" element={<PaginaInicio />} />
        </Routes>
      </div>
    </Router>
    

    


  )
}

export default App


{/* <div class='Container-fluid bg-primary'>
      <div class='col-3 bg-secondary'>a</div>
      <div class='col-3 bg-danger'>b</div>
      <div class='col-3 bg-warning'>c</div>
    </div> */}


{/* <div class="navbar-collapse collapse" id="navbarTogglerDemo01" style="">
          <a class="navbar-brand" href="#">
            <img src="../assets/images/si.png" class="p-3" alt="logo fundacion" width="200px">
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white pt-5 ps-5" aria-current="page" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">¿Quiénes somos?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white pt-5 ps-5" aria-current="page" href="#">Servicios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white pt-5 ps-5" aria-current="page" href="#">Programas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white pt-5 ps-5" aria-current="page" href="#">Noticias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white pt-5 ps-5" aria-current="page" href="#">Cursos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white pt-5 ps-5" aria-current="page" href="#">Donaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white pt-5 ps-5" aria-current="page" href="#">Contacto</a>
            </li>
          </ul>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div> */}