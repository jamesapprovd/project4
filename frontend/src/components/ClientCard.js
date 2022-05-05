import React, { useState } from "react";
import ClientEditForm from "./ClientEditForm";

const ClientCard = ({
  name,
  id,
  id_number,
  representative,
  handleDelete,
  getAllData,
}) => {
  const [hasViewed, setHasViewed] = useState(false);
  const handleView = (event) => {
    setHasViewed((prevState) => !prevState);
  };

  return (
    <>
      {hasViewed ? (
        <ClientEditForm
          name={name}
          id={id}
          id_number={id_number}
          representative={representative}
          getAllData={getAllData}
          setHasViewed={setHasViewed}
        />
      ) : (
        <div>
          <div class="card">
            <div class="card-header">Company</div>
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">{id_number}</p>
              <p class="card-text">{representative}</p>
              <a href="#" class="btn btn-secondary" onClick={handleView}>
                Edit
              </a>
              <a
                href="#"
                class="btn btn-secondary ms-1"
                onClick={(e) => handleDelete(e, id)}
              >
                Delete
              </a>
            </div>
          </div>

          {/* <p>{name}</p>
          <p>{id_number}</p>
          <p>{representative}</p> */}
        </div>
      )}
      {/* <div> */}
      {/* <button onClick={handleView}>Edit</button>
      <button onClick={(e) => handleDelete(e, id)}>Delete</button> */}
      {/* </div> */}
    </>
  );
};

export default ClientCard;
