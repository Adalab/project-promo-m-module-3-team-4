import React from "react";

const sendCard = "https://awesome-profile-cards.herokuapp.com/card";

const fetchCard = () => {
  return fetch(sendCard).then((response) => response.json());
};

export default fetchCard;
