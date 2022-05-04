import React from "react";
import Clients from "./Clients";
// import Projects from "./Projects";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <br />
          <div>
            <img
              src="https://i.imgur.com/zcwGl5R.png?1"
              alt="RoboCorp Logo"
              width="200"
              height="200"
            ></img>
          </div>
          <p>Manage your client lists</p>
        </div>
        <div className="col-sm-9">
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default Home;
