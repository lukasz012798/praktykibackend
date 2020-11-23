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

fetch("http://azsapi.herokuapp.com/results")
  .then((resp) => resp.json())
  .then((data) => displayNews(data));

const displayNews = (data) => {
  console.log(data);
  data.sort((a, b) => {
    let dateA = new Date(a.date.length === 13 ? +a.date : a.date),
      dateB = new Date(b.date.length === 13 ? +b.date : b.date);
    return dateB - dateA;
  });
  data.forEach((result) => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "usuń";
    deleteButton.addEventListener("click", () => {
      fetch(`http://azsapi.herokuapp.com/results/deleteOne/${result._id}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then(() => location.reload());
    });

    const li = document.createElement("li");
    date = new Date(+result.date);
    li.innerText = `${result.firstName} ${result.result} ${
      result.secondName
    } - ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} `;
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });
  span.remove();
};
