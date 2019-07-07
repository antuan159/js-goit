function createTitle(classTitle, note) {
  const noteTitle = document.createElement('h2');
  noteTitle.classList.add(classTitle);
  noteTitle.textContent = note.title;
  return noteTitle;
}

function createBody(classBody, note) {
  const noteBody = document.createElement('p');
  noteBody.classList.add(classBody);
  noteBody.textContent = note.body;
  return noteBody;
}

function createDiv(classDiv) {
  const divNote = document.createElement('div');
  divNote.classList.add(classDiv);
  return divNote;
}

function createButton(classButton, dataAttribute) {
  const button = document.createElement('button');
  button.classList.add(classButton);
  button.setAttribute('data-action', dataAttribute);
  return button;
}

function createTextButton(text, ...clasesText) {
  const textStyle = document.createElement('i');
  textStyle.classList.add(clasesText[0]);
  textStyle.classList.add(clasesText[1]);
  textStyle.textContent = text;
  return textStyle;
}

function createSection(classSection) {
  const section = document.createElement('section');
  section.classList.add(classSection);
  return section;
}

function createSectionFooter(classFooter) {
  const footer = document.createElement('footer');
  footer.classList.add(classFooter);
  return footer;
}

function createSpan(classSpan, text) {
  const span = document.createElement('span');
  span.classList.add(classSpan);
  span.textContent = text;
  return span;
}
