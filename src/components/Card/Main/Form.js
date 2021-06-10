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
        name={props.name}
        job={props.job}
        image={props.image}
        updateAvatar={props.updateAvatar}
        email={props.email}
        phone={props.phone}
        linkedin={props.linkedin}
        github={props.github}
      />
      <FormShare />
    </form>
  );
}
export { Form };
