import "./App.css";
import React from "react";
import Profile from "./Profil/Profile";
import laico from "../src/image/laico.jpg";

function App() {
  const handleClick = (name) => {
    alert(name);
  };
  return (
    <div className="App">
      <Profile
        FullName="Ines Ben Hamida"
        Bio="Diplomée de l'école d'architecture en 2011"
        Profession="Architecte"
        handleClick={handleClick}
      >
        <img src={laico} alt="hotel" />
      </Profile>
    </div>
  );
}

export default App;
