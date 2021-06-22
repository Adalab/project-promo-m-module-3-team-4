function handleClickCreate(ev) {
  ev.preventDefault();

  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === false) {
        responseElement.classList.remove("none");
        responseElement.innerHTML = "Tienes que rellenar los campos";
      } else {
        responseUrl.innerHTML = `<a href='${data.cardURL}' target="_blank">Pincha aquí para ver tu tarjeta</a>`;
        //   responseElement.classList.remove("none");
        createButton.classList.add("none");
        createAncla(data.cardURL);
      }

      cardCreated.classList.remove("none");
      anclaTwitter.classList.remove("none");
    })
    .catch(() => {
      responseElement.innerHTML = "Inténtalo más tarde.";
      //   responseElement.classList.remove("none");
    });
  localStorage.setItem("profile", JSON.stringify(data));
}

createButton.addEventListener("click", handleClickCreate);
