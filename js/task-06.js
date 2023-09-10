const newInput = document.querySelector("#validation-input");
newInput.addEventListener("blur", onBlur);
function onBlur(event) {
  const inputColor = event.currentTarget;
  const inputLength = Number(inputColor.dataset.length);
  if (inputColor.value.length === inputLength) {
    inputColor.classList.remove("invalid");
    inputColor.classList.add("valid");
  } else {
    inputColor.classList.remove("valid");
    inputColor.classList.add("invalid");
  }
}
