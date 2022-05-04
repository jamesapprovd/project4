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
    axios.get("http://localhost:5001/clients/view_client/").then((res) => {
      const data = res.data;
      console.log(data);
      setClient(data);
    });
  }, []);

  // const handleDelete = (event) => {
  //   event.preventDefault();
  //   let cientCardId =
  //     clientCard[event.target.parentNode.parentNode.id].clientCardId;
  //   axios
  //     .post(`http://127.0.0.1:5001/clients/del_client`, {
  //       userId,
  //       clientCardId,
  //     })
  //     .then((res) => {
  //       if (res.data.status === "ok") {
  //         console.log(res.data);
  //       }
  //     });
  //   dispatch(REMOVE_CLIENT(clientCardId));
  // };

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
                  <button onClick={handleView}>View</button>
                  {/* <button onClick={handleDelete}>Delete</button> */}
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
