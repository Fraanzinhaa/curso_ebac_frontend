document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('form-exercicio').addEventListener('submit', function() {
    let nome = document.getElementById('nome').value;
    alert(nome);
  })
})