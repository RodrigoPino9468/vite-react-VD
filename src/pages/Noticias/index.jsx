import { useEffect, useState } from "react";
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
      {characterData && (
        <div>
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
