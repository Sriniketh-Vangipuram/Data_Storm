# Sprint 10 - MongoDB Atlas CRUD API

## Live Demo

Backend API URL:

https://data-storm.onrender.com

### API Endpoints

GET /posts

https://data-storm.onrender.com/posts

POST /posts

https://data-storm.onrender.com/posts

DELETE /posts/:id

https://data-storm.onrender.com/posts/:id

---

## Project Overview

This project is a REST API built using Express.js, MongoDB Atlas, and Mongoose.

The objective of this sprint was to replace volatile in-memory data storage with persistent cloud storage using MongoDB Atlas.

The application supports basic CRUD operations for managing posts and demonstrates cloud database integration using an ODM (Object Data Modeling) approach.

---

## Features

* MongoDB Atlas Cloud Database
* Mongoose ODM Integration
* Environment Variable Configuration
* Create Posts
* Retrieve Posts
* Delete Posts
* Persistent Data Storage
* RESTful API Design
* Render Deployment

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv

### Deployment

* Render

---

## Project Structure

backend/

src/
├── config/
│ └── db.js

├── models/
│ └── Post.js

├── routes/
│ └── postRoutes.js

├── app.js
└── server.js

.env
.gitignore
package.json

---

## Database Schema

Post

{
"title": "String",
"content": "String",
"createdAt": "Date"
}

---

## API Routes

### Create Post

POST /posts

Request Body

{
"title": "My First Post",
"content": "Hello MongoDB Atlas"
}

---

### Get All Posts

GET /posts

---

### Delete Post

DELETE /posts/:id

Example:

DELETE /posts/6850f7b123456789

---

## Installation

Clone the repository

git clone https://github.com/Sriniketh-Vangipuram/Data_Storm.git

Navigate into project

cd backend

Install dependencies

npm install

Create .env

PORT=5000

MONGO_URI=your_mongodb_connection_string

Run development server

npm run dev

---

## MongoDB Atlas Setup

1. Create MongoDB Atlas Account
2. Create M0 Sandbox Cluster
3. Create Database User
4. Configure Network Access
5. Copy Connection String
6. Add Connection String to .env

---

## Deployment

This project is deployed on Render.

Deployment URL:

https://data-storm.onrender.com

Environment Variables Used:

PORT

MONGO_URI

---

## Testing

The API was tested using Postman.

Tested Routes:

* POST /posts
* GET /posts
* DELETE /posts/:id

---

## Author

Sriniketh Vangipuram

Sprint 10 - The Data Storm
MongoDB Atlas & Mongoose CRUD Implementation
