$(document).ready(function() {
  $('#telefone').mask('(00) 00000-0000')
  $('#cpf').mask('000.000.000-00')
  $('#cep').mask('00.000-000')
  $('form').validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: false,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      }
    },
    messages: {
      nome: 'Por favor, insira seu nome',
      email: 'Por favor, insira seu email',
      telefone: 'Por favor, insira seu telefone',
      endereco: 'Por favor, insira seu endereço',
      cep: 'Por favor, insira seu CEP'
    },
    submitHandler: function(form) {
      console.log(form)
    },
    invalidHandler: function(evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
      }
    }
  })
});