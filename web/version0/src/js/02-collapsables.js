//Eventos para desplegar secciones con requisitos

function collapseValidationDesign() {
  selectionDesign.classList.toggle("none");
  selectionDesignButton.classList.toggle("arrowPointer");
}
selectionDesignButton.addEventListener("click", collapseValidationDesign);

function collapseValidationFill(e) {
  if (validationDesign === false) {
    messageFill.classList.toggle("none");
    messageFill.style.top = e.pageY - 15 + "px";
    setTimeout(function () {
      messageFill.classList.toggle("none");
    }, 5000);
  } else {
    selectionFill.classList.toggle("none");
    selectionFillButton.classList.toggle("arrowPointer");
  }
}
selectionFillButton.addEventListener("click", function (e) {
  validateDesignSection();
  collapseValidationFill();
});

function collapseValidationShare(e) {
  //   selectionShare.classList.toggle("none");
  //   selectionShareButton.classList.toggle("arrowPointer");
  // }
  if (validationDesign === false || validationFill === false) {
    messageShare.classList.toggle("none");
    messageShare.style.top = e.pageY - 25 + "px";
    setTimeout(function () {
      messageShare.classList.toggle("none");
    }, 5000);
  } else {
    selectionShare.classList.toggle("none");
    selectionShareButton.classList.toggle("arrowPointer");
  }
}
selectionShareButton.addEventListener("click", function (e) {
  validateFillSection();
  collapseValidationShare(e);
});
