const container = document.querySelector('.article-wrapper');
const scrollLeftButton = document.querySelector('.s-left');
const scrollRightButton = document.querySelector('.s-right');

scrollLeftButton.addEventListener('click', () => {
    container.scrollBy({
        top: 0,
        left: -400, // Desplaza a la izquierda 400px
        behavior: 'smooth' // Desplazamiento suave
    });
});

scrollRightButton.addEventListener('click', () => {
    container.scrollBy({
        top: 0,
        left: 400, // Desplaza a la derecha 400px
        behavior: 'smooth' // Desplazamiento suave
    });
});