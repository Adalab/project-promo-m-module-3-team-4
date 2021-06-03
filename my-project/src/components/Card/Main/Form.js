import React from "react";
import { Form_design } from "./Form_design";
import { FormShare } from "./FormShare";
import { FormFill } from "./Form-fill";

function Form() {
  return (
    <form action="" method="POST" className="form js-form">
      <Form_design />
      <FormFill />
      <FormShare />
    </form>
  );
}
export { Form };
