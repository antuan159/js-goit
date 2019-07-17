import "./sass/main.scss";
import Notepad from "./js/notepad-model";
import initialNotes from "./assets/notes.json";
import { renderNoteList, removeListItem } from "./js/view";
import { createListItem } from "./js/function";
import { createNote } from "./js/functionHelper";

const notepad = new Notepad(initialNotes);
console.log(notepad.getNotes());

// ======= variables =========
const noteList = document.querySelector(".note-list");
const form = document.querySelector(".note-editor");
const list = document.querySelector(".note-list");
const search = document.querySelector(".search-form");

// ======= handlers ==========
form.addEventListener("submit", handleSabmitForm);
list.addEventListener("click", handleDeleteNote);
search.addEventListener("input", handleFilterNotes);

renderNoteList(noteList, initialNotes);

function handleSabmitForm(event) {
  event.preventDefault();
  const title = document.querySelector(".note-editor input");
  const body = document.querySelector(".note-editor textarea");
  if (title.value === "" || body.value === "") {
    alert("Необходимо заполнить все поля!");
    return;
  }
  const note = createNote(title.value, body.value);
  notepad.saveNote(note);
  noteList.append(createListItem(note));
  form.reset();
}

function handleDeleteNote({ target }) {
  const text = target.textContent;

  if (target.nodeName !== "I" || text !== "delete") return;

  const note = target.closest("li");

  removeListItem(note, notepad);
}

function handleFilterNotes({ target }) {
  const newNotepad = notepad.filterNotesByQuery(target.value);
  renderNoteList(noteList, newNotepad);
}
