import { Header } from "./Header";
import { Footer } from "./Footer";
import { Preview } from "./Main/Preview";
import { Form } from "./Main/Form";
import { useState, useEffect } from "react";
import ls from "../../services/localStorage";

function CardGenerator() {
  const localStorageData = ls.get("data") || {};
  const [palettes, setPalettes] = useState(localStorageData.palette || "1");
  const [name, setName] = useState(localStorageData.name || "");
  const [job, setJob] = useState(localStorageData.job || "");
  const [image, setImage] = useState(localStorageData.image || "");
  const [email, setEmail] = useState(localStorageData.email || "");
  const [phone, setPhone] = useState(localStorageData.phone || "");
  const [linkedin, setLinkedin] = useState(localStorageData.linkedin || "");
  const [github, setGithub] = useState(localStorageData.github || "");
  const [data, setData] = useState({});

  useEffect(() => {
    ls.set("data", data);
  }, [data]);

  const updateAvatar = (image) => {
    setImage(image);
    setData({
      ...data,
      image: image,
    });
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
    setData({
      ...data,
      [inputName]: inputValue,
    });
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
      </div>
      <Footer />
    </div>
  );
}

export { CardGenerator };
