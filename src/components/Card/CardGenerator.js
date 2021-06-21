import { Header } from "./Header";
import { Footer } from "./Footer";
import { Preview } from "./Main/Preview";
import { Form } from "./Main/Form";
import { useState, useEffect } from "react";
import { fetchCard } from "../../services/fetchCard";
//import Reset from "./Main/Reset";

function CardGenerator() {
  const [palettes, setPalettes] = useState("3");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (data.length === 0) {
      fetchCard().then((data) => {
        setData(data);
      });
    }
  }, []);

  const updateAvatar = (image) => {
    setImage(image);
  };

  const handleInput = (inputName, inputValue) => {
    console.log(inputName, inputValue);
    if (inputName === "palette") {
      setPalettes(inputValue);
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
  const handleReset = () => {
    setPalettes("");
    setName("");
    setJob("");
    setImage("");
    setPhone("");
    setEmail("");
    setGithub("");
    setLinkedin("");
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
          handleReset={handleReset}
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
          data={data}
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
