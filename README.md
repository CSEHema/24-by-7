# ✅ React Login & Register System – Local Setup Guide

This project consists of a full-stack user authentication system built with **React (Frontend)** and **Node.js + Express + MySQL (Backend)**.

---

## 📁 Project Structure

```
project-root/
├── client   # Frontend (React)
└── server   # Backend (Node.js + Express + MySQL)
```

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed on your system:

* [Node.js & npm](https://nodejs.org/)
* [MySQL](https://www.mysql.com/)

---

## 🚀 Frontend Setup (React)

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install axios
   npm install react-router-dom
   npm install react-phone-input-2
   npm install libphonenumber-js
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

4. React frontend will be available at:
   **[http://localhost:3000](http://localhost:3000)**

---

## 🔧 Backend Setup (Node.js + Express + MySQL)

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install express
   npm install cors
   npm install mysql2
   npm install bcryptjs
   ```

3. Create a `.env` file in the `server` folder and add the following variables:

   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   ```

4. Start the backend server:

   ```bash
   node server.js
   ```

5. Backend will be available at:
   **[http://localhost:5000](http://localhost:5000)**

---

## ✅ After Setup

* The **frontend React app** will run on: `http://localhost:3000`
* The **backend Express API** will run on: `http://localhost:5000`
* Ensure both servers are running simultaneously.
* The React app should now successfully communicate with the backend API.

---

## 🛠️ Notes

* Ensure your MySQL server is running and the database name provided in `.env` exists.
* Use tools like **Postman** to test API routes if needed.
* Customize environment variables and ports as required.

---

Let me know if you'd like me to add sample `.env`, API routes, or deployment instructions as well.
