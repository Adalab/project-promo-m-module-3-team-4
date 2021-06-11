import { Header } from "./Header";
import { Footer } from "./Footer";
import { Preview } from "./Main/Preview";
import { Form } from "./Main/Form";
import { useState } from "react";


function CardGenerator() {
  const [palettes, setPalettes] = useState("1");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  
  
  const handleClick = (value) => {
    setPalettes({ palettes: value });
  };
  const updateAvatar = (image) => {
    setImage(image);
  };

  const handleInput = (inputName, inputValue) => {
    if (inputName === "palettes") {
      setPalette(inputValue);
    } else if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "job") {
      setJob(inputValue);
    } else if (inputName === "email") {
      setEmail(inputValue);
    } else if (inputName === "phone") {
      setPhone(inputValue);
    } else if (inputName === "linkedin") {
      setLinkedin(inputValue);
    } else if (inputName === "github") {
      setGithub(inputValue);
    }
  };

  const updateAvatar = (image) => {
    setImage(image);
  };

  return (
    <div className="page">
      <Header />
      <div className="profile__wrapper">
        <Preview
          palette={palettes}
          name={name}
          job={job}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
          // handleReset={handleReset}
          image={image}
        />
        <Form
          handleInput={handleInput}
          palette={palettes}
          name={name}
          job={job}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
          image={image}
          updateAvatar={updateAvatar}
        />

        {/* <div className="tooltipFill js-tooltipFill none">
        <p className="tooltipParagraph">
          No tengas tanta prisa. Primero rellena la sección anterior
        </p>
      </div>
      <div className="tooltipShare js-tooltipShare none">
        <p className="tooltipParagraph">
          Recuerda! Rellena los campos ¿Has rellenado el campo de la foto?
        </p>
      </div> */}
      </div>
      <Footer />
    </div>
  );
}

export { CardGenerator };
