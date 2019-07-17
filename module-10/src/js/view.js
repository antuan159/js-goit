import { createListItem } from "./function";
export function renderNoteList(listRef, notes) {
  const arr = notes.map(element => createListItem(element));
  listRef.innerHTML = "";
  listRef.append(...arr);
}

export function removeListItem(note, notepad) {
  notepad.deleteNote(note.dataset.id);
  note.remove();
}
