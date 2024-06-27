# Node-CRUD

This repository demonstrates CRUD operations using Node.js as middleware and MySQL database. It was developed as a Proof of Concept (POC) to learn backend technologies.

## Features

- **Create:** Add new records to the MySQL database.
- **Read:** Retrieve data from the database.
- **Update:** Modify existing records in the database.
- **Delete:** Remove records from the database.

## Technologies

- **Node.js:** JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
- **MySQL:** Relational database management system.
- **RESTful API:** Architectural style for designing networked applications.

## Project Structure

- **`server.js`:** Entry point for the Node.js application.
- **`userRoutes/`:** Directory containing route definitions for CRUD operations.
- **`userController/`:** Directory containing logic for handling requests and responses.
- **`userServices/`:**  Directory containing connection to models.
- **`models/`:** Directory containing database models and schema definitions using MySQL.

## Prerequisites

- **Node.js** installed
- **MySQL** installed and running

## Installation

- **Clone the repository:** git clone https://github.com/csdheepan/node-CRUD.git
- **Navigate project directory:** cd node-CRUD
- **Install dependencies:** npm install
- - **Configure MySQL connection:**
  - **File creation:** Create a .env file in the root directory.
  - **.env file:** Add the following environment variables to the .env file:
                  - **DB_HOST=your-database-host**
                  - **DB_USER=your-database-username**
                  - **DB_PASSWORD=your-database-password**
                  - * DB_NAME=your-database-name**
- **Configure MySQL connection:** 
 
 
     
- **Run server** Run server using command node server.js.

 
## API Endpoints

- **Create User**
  - **Endpoint:** `POST /users/addUser`
  - **Description:** Adds a new user to the database.
  - **Example:** `http://localhost:3000/users/addUser`

- **Update User**
  - **Endpoint:** `PUT /users/updateUser/:customerId`
  - **Description:** Updates an existing user's information.
  - **Example:** `http://localhost:3000/users/updateUser/{customerId}`

- **Delete User**
  - **Endpoint:** `DELETE /users/deleteUser/:customerId`
  - **Description:** Deletes a user from the database.
  - **Example:** `http://localhost:3000/users/deleteUser/{customerId}`

- **Get All Users**
  - **Endpoint:** `GET /users/getAllUsers`
  - **Description:** Retrieves all users from the database.
  - **Example:** `http://localhost:3000/users/getAllUsers`


# Conclusion

This project is a practical example of building RESTful APIs with CRUD functionality using Node.js and MySQL.
It provides a foundational understanding of backend development, essential for anyone learning to build server-side applications.

