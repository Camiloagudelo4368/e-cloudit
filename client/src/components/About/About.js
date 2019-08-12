import React from "react";
import "./about.css";
import "./pallete.css";
// import "../Footer.css"

function About() {
  return (
    <div className="aboutContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-2">
            <h2 className="text-uppercase mb-4 aboutTitle">E-Cloud IT</h2>
            <p>El arte de desarrollar aplicaciones de software por parte de nuestra compañia esta fundamentado en la aplicacion de tecnicas y procedimientos que permitan de forma coherente abarcar cada uno de los requerimientos presentados dentro del entorno de cada uno de nuestros clientes.</p>
            <p>Nuestros patrones de arquitectura proporcionan un marco de referencia dentro de la construccion de nuestras aplicaciones de software, de acuerdo a cada uno de los entornos presentados; nuestro grupo de trabajo pueden compartir una misma linea de trabajo y asi poder cubrir todos los objetivos y restriciones presentados dentro de la aplicacion.</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;