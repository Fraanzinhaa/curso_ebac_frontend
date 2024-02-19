$(document).ready(function() {
  $('#texto-risco').on("click", "li", function(event) {
    $(this).toggleClass('riscar')
  })
  
  $('form').on('submit', function(e) {
    e.preventDefault();
    const listaTarefa = $('#lista-tarefa').val();
    const novoTarefa = $('<li></li>');
   
    $(`
      <div class="listagem-nova">
        <p>• ${listaTarefa}</p>
      </div>  
    `).appendTo(novoTarefa);
   $(novoTarefa).appendTo('ul');
  })
})