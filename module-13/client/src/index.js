import "./sass/main.scss";
import microModal from "micromodal";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { refs } from "../src/js/utils/constants";
import Notepad from "./js/notepad-model";
import initialNotes from "./assets/notes.json";
import { renderNoteList, removeListItem, addListItem } from "./js/view";
// ======= variables =========

const notepad = new Notepad();

notepad.getNotes().then(item => {
  notepad.notes = item;
  renderNoteList(notepad.notes);
});
const notyf = new Notyf();
microModal.init();

// ======= handlers ==========
refs.form.addEventListener("submit", handleSabmitForm);
refs.list.addEventListener("click", handleDeleteNote);
refs.search.addEventListener("input", handleFilterNotes);
refs.search.addEventListener("submit", handleFilterEvent);
refs.btnMicroModal.addEventListener("click", handleOpenMicromodal);
//refs.list.addEventListener("click", handleUpdateNote);

function handleSabmitForm(event) {
  event.preventDefault();
  const title = document.querySelector(".note-editor input");
  const body = document.querySelector(".note-editor textarea");
  if (title.value === "" || body.value === "") {
    notyf.error("Необходимо заполнить все поля!");
    return;
  }
  notepad
    .saveNote(title.value, body.value)
    .then(note => {
      addListItem(note);
      notyf.success("Заметка успешно добавленна!");
    })
    .catch(error => {
      notyf.error("Заметка не добавлена!!!");
    });

  microModal.close("note-editor-modal");
  refs.form.reset();
}

function handleDeleteNote({ target }) {
  event.preventDefault();
  const text = target.textContent;
  if (target.nodeName !== "I" || text !== "delete") return;
  const note = target.closest("li");

  notepad
    .deleteNote(note.dataset.id)
    .then(() => {
      notepad.getNotes().then(item => {
        renderNoteList(item);
        notyf.success("Заметка успешно удалена!");
      });
    })
    .catch(error => {
      notyf.error("Что то пошло не так!! Заметка не добавлена!!!");
    });
}

// function handleUpdateNote({ target }) {
//   const text = target.textContent;
//   if (target.nodeName !== "I" || text !== "edit") return;
//   const note = target.closest("li");

//   microModal.show("note-editor-modal");
//   event.preventDefault();
//   const title = document.querySelector(".note-editor__input");
//   const body = document.querySelector(".note-editor textarea");

//   notepad.findNoteById(note.dataset.id).then(note => {
//     title.value = note.title;
//     body.value = note.body;
//   });
// }

function handleFilterEvent(event) {
  event.preventDefault();
}

function handleFilterNotes({ target }) {
  notepad.filterNotesByQuery(target.value).then(value => {
    renderNoteList(value);
  });
}

function handleOpenMicromodal() {
  microModal.show("note-editor-modal");
}
