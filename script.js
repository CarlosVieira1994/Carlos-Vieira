// Adiciona um evento de clique em botão para alternar entre darkmode e lightmode
const darkModeToggle = document.getElementById('dark-mode-toggle');
const stylesheet = document.getElementById('stylesheet');
const logomarca = document.getElementById('logomarca');

darkModeToggle.addEventListener('change', function() {
  if (darkModeToggle.checked) {
    stylesheet.href = 'darkmode.css';
    logomarca.src = 'imagens/logo.png';
    imgbt.src = 'imagens/lua.png';
    avatar.src = 'imagens/dark-avatar.png';

  } else {
    stylesheet.href = 'lightmode.css';
    logomarca.src = 'imagens/logo-preta.png';
    imgbt.src = 'imagens/sol.png';
    avatar.src = 'imagens/light-avatar.png';
  }
});
// Alterna o menu entre aparente ou não aparente.
function clickMenu() {
    if(itens.style.display == 'block') {
      itens.style.display = 'none'
    } else {
      itens.style.display = 'block'
    }
} 

// Adiciona eventos de clique aos links do menu
document.querySelectorAll('.menu-button a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var target = this.getAttribute('href'); // Obtém o destino do link
    var targetElement = document.querySelector(target); // Obtém o elemento do destino
    var offset = targetElement.offsetTop; // Obtém a distância do elemento ao topo da página
    window.scrollTo({
      top: offset -70,
      behavior: 'smooth' // Faz a rolagem suave
    });
    document.querySelector('.menu-button').style.display = 'none'; // Fecha o menu após clicar em um link
  });
});


