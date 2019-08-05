import "./sass/main.scss";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import * as api from "./js/api";
import cardTemplates from "./templates/cards.hbs";

const notyf = new Notyf();

const refs = {
  cardsList: document.querySelector(".cards-list"),
  form: document.querySelector("#form")
};
//------- render list---------

getAndRender();

async function getAndRender() {
  try {
    const data = await api.get();
    const arr = sortByPriority(items);
    renderList(arr);
    notyf.success("good!");
    return data;
  } catch (error) {
    notyf.error(`bad! ${error}`);
  }
}

function sortByPriority(arr) {
  const tmp = arr.sort((a, b) => {
    if (a.nodetype === b.nodetype) {
      return a.nodename < b.nodename ? 1 : -1;
    }
    return a.nodetype > b.nodetype ? 1 : -1;
  });
  return tmp;
}

function renderList(cardsItems) {
  refs.cardsList.innerHTML = "";
  const markup = cardsItems.map(item => cardTemplates(item)).join("");
  refs.cardsList.insertAdjacentHTML("beforeend", markup);
}
//------- end render list---------

//--------------- uncomment and clear db.json----------------------
// refs.form.addEventListener("submit", handleSubmitForm);

// async function handleSubmitForm(event) {
//   event.preventDefault();
//   let arr = [];
//   form.checkBox.forEach(element => {
//     if (element.checked) arr.push(element.value);
//   });

//   const input = document.querySelector('input[type="file"]').files[0];
//   const downloadedFile = getBase64(input);
//   const dataJson = {
//     name: form.name.value,
//     gender: form.radio.value,
//     country: form.select.value,
//     languages: arr,
//     file: downloadedFile
//   };
//   try {
//     const data = await api.add(dataJson);
//     notyf.success("good!");
//     return data;
//   } catch (error) {
//     notyf.error(`bad! ${error}`);
//   }
// }

// function getBase64(file) {
//   let reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function() {
//     notyf.success(reader.result);
//   };
//   reader.onerror = function(error) {
//     notyf.error("Error: ", error);
//   };
// }
