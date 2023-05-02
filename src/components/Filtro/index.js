import React, { useState } from "react";

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
    <div className="input-group">
      <input
        type="text"
        placeholder="Busque seu filme favorito"
        className="form-control"
        aria-label="Text input with dropdown button"
        value={seach}
        onChange={(e) => handleSearchChange(e.target.value)} 
      />
      <select
        value={selectedOption}
        onChange={(e) => handleSelectChange(e.target.value)}
        className="form-select"
      >
        <option>titulo</option>
        <option>ano</option>
        <option>nota</option>
      </select>
    </div>
  );
}

export default Filtro;