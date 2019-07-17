const shortid = require("shortid");
import { PRIORITY_TYPES } from "./utils/constants";

export function createTitle(classTitle, note) {
  const noteTitle = document.createElement("h2");
  noteTitle.classList.add(classTitle);
  noteTitle.textContent = note.title;
  return noteTitle;
}

export function createBody(classBody, note) {
  const noteBody = document.createElement("p");
  noteBody.classList.add(classBody);
  noteBody.textContent = note.body;
  return noteBody;
}

export function createDiv(classDiv) {
  const divNote = document.createElement("div");
  divNote.classList.add(classDiv);
  return divNote;
}

export function createButton(classButton, dataAttribute) {
  const button = document.createElement("button");
  button.classList.add(classButton);
  button.setAttribute("data-action", dataAttribute);
  return button;
}

export function createTextButton(text, ...clasesText) {
  const textStyle = document.createElement("i");
  textStyle.classList.add(clasesText[0]);
  textStyle.classList.add(clasesText[1]);
  textStyle.textContent = text;
  return textStyle;
}

export function createSection(classSection) {
  const section = document.createElement("section");
  section.classList.add(classSection);
  return section;
}

export function createSectionFooter(classFooter) {
  const footer = document.createElement("footer");
  footer.classList.add(classFooter);
  return footer;
}

export function createSpan(classSpan, text) {
  const span = document.createElement("span");
  span.classList.add(classSpan);
  span.textContent = createStringPriority(text);
  return span;
}

function createStringPriority(ID) {
  let textContent;
  switch (ID) {
    case 0:
      {
        textContent = "Priority: Low";
      }
      break;
    case 1:
      {
        textContent = "Priority: Normal";
      }
      break;
    case 2:
      {
        textContent = "Priority: High";
      }
      break;
  }
  return textContent;
}

export function createNote(_title, _body) {
  const note = {
    id: shortid.generate(),
    title: _title,
    body: _body,
    priority: PRIORITY_TYPES.LOW
  };
  return note;
}
