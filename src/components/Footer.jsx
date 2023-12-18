
import logoMarta from "../assets/logo/logoMarta.svg"

function Footer() {
  return (
    <div className="bg-gray text-light pt-3 pb-3">
      <div className="container">
        <img src={logoMarta} className="mt-2 mb-2" width="100px" alt="Logo Marta" />
        <p className="font-footer">Memorial de incorporação protocolado sob o número 219927 no 4° Registro de Imóveis do Recife.</p>
      </div>
    </div>
  )
}

export default Footer