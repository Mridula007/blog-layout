const toggleButton = document.getElementById('toggle-dark');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});