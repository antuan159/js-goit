import { PRIORITY_TYPES } from "../js/utils/constants";
import * as api from "./services/api.js";

export default class Notepad {
  constructor() {}

  findNoteById = id => {
    return this.notes.find(e => e.id == id);
  };

  filterNotesByQuery = async query => {
    try {
      return await this.notes.filter(note =>
        note.body.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      throw error;
    }
  };

  getNotes = async () => {
    try {
      const _notes = await api.getAllNotes();
      this.notes = _notes;
      return this.notes;
    } catch (error) {
      throw error;
    }
  };

  saveNote = async (_title, _body) => {
    const note = {
      title: _title,
      body: _body,
      priority: PRIORITY_TYPES.LOW
    };

    try {
      const data = await api.addNote(note);
      this.notes.push(data);
      return data;
    } catch (error) {
      throw error;
    }
  };

  updateNoteContent = async (id, updatedContent) => {
    try {
      const updateNote = await api.updateNoteItem(id, updatedContent);

      this.notes = this.notes.map(item => {
        item.id === updateNote.id ? updateNote : item;
      });
      return updateNote;
    } catch (error) {
      throw error;
    }
  };

  deleteNote = async id => {
    try {
      const deleted = await api.deleteNoteItem(id);
      this.notes = this.notes.filter(note => note.id !== id);
      return deleted;
    } catch (error) {
      throw error;
    }
  };
}
