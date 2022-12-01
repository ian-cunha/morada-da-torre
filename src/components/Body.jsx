
import { AddressMap } from "./Maps"
import img1 from "../assets/img/morata-1.webp"
import img2 from "../assets/img/morata-2.webp"
import img3 from "../assets/img/morata-3.webp"
import img4 from "../assets/img/morata-4.webp"

import piscina from "../assets/icons/piscina.svg"
import areaGourmet from "../assets/icons/gourmet.svg"
import beachTennis from "../assets/icons/beachTennis.svg"
import salaoFestas from "../assets/icons/festa.svg"
import academia from "../assets/icons/academia.svg"
import brinquedoteca from "../assets/icons/brinquedoteca.svg"
import playground from "../assets/icons/playground.svg"
import futebol from "../assets/icons/futebol.svg"
import bicicletario from "../assets/icons/bicicletario.svg"
import petPlaca from "../assets/icons/pet.svg"

function Body() {
  return (
    <div>
      <div className="bg-2 bg-terciary text-secondary d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
        <h2 className="topText mb-5 fw-semibold">Escolher o Morata Clube como seu future lar é ter tudo que você
          procura em um empreendimento.
        </h2>
        <div>
          <h3 className="fs-5 box">2 QUARTOS C/ SUITE E VARANDA</h3>
          <h3 className="fs-5 box">COZINHA</h3>
          <h3 className="fs-5 box">AREA DE SERVICO</h3>
          <h3 className="fs-5 box">WC SOCIAL</h3>
        </div>
      </div>

      <div className="bg-3 bg-secondary text-light d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
        <div className="topText mb-3">
          <h2 className="fw-semibold">SINTA TODO O PRAZER DE ESTAR EM CASA</h2>
          <p>O Morata Clube é mais um projeto Maxplural que une qualidade de
            vida e praticidade o resultado é um lar repleto de conforto.
            lazer e funcionalizade para a vivência de histórias inesquecíveis em família.
          </p>
        </div>
        <div>
          <h3 className="fs-5 box-2">3 TORRES</h3>
          <h3 className="fs-5 box-2">18 ANDARES</h3>
          <h3 className="fs-5 box-2">8 APARTAMENTOS POR ANDAR</h3>
          <p>*Com opções de terreo e solarium</p>
        </div>
      </div>

      <div className="bg-4 bg-primary text-light d-flex flex-column justify-content-evenly align-items-center">
        <h2 className="fw-semibold topText mb-5 fs-1">DIFERENÇAS DE VIVER NO MORATA CLUBE RESIDENCE</h2>
        <div className="container text-center">

          <div className="row fs-5 fw-semibold">
            <div className="col">
              <img src={piscina} width="80px" alt="Piscina" />
              <p>Piscina</p>
            </div>

            <div className="col">
              <img src={areaGourmet} width="80px" alt="Área Gourmet" />
              <p>Área Gourmet</p>
            </div>

            <div className="col">
              <img src={beachTennis} width="80px" alt="Quadra beach tênis" />
              <p>Quadra beach tênis</p>
            </div>
          </div>

          <div className="row fs-5 fw-semibold">
            <div className="col">
              <img src={salaoFestas} width="80px" alt="Salão de festas" />
              <p>Salão de festas</p>
            </div>

            <div className="col">
              <img src={academia} width="80px" alt="Academia" />
              <p>Academia</p>
            </div>

            <div className="col">
              <img src={brinquedoteca} width="80px" alt="Brinquedoteca" />
              <p>Brinquedoteca</p>
            </div>
          </div>

          <div className="row fs-5 fw-semibold">
            <div className="col">
              <img src={playground} width="80px" alt="Playground" />
              <p>Playground</p>
            </div>

            <div className="col">
              <img src={futebol} width="80px" alt="Campo de futebol" />
              <p>Campo de futebol</p>
            </div>

            <div className="col">
              <img src={bicicletario} width="80px" alt="Bicicletário" />
              <p>Bicicletário</p>
            </div>

            <div className="col">
              <img src={petPlaca} width="80px" alt="Petplaca" />
              <p>Petplaca</p>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="img-def d-block" alt="Imagem Morata" />
            </div>
            <div className="carousel-item">
              <img src={img2} className="img-def d-block" alt="Imagem Morata" />
            </div>
            <div className="carousel-item">
              <img src={img3} className="img-def d-block" alt="Imagem Morata" />
            </div>
            <div className="carousel-item">
              <img src={img4} className="img-def d-block" alt="Imagem Morata" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="bg-5 bg-secondary text-light d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
        <div className="container">
          <h2 className="fs-2">Você pertinho de tudo que precisa</h2>
          <h4 className="fs-5">Viva em sintonia com o seu bem-estar</h4>
          <p className="fs-5 mb-3"><i className="bi bi-geo-alt-fill"></i> AV. SUL GOV. CID SAMPAIO, 111 - IMBIRIBEIRA
          </p>
        </div>

        <div>
          <AddressMap></AddressMap>
        </div>
      </div>

    </div>
  )
}

export default Body