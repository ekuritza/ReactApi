import React, { useState } from "react";
import "./Filtro.css";

function Filtro({ onSeachChange, onSelectChange }) {
  const [selectedOption, setselectedOption] = useState("titulo");
  const [seach, setSeach] = useState('');

  const handleSearchChange = (value) => {
    onSeachChange(value);
    setSeach(value);
  }

  const handleSelectChange = (value) => {
    onSelectChange(value);
    setselectedOption(value);
  }

  return (
<div className="input-group mb-5 custom-input-group">
  <input
    type="text"
    placeholder="Busque seu filme favorito"
    className="form-control custom-form-control"
    aria-label="Text input with dropdown button"
    value={seach}
    onChange={(e) => handleSearchChange(e.target.value)} style={{ width: '900px' }}
  />
  <select
    value={selectedOption}
    onChange={(e) => handleSelectChange(e.target.value)}
    className="form-select custom-form-select" style={{ width: '50px' }}
  >
    <option>titulo</option>
    <option>ano</option>
    <option>nota</option>
  </select>
</div>

  );
}

export default Filtro;
