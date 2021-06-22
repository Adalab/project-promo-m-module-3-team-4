function changedForm(ev) {
  const inputNameChange = ev.target.name;
  const changedValue = ev.target.value;
  // if (inputNameChange === "linkedin") {
  //   data[inputNameChange] = "https://www.linkedin.com/in/" + changedValue;
  // } else if (inputNameChange === "github") {
  //   data[inputNameChange] = changedValue;
  // } else {
  data[inputNameChange] = changedValue;
  console.log(data);
}

function refreshData() {
  previewNameElemento.innerHTML =
    data.name === "" ? "Nombre Apellido" : data.name;
  previewRoleElemento.innerHTML =
    data.job === "" ? "Front-end developer" : data.job;
  previewPhoneElement.href = `https://api.whatsapp.com/send?phone=${data.phone}`;
  previewMailElement.href = `mailto:${data.email}`;
  previewLinkedinElement.href = data.linkedin;
  previewGithubElement.href = data.github;
}

function handleChangeForm(ev) {
  // 1. Cojo el nuevo valor y lo guardo en una variable

  handlerChangecolor(ev);
  changedForm(ev);

  // 2. Re-pinto la tarjeta de preview

  refreshData();
}

/* else if( inputChanged.name === 'mailto:saly@hotmail.com' ) {
        previewMailElemento.href = changedValue;
    }
    else if( inputChanged.name === 'mailto:saly@hotmail.com' ) {
        previewLinkedinElemento.href = changedValue;
    } */

function handlerChangecolor(ev) {
  const checked = ev.target.value;

  if (checked === "1") {
    previewNameElemento.style.color = "#114e4e";
    profileName.style.borderLeft = "#438792 solid 5px";

    for (let i = 0; i < circleSocialnetwork.length; i++) {
      circleSocialnetwork[i].style.border = "#a2deaf solid 2px";
      circleSocialnetwork[i].style.color = "#114e4e";
    }
  }

  if (checked === "2") {
    previewNameElemento.style.color = "#420101";
    profileName.style.borderLeft = "#bd1010 solid 5px";

    for (let i = 0; i < circleSocialnetwork.length; i++) {
      circleSocialnetwork[i].style.border = "#E95626 solid 2px";
      circleSocialnetwork[i].style.color = "#420101";
    }
  }
  if (checked === "3") {
    previewNameElemento.style.color = "#3e5b65";
    profileName.style.borderLeft = "#eab052 solid 5px";
    for (let i = 0; i < circleSocialnetwork.length; i++) {
      circleSocialnetwork[i].style.border = "#a0c0cf solid 2px";
      circleSocialnetwork[i].style.color = "#3e5b65";
    }
  }
}

//generalColors.addEventListener("click", handlerChangecolor);
form.addEventListener("change", handleChangeForm);

// let safeoption = localStorage.getItem("localstorage");
// if (safeoption === "1") {
//   body.classList.add("claro");
// } else {
//   body.classList.add("oscuro");
// }
