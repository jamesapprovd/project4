import axios from "axios";
import React, { useState } from "react";

const InputBox = (props) => {
  const [name, setName] = useState("");
  const [id_number, setIdNumber] = useState("");
  const [representative, setRepresentative] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleIdNumberChange = (event) => setIdNumber(event.target.value);
  const handleRepresentativeChange = (event) =>
    setRepresentative(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:5001/clients/add_client/", {
        name,
        id_number,
        representative,
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Create client:</label>
        <div>
          <input
            type="text"
            placeholder="client name"
            onChange={handleNameChange}
            value={name}
          />
          <input
            type="text"
            placeholder="company number or person ID number"
            onChange={handleIdNumberChange}
            value={id_number}
          />
          <input
            type="text"
            placeholder="client representative"
            onChange={handleRepresentativeChange}
            value={representative}
          />
          <button type="submit">Create Client</button>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
