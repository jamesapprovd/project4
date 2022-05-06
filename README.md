# Project 4 - RoboCorp CRM App

RoboCorp is a web application designed for small businesses and sole proprietors to track their clients and their projects, using a simple customer relationship management (CRM) user interface. 

## User Problem

Small businesses or sole proprietors typically deal with many clients or client prospects in their businesses. If tracking is not done properly, it may result in time wasted finding the right client contact or project contact, or even the loss of potential business opportunities. In addition, there are many documents required throughout a client relationship life cycle, and as a business scales, it gets increasingly difficult to manage such administrative documents and client relationships at scale.

---

## Proposed Solution

A simple, intuitive and easy to use web application to allow resource constrained startups and sole proprietors to track clients, projects, and document stages.

---

## Key features and functions

1. Client management function

RoboCorp is a digital rolodex allowing tracking and management of corporate clients and their client contacts. 

2. Document Repository

RoboCorp’s document repository provides links to the most commonly used template documents throughout a customer’s life cycle: from start of the customer relationship to the termination of the relationship.

3. Project listing function 

Client’s projects are similarly listed in a separate section to allow easy tracking, management and an organised ledger of current ongoing projects. 

---

### Wireframes

The planning sketch of the project, pre-build:

![Main Page Wireframe](https://i.imgur.com/14GgRXs.png)

---

### Database Schema

RoboCorp was built using SQL with the following database schema

![Backend Data Flow Chart](https://i.imgur.com/Vsend7L.png)

---

### User Stories

The user experience of RoboCorp is intended to be simple and easy to navigate. Users will see the template document repository on the left side of the main page, users will be able to:

```
1.
- Create a new corporate client, with relevant details
- Read / View all clients created
- Update / Edit any client name, ID number and contact personnel
- Delete any client information

2.
- View all template documents in the document repository
- Download and use such template documents for clients as needed

3.
- Create a new project, with relevant details
- Read / View all projects created
- Delete project information

```
---

### Technical Usage

This project was built using the following, contributed by using standard Git flow on Github:

- React framework 
- BootStrap for CSS
- Axios for API calls
- Python/Django backend stack

---


## API Routes
| Route  | HTTP Verb | Purpose |
| :--- | :--- | :--- |
| `/clients/view_all_clients` | GET  | View entire client list |
| `/clients/add client`  | PUT | Add a client |
| `/clients/update_client`  | PATCH | Update client details |
| `/clients/del_client`  | DELETE | Delete a particular client |
| `/projects/view_all_projects` | GET  | View entire project list |
| `/projects/add_project`  | PUT | Add a project |
| `/projects/del_project`  | DELETE | Delete a particular project |

---

## Installation instructions

1. Download all of the server and front end Node dependencies by running this command in the root folder:
    `npm install`
2. Launch the application via the command:
    `npm run dev`

3. On most devices, your computer will open up a browser automatically and load the web application. In case it doesn't, open http://localhost:3000 in any browser of your choice to use the web application.



### Future features

The following add-on features may be considered in future iterations of the RoboCorp app:

- User Login and Authentication
- Status updates for client - to track at which stage of the contracting lifecycle the client is at
- Integration with DocuSign API for digital signing of template documents to each individual clients (requires user login and authentication function)

---
