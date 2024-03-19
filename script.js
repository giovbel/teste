document.getElementById('tema').addEventListener('click', function() {
    var body = document.body;

    // Verificar o tema atual
    var temaAtual = body.getAttribute('data-tema');

    // Alternar entre os temas
    if (temaAtual === 'branco') {
        // Mudar para o tema preto
        body.style.backgroundColor = '#000';
        body.style.color = '#fff';
        body.setAttribute('data-tema', 'preto');
    } else {
        // Mudar para o tema branco (padrão)
        body.style.backgroundColor = '#fff';
        body.style.color = '#000';
        body.setAttribute('data-tema', 'branco');
    }
});
