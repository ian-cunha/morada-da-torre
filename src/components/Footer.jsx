
import logoMarta from "../assets/logo/logoMarta.svg"

function Footer() {
  return (
    <div className="bg-gray text-light pt-3 pb-3">
      <div className="container">
        <p className="fs-6 fw-bold">ANA CRISTINA CUNHA - CAU: A20996-1</p>
      </div>
      <div className="container">
        <img src={logoMarta} className="mt-2 mb-2" width="200px" alt="Logo Marta" />
        <p className="fs-6">*Atendendo a lei de nº 8078/90, informamos que as imagens presentes no site são meramente ilustrativas, podendo ter variações de cor, tonalidade e especificações. Os móveis, equipamentos, adornos, decorações presentes na ambientação e nas plantas não fazem parte do bem adquirido. Reservamo-nos o direito de corrigir possíveis erros de digitação. Número do protocolo do memorial de incorporação 236.415</p>
      </div>
    </div>
  )
}

export default Footer