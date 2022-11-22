import axios from 'axios';
import React, { useState } from 'react';

function Form() {

  const [nome_contato, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [id_empreendimento, setEmpreendimento] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' },
      url: 'https://app.smart.youdigital.com.br/atendimento/cadastrarContatosOnline',
      data: {
        nome_contato,
        email,
        telefone,
        id_empreendimento,
        url_origem: "https://www.smartimobiliario.com.br",
        id_empresa: 7341,
        tipo_origem: 3,
        id_outra_origem: 5,
        id_detalhe_outra_origem: 820,
        tipo_de_interesse: 0,
        idAcao: 0,
        mensagem: "Quero ter mais informações."
      }
    })
      .then(function (response) {
        alert("Enviado, aguarde nosso contato!")
        console.log(response.data);
        console.log("Nome:", nome_contato, "/", "Email:", email, "Telefone:", telefone, "=", "Contato Enviado com sucesso!")
      });
  }

  return (
    <div>
      <form name="formContato" onSubmit={handleSubmit}>

        <fieldset>
          <div>
            <label htmlFor="contatoNome" className="form-label text-light">Nome</label>
            <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control form-control-lg" name="nome_contato" id="contatoNome" required placeholder="Nome" />
          </div>
          <div>
            <label htmlFor="contatoEmail" className="form-label text-light">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-lg" name="email" id="contatoEmail" required placeholder="E-mail" />
          </div>
          <div>
            <label htmlFor="contatoTelefone" className="form-label text-light">Whatsapp</label>
            <input onChange={(e) => setTelefone(e.target.value)} type="tel" maxLength="11" className="form-control form-control-lg" name="telefone" id="contatoTelefone" required placeholder="Whatsapp" />
          </div>
          <button value={65081} onClick={(e) => setEmpreendimento(e.target.value)} type="submit" className="btn bg-primary btn-lg text-light w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
          <p className="mt-2"><i className="bi bi-shield-check"></i> Garantimos a privacidade de seus dados</p>
        </fieldset>
      </form>
    </div>
  )
}

export default Form