import React from "react";
import Clients from "./Clients";
import Projects from "./Projects";

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
            <a
              href="https://www.jotform.com/form-templates/new-customer-registration-form"
              class="list-group-item list-group-item-action"
            >
              Client Signup Form
            </a>
            <a
              href="https://zegal.com/en-sg/non-disclosure-agreement/"
              class="list-group-item list-group-item-action"
            >
              Non-disclosure Agreement
            </a>
            <a
              href="https://www.jotform.com/pdf-templates/quote-templates"
              class="list-group-item list-group-item-action"
            >
              Quotation Document
            </a>
            <a
              href="https://templatelab.com/engagement-letter/"
              class="list-group-item list-group-item-action"
            >
              Engagement Letter
            </a>
            <a
              href="https://zegal.com/en-sg/sale-of-goods-contract/"
              class="list-group-item list-group-item-action"
            >
              Sales Agreement
            </a>
            <a
              href="https://templatelab.com/purchase-order-templates/"
              class="list-group-item list-group-item-action"
            >
              Purchase Order
            </a>
            <a
              href="https://www.projectmanager.com/templates/change-order-form-template"
              class="list-group-item list-group-item-action"
            >
              Change Order
            </a>
            <a
              href="https://templates.office.com/en-sg/invoices"
              class="list-group-item list-group-item-action"
            >
              Invoice
            </a>
            <a
              href="https://www.fundera.com/blog/late-payments"
              class="list-group-item list-group-item-action"
            >
              Payment Reminder
            </a>
            <a
              href="https://business.vic.gov.au/tools-and-templates/letter-of-demand-template"
              class="list-group-item list-group-item-action"
            >
              Letter of Demand
            </a>
            <a
              href="https://resources.workable.com/business-contract-termination-letter"
              class="list-group-item list-group-item-action"
            >
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
