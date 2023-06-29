/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./CharacterCard.css";

export default class CharacterCard extends Component {
  render() {
    const { characters } = this.props;
    return (
      <section id="character-cards">
        {characters.map((character) => {
          return (
            <div key={character.name} className="card">
              <div className="card-titles">
                <h3>{character.name}</h3>
                <h4>{character.nickName}</h4>
              </div>
              <img src={character.imageUrl} alt="character-image" />
              <p>{character.background}</p>
            </div>
          );
        })}
      </section>
    );
  }
}
