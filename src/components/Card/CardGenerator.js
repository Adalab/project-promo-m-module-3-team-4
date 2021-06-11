import { Header } from "./Header";
import { Footer } from "./Footer";
import { Preview } from "./Main/Preview";
import { Form } from "./Main/Form";
import { useState } from "react";
import { Palettes } from "./Main/Palettes";

function CardGenerator() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const updateAvatar = (image) => {
    setImage(image);
  };
  const [palettes, setPalettes] = useState("1");
  const handleClick = (value) => {
    setPalettes({ palettes: value });
  };

  // const [data, setData] = useState({
  // palette: "1",
  // name: "",
  //job: "",
  //phone: "",
  //email: "",
  //linkedin: "",
  //github: "",
  //photo: "",
  //});

  return (
    <div className="page">
      <Header />
      <div className="profile__wrapper">
        <Preview image={image} />
        <Form image={image} updateAvatar={updateAvatar} />

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
