//create one li
function createListItem(note) {
  const item = document.createElement('li');
  item.classList.add('note-list__item');
  item.setAttribute('data-id', note.id);

  item.appendChild(createDivNote(note));
  return item;
}

// create full note
function createDivNote(note) {
  const divNote = createDiv('note');

  divNote.appendChild(createNoteContent(note));
  divNote.appendChild(createFooter(note));

  return divNote;
}

// note content
function createNoteContent(note) {
  const noteTitle = createTitle('note__title', note);
  const noteBody = createBody('note__body', note);
  const noteContent = createDiv('note__content');

  noteContent.appendChild(noteTitle);
  noteContent.appendChild(noteBody);

  return noteContent;
}

// footer
function createFooter(note) {
  const noteFooter = createSectionFooter('note__footer');
  noteFooter.appendChild(createFirstSection(note));
  noteFooter.appendChild(createSecondSection());

  return noteFooter;
}

// footer first section
function createFirstSection(note) {
  // create 1 button 1 section
  const buttonFirstSectionFirst = createButton('action', 'decrease-priority');
  let textButton = createTextButton(
    'expand_more',
    'material-icons',
    'action__icon'
  );
  buttonFirstSectionFirst.appendChild(textButton);

  // create 2 button 1 section
  const buttonFirstSectionSecond = createButton('action', 'increase-priority');
  textButton = createTextButton(
    'expand_less',
    'material-icons',
    'action__icon'
  );
  buttonFirstSectionSecond.appendChild(textButton);

  //create span first section
  const spanSection = createSpan('note__priority', note.priority);

  // create first section
  const noteSectionOne = createSection('note__section');
  noteSectionOne.appendChild(buttonFirstSectionFirst);
  noteSectionOne.appendChild(buttonFirstSectionSecond);
  noteSectionOne.appendChild(spanSection);

  return noteSectionOne;
}

// footer second section
function createSecondSection() {
  // create 1 button 2 section
  const buttonSecondSectionFirst = createButton('action', 'edit-note');
  let textButton = createTextButton('edit', 'material-icons', 'action__icon');
  buttonSecondSectionFirst.appendChild(textButton);

  // create 2 button 2 section
  const buttonSecondSectionSecond = createButton('action', 'delete-note');
  textButton = createTextButton('delete', 'material-icons', 'action__icon');
  buttonSecondSectionSecond.appendChild(textButton);

  const noteSectionSecond = createSection('note__section');
  noteSectionSecond.appendChild(buttonSecondSectionFirst);
  noteSectionSecond.appendChild(buttonSecondSectionSecond);

  return noteSectionSecond;
}
