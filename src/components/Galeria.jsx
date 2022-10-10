
import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../Context";
import Heart from "./Heart";

const Galeria = () => {
  const {photos, setPhotos} = useContext(Context);

  const addLike = (id) => {
    const index = photos.findIndex((e) => e.id === id);
    photos[index].liked = !photos[index].liked
    setPhotos([...photos]);
    }

  return (
    <div className="galeria container">
      <div className="row">
        {photos.map((e)=>(
          <div className="col-12 col-lg-4 my-3">
          <div 
          className="foto"
            onClick={()=>addLike(e.id)}
            style={{backgroundImage: `url(${e.src})`}}
            key={e.id} 
          >
            <Heart filled={e.liked}/>
            <p>{e.alt}</p>
          </div>
          </div>
        ))}
</div>
    </div>
  )
}

export default Galeria



