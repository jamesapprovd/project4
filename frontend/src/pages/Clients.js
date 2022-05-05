import React, { useState } from "react";
import ClientList from "../components/ClientList";
import ClientInputBox from "../components/ClientInputBox";

const Clients = () => {
  const [index, setIndex] = useState(null);
  const [client, setClient] = useState([]);
  return (
    <>
      <div>
        <div>
          <ClientInputBox setClient={setClient} />
        </div>
        <br />
        <div>
          Client List
          <div>
            <ClientList
              client={client}
              setClient={setClient}
              index={index}
              setIndex={setIndex}
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Clients;
