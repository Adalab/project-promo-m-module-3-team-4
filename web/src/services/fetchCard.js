const sendCard = "/cardgenerator/";

const fetchCard = (data) => {
  console.log(data);
  return fetch(sendCard, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export { fetchCard };
