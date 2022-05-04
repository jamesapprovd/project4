import React, { useState } from "react";
import EditForm from "./EditForm";

const Card = ({ name, id, id_number, representative, handleDelete }) => {
  const [hasViewed, setHasViewed] = useState(false);
  const handleView = (event) => {
    setHasViewed(true);
  };

  return (
    <>
      {hasViewed ? (
        <EditForm />
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
