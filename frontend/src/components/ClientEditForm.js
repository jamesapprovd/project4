import React from "react";
import axios from "axios";

// const buttonStyle = "";

const ClientEditForm = (props) => {
  const handleNameChange = (event) => props.setName(event.target.value);
  const handleIdNumberChange = (event) => props.setIdNumber(event.target.value);
  const handleRepresentativeChange = (event) =>
    props.setRepresentative(event.target.value);

  const handleEdit = (event, id) => {
    event.preventDefault();
    console.log("EDITING", id);

    const editClientData = async () => {
      await axios
        .patch(`http://127.0.0.1:5001/clients/update_client/${id}`)
        .then((res) => {
          if (res.data.status === "ok") {
            console.log(res.data);
          }
        })
        .catch((err) => console.error(err));
    };
    editClientData();
  };

  return (
    <>
      <form onSubmit={props.onSubmit}>
        <label className="text-grey">Edit:</label>
        <div>
          <input
            type="text"
            placeholder="name"
            defaultValue={props.name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="id number"
            defaultValue={props.id_number}
            onChange={handleIdNumberChange}
          />
          <input
            type="text"
            placeholder="representative"
            defaultValue={props.representative}
            onChange={handleRepresentativeChange}
          />
          <button onClick={handleEdit}>Update data</button>
        </div>
      </form>
    </>
  );
};

export default ClientEditForm;
