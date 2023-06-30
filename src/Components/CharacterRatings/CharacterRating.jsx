/* eslint-disable react/prop-types */
import React from "react";
import "./CharacterRating.css";

export const CharacterRating = ({ characters }) => {
  // sort the character data by votes
  let sortedCharacters = [...characters];
  sortedCharacters.sort(function (a, b) {
    return b.votes - a.votes;
  });

  //show the top 5 Characters
  const charactersToDisplay = 5;

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {sortedCharacters.map((character, charIndex) => {
            if (charIndex < charactersToDisplay) {
              return (
                <tr
                  key={character.name}
                  className={charIndex % 2 === 0 ? "dark" : "light"}
                >
                  <td>{character.name}</td>
                  <td>{character.skillset.toString()}</td>
                  <td>{character.votes}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </section>
  );
};
