﻿# Roxiler-Systems-Coding-Challange
This is a README file for the project "Project Name". It provides an overview of the project and its components.
Backend

The backend of this project is developed using Express.js, a popular web application framework for Node.js. Express.js simplifies the process of building robust and scalable web applications by providing a set of flexible features and tools.
Installation

To run the backend locally, follow these steps:

    Clone the repository: git clone https://github.com/your-username/project-name.git

    Navigate to the backend directory: cd project-name/backend

    Install dependencies: npm install

    Set up the MongoDB Cloud database by creating an account and obtaining the connection URI.

    Create a .env file in the backend directory and add the following:

    makefile

    MONGODB_URI=<your-mongodb-connection-uri>

    Start the server: npm start

The backend server will start running on http://localhost:3000.
API Endpoints

The backend exposes the following API endpoints:

    GET /api/transections: Retrieves a list transections with month or searching by title, description, price.
    GET /api/combined: It is combined data of 3 controller barchartController, pieChartController, statisticsController.
   
Please refer to the source code and API documentation for more details on the available endpoints and their functionality.
Database

This project utilizes MongoDB Cloud as the database. MongoDB is a NoSQL document database that provides flexibility and scalability for storing and retrieving data. By using the cloud version, you can take advantage of MongoDB's managed services and easily integrate it with your application.
