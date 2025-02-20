# To-Do App Backend

This is the **Node.js + Express + MongoDB backend** for the To-Do application.

## 🚀 Features
- **User Authentication** (Register, Login, JWT-based authentication)
- **Task Management** (Add, Update, Delete Tasks)
- **MongoDB Database** (Using Mongoose)
- **Secure API Calls** (Protected Routes)
- **Environment Variables** via `.env`

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Authentication:** JWT, bcrypt.js
- **API Testing:** Postman, cURL

---
##  Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/RashiPandey87/To-do-list.git
cd To-do-list/backend

Install Dependencies
npm install

Create a .env File
MONGO_URI=mongodb+srv://yourUser:yourPassword@cluster0.mongodb.net/todo-app?retryWrites=true&w=majority
JWT_SECRET=yourSecretKey
PORT=5000

Running the Backend Server
npm run dev
