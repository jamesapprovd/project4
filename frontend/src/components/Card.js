import React, { useState } from "react";
import ClientEditForm from "./ClientEditForm";

const Card = ({ name, id, id_number, representative, handleDelete }) => {
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
        />
      ) : (
        <div>
          <p>{name}</p>
          <p>{id_number}</p>
          <p>{representative}</p>
        </div>
      )}
      <div>
        <button onClick={handleView}>Edit</button>
        <button onClick={(e) => handleDelete(e, id)}>Delete</button>
      </div>
    </>
  );
};

export default Card;
