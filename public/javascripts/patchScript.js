const id = window.location.href.slice(-24);

const titleInput = document.querySelector("#title");
const contentInput = document.querySelector(".txtarea");
const coverInput = document.querySelector("#cover");
const form = document.querySelector(".form");
const addInputButton = document.querySelector(".addPhotoButton");
const submitButton = document.querySelector("#submitButton");
const news = {
  date: null,
  gallery: [],
  imagePath: null,
  text: null,
  title: null,
};

fetch(`http://azsapi.herokuapp.com/news/getOne/${id}`)
  .then((resp) => resp.json())
  .then((data) => fillData(data));

const fillData = (data) => {
  titleInput.value = data.title;
  contentInput.value = data.text;
  coverInput.value = data.imagePath;
  news.date = data.date;
  data.gallery.forEach((element) => {
    const input = document.createElement("input");
    input.value = element;
    input.className = "gallery";
    form.appendChild(input);
  });
};

const addInput = () => {
  const input = document.createElement("input");
  input.className = "gallery";
  form.appendChild(input);
};

const submitNews = () => {
  [...document.querySelectorAll(".gallery")].forEach((element) => {
    news.gallery.push(element.value);
  });
  news.imagePath = coverInput.value;
  news.text = contentInput.value;
  news.title = titleInput.value;
  fetch(`http://azsapi.herokuapp.com/news/patch/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(news),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data));
  window.location.assign("http://azsapi.herokuapp.com/news/delete");
};

addInputButton.addEventListener("click", addInput);
submitButton.addEventListener("click", submitNews);
