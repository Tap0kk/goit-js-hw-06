const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const El = document.createElement("li");
  El.textContent = ingredient;
  El.classList.add("item");
  list.append(El);
});
