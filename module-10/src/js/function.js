import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from "./utils/constants";
import {
  createTitle,
  createBody,
  createDiv,
  createButton,
  createTextButton,
  createSection,
  createSectionFooter,
  createSpan
} from "./functionHelper";
//create one li
export function createListItem(note) {
  const item = document.createElement("li");
  item.classList.add("note-list__item");
  item.setAttribute("data-id", note.id);

  item.appendChild(createDivNote(note));
  return item;
}

// create full note
export function createDivNote(note) {
  const divNote = createDiv("note");

  divNote.appendChild(createNoteContent(note));
  divNote.appendChild(createFooter(note));

  return divNote;
}

// note content
export function createNoteContent(note) {
  const noteTitle = createTitle("note__title", note);
  const noteBody = createBody("note__body", note);
  const noteContent = createDiv("note__content");

  noteContent.appendChild(noteTitle);
  noteContent.appendChild(noteBody);

  return noteContent;
}

// footer
export function createFooter(note) {
  const noteFooter = createSectionFooter("note__footer");
  noteFooter.appendChild(
    createFirstSection(note, ICON_TYPES, NOTE_ACTIONS, PRIORITY_TYPES)
  );
  noteFooter.appendChild(createSecondSection(ICON_TYPES, NOTE_ACTIONS));

  return noteFooter;
}

// footer first section
export function createFirstSection(note, ICON_TYPES, NOTE_ACTIONS) {
  // create 1 button 1 section
  const buttonFirstSectionFirst = createButton(
    "action",
    `${NOTE_ACTIONS.DECREASE_PRIORITY}`
  );
  let textButton = createTextButton(
    `${ICON_TYPES.ARROW_DOWN}`,
    "material-icons",
    "action__icon"
  );
  buttonFirstSectionFirst.appendChild(textButton);

  // create 2 button 1 section
  const buttonFirstSectionSecond = createButton(
    "action",
    `${NOTE_ACTIONS.INCREASE_PRIORITY}`
  );
  textButton = createTextButton(
    `${ICON_TYPES.ARROW_UP}`,
    "material-icons",
    "action__icon"
  );
  buttonFirstSectionSecond.appendChild(textButton);

  //create span first section
  const spanSection = createSpan("note__priority", note.priority);

  // create first section
  const noteSectionOne = createSection("note__section");
  noteSectionOne.appendChild(buttonFirstSectionFirst);
  noteSectionOne.appendChild(buttonFirstSectionSecond);
  noteSectionOne.appendChild(spanSection);

  return noteSectionOne;
}

// footer second section
export function createSecondSection(ICON_TYPES, NOTE_ACTIONS) {
  // create 1 button 2 section
  const buttonSecondSectionFirst = createButton(
    "action",
    `${NOTE_ACTIONS.EDIT}`
  );
  let textButton = createTextButton(
    `${ICON_TYPES.EDIT}`,
    "material-icons",
    "action__icon"
  );
  buttonSecondSectionFirst.appendChild(textButton);

  // create 2 button 2 section
  const buttonSecondSectionSecond = createButton(
    "action",
    `${NOTE_ACTIONS.DELETE}`
  );
  textButton = createTextButton(
    `${ICON_TYPES.DELETE}`,
    "material-icons",
    "action__icon"
  );
  buttonSecondSectionSecond.appendChild(textButton);

  const noteSectionSecond = createSection("note__section");
  noteSectionSecond.appendChild(buttonSecondSectionFirst);
  noteSectionSecond.appendChild(buttonSecondSectionSecond);

  return noteSectionSecond;
}
