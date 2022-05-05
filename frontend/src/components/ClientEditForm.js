import React, { useState } from "react";
import axios from "axios";

// const buttonStyle = "";

const ClientEditForm = (props) => {
  const [editName, setEditName] = useState(props.name);
  const handleNameChange = (event) => setEditName(event.target.value);
  const [editId, setEditId] = useState(props.user_id);
  const handleIdNumberChange = (event) => setEditId(event.target.value);
  const [editRepresentative, setEditRepresentative] = useState(
    props.representative
  );
  const handleRepresentativeChange = (event) =>
    setEditRepresentative(event.target.value);

  const handleEdit = async (event, id) => {
    event.preventDefault();
    console.log("EDITING", props.id);

    const editClientData = async () => {
      await axios
        .patch(`http://127.0.0.1:8000/clients/update_client/${props.id}`, {
          name: editName,
          user_id: editId,
          representative: editRepresentative,
        })
        .then((res) => {
          if (res.data.status === "ok") {
            console.log(res.data);
          }
        })
        .catch((err) => console.error(err));
    };
    await editClientData();
    await props.getAllData();
    props.setHasViewed(false);
  };

  return (
    <>
      <form>
        <label className="text-grey">Edit:</label>
        <div>
          <input
            type="text"
            placeholder="name"
            defaultValue={props.name}
            value={editName}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="id number"
            defaultValue={props.id_number}
            value={editId}
            onChange={handleIdNumberChange}
          />
          <input
            type="text"
            placeholder="representative"
            defaultValue={props.representative}
            value={editRepresentative}
            onChange={handleRepresentativeChange}
          />
          <button onClick={handleEdit}>Update data</button>
        </div>
      </form>
    </>
  );
};

export default ClientEditForm;
