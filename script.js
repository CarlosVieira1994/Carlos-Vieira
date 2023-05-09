const darkModeToggle = document.getElementById('dark-mode-toggle');
const stylesheet = document.getElementById('stylesheet');

darkModeToggle.addEventListener('change', function() {
  if (darkModeToggle.checked) {
    stylesheet.href = 'darkmode.css';
  } else {
    stylesheet.href = 'lightmode.css';
  }
});

console.log('RODOU!');