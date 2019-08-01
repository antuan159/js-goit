const URL = "http://localhost:3000/notes";

export const getAllNotes = () => {
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Error while fetching" + response.statusText);
  });
};

export const addNote = note => {
  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  };
  return fetch(URL, opts).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Error while fetching" + response.statusText);
  });
};

export const deleteNoteItem = id => {
  const opts = {
    method: "DELETE"
  };
  return fetch(`${URL}/${id}`, opts).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Error while fetching" + response.statusText);
  });
};

export const updateNoteItem = (id, updateNote) => {
  const opts = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateNote)
  };
  return fetch(`${URL}/${id}`, opts).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Error while fetching" + response.statusText);
  });
};
