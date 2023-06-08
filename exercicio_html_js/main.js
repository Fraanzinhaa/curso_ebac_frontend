const form = document.getElementById('form-exercicio');


form.addEventListener('submit', function(btn) {
    btn.preventDefault();

    const valorA = document.getElementById('numero-a');
    const valorB = document.getElementById('numero-b');
    const valorAconvertido = parseInt(valorA.value)
    const valorBconvertido = parseInt(valorB.value)
    const mensagemSucesso = `Número B = ${valorBconvertido} é maior que A = ${valorAconvertido}, DENTRO DO ESPERADO` 
    const mensagemNaoEsperado = `Número A = ${valorAconvertido} é maior que B = ${valorBconvertido}, NÃO PODE!!!`
    const mensagemNumerosIguais = `Número: ${valorAconvertido} igual ao: ${valorBconvertido}, NÃO PODE!!!`

    if (valorAconvertido > valorBconvertido) {
      
        const htmlMensagemNaoEsperado = document.querySelector('.notsucess-message')
        htmlMensagemNaoEsperado.innerHTML = mensagemNaoEsperado;
        htmlMensagemNaoEsperado.style.display = 'block'
        document.querySelector('.not2sucess-message').style.display = 'none';
        document.querySelector('.sucess-message').style.display = 'none';
        
    } else if (valorBconvertido === valorAconvertido) {
        
        const htmlMensagemNumerosIguais = document.querySelector('.not2sucess-message')
        htmlMensagemNumerosIguais.innerHTML = mensagemNumerosIguais;
        htmlMensagemNumerosIguais.style.display = 'block'
        document.querySelector('.notsucess-message').style.display = 'none';
        document.querySelector('.sucess-message').style.display = 'none';
        
    } else {

        const htmlMensagemSucesso = document.querySelector('.sucess-message');
        htmlMensagemSucesso.innerHTML = mensagemSucesso;
        htmlMensagemSucesso.style.display = 'block';
        document.querySelector('.notsucess-message').style.display = 'none';
        document.querySelector('.not2sucess-message').style.display = 'none';
    }

    valorA.value = '';
    valorB.value = '';
})

