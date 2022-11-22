import logoOrange from "../assets/logo/logoOrange.webp"

function TopText() {
  return (
    <div className="w-50">
      <img src={logoOrange} className="imgSize mt-1 mb-1" alt="Logo" />
      <h1>Será um prazer estar em casa</h1>
      <p>O Morata Clube Residence é um empreendimento
        que reúne: modernidade, conforto e acessibilidade, com estrutura de lazer completa
         e localização privilegiada. uma oportunidade única para você e sua família.
      </p>
    </div>
  )
}

export default TopText