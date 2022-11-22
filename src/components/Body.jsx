
import { AddressMap } from "./Maps"
import img1 from "../assets/img/morata-1.webp"
import img2 from "../assets/img/morata-2.webp"
import img3 from "../assets/img/morata-3.webp"
import img4 from "../assets/img/morata-4.webp"

function Body() {
  return (
    <div>
      <div className="bg-2 bg-terciary text-secondary d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
        <h2 className="w-50 fw-semibold">Escolher o Morata Clube como seu future lar é ter tudo que você
          procura em um empreendimento.
        </h2>
        <div>
          <h3 className="fs-5">2 QUARTOS C/ SUITE E VARANDA</h3>
          <h3 className="fs-5">COZINHA</h3>
          <h3 className="fs-5">AREA DE SERVICO</h3>
          <h3 className="fs-5">WC SOCIAL</h3>
        </div>
      </div>

      <div className="bg-2 bg-secondary text-light d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
        <div className="w-50">
          <h2 className="fw-semibold">SINTA TODO O PRAZER DE ESTAR EM CASA</h2>
          <p>O Morata Clube é mais um projeto Maxplural que une qualidade de
            vida e praticidade o resultado é um lar repleto de conforto.
            lazer e funcionalizade para a vivência de histórias inesquecíveis em família.
          </p>
        </div>
        <div>
          <h3 className="fs-5">3 TORRES</h3>
          <h3 className="fs-5">18 ANDARES</h3>
          <h3 className="fs-5">8 APARTAMENTOS POR ANDAR</h3>
          <h3 className="fs-5">148 UNIDADES POR TORRE</h3>

          <h2>444 UNIDADES</h2>
          <p>*Com opções de terreo e solarium</p>
        </div>
      </div>

      <div className="bg-2 bg-primary text-light d-flex flex-column justify-content-evenly align-items-center">
        <h2 className="fw-semibold fs-1">DIFERENÇAS DE VIVER NO MORATA CLUBE RESIDENCE</h2>
        <div className="container text-center">

          <div className="row">

            <div className="col">
              <img src="" alt="" />
              <p>Piscina</p>
            </div>

            <div className="col">
              <img src="" alt="" />
              <p>Área Gourmet</p>
            </div>

            <div className="col">
              <img src="" alt="" />
              <p>Quadra beach tênis</p>
            </div>

            <div className="col">
              <img src="" alt="" />
              <p>Salão de festas</p>
            </div>

            <div className="col">
              <img src="" alt="" />
              <p>Academia</p>
            </div>

          </div>
          <div className="row">

            <div className="col">
              <img src="" alt="" />
              <p>Brinquedoteca</p>
            </div>

            <div className="col">
              <img src="" alt="" />
              <p>Playground</p>
            </div>

            <div className="col">
              <img src="" alt="" />
              <p>Campo de futebol</p>
            </div>

            <div className="col">
              <img src="" alt="" />
              <p>Bicicletário</p>
            </div>

            <div className="col">
              <img src="" alt="" />
              <p>Petplaca</p>
            </div>

          </div>

        </div>
      </div>

      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="Imagem Morata"/>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="Imagem Morata"/>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="Imagem Morata"/>
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="Imagem Morata"/>
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

      <div className="bg-2 bg-secondary text-light d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
        <div>
          <h2>Você pertinho de tudo que precisa</h2>
          <h4>Viva em sintonia com o seu bem-estar</h4>
          <p><i className="bi bi-geo-alt-fill"></i> AV. SUL GOV. CID SAMPAIO, 111 - IMBIRIBEIRA
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