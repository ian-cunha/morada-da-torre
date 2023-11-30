import logo from "../assets/logo/logo.png"

function TopBar() {
  return (
    <nav className="navbar navbar-dark fixed-top navbar-expand-lg bg-dark bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} width="100vw" alt="Logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold" aria-current="page" href="#">Início</a>
            </li>
          </ul>
          <a className="text-light fs-5" href="">
            <a className="text-light fs-5" type="button" data-bs-toggle="modal" data-bs-target="#whatsappModal">
              <i className="bi bi-whatsapp"></i>
            </a>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default TopBar