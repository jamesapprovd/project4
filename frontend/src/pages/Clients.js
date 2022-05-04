import React, { useState } from "react";
// import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ClientCard from "../components/ClientCard";
import InputBox from "../components/InputBox";

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

    // let userId = user.userId;
    // axios
    //   .post(
    //     0`http://127.0.0.1:5001/clients/add_client`,
    //     {
    //       newClient,
    //       //   userId,
    //     },
    //     { withCredentials: true }
    //   )
    //   .then((res) => {
    //     if (res.data.status === "ok") {
    //       console.log(res.data);
    //     }
    //   });
    // dispatch(ADD_CLIENT(newClient));
    // setClient({ name: "", id_number: "", representative: "", isPerson: "" });
  };

  return (
    <>
      <div>
        <div>
          Client List
          <div>
            <ClientCard index={index} setIndex={setIndex} />
          </div>
        </div>
        <div>
          <div>
            <InputBox
            // text="Create a new client"
            // setClient={setClient}
            // name={client.name}
            // representative={client.representative}
            // onSubmit={onSubmitClient}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
