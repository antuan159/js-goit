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
    return this.notes;
  };

  findNoteById = function(id) {
    return this.notes.find(e => e.id === id);
  };

  saveNote = function(_title, _body) {
    const note = {
      id: Notepad.generateUniqueId(),
      title: _title,
      body: _body,
      priority: PRIORITY_TYPES.LOW
    };
    this.notes.push(note);
    return note;
  };

  updateNoteContent = function(id, updatedContent) {
    Object.assign(this.findNoteById(id), updatedContent);
  };

  updateNotePriority = function(id, priority) {
    const tmp = this.findNoteById(id);
    if (tmp) tmp.priority = priority;
  };

  filterNotesByQuery = function(query) {
    return this.notes.filter(note =>
      note.body.toLowerCase().includes(query.toLowerCase())
    );
  };

  filterNotesByPriority = function(priority) {
    return (priorityArray = this.notes.filter(
      note => note.priority === priority
    ));
  };

  deleteNote = function(id) {
    this.notes = this.notes.filter(note => note.id !== id);
  };
}
