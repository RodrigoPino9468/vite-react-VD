import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import MainMenu from "../../components/MainMenu";
import { fetchDataFromApi } from "../../api/characters";

export default function Noticias() {
  const [characterData, setCharacterData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchDataFromApi();
        setCharacterData(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(characterData);
  return (
    <>
      <Navbar></Navbar>
      <MainMenu></MainMenu>
      {characterData && (
        <div>
          {/* Muestra los datos de los personajes aquí */}
          <h2>Personajes</h2>
          {characterData.map((character) => (
            <ul key={character.id}>
              <li>{character.name}</li>
              <img src={character.image} alt={character.species} />
            </ul>
          ))}
        </div>
      )}
    </>
  );
}
