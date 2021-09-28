import React, { useState } from "react";
import './Nav.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form 
    className="form-inline mr-lg-5 form-ms"
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className="form-control mr-sm-2 form-input-search"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input 
      className="btn-input btn btn-outline-info my-2 my-sm-0" 
      type="submit" 
      value='Agregar' />
    </form>
  );
}
