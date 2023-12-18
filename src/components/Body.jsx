
import { AddressMap } from "./Maps"
import img1 from "../assets/img/1.jpg"
import img2 from "../assets/img/2.jpg"
import img3 from "../assets/img/3.jpg"
import img4 from "../assets/img/4.jpg"
import img5 from "../assets/img/5.jpg"
import img6 from "../assets/img/6.jpg"
import mapa from "../assets/img/mapa.jpg"
import planta from "../assets/img/planta.png"

import render from "../assets/img/morada-render.png"

import piscina from "../assets/icons/piscina.svg"
import areaGourmet from "../assets/icons/gourmet.svg"
import academia from "../assets/icons/academia.svg"
import brinquedoteca from "../assets/icons/brinquedoteca.svg"
import sauna from "../assets/icons/sauna.svg"
import split from "../assets/icons/split.svg"
import gas from "../assets/icons/gas.svg"

function Body() {
  return (
    <div>
      <div className="bg-2 bg-terciary text-secondary d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
        <div className="topText mb-5">
          <h2 className="fw-bold text-correction text-light fs-2">Condições especiais, a partir de:</h2>
          <b className="blockText2">R$360.000</b>
          <h2 className="fw-light text-light fs-4 mt-3">Escolher o Morada da Torre como seu futuro lar é ter tudo que você
            procura em um empreendimento.
          </h2>
          <p className="fw-semibold fs-4 text-light financiamento">Financiamento até em 80%</p>
        </div>
        <div className="text-light">
          <h3 className="fs-5 box">2 QUARTOS, SENDO 1 SUÍTE</h3>
          <h3 className="fs-5 box">SALA DE JANTAR/ESTAR</h3>
          <h3 className="fs-5 box">W.C SOCIAL</h3>
          <h3 className="fs-5 box">COZINHA</h3>
          <h3 className="fs-5 box">ÁREA DE SERVIÇO</h3>
          <h3 className="fs-5 box">TODOS APARTAMENTOS NASCENTES</h3>
          <h3 className="fs-5 box">1 VAGA NA GARAGEM</h3>
        </div>
      </div>

      <div className="bg-3 bg-secondary text-light d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
        <div>
          <img src={render} className="imgSize mt-1 mb-1" alt="Render" />
        </div>
        <div className="topText mb-3">
          <h2 className="fw-semibold">SINTA TODO O PRAZER DE ESTAR EM CASA</h2>
          <p>O Morada da Torre é mais um empreendimento da Argila Incorporações que une qualidade de
            vida e praticidade, o resultado é um lar repleto de conforto.
            Lazer e funcionalidade para a vivência de histórias inesquecíveis em família.
          </p>
        </div>
      </div>

      <div className="bg-4 bg-primary text-light d-flex flex-column justify-content-evenly align-items-center">
        <h2 className="fw-semibold topText mb-5 fs-1">DIFERENÇAS DE VIVER NO MORADA DA TORRE</h2>
        <div className="container text-center">

          <div className="row fs-5 fw-semibold">
            <div className="col">
              <img src={piscina} width="80px" alt="Piscina" />
              <p>Piscina</p>
            </div>

            <div className="col">
              <img src={sauna} width="80px" alt="Sauna" />
              <p>Sauna</p>
            </div>

            <div className="col">
              <img src={areaGourmet} width="80px" alt="Área Gourmet" />
              <p>Espaço Gourmet</p>
            </div>

            <div className="col">
              <img src={academia} width="80px" alt="Academia" />
              <p>Academia</p>
            </div>
          </div>

          <div className="row fs-5 fw-semibold mt-5">
            <div className="col">
              <img src={brinquedoteca} width="80px" alt="Brinquedoteca" />
              <p>Brinquedoteca</p>
            </div>

            <div className="col">
              <img src={split} width="80px" alt="Instalação para split" />
              <p>Instalação para split</p>
            </div>

            <div className="col">
              <img src={gas} width="80px" alt="Central de gás" />
              <p>Central de gás</p>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="img-def d-block" alt="Imagem Morada da Torre" />
            </div>
            <div className="carousel-item">
              <img src={img2} className="img-def d-block" alt="Imagem Morada da Torre" />
            </div>
            <div className="carousel-item">
              <img src={img3} className="img-def d-block" alt="Imagem Morada da Torre" />
            </div>
            <div className="carousel-item">
              <img src={img4} className="img-def d-block" alt="Imagem Morada da Torre" />
            </div>
            <div className="carousel-item">
              <img src={img5} className="img-def d-block" alt="Imagem Morada da Torre" />
            </div>
            <div className="carousel-item">
              <img src={img6} className="img-def d-block" alt="Imagem Morada da Torre" />
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

      <div className="planta-bg bg-primary text-light d-flex flex-column justify-content-evenly align-items-center">
      <h2 className="fw-semibold topText fs-1">Nossas Plantas</h2>
        <img className="planta" src={planta} alt="Planta" />
      </div>

      <div className="bg-5 bg-secondary text-light d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
        <div className="container p-5">
          <h2 className="fs-1 fw-bold">Você pertinho de tudo que precisa.</h2>
          <h4 className="fs-5 fw-light">Viva em sintonia com o seu bem-estar</h4>
          <p className="fs-5 mb-3"><i className="bi bi-geo-alt-fill"></i> Rua Benjamin Constant, 159 - Torre - Recife-PE.
          </p>
        </div>

        <div>
          <img src={mapa} className="img-map" alt="Mapa" />
        </div>
      </div>

      <div className="bg-dark pt-4 pb-2">
        <p className="text-light">Responsável de arquitetura:</p>
        <h2 className="text-light fs-4 fw-bold">ANA CRISTINA CUNHA - CAU: A20996-1</h2>
      </div>

    </div >
  )
}

export default Body