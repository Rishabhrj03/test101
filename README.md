##Company Rating & Review Application

This repository contains the code for a Company Rating & Review application. The project is divided into frontend and backend components, which need to be set up and run separately.
Prerequisites

Before setting up the application, ensure you have the following installed:

    Node.js (includes npm)
    MongoDB (or access to a MongoDB instance)

Getting Started
Frontend Setup

    Navigate to the frontend directory:

    bash

cd frontend

Install the dependencies:

bash

npm install

Start the frontend development server:

bash

    npm start

    The frontend server will typically run at http://localhost:3000.

Backend Setup

    Navigate to the backend directory:

    bash

cd backend

Install the dependencies:

bash

npm install

Configure environment variables:

Create a .env file in the backend directory and add the following environment variables:

bash

PORT=4000
MONGO_URL='your MongoDB URL'

    Replace 'your MongoDB URL' with your actual MongoDB connection string.

Start the backend server:

bash

    npm start

    The backend server will typically run at http://localhost:4000.

