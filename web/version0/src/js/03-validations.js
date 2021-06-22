//ValidationDesing//
let validationDesign = false;
function validateDesignSection() {
  let inputsDesign = document.querySelectorAll('input[name="palette"]');
  inputsDesign.forEach((e) => {
    if (e.checked) {
      validationDesign = true;
    }
  });
}
validateDesignSection();

//ValidationName
let inputName = document.querySelector(".fill__contact-name");
let validateName = false;
function validationNameLocalStorage() {
  if (data.name) {
    validateName = true;
  }
}
function validationName() {
  let valueName = data.name;
  let paragraphName = document.querySelector(".js-validationName");
  if (valueName === "") {
    paragraphName.classList.remove("none");
  } else {
    validateName = true;
    paragraphName.classList.add("none");
  }
}
inputName.addEventListener("blur", validationName);

//ValidationJob
let inputJob = document.querySelector(".fill__contact-role");
let validateJob = false;
function validationJobLocalStorage() {
  if (data.job) {
    validateJob = true;
  }
}
function validationJob() {
  let valueJob = data.job;
  let paragraphJob = document.querySelector(".js-validationJob");
  if (valueJob === "") {
    paragraphJob.classList.remove("none");
  } else {
    validateJob = true;
    paragraphJob.classList.add("none");
  }
}
inputJob.addEventListener("blur", validationJob);

//ValidationImage
let inputPhoto = document.querySelector(".fill__contact-image");
let fileTypes = [
  "image/jpg",
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/svg",
];
let validationFileType = (file) => fileTypes.includes(file.type);
let validatePhoto = false;
function validationPhotoLocalStorage() {
  if (data.photo) {
    validatePhoto = true;
  }
}
function validationPhoto(event) {
  let pNotFound = document.querySelector(".js-validationPhoto");
  let pNotValid = document.querySelector(".js-validationPhotoTwo");
  let pTooBig = document.querySelector(".js-validationPhotoThree");
  let file = inputPhoto.files.item(0);
  if (inputPhoto.files.length === 0) {
    pNotFound.classList.remove("none");
  } else {
    if (!validationFileType(file)) {
      pNotValid.classList.remove("none");
    } else {
      if (file.size >= 400096) {
        pTooBig.classList.remove("none");
      } else {
        validatePhoto = true;
        pNotFound.classList.add("none");
        pNotValid.classList.add("none");
        pTooBig.classList.add("none");
      }
    }
  }
}
inputPhoto.addEventListener("change", validationPhoto);

//ValidationEmail
let inputEmail = document.querySelector(".fill__contact-email");
let validateEmail = false;
function validationEmailLocalStorage() {
  if (data.email) {
    validateEmail = true;
  }
}
function validationEmail() {
  let valueEmail = data.email;
  let regexEmail = valueEmail.match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  let paragraphEmail = document.querySelector(".js-validationEmail");
  if (!regexEmail) {
    paragraphEmail.classList.remove("none");
  } else {
    validateEmail = true;
    paragraphEmail.classList.add("none");
  }
}
inputEmail.addEventListener("blur", validationEmail);

//ValidationPhone
let inputPhone = document.querySelector(".fill__contact-phone");
let validatePhone = false;
function validationPhoneLocalStorage() {
  if (data.phone) {
    validatePhone = true;
  }
}
function validationPhone() {
  let valuePhone = data.phone;
  let regexPhone = valuePhone.match(/^[0-9]+$/);
  let paragraphPhone = document.querySelector(".js-validationPhone");
  if (valuePhone === "" || !regexPhone) {
    paragraphPhone.classList.remove("none");
  } else {
    validatePhone = true;
    paragraphPhone.classList.add("none");
  }
}
inputPhone.addEventListener("blur", validationPhone);

//ValidationLinkedin
let inputLinkedin = document.querySelector(".fill__contact-linkedin");
let validateLinkedin = false;
function validationLinkedinLocalStorage() {
  if (data.linkedin) {
    validateLinkedin = true;
  }
}
function validationLinkedin() {
  let valueLinkedin = data.linkedin;
  let paragraphLinkedin = document.querySelector(".js-validationLinkedin ");
  if (valueLinkedin === "") {
    paragraphLinkedin.classList.remove("none");
  } else {
    validateLinkedin = true;
    paragraphLinkedin.classList.add("none");
  }
}
inputLinkedin.addEventListener("blur", validationLinkedin);

//ValidationGitHub
let inputGithub = document.querySelector(".fill__contact-github");
let validateGithub = false;
function validationGithubLocalStorage() {
  if (data.github) {
    validateGithub = true;
  }
}
function validationGithub() {
  let valueGithub = data.github;
  let paragraphGithub = document.querySelector(".js-validationGithub ");
  if (valueGithub === "") {
    paragraphGithub.classList.remove("none");
  } else {
    validateGithub = true;
    paragraphGithub.classList.add("none");
  }
}
inputGithub.addEventListener("blur", validationGithub);

//ValidationFill
let validationFill = false;
function validateFillSection() {
  if (
    validateName &&
    validateJob &&
    validatePhoto &&
    validateEmail &&
    validatePhone &&
    validateLinkedin &&
    validateGithub
  ) {
    validationFill = true;
  }
}
validateFillSection();
