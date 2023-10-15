import React, { useState, useEffect } from "react";
import "./index.css";
import Card from "../Card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function DeezerSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchDeezer = async () => {
      try {
        if (searchQuery) {
          const response = await fetch(
            `https://api.deezer.com/search?q=${searchQuery}`
          );
          if (response.ok) {
            const data = await response.json();
            setSearchResults(data.data);
          } else {
            console.error("Error al buscar en Deezer");
          }
        }
      } catch (error) {
        console.error("Error en la solicitud de búsqueda", error);
      }
    };

    if (searchQuery.length >= 4) {
      searchDeezer();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Función para manejar la selección de un tema y mostrar la vista de detalle
  const handleTrackSelect = (track) => {
    console.log('el track seleccionado',track)
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar canciones"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {searchResults.length > 0 ? ( // Comprobar si hay resultados de búsqueda
        <ul className="song-list">
          {searchResults.map((track) => (
            <Card
              generic={track}
              title={track.title}
              preview={track.preview}
              albumCover={track.album.cover}
              key={track.id}
              onClick={() => handleTrackSelect(track)}
            ></Card>
          ))}
        </ul>
      ) : ( // Mostrar mensaje de bienvenida si no hay resultados
        <div className="welcome-message">
          <h2>Bienvenido a Music Search</h2>
          <p>Encuentra tus canciones favoritas.</p>
           <img className="image-logo" src="https://images-platform.99static.com//nlKxZ8Ub2roVIaCh9K4hCecyWYE=/357x165:1038x847/fit-in/500x500/99designs-contests-attachments/108/108023/attachment_108023047"></img>
        </div>
      )}
    </div>
  );
}

export default DeezerSearch;
