const switchtMode = document.querySelector('[data-js="toggle-light"]');

console.log(switchtMode);

switchtMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    switchtMode.src = "./assets/toggle-right.png";
  } else {
    switchtMode.src = "./assets/toggle-left.png";
  }
});


