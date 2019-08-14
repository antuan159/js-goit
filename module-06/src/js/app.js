export default class Notepad {
  constructor(notes = []) {
    this.notes = notes;
  }
  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };

  getNotes = function() {
    return this.notes;
  };
  findNoteById = function(id) {
    return this.notes.find(e => e.id === id);
  };
  saveNote = function(note) {
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
    const tmp = [];
    for (const key in this.notes) {
      const strTitle = this.notes[key].title.toLowerCase().indexOf(query.toLowerCase());
      const strBody = this.notes[key].body.toLowerCase().indexOf(query.toLowerCase());
      if (strTitle !== -1 || strBody !== -1) tmp.push(this.notes[key]);
    }
    return tmp;
  };
  filterNotesByPriority = function(priority) {
    const tmp = [];
    for (const key in this.notes) {
      if (this.notes[key].priority == priority) {
        tmp.push(this.notes[key]);
      }
    }
    return tmp;
  };
  deleteNote = function(id) {
    for (const key in this.notes) {
      if (this.notes[key].id === id) {
        this.notes.splice(key, key);
      }
    }
  };
}

// /*
//  * Повторил HTML и CSS, удаляю запись c id-2
//  */
// notepad.deleteNote('id-2');
// console.log('Заметки после удаления с id -2: ', notepad.notes);
