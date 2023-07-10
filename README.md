# Roxiler-Systems-Coding-Challange
This is a README file for the project "Roxiler-System MERN App".

# Backend

The backend of this project is developed using Express.js, a popular web application framework for Node.js. Express.js simplifies the process of building robust and scalable web applications by providing a set of flexible features and tools.
Installation

Technologies Used

List the technologies and frameworks used in the backend development of this project.

    Node.js
    Express.js
    MongoDB
	
To run the backend locally, follow these steps:

    Clone the repository: git clone https://github.com/Akshay-Gengaje/Roxiler-Systems-Coding-Challange.git

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

    axios (version 1.4.0): A popular HTTP client for making API requests from Node.js.
    cors (version 2.8.5): A middleware that enables Cross-Origin Resource Sharing (CORS) in Express.js, allowing requests from different origins.
    dotenv (version 16.3.1): A module for loading environment variables from a .env file into process.env in development.
    express (version 4.18.2): A fast and minimalist web application framework for Node.js that simplifies the process of building web applications and APIs.
    mongoose (version 7.3.1): An Object Data Modeling (ODM) library for MongoDB and Node.js that provides a straightforward way to interact with MongoDB databases.
    morgan (version 1.10.0): A HTTP request logger middleware for Node.js that logs HTTP requests to the console, which is useful for debugging and monitoring.
    nodemon (version 2.0.22): A development tool that automatically restarts the server whenever changes are made to the backend code, making the development process more efficient.

# Frontend

	The frontend of this project utilizes several libraries and components to create a user-friendly interface. Here are the key dependencies used:
	React (version 18.2.0): A popular JavaScript library for building user interfaces.
	@emotion/react (version 11.11.1) and @emotion/styled (version 11.11.0): Libraries for CSS-in-JS styling, providing a powerful and flexible way to style React components.
	@fontsource/roboto (version 5.0.5): A package that provides the Roboto font for use in the application.
	@mui/icons-material (version 5.13.7) and @mui/material (version 5.13.7): The Material-UI library, which offers a set of pre-built React components following the Material Design guidelines.
	@mui/styled-engine-sc (version 5.12.0): A styled-engine package for Material-UI that integrates with styled-components.
	axios (version 1.4.0): A popular HTTP client for making API requests from the frontend.
	bootstrap (version 5.3.0): A CSS framework that provides a wide range of ready-to-use components and styles for building responsive web interfaces.
	chart.js (version 4.3.0): A JavaScript library for creating various types of charts and graphs.
	dotenv (version 16.3.1): A module for loading environment variables from a .env file into the frontend application.
	lodash (version 4.17.21): A utility library that provides helpful functions for manipulating and working with data in JavaScript.
	react-chartjs-2 (version 5.2.0): A wrapper for Chart.js library that provides React components for creating interactive charts and graphs.
	react-dom (version 18.2.0): A package that provides DOM-specific methods for React.
	react-dotenv (version 0.1.3): A package that allows you to access environment variables in React components.
	react-scripts (version 5.0.1): A set of scripts and configurations for running and building React applications.
	reactstrap (version 9.2.0): A library that provides Bootstrap components written in React.
	styled-components (version 6.0.3): A CSS-in-JS library that allows you to write CSS styles using JavaScript.

Installation

To set up the frontend locally, follow these steps:

    Clone the repository: git clone https://github.com/Akshay-Gengaje/Roxiler-Systems-Coding-Challange.git
    Navigate to the frontend directory: cd ./Client
    Install dependencies: npm install
    Start the development server: npm start
	Create a new file named .env in the root directory of your React project.
 		REACT_APP_API_KEY = 
		write backend api address here.
The frontend development server will start running and can be accessed in your browser at http://localhost:3000.
