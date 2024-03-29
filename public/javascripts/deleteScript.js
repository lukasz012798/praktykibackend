const ul = document.querySelector("ul");
const span = document.querySelector("span");
const months = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

fetch("http://azsapi.herokuapp.com/news")
  .then((resp) => resp.json())
  .then((data) => displayNews(data));

const displayNews = (data) => {
  data.sort((a, b) => {
    let dateA = new Date(a.date.length === 13 ? +a.date : a.date),
      dateB = new Date(b.date.length === 13 ? +b.date : b.date);
    return dateB - dateA;
  });
  data.forEach((news) => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "usuń";
    deleteButton.addEventListener("click", () => {
      fetch(`http://azsapi.herokuapp.com/news/deleteOne/${news._id}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then(() => location.reload());
    });

    const patchButton = document.createElement("a");
    patchButton.innerText = "edytuj";
    patchButton.href = `http://azsapi.herokuapp.com/news/patch/${news._id}`;

    const li = document.createElement("li");
    date = new Date(+news.date);
    li.innerText = `${news.title} - ${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()} `;
    li.appendChild(deleteButton);
    li.appendChild(patchButton);

    ul.appendChild(li);
    span.remove();
  });
};
