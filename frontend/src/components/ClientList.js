import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import ClientCard from "./ClientCard";

const ClientList = (props) => {
  //This calls on mount, so that it does not call infinitely
  useEffect(() => {
    getAllData();
  }, []);

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

  const handleDelete = async (event, id) => {
    event.preventDefault();
    console.log("DELETING", id);

    const deleteClientData = async () => {
      await axios
        .delete(`http://127.0.0.1:8000/clients/del_client/${id}`)
        .then((res) => {
          if (res.data.status === "ok") {
            console.log("DELETED");
          }
        })
        .catch((err) => console.error(err));
    };
    await deleteClientData();
    await getAllData();
  };

  return (
    <div>
      {props.client.map((element, index) => {
        return (
          <ClientCard
            key={index}
            name={element.name}
            id={element.id}
            id_number={element.id_number}
            representative={element.representative}
            handleDelete={handleDelete}
            getAllData={getAllData}
          />
        );
      })}
    </div>
  );
};

export default ClientList;
