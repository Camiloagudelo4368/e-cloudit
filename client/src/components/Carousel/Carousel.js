import React from "react";
import "./carousel.css";
import "./pallete.css";
// import "../Footer.css"

function Carousel() {
  return (
    <div>
      {/* Carousel Wrapper*/}
      <div id="carouselIndex" className="carousel slide" data-ride="carousel">

        {/* Indicators*/}
        <ol className="carousel-indicators">
          <li data-target="#carouselIndex" data-slide-to="0" className="active"></li>
          <li data-target="#carouselIndex" data-slide-to="1"></li>
          <li data-target="#carouselIndex" data-slide-to="2"></li>
          
        </ol>
        {/* /.Indicators*/}

        {/* Slides*/}
        <div className="carousel-inner" role="listbox">

          {/* 1 slide*/}
          <div className="carousel-item active">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-black-slight white-text">
                <ul class="animated fadeInUp col-md-12 list-unstyled list-inline">
                  <li>
                    <h1 id="img1Title" class="font-weight-bold text-uppercase">Software House</h1>
                  </li>
                  <li>
                    <p id="img1Description" class="font-weight-bold py-4">La innovacion es nuestro arte</p>
                  </li>
                  {/* <li class="list-inline-item">
                    <a target="_blank" href="https://mdbootstrap.com/getting-started/" class="btn btn-unique btn-lg btn-rounded mr-0">Sign up!</a>
                  </li>
                  <li class="list-inline-item">
                    <a target="_blank" href="https://mdbootstrap.com/material-design-for-bootstrap/" class="btn btn-cyan btn-lg btn-rounded ml-0">Learn more</a>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.1 slide*/}

          {/* 2 slide*/}
          <div className="carousel-item ">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-grey-light white-text">
              <ul class="animated fadeInUp col-md-12 list-unstyled list-inline">
                  <li>
                    <h1 id="img2Title" class="font-weight-bold text-uppercase">Software Development</h1>
                  </li>
                  <li>
                    <p id="img2Description" class="font-weight-bold py-4">Somos su mejor aliado en la busqueda de nuevas tecnologias</p>
                  </li>
                  {/* <li class="list-inline-item">
                    <a target="_blank" href="https://mdbootstrap.com/getting-started/" class="btn btn-unique btn-lg btn-rounded mr-0">Sign up!</a>
                  </li>
                  <li class="list-inline-item">
                    <a target="_blank" href="https://mdbootstrap.com/material-design-for-bootstrap/" class="btn btn-cyan btn-lg btn-rounded ml-0">Learn more</a>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.2 slide*/}

          {/* 3 slide */}
          <div className="carousel-item ">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-grey-light white-text">
              <ul class="animated fadeInUp col-md-12 list-unstyled list-inline">
                  <li>
                    <h1 id="img3Title" class="font-weight-bold text-uppercase">Satisfaccion Garantizada</h1>
                  </li>
                  <li>
                    <p id="img3Description" class="font-weight-bold py-4"></p>
                  </li>
                  {/* <li class="list-inline-item">
                    <a target="_blank" href="https://mdbootstrap.com/getting-started/" class="btn btn-unique btn-lg btn-rounded mr-0">Sign up!</a>
                  </li>
                  <li class="list-inline-item">
                    <a target="_blank" href="https://mdbootstrap.com/material-design-for-bootstrap/" class="btn btn-cyan btn-lg btn-rounded ml-0">Learn more</a>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.3 slide */}

        </div>
        {/* /.Slides*/}

        {/* Controls*/}
        <a className="carousel-control-prev" href="#carouselIndex" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselIndex" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        {/* /.Controls*/}
      </div>
      {/* /.Carousel Wrapper*/}
    </div>
  );
}

export default Carousel;