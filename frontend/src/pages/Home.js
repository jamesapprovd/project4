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

          <div class="card">
            <div class="card-body">
              Track your clients and projects with RoboCorp
            </div>
          </div>

          <br />

          <div class="list-group">
            <li class="list-group-item list-group-item-dark">
              Document Repository
            </li>
            <a href="#" class="list-group-item list-group-item-action">
              Client Signup Form
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Non-disclosure Agreement
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Engagement Letter
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Purchase Order
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Payment Reminder
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Letter of Demand
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Termination Letter
            </a>
          </div>
        </div>
        <div className="col-sm-9">
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default Home;
