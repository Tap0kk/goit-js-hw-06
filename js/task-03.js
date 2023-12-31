const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ url, alt }) =>
        `<li class="item"><img src="${url}" alt="${alt}" width="300" height="100%"></li>`
    )
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}
createMarkup(images);

document.querySelector("body").style.backgroundColor = "#EBECF0";
document.querySelector(".gallery").style.display = "flex";
document.querySelector(".gallery").style.gap = "50px";
document.querySelector(".gallery").style.justifuContent = "center";
document.querySelector(".item").style.listStyleType = "none";
document.querySelector(".item").style.border = "1px solid rgb(172, 158, 158)";
