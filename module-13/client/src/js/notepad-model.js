import { PRIORITY_TYPES } from "../js/utils/constants";
import * as api from "./services/api.js";

export default class Notepad {
  constructor() {}

  findNoteById = function(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.notes.find(e => e.id === id));
      }, 0);
    });
  };

  // updateNotePriority = function(id, priority) {
  //   const tmp = this.findNoteById(id);
  //   if (tmp) tmp.priority = priority;
  // };

  filterNotesByQuery = function(query) {
    return Promise.resolve(
      this.notes.filter(note =>
        note.body.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // filterNotesByPriority = function(priority) {
  //   return (priorityArray = this.notes.filter(
  //     note => note.priority === priority
  //   ));
  // };

  getNotes = function() {
    return api.getAllNotes().then(notesItems => {
      this.notes = notesItems;
      return this.notes;
    });
  };

  saveNote = function(_title, _body) {
    const note = {
      title: _title,
      body: _body,
      priority: PRIORITY_TYPES.LOW
    };

    return api.addNote(note).then(savedNote => {
      this.notes.push(savedNote);
      return savedNote;
    });
  };

  updateNoteContent = function(id, updatedContent) {
    return api.updateNoteItem(id, updatedContent).then(updateNote => {
      this.notes = this.notes.map(item => {
        item.id === updateNote.id ? updateNote : item;
      });
      return updateNote;
    });
  };

  deleteNote = function(id) {
    return api.deleteNoteItem(id).then(() => {
      this.notes = this.notes.filter(note => note.id !== id);
      return id;
    });
  };
}
