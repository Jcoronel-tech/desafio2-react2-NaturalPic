import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Context from "./Context";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";


const App = () => {
  const [photos, setPhotos ] = useState([]);

/*   const stateGlobal = {imagenes, setImagenes}; */
  const endpoint = "/fotos.json";

//Consumir api fotos.json
const getInfo = async () => {
  const res = await fetch(endpoint);
  const data = await res.json();
  let filterData = data.photos.map((e)=> ({
    id: e.id,
    src: e.src.tiny,
    alt: e.alt,
    liked: e.liked,
    photographer: e.photographer,
    favorito: false
  }))
  setPhotos(filterData);
  console.log(filterData)
}

//Llamar a la función
useEffect(()=>{
  getInfo();
}, []);

  return (
    <div className="App">
      <Context.Provider value={{photos, setPhotos}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
export default App
