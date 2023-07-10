# Roxiler-Systems-Coding-Challange
This is a README file for the project "Project Name". It provides an overview of the project and its components.
Backend

The backend of this project is developed using Express.js, a popular web application framework for Node.js. Express.js simplifies the process of building robust and scalable web applications by providing a set of flexible features and tools.
Installation

To run the backend locally, follow these steps:

    Clone the repository: git clone [https://github.com/your-username/project-name.git](https://github.com/Akshay-Gengaje/Roxiler-Systems-Coding-Challange.git)

    Navigate to the backend directory: cd /Backend

    Install dependencies: npm install

    Set up the MongoDB Cloud database by creating an account and obtaining the connection URI.

    #Create Enviornment Variable File
    Create a .env file in the backend directory and add the following:

    MONGODB_URI=<your-mongodb-connection-uri>

    Start the server: npm start

The backend server will start running on http://localhost:8000.
API Endpoints

The backend exposes the following API endpoints:

    GET /api/transections: Retrieves a list transections with month or searching by title, description, price.
    GET /api/combined: It is combined data of 3 controller barchartController, pieChartController, statisticsController.
   
Please refer to the source code and API documentation for more details on the available endpoints and their functionality.
Database

This project utilizes MongoDB Cloud as the database. MongoDB is a NoSQL document database that provides flexibility and scalability for storing and retrieving data. By using the cloud version, you can take advantage of MongoDB's managed services and easily integrate it with your application.

The backend of this project has the following dependencies:

    **axios** (version 1.4.0): A popular HTTP client for making API requests from Node.js.
    **cors** (version 2.8.5): A middleware that enables Cross-Origin Resource Sharing (CORS) in Express.js, allowing requests from different origins.
    **dotenv** (version 16.3.1): A module for loading environment variables from a .env file into process.env in development.
    **express** (version 4.18.2): A fast and minimalist web application framework for Node.js that simplifies the process of building web applications and APIs.
    **mongoose** (version 7.3.1): An Object Data Modeling (ODM) library for MongoDB and Node.js that provides a straightforward way to interact with MongoDB databases.
    **morgan** (version 1.10.0): A HTTP request logger middleware for Node.js that logs HTTP requests to the console, which is useful for debugging and monitoring.
    **nodemon** (version 2.0.22): A development tool that automatically restarts the server whenever changes are made to the backend code, making the development process more efficient.
