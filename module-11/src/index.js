import "./sass/main.scss";
import microModal from "micromodal";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { refs } from "../src/js/utils/constants";
import Notepad from "./js/notepad-model";
import initialNotes from "./assets/notes.json";
import { renderNoteList, removeListItem, addListItem } from "./js/view";

// ======= variables =========

const notepad = new Notepad(initialNotes);
const notyf = new Notyf();
microModal.init();

renderNoteList(initialNotes);

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

  const note = notepad.saveNote(title.value, body.value);

  addListItem(note);

  microModal.close("note-editor-modal");
  notyf.success("Успешно добавленно!");
  refs.form.reset();
}

function handleDeleteNote({ target }) {
  const text = target.textContent;

  if (target.nodeName !== "I" || text !== "delete") return;

  const note = target.closest("li");

  removeListItem(note, notepad);
  notyf.success("Удалена заметка!");
}

function handleFilterNotes({ target }) {
  const newNotepad = notepad.filterNotesByQuery(target.value);
  renderNoteList(newNotepad);
}

function handleOpenMicromodal() {
  microModal.show("note-editor-modal");
}
