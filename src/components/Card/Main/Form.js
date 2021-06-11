import { FormDesign } from "./FormDesign";
import { FormShare } from "./FormShare";
import { FormFill } from "./Form-fill";
import "../../../stylesheets/core/_variables.scss";
import "../../../stylesheets/layout/_form.scss";

function Form(props) {
  return (
    <form action="" method="POST" className="form js-form">
      <FormDesign />
      <FormFill
        image={props.image}
        updateAvatar={props.updateAvatar}
      ></FormFill>
      <FormShare />
    </form>
  );
}
export { Form };
