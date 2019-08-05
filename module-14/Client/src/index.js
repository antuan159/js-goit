import "./sass/main.scss";
import "@babel/polyfill";
import microModal from "micromodal";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { refs } from "../src/js/utils/constants";
import Notepad from "./js/notepad-model";
import { renderNoteList, addListItem } from "./js/view";
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

async function handleSabmitForm(event) {
  event.preventDefault();
  const title = document.querySelector(".note-editor input");
  const body = document.querySelector(".note-editor textarea");
  if (title.value === "" || body.value === "") {
    notyf.error("Необходимо заполнить все поля!");
    return;
  }
  try {
    const save = await notepad.saveNote(title.value, body.value);
    addListItem(save);
    notyf.success("Заметка успешно добавленна!");
    microModal.close("note-editor-modal");
    refs.form.reset();
    return save;
  } catch (error) {
    notyf.error("Заметка не добавлена!!!");
  }
}

async function handleDeleteNote({ target }) {
  event.preventDefault();
  const text = target.textContent;
  if (target.nodeName !== "I" || text !== "delete") return;
  const note = target.closest("li");

  try {
    const delNote = await notepad.deleteNote(note.dataset.id);
    const render = await notepad.getNotes();
    renderNoteList(render);
    notyf.success("Заметка успешно удалена!");
    return delNote;
  } catch (error) {
    notyf.error("Что то пошло не так!! Заметка не удалена!!!");
  }
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

async function handleFilterNotes({ target }) {
  try {
    const filter = await notepad.filterNotesByQuery(target.value);
    renderNoteList(filter);
    return filter;
  } catch (error) {
    notyf.error("Что то пошло не так!!");
  }
}

function handleOpenMicromodal() {
  microModal.show("note-editor-modal");
}
