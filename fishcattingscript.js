const articles = [
  {
    title: "Geralt of Rivia",
    categories: [
      "The Witcher characters",
      "Monster hunters",
      "Fictional swordsmen",
      "Video game protagonists"
    ]
  },
  {
    title: "Link",
    categories: [
      "The Legend of Zelda characters",
      "Video game protagonists",
      "Fictional swordsmen",
      "Hylian characters"
    ]
  }
];

const article = articles[Math.floor(Math.random() * articles.length)];

const categoriesDiv = document.getElementById("categories");

categoriesDiv.textContent = article.categories.join(" | ");

article.categories.forEach(cat => {
  const p = document.createElement("p");
  p.textContent = "• " + cat;
  categoriesDiv.appendChild(p);
});

const guessBtn = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");

guessBtn.addEventListener("click", () => {
  const guess = guessInput.value.trim().toLowerCase();
  const answer = article.title.toLowerCase();

  if (guess === answer) {
    feedback.textContent = "Correct! 🎉";
  } else {
    feedback.textContent = "Wrong! The answer was: " + article.title;
  }

  guessInput.value = "";
});



