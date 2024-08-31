document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('cart-button');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartCount = document.getElementById('cart-count');

    // Função para mostrar/ocultar o dropdown do carrinho
    cartButton.addEventListener('click', () => {
        cartDropdown.classList.toggle('hidden');
    });

    // Exemplo de adicionar um item ao carrinho (isso deve ser substituído pela lógica real)
    setTimeout(() => {
        cartCount.textContent = '3'; // Atualiza o número de itens no carrinho
        // Aqui você também adicionaria itens ao dropdown, se necessário
    }, 1000);
});