import React from 'react'
import { useContext } from "react";
import Context from "../Context";
import Heart from '../components/Heart';

const Favoritos = () => {
  const {photos, setPhotos} = useContext(Context);

  const deleteLike = (id) => {
    const index = photos.findIndex((f) => f.id === id);
    photos[index].liked = !photos[index].liked
    setPhotos([...photos]);
    }
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {photos.filter((e)=>e.liked).map((e)=>(
            <div 
              className="foto"
              onClick={()=>deleteLike(e.id)}
              style={{backgroundImage: `url(${e.src})`}}
              key={e.id} 
            >
              <Heart filled={e.liked} />
              <p>{e.alt}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Favoritos
