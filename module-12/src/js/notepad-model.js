const shortid = require("shortid");
import { PRIORITY_TYPES } from "../js/utils/constants";

export default class Notepad {
  static generateUniqueId() {
    return shortid.generate();
  }

  constructor(notes = []) {
    this.notes = notes;
  }

  getNotes = function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.notes);
      }, 200);
    });
  };

  findNoteById = function(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.notes.find(e => e.id === id));
      }, 200);
    });
  };

  saveNote = function(_title, _body) {
    const note = {
      id: Notepad.generateUniqueId(),
      title: _title,
      body: _body,
      priority: PRIORITY_TYPES.LOW
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.notes.push(note);
        resolve(note);
      }, 200);
    });
  };

  updateNoteContent = function(id, updatedContent) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign(this.findNoteById(id), updatedContent));
      }, 200);
    });
  };

  updateNotePriority = function(id, priority) {
    const tmp = this.findNoteById(id);
    if (tmp) tmp.priority = priority;
  };

  filterNotesByQuery = function(query) {
    return Promise.resolve(
      this.notes.filter(note =>
        note.body.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  filterNotesByPriority = function(priority) {
    return (priorityArray = this.notes.filter(
      note => note.priority === priority
    ));
  };

  deleteNote = function(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve((this.notes = this.notes.filter(note => note.id !== id)));
      }, 200);
    });
  };
}
