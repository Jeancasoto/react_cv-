import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Jeanca's CV</h1>
          <img src= 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/13718812_1059231577489869_3946787808162775275_n.jpg?_nc_cat=109&_nc_ht=scontent-mia3-2.xx&oh=13a784a1162b45fe1cb729ad0cc76cb8&oe=5CBC5439' width="350" height="350"/>
          
        <p> Mi nombre es Jean Carlo Soto Sanchez, actualmente tengo 19 años, nacido en Tegucigalpa, Honduras el 28 de marzo de 1999 
  Actualmente estudio en UNITEC de Tegucigalpa, HND , estoy iniciando mi Tercer ano de la carrera de Ingenieria en Sistemas Computacionales 
  Brevemente algunas metas de mi vida, Academicamente graduarme antes del proximo mundial, De vida es poder innovar , crear productos o servicio 
  que pueda solucionar una necesidad o un problema en nuestro pais.</p>

    <h2> Hobbies  </h2>
    <ul>
      <li>Escuchar musica</li>
      <li>Comprar online</li>
      <li>Pasear mi mascota</li>
      <li>Actualizarme en cuanto a la tecnologia actual</li>
      <li>Elaboracion de un programa para una empresa familiar</li>
      <li>Probar diferentes distros de linux</li>

    </ul>

    <h2> Habilidades</h2>
    <ul>
      <li>Office</li>
      <li>Programacion en python</li>
      <li>Programacion en Java</li>
      <li>Programacion en C#</li>
      <li>Github</li>
      <li>Base de datos no relacionales</li>
      <li>Cambio de piezas de laptops</li>
    </ul>

        <body >

        <a title="Social" href="https://www.facebook.com/JeancaSoto99">
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/a/aa/Facebook_Home_logo.png/revision/latest?cb=20130406221119"
                width="100" alt="algo" />
        </a>
        <a title="Social" href="https://github.com/Jeancasoto">
            <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" width="100" alt="algo"
            />
        </a>
        <a title="Social" href="https://www.instagram.com/jeancasoto99/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" width="100" alt="algo" />
        </a>
        </body>
        </header>
      </div>
    );
  }
}

export default App;
