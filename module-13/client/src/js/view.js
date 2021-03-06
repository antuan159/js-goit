import { Notyf } from "notyf";
import cardTemplates from "../templates/cards.hbs";
import { refs } from "./utils/constants";

const notyf = new Notyf();

export function renderNoteList(initialNotes) {
  refs.noteList.innerHTML = "";
  const markup = initialNotes.map(note => cardTemplates(note)).join("");
  refs.noteList.insertAdjacentHTML("beforeend", markup);
}

export function removeListItem(notepad) {
  renderNoteList(notepad);
}

export function addListItem(note) {
  refs.noteList.insertAdjacentHTML("beforeend", cardTemplates(note));
}
