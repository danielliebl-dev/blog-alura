// Aguarda todo o HTML carregar antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('like-btn');
    
    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            // Altera o texto e o estilo do botão ao clicar
            likeBtn.textContent = '❤️ Curtido!';
            likeBtn.style.backgroundColor = '#e74c3c';
            console.log('O leitor demonstrou interesse no post sobre natureza.');
        });
    }
});
