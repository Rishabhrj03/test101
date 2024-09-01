Company Rating & Review Application

This repository contains the code for a Company Rating & Review application, which includes both frontend and backend components. Follow the steps below to set up and run the application locally.
Prerequisites

Before you begin, ensure you have the following installed:

    Node.js (includes npm)
    MongoDB (or access to a MongoDB instance)

Getting Started
Frontend Setup

    Navigate to the frontend directory:

    bash

cd frontend

Install the necessary dependencies:

bash

npm install

Start the frontend development server:

bash

    npm start

    By default, the frontend will be served on http://localhost:3000.

Backend Setup

    Navigate to the backend directory:

    bash

cd backend

Install the required dependencies:

bash

npm install

Create a .env file in the backend directory with the following environment variables:

bash

PORT=4000
MONGO_URL='your MongoDB URL'

    Replace 'your MongoDB URL' with your actual MongoDB connection string.

Start the backend server:

bash

npm start

By default, the backend server will run on http://localhost:4000.
