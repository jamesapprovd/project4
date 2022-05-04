import React, { useState } from "react";
import ClientCard from "../components/ClientCard";
import ClientInputBox from "../components/ClientInputBox";

const Clients = () => {
  const [index, setIndex] = useState(null);
  // const [client, setClient] = useState({
  //   id: "",
  //   name: "",
  //   id_number: "",
  //   representative: "",
  //   isPerson: "False",
  // });

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
