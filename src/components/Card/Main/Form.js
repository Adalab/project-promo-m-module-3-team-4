import { Form_design } from "./Form_design";
import { FormShare } from "./FormShare";
import { FormFill } from "./Form-fill";
import "../../../stylesheets/core/_variables.scss";
import "../../../stylesheets/layout/_form.scss";

function Form(props) {
  return (
    <form action="" method="POST" className="form js-form">
      <Form_design />
      <FormFill
        image={props.image}
        updateAvatar={props.updateAvatar}
      ></FormFill>
      <FormShare />
    </form>
  );
}
export { Form };
