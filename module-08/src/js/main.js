'use strict';

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];
document.addEventListener('DOMContentLoaded', callback);

function callback() {
  const notepad = new Notepad(initialNotes);
  console.log(notepad.getNotes());

  // ======= variables =========
  const noteList = document.querySelector('.note-list');
  const form = document.querySelector('.note-editor');
  const list = document.querySelector('.note-list');
  const search = document.querySelector('.search-form');

  // ======= hendlers ==========
  form.addEventListener('submit', hendleSabmitForm);
  list.addEventListener('click', hendleDeleteNote);
  search.addEventListener('input', hendleFilterNotes);

  //======== functions =========

  renderNoteList(noteList, initialNotes);

  function renderNoteList(listRef, notes) {
    const arr = notes.map(element => createListItem(element));
    listRef.innerHTML = '';
    listRef.append(...arr);
  }

  function hendleSabmitForm(event) {
    event.preventDefault();
    const title = document.querySelector('.note-editor input');
    const body = document.querySelector('.note-editor textarea');
    if (title.value === '' && body.value === '') {
      alert('Необходимо заполнить все поля!');
      return;
    }
    const note = createNote(title.value, body.value);
    notepad.saveNote(note);
    noteList.append(createListItem(note));
    title.value = '';
    body.value = '';
  }

  function hendleDeleteNote({ target }) {
    const text = target.textContent;

    if (target.nodeName !== 'I' || text !== 'delete') return;

    const note = target.closest('li');

    removeListItem(note);
  }

  function hendleFilterNotes({ target }) {
    const newNotepad = notepad.filterNotesByQuery(target.value);
    renderNoteList(noteList, newNotepad);
  }

  function removeListItem(note) {
    notepad.deleteNote(note.dataset.id);
    note.remove();
  }
}
