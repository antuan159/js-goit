import "./sass/main.scss";
import microModal from "micromodal";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { refs } from "../src/js/utils/constants";
import Notepad from "./js/notepad-model";
import initialNotes from "./assets/notes.json";
import { renderNoteList, removeListItem, addListItem } from "./js/view";
import localData from "./js/localStorage";
// ======= variables =========

if (!localData.load("Notes")) localData.save("Notes", initialNotes);
const notepad = new Notepad(localData.load("Notes"));
const notyf = new Notyf();
microModal.init();

renderNoteList(localData.load("Notes"));

// ======= handlers ==========
refs.form.addEventListener("submit", handleSabmitForm);
refs.list.addEventListener("click", handleDeleteNote);
refs.search.addEventListener("input", handleFilterNotes);
refs.btnMicroModal.addEventListener("click", handleOpenMicromodal);

function handleSabmitForm(event) {
  event.preventDefault();
  const title = document.querySelector(".note-editor input");
  const body = document.querySelector(".note-editor textarea");
  if (title.value === "" || body.value === "") {
    notyf.error("Необходимо заполнить все поля!");
    return;
  }

  notepad.saveNote(title.value, body.value).then(note => {
    addListItem(note);
    localData.save("Notes", notepad.notes);
  });

  microModal.close("note-editor-modal");
  refs.form.reset();
}

function handleDeleteNote({ target }) {
  const text = target.textContent;
  if (target.nodeName !== "I" || text !== "delete") return;
  const note = target.closest("li");
  removeListItem(note, notepad);
}

function handleFilterNotes({ target }) {
  notepad.filterNotesByQuery(target.value).then(value => {
    renderNoteList(value);
  });
}

function handleOpenMicromodal() {
  microModal.show("note-editor-modal");
}
