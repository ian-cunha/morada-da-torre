import logo from "../assets/logo/logo.png"

function TopBar() {
  return (
    <nav className="navbar navbar-dark fixed-top navbar-expand-lg bg-dark bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} width="100vw" alt="Logo" /></a>
        <a className="text-light fs-3" type="button" data-bs-toggle="modal" data-bs-target="#whatsappModal">
              <i className="bi bi-whatsapp"></i>
            </a>
      </div>
    </nav>
  )
}

export default TopBar