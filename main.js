$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#reset').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereçoImagem = $('#adicionar').val();
        const novoItem = $('<li style="display: none"></li>'); // ordem inversa do html//
        $(`<img src="${endereçoImagem}" />`).appendTo(novoItem); // append ele pega o elemento do endereço de imagem e add no novoitem//
        $(`
            <div class ="overlay">
                <a href="${endereçoImagem}" target="_blank" title="Ver imagem em tamanho real"> Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#adicionar').val('');
    })
})