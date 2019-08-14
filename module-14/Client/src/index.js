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
const notyf = new Notyf();
microModal.init();

main();

// ======= handlers ==========
refs.form.addEventListener("submit", handleSabmitForm);
refs.list.addEventListener("click", handleDeleteNote);
refs.list.addEventListener("click", handleUpdateNote);
refs.search.addEventListener("input", handleFilterNotes);
refs.search.addEventListener("submit", handleFilterEvent);
refs.btnMicroModal.addEventListener("click", handleOpenMicromodal);

async function main() {
  try {
    const data = await notepad.getNotes();
    notepad.notes = data;
    renderNoteList(notepad.notes);
  } catch (error) {
    notyf.error(`Что то пошло не так!! + ${error}`);
  }
}

async function handleSabmitForm(event, obj) {
  event.preventDefault();
  const titleNote = document.querySelector(".note-editor input");
  const bodyNote = document.querySelector(".note-editor textarea");
  if (!isFullFilds(titleNote.value, bodyNote.value)) return;

  if (obj) {
    try {
      
      const newNotes = await notepad.updateNoteContent(obj.id, obj);

      notyf.success("Обновленно!");
      // microModal.close("note-editor-modal");
      // refs.form.reset();
    } catch (error) {
      console.log(`не обновилась ${error}`);
    }
    return;
  } else {
    try {
      const save = await notepad.saveNote(titleNote.value, bodyNote.value);
      addListItem(save);
      notyf.success("Заметка успешно добавленна!");
      microModal.close("note-editor-modal");
      refs.form.reset();
      return save;
    } catch (error) {
      notyf.error("Заметка не добавлена!!!");
    }
  }
}

function isFullFilds(title, body) {
  if (title === "" || body === "") {
    notyf.error("Необходимо заполнить все поля!");
    return false;
  }
  return true;
}

function handleUpdateNote(event) {
  const text = event.target.textContent;
  if (event.target.nodeName !== "I" || text !== "edit") return;
  const note = event.target.closest("li");
  const title = document.querySelector(".note-editor input");
  const body = document.querySelector(".note-editor textarea");
  const find = notepad.findNoteById(note.dataset.id);
  title.value = find.title;
  body.value = find.body;
  microModal.show("note-editor-modal");
  handleSabmitForm(event, find);
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
