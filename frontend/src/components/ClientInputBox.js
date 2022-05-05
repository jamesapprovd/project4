import axios from "axios";
import React, { useState } from "react";

const ClientInputBox = (props) => {
  const [name, setName] = useState("");
  const [id_number, setIdNumber] = useState("");
  const [representative, setRepresentative] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleIdNumberChange = (event) => setIdNumber(event.target.value);
  const handleRepresentativeChange = (event) =>
    setRepresentative(event.target.value);

  const getAllData = async () => {
    await axios
      .get("http://127.0.0.1:8000/clients/view_all_clients/")
      .then((res) => {
        const data = res.data;
        console.log(data);
        props.setClient(data);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("ADDING");

    const submitClientData = async () => {
      await axios
        .put("http://127.0.0.1:8000/clients/add_client/", {
          name,
          id_number,
          representative,
        })
        .then((res) => {
          const data = res.data;
          console.log(data);
        })
        .catch((err) => console.error(err));
    };
    await submitClientData();
    await getAllData();
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
            placeholder="company number"
            onChange={handleIdNumberChange}
            value={id_number}
          />
          <input
            type="text"
            placeholder="client representative"
            onChange={handleRepresentativeChange}
            value={representative}
          />
          <button type="submit" class="btn btn-secondary">
            Create Client
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientInputBox;
