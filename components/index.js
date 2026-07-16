const answerButton = document.querySelector('[data-js="answer-button1"]');


const answers = document.querySelector('[data-js="hidden"]');


answerButton.addEventListener("click", () => {
  answers.classList.toggle("hidden");
});

console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');


const bookmarkSaved = document.querySelector('[data-js="bookmark-img"]');


bookmarkButton.addEventListener("click", () => {
  bookmarkSaved.classList.toggle("bookmark-icon");
});

console.clear();

