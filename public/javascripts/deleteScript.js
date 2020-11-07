const ul = document.querySelector("ul");

fetch("http://azsapi.herokuapp.com/news")
  .then((resp) => resp.json())
  .then((data) => displayNews(data));

const displayNews = (data) => {
  console.log(data);
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

    const li = document.createElement("li");
    li.innerText = news.title + " ";
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });
};
