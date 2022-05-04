import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditForm from "./EditForm.js";
import ClientCard from "./ClientCard.js";
import axios from "axios";

// const buttonStyle =
//   "text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";

const ViewClientCard = (props) => {
  const [name, setName] = useState("");
  const [id_number, setIdNumber] = useState("");
  const [representative, setRepresentative] = useState("");
  const [hasEdit, setHasEdit] = useState(false);

  // this changes the view from individual client to all clients
  const handleClose = () => {
    props.setHasViewed(false);
  };

  // this shows view for edit with default value
  const handleEdit = (event, id) => {
    event.preventDefault();
    console.log(id);
    setHasEdit(true);
  };

  //this updates the client card when the "edit" button is clicked
  // const handleUpdate = (event) => {
  //   event.preventDefault();
  //   let clientCardId = clientCardId;
  //   let editedClientCard = {
  //     name: { name },
  //     user_id: { id_number },
  //     representative: { representative },
  //   };

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
  setHasEdit(false);

  return (
    <>
      {hasEdit ? (
        <EditForm
          name={name}
          id_number={id_number}
          setName={setName}
          setRepresentative={setRepresentative}
          onSubmit={handleUpdate}
        />
      ) : (
        <div>
          <p>{name}</p>
          <p>{id_number}</p>
          <br />
          {ClientCard.map((element) => {
            return (
              <div key={uuidv4()}>
                <div>
                  <p>{element.name}</p>
                  <p>
                    {element.id_number}, {element.representative}
                  </p>
                </div>
                <div> : ( "" )</div>
              </div>
            );
          })}

          <div>
            <button onClick={handleClose}>Close</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewClientCard;
