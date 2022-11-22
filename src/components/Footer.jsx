
import logoMarta from "../assets/logo/logoMarta.webp"

function Footer() {
  return (
    <div className="bg-gray text-light pt-3 pb-3">
      <div className="container">
        <h4>Saiba mais</h4>
        <img src={logoMarta} alt="" />
        <p className="fs-5">Marta é uma aceleradora de vendas transacionais, 100% digital, que usa inteligência de dados para fazer o encontro de lançamentos do mercado com seus perfis ideais de compradores.</p>
        <p className="fs-6">*Atendendo a lei de nº 8078/90, informamos que as imagens presentes no site são meramente ilustrativas, podendo ter variações de cor, tonalidade e especificações. Os móveis, equipamentos, adornos, decorações presentes na ambientação e nas plantas não fazem parte do bem adquirido. Reservamo-nos o direito de corrigir possíveis erros de digitação. Número do protocolo do memorial de incorporação 236.415</p>
      </div>
    </div>
  )
}

export default Footer