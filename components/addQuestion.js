const form = document.querySelector('[data-js="form"]');
console.log(form);

const questiontData = document.querySelector('[data-js="question"]');
const answerData = document.querySelector('[data-js="answer"]');
const tagData = document.querySelector('[data-js="tags"]');
console.log(questiontData, answerData, tagData);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCard = document.createElement("section");
  newCard.classList.add("single-card");

  form.after(newCard);

  newCard.innerHTML = `  <p class="question-no"></p>
            <p class="question">
              ${questiontData.value}
            </p>
          </section>
          <a href="bookmark.html" class="book-button"
            ><svg             
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"
              />
            </svg>
          </a>
          <ul class="answers">
            <li class="all-choices">
              <input name="choice5" class="radio-button" type="radio" />
              <span class="answer-choices">${answerData.value}</span>
            </li>
            <li class="all-choices">
              <input name="choice5" class="radio-button" type="radio" />
              <span class="answer-choices">${answerData.value}</span>
            </li>
            <li class="all-choices">
              <input name="choice5" class="radio-button" type="radio" />
              <span class="answer-choices">${answerData.value}</span>
            </li>
          </ul>

          <button
            aria-label="antwort zeigen"
            class="answer-button"
            id="showAnswer5"
          >
            "Antwort zeigen ▼"
          </button>
          <p id="answer-5" class="hidden">
           ${answerData.value}
          </p>`;
});
const lettersLeftQuestion = document.querySelector(
  '[data-js="letters-left-question"]',
);
const lettersLeftAnswer = document.querySelector(
  '[data-js="letters-left-answer"]',
);

function updateLetterCount (textarea, text) {
    const result = 150 -textarea.value.length;
    text.textContent = `Noch ${result} zeichen`;
    
}

questiontData.addEventListener("input", () => {
  updateLetterCount(questiontData, lettersLeftQuestion );
});


answerData.addEventListener("input", () => {
  updateLetterCount(answerData, lettersLeftAnswer);
});
