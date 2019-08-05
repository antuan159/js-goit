export const PRIORITY_TYPES = {
  LOW: "Low",
  NORMAL: "Normal",
  HIGH: "High"
};

export const ICON_TYPES = {
  EDIT: "edit",
  DELETE: "delete",
  ARROW_DOWN: "expand_more",
  ARROW_UP: "expand_less"
};

export const NOTE_ACTIONS = {
  DELETE: "delete-note",
  EDIT: "edit-note",
  INCREASE_PRIORITY: "increase-priority",
  DECREASE_PRIORITY: "decrease-priority"
};

export const refs = {
  noteList: document.querySelector(".note-list"),
  form: document.querySelector(".note-editor"),
  list: document.querySelector(".note-list"),
  search: document.querySelector(".search-form"),
  btnMicroModal: document.querySelector("button[data-action='open-editor']")
};
