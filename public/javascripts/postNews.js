const addPhotoButton = document.querySelector("button");
const addNewsButton = document.querySelector("input[type='submit']");
const form = document.querySelector("form");
const titleValue = form.children[0].value;
const textValue = form.children[2].value;
const coverPhoto = form.children[6].value;
const errorMessage = document.querySelector(".errorMessage");
const error = { error: false, desc: [] };

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
  // error.error = false;
  // error.desc = [];
  // if (form.children.length > 8) {
  //   for (let i = 8; i < form.children.length; i++) {
  //     if (form.children[i].value === "") {
  //       error.error = true;
  //       error.desc.push(
  //         `Puste pole nr ${i - 7} w sekcji dodawania zdjęć do galerii`
  //       );
  //     }
  //   }
  // }
  // console.log(error);
});
