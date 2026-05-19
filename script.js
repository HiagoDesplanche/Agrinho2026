// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    const searchInput = document.getElementById("odsSearch");
    const cards = document.querySelectorAll(".card-ods");

    // Função de filtro
    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        cards.forEach(card => {
            // Pega o texto do atributo 'data-name' do card
            const cardName = card.getAttribute("data-name");

            // Se o termo pesquisado estiver no nome do card, ele mostra, senão esconde
            if (cardName.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
