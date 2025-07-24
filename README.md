
✅ React Login & Register System – Local Setup Guide 

This project has two main folders:

client → Frontend (React)

server → Backend (Node.js + Express + MySQL)

⚙️ Prerequisites 

Node.js & npm installed

MySQL installed and running

Git (optional, if cloning from GitHub)

🚀 Frontend Setup (React) 

Navigate to the client folder:

cd client 

Install dependencies:

npm install npm install axios npm install react-router-dom npm install react-phone-input-2 npm install libphonenumber-js 

Start the development server:

npm start 🔧 Backend Setup (Node.js + Express) 

Navigate to the server folder:

cd server 

Install dependencies:

npm install npm install express npm install cors npm install mysql2 npm install bcryptjs 

Create a .env file in the server folder:

DB_HOST=localhost DB_USER=your_mysql_username DB_PASSWORD=your_mysql_password DB_NAME=your_database_name 

Start the backend server:

node server.js ✅ After Setup 

Backend should run on: http://localhost:5000

Frontend React app should connect to backend API routes correctly

