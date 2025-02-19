document.addEventListener('DOMContentLoaded', function() {
    const descriptionButtons = document.querySelectorAll('.description-button');

    descriptionButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Impedisce al link di navigare

            const targetId = this.dataset.target;
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.classList.toggle('hidden'); // Mostra/nasconde la descrizione
            }
        });
    });
});