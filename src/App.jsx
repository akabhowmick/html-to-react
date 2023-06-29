import React from "react";
import "./styles/App.css";
import "./styles/reset.css";
import Header from "./Components/Header/Header";
import { CharacterRating } from "./Components/CharacterRatings/CharacterRating";
import { data } from "../public/fma-data.ts";
import CharacterCard from "./Components/CharacterCard/CharacterCard";

function App() {
  return (
    <>
      <Header />
      <CharacterRating characters={data} />
      <CharacterCard characters={data} />
    </>
  );
}

export default App;
