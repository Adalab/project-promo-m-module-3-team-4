resetButton.addEventListener("click", reset);

function reset() {
  data = {
    palette: "1",
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
  };
  resetChangeColor();
  resetForm();
  refreshData();
  localStorage.clear();
}
function resetChangeColor(ev) {
  const checked = document.querySelectorAll(".palette__wrapper");
  if (checked !== "1") {
    previewNameElemento.style.color = "#114e4e";
    profileName.style.borderLeft = "#438792 solid 5px";
  }
  for (let i = 0; i < circleSocialnetwork.length; i++) {
    circleSocialnetwork[i].style.border = "#a2deaf solid 2px";
    circleSocialnetwork[i].style.color = "#114e4e";
  }
}

function resetForm() {
  form.reset();
  profileImage.style.backgroundImage = "url('./assets/images/img-default.jpg')";
  profilePreview.style.backgroundImage = "";
}
