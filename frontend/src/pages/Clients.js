import React, { useState } from "react";
// import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ClientCard from "../components/ClientCard";
import ClientInputBox from "../components/ClientInputBox";

const Clients = () => {
  const [index, setIndex] = useState(null);
  const [client, setClient] = useState({
    id: "",
    name: "",
    id_number: "",
    representative: "",
    isPerson: "False",
  });

  const onSubmitClient = (event) => {
    event.preventDefault();
    const newClient = {
      id: uuidv4(),
      name: client.name,
      id_number: client.id_number,
      representative: client.representative,
      isPerson: false,
    };
  };

  return (
    <>
      <div>
        <div>
          <ClientInputBox />
        </div>
        <br />
        <div>
          Client List
          <div>
            {/* <div style={{ display: flex, flex-wrap: wrap }}> */}
            <ClientCard index={index} setIndex={setIndex} />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Clients;
