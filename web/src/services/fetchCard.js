const sendCard = "https://localhost:3000/cardgenerator";

const fetchCard = (data) => {
  return fetch(sendCard, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export { fetchCard };
