let dataSave = [];
dataSave = JSON.parse(localStorage.getItem("profile"));

function printAfterReload() {
  if (dataSave !== null) {
    data = dataSave;

    refreshData2();
    console.log(dataSave);
    console.log(data);
    validationNameLocalStorage();
    validationJobLocalStorage();
    validationPhotoLocalStorage();
    validationEmailLocalStorage();
    validationPhoneLocalStorage();
    validationLinkedinLocalStorage();
    validationGithubLocalStorage();
    validateFillSection();
  }
}

function refreshData2() {
  namelocal.value = dataSave.name;
  jobLocal.value = dataSave.job;
  emailLocal.value = dataSave.email;
  phoneLocal.value = dataSave.phone;
  linkedinLocal.value = dataSave.linkedin;
  githubLocal.value = dataSave.github;
  previewNameElemento.innerHTML = dataSave.name;
  previewRoleElemento.innerHTML = dataSave.job;
  previewPhoneElement.href =
    "https://api.whatsapp.com/send?phone=" + `${dataSave.phone}`;
  previewMailElement.href = "mailto:" + `${dataSave.email}`;

  previewLinkedinElement.href =
    "https://www.linkedin.com/in/" + `${dataSave.linkedin}`;
  previewGithubElement.href = "https://github.com/" + `${dataSave.github}`;

  const checked = dataSave.palette;

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
    const palette2 = document.querySelector(".js-palette2");
    palette2.checked = true;
  }
  if (checked === "3") {
    previewNameElemento.style.color = "#3e5b65";
    profileName.style.borderLeft = "#eab052 solid 5px";
    for (let i = 0; i < circleSocialnetwork.length; i++) {
      circleSocialnetwork[i].style.border = "#a0c0cf solid 2px";
      circleSocialnetwork[i].style.color = "#3e5b65";
    }
    const palette3 = document.querySelector(".js-palette3");
    palette3.checked = true;
  }
}

printAfterReload();
