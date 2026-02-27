const button = document.getElementById('greet-btn');

button.addEventListener('click', () => {
  alert("Hello! Thanks for visiting my digital body.");
  button.style.backgroundColor = "green";
  button.textContent = "Connected!";
});
