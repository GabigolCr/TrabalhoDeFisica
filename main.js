// Scroll suavemente ao clicar no botão "Saiba Mais"
document.getElementById('learnMore').addEventListener('click', () => {
    document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
});

// Efeito de aparecer ao rolar a página
const sections = document.querySelector
