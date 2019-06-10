const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const notepad = {
  notes: [],
  getNotes() {
    for (const key in this.notes) {
      console.log(notepad.notes[key]);
    }
    return this.notes;
  },
  findNoteById(id) {
    for (const key in this.notes) {
      if (this.notes[key].id === id) {
        return this.notes[key];
      }
    }
    return undefined;
  },
  saveNote(note) {
    notepad.notes.push(note);
    return note;
  },
  deleteNote(id) {
    for (const key in this.notes) {
      if (this.notes[key].id === id) {
        this.notes.splice(key, key);
      }
    }
  },
  updateNoteContent(id, updatedContent) {
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */
    note = notepad.findNoteById(id);

    for (const j in updatedContent) {
      for (const i in note) {
        if (i === j) {
          note[i] = updatedContent[j];
        }
      }
    }
    return note;
  },
  updateNotePriority(id, priority) {
    const tmp = notepad.findNoteById(id);
    if (tmp) tmp.priority = priority;
  },
  filterNotesByQuery(query) {
    const tmp = [];
    for (const key in this.notes) {
      const strTitle = notepad.notes[key].title.toLowerCase().indexOf(query.toLowerCase());
      const strBody = notepad.notes[key].body.toLowerCase().indexOf(query.toLowerCase());
      if (strTitle !== -1 || strBody !== -1) tmp.push(notepad.notes[key]);
    }
    return tmp;
  },
  filterNotesByPriority(priority) {
    const tmp = [];
    for (const key in this.notes) {
      if (notepad.notes[key].priority == priority) {
        tmp.push(notepad.notes[key]);
      }
    }
    return tmp;
  },
};

/*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: 'id-1',
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: Priority.HIGH,
});

notepad.saveNote({
  id: 'id-2',
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ', notepad.getNotes());

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ', notepad.getNotes());

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: '111',
});

console.log('Заметки после обновления контента заметки с id-3: ', notepad.getNotes());

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());
