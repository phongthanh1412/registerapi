# User Registration System

A complete user registration and authentication system built with **NestJS** (backend) and **React** (frontend).

## Features

- User registration with email/password
- Login authentication with password verification
- Password hashing with bcrypt
- MongoDB database integration
- Form validation
- Modern UI with Tailwind CSS
- Responsive design

## Tech Stack

**Backend:** NestJS, MongoDB, Mongoose, bcrypt  
**Frontend:** React, Vite, React Router, React Hook Form, React Query, Tailwind CSS

---

## Quick Start

### Prerequisites

- Node.js v18 or higher
- MongoDB (local or MongoDB Atlas)

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### 2. Configure Database

**Option A - Local MongoDB:**
Edit `backend/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/userregistration
PORT=3000
```

**Option B - MongoDB Atlas (Cloud):**
Edit `backend/.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/userregistration
PORT=3000
```

### 3. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```
Backend runs on: http://localhost:3000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on: http://localhost:5173

### 4. Test the App

1. Open http://localhost:5173
2. Click "Create Account"
3. Register with email and password
4. Try logging in

---

## Project Structure

```
registerapi/
├── backend/               # NestJS backend
│   ├── src/
│   │   ├── user/         # User module (controller, service, schema)
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── .env
├── frontend/             # React frontend
│   ├── src/
│   │   ├── pages/       # Home, Login, SignUp
│   │   ├── api/         # API integration
│   │   └── App.jsx
│   └── .env
└── README.md
```

---

## API Endpoints

### POST `/user/register`
Register a new user.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "email": "user@example.com",
    "createdAt": "2024-11-24T10:30:00.000Z"
  }
}
```

### POST `/user/login`
Authenticate user.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "user": {
    "email": "user@example.com"
  }
}
```

### GET `/user/all`
Get all registered users.

**Response (200):**
```json
[
  {
    "email": "user@example.com",
    "createdAt": "2024-11-24T10:30:00.000Z"
  }
]
```

---

## Troubleshooting

**Backend won't start:**
- Ensure MongoDB is running
- Check `.env` file configuration
- Run `npm install` in backend folder

**Frontend can't connect:**
- Make sure backend is running on port 3000
- Check API URL in `frontend/src/api/api.js`

**Database connection error:**
- Verify MongoDB is running: `mongod --version`
- Check `MONGODB_URI` in `.env`
- For MongoDB Atlas: Whitelist your IP (0.0.0.0/0)
