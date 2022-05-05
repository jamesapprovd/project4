import React, { useState } from "react";
import ClientList from "../components/ClientList";
import ClientInputBox from "../components/ClientInputBox";

const Clients = () => {
  const [index, setIndex] = useState(null);

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
            <ClientList index={index} setIndex={setIndex} />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Clients;
