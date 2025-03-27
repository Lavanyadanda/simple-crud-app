# simple-crud-app
Overview

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, MongoDB, and Mongoose. The app allows users to perform CRUD operations on a collection of products.

Features

Create a new product

Read all products

Read a single product by ID

Update a product by ID

Delete a product by ID

Technologies Used

Node.js - JavaScript runtime environment

Express.js - Web framework for Node.js

MongoDB - NoSQL database

Mongoose - ODM for MongoDB

dotenv - Environment variable management

Nodemon - Auto-restarting during development

Installation

Clone the repository:

git clone https://github.com/your-username/crud-app.git
cd crud-app

Install dependencies:

npm install

Create a .env file:

touch .env

Add the following variables inside .env:

PORT=5000
MONGO_URL=mongodb+srv://your-username:your-password@cluster.mongodb.net/dbname

Run the application:

npm run server

API Endpoints

Create a Product

POST /api/products

{
  "name": "Product Name",
  "price": 100,
  "description": "Product Description"
}

Get All Products

GET /api/products

Get a Single Product

GET /api/products/:id

Update a Product

PUT /api/products/:id

{
  "name": "Updated Name",
  "price": 150
}

Delete a Product
DELETE /api/products/:id
