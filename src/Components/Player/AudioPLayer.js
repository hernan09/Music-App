import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from 'react-audio-player';
import './player.css'; // Archivo de estilos CSS personalizado

function PlayerAudio() {
  const { trackId } = useParams();
  const [audioUrl, setAudioUrl] = useState('');
  const [albumImage, setAlbumImage] = useState(''); // Estado para la imagen del álbum
  const [titleAlbum, setTitleAlbum ] = useState('');

  useEffect(() => {
    // Realiza una solicitud a la API de Deezer para obtener la información del track por su trackId
    fetch(`https://api.deezer.com/track/${trackId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('la data',data)
        // Obtiene la URL del audio completo del track
        const audioUrl = data.preview;
        const titleAlbum = data.title;

        setTitleAlbum(titleAlbum);
        setAudioUrl(audioUrl);

        // Obtiene la URL de la imagen del álbum
        const albumImage = data.album.cover_big;
        setAlbumImage(albumImage);
      })
      .catch((error) => {
        console.error('Error al obtener la información del track:', error);
      });
  }, [trackId]);

  return (
    <div className="audio-player-container">
      <h2 className='title-album'>{titleAlbum}</h2>
      <div className="album-image">
        <img src={albumImage} alt="Imagen del álbum" />
      </div>
      <AudioPlayer
        src={audioUrl}
        autoPlay
      />
      <audio controls autoPlay className="card-preview-2">
          <source src={audioUrl} type="audio/mpeg" />
          Tu navegador no admite la reproducción de audio.
        </audio>
    </div>
  );
}

export default PlayerAudio;
