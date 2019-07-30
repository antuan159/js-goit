import { Notyf } from "notyf";
import cardTemplates from "../templates/cards.hbs";
import { refs } from "./utils/constants";
import localData from "./localStorage";

const notyf = new Notyf();

export function renderNoteList(initialNotes) {
  refs.noteList.innerHTML = "";
  const markup = initialNotes.map(note => cardTemplates(note)).join("");
  refs.noteList.insertAdjacentHTML("beforeend", markup);
}

export function removeListItem(note, notepad) {
  notepad.deleteNote(note.dataset.id).then(() => {
    note.remove();
    notyf.success("Удалена заметка!");
    localData.save("Notes", notepad.notes);
  });
}

export function addListItem(note) {
  refs.noteList.insertAdjacentHTML("beforeend", cardTemplates(note));
  notyf.success("Успешно добавленно!");
}
