import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Card({ title, preview, albumCover, generic }) {

  const click = () =>{
    console.log(albumCover);
  }

  return (
    <div className="card" onClick={click}>
       <div class="dot"></div>
      <img src={albumCover} alt={`Portada de ${title}`} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <Link className='linked' to={{ pathname: `/audio/${generic.id}`, state: generic.album.cover_big }}>Listen To Song</Link>
        <audio controls className="card-preview">
          <source src={preview} type="audio/mpeg" />
          Tu navegador no admite la reproducción de audio.
        </audio>
      </div>
    </div>
  );
}

export default Card;
