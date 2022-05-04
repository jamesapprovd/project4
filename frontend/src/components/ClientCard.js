import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Card from "./Card";

//TO DO: set buttonstyle CSS

const ClientCard = (props) => {
  // const [index, setIndex] = useState("");
  // const [hasViewed, setHasViewed] = useState(false);

  // const handleView = (event) => {
  //   props.setIndex(event.target.id); //TO DO: console.log to see what the ID is
  //   setHasViewed(true);
  // };

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
    console.log("DELETING", id);

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
    <div>
      {client.map((element, index) => {
        return (
          <Card
            key={index}
            name={element.name}
            id={element.id}
            id_number={element.id_number}
            representative={element.representative}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default ClientCard;
