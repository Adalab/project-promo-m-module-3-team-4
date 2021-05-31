let anclaTwitter = document.querySelector(".js-aTwitter");
let shareURLTwitter = "https://twitter.com/intent/tweet?text=";

function createAncla(cardURL) {
  let encodedURL = encodeURIComponent(cardURL);
  anclaTwitter.setAttribute("href", shareURLTwitter + encodedURL);
}
