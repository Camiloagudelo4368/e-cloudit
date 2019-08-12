import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      {/* Footer*/}
      <footer className="page-footer text-center text-md-left pt-4">
        {/* Footer Links*/}
        <div className="container-fluid">
          <div className="row">
            {/* First column*/}
            <div className="col-md-3 offset-md-1">
              <h5 className="font-weight-bold text-uppercase mb-4">E-Cloud IT S.A.S</h5>
              <p>
              Diseñamos nuestras aplicaciones de acuerdo a las arquitecturas actuales del mercado global, unificando el Hardware y Software, Componentes, Modulos, Datos, con la finalidad de integrar de manera mas eficiente y eficaz un producto de muy alta calidad; el cual pueda satisfacer los requerimientos solicitados por nuestros clientes.
              </p>
            </div>
            {/* /.First column*/}
            <hr className="clearfix w-100 d-md-none" />
            {/* Second column*/}
            <div className="col-md-2 offset-md-1">
              <h5 className="font-weight-bold text-uppercase mb-4">Productos</h5>
              <ul className="list-unstyled">
                <li><a href="#!">Work Case</a></li>
                <li><a href="#!">Kronos</a></li>
              </ul>
            </div>
            {/* /.Second column*/}
            <hr className="clearfix w-100 d-md-none" />
            {/* Third column*/}
            <div className="col-md-2">
              <h5 className="font-weight-bold text-uppercase mb-4">Compañia</h5>
              <ul className="list-unstyled">
                <li><a href="#!">Aliados</a></li>
                <li><a href="#!">Soporte</a></li>
                <li><a href="#!">Nosotros</a></li>
                <li><a href="#!">Contacto</a></li>
              </ul>
            </div>
            {/* /.Third column*/}
            <hr className="clearfix w-100 d-md-none" />
            {/* Fourth column*/}
            <div className="col-md-2">
              <h5 className="font-weight-bold text-uppercase mb-4">Tecnologias</h5>
              <ul className="list-unstyled">
                <li><a href="#!">Microsoft</a></li>
                <li><a href="#!">React</a></li>
                <li><a href="#!">Oracle</a></li>
                <li><a href="#!">HTML5</a></li>
                <li><a href="#!">Javascript</a></li>
              </ul>
            </div>
            {/* /.Fourth column*/}
          </div>
        </div>
        {/* /.Footer Links*/}
        <hr></hr>
        {/* Call to action*/}
        <div className="call-to-action text-center">
          <h4 className="my-4">NUESTROS ALIADOS</h4>
          <ul className="list-unstyled list-inline mb-4">
            <li>
              <h5 className="my-4"></h5>
            </li>
            <li className="list-inline-item"><img srcSet="/img/clients/clientes_color3.png">
            </img>
            </li>
          </ul>
        </div>

        <div className="call-to-action text-center">
          <h4 className="my-4"></h4>
          <ul className="list-unstyled list-inline mb-4">
            <li>
              <h5 className="my-4">Siguenos en nuestras redes sociales</h5>
            </li>
            <li className="list-inline-item"><a href="https://www.facebook.com/Divine-Blooms-Bowtique-102340111123527/"
              className="fab fa-facebook fa-2x"></a></li>&nbsp;
            <li className="list-inline-item"><a href="https://www.etsy.com/shop/DivineBloomsbowtique"
              className="fab fa-instagram fa-2x"></a></li>
            <li className="list-inline-item"><a href="https://www.etsy.com/shop/DivineBloomsbowtique"
              className="fab fa-twitter fa-2x"></a></li>
          </ul>
        </div>
        {/* /.Call to action*/}
        {/* Copyright*/}
        <div className="footer-copyright text-center">
          <div className="container-fluid py-3">
            © 2019 Copyright: <a href="https://www.DBBowtique.com">e-cloud IT</a>
          </div>
        </div>
        {/* /.Copyright*/}
      </footer>
      {/* /.Footer*/}
    </div>
  );
}

export default Footer;