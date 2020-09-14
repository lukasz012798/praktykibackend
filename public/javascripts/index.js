const addPhotoButton = document.querySelector("button");
const addNewsButton = document.querySelector("input[type='submit']");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".errorMessage");

addPhotoButton.addEventListener("click", (e) => {
  e.preventDefault();
  const photoInput = document.createElement("input");
  photoInput.type = "text";
  photoInput.name = "gallery";
  form.appendChild(photoInput);
});

addNewsButton.addEventListener("click", (e) => {
  // e.preventDefault();
  // errorMessage.classList.remove("display");
});
