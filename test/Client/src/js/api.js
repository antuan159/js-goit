const URL = "http://localhost:3000/cards";

export const get = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const add = async card => {
  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(card)
  };
  try {
    const response = await fetch(URL, opts);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
