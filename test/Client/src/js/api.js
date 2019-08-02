const URL = "http://localhost:3000/cards";

export const get = () => {
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Error while fetching" + response.statusText);
  });
};

export const add = card => {
  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(card)
  };
  return fetch(URL, opts).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Error while fetching" + response.statusText);
  });
};
