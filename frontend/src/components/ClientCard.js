import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ViewClientCard from "./ViewClientCard";
import axios from "axios";

//TO DO: set buttonstyle CSS

const ClientCard = (props) => {
  // const [index, setIndex] = useState("");
  const [hasViewed, setHasViewed] = useState(false);

  const handleView = (event) => {
    props.setIndex(event.target.id); //TO DO: console.log to see what the ID is
    setHasViewed(true);
  };

  const [client, setClient] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      await axios
        .get("http://127.0.0.1:8000/clients/view_all_clients/")
        .then((res) => {
          const data = res.data;
          console.log(data);
          setClient(data);
        })
        .catch((err) => console.error(err));
    };
    getAllData();
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    console.log(id);

    const deleteClientData = async () => {
      await axios
        .delete(`http://127.0.0.1:8000/clients/del_client/${id}`)
        .then((res) => {
          if (res.data.status === "ok") {
            console.log(res.data);
          }
        })
        .catch((err) => console.error(err));
    };
    deleteClientData();
  };

  return (
    <>
      {hasViewed ? (
        <>
          <ViewClientCard
            index={props.index}
            setIndex={props.setIndex}
            setHasViewed={setHasViewed}
          />
        </>
      ) : (
        <div>
          {client.map((element, index) => {
            return (
              <div id={index} key={uuidv4()}>
                <p>{element.name}</p>
                <p>{element.id_number}</p>
                <p>{element.representative}</p>
                <div>
                  {/* <div id={index}> */}
                  <button onClick={handleView}>Edit</button>
                  <button onClick={(e) => handleDelete(e, element.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ClientCard;
