//This code is setting up the basic structure for a web server using the Express and Socket.io libraries, and the built-in http module of Node.js.

//importing the Express.js library. Express is a minimal and flexible web application framework for Node.js that provides a robust set of features for web and mobile applications.
const express = require('express');

//creates an Express application instance. The app object has methods for routing HTTP requests, configuring middleware, rendering views, registering a template engine and more.
const app = express();

//importing the built-in http module of Node.js. This module provides an HTTP server and client. It is used to create an HTTP server that listens for incoming requests.
const http = require("http");

//import the Socket.io library. Socket.io is a JavaScript library for real-time web applications. It allows you to establish two-way communication between your server and client. Socket.io enables real-time, bidirectional and event-based communication. Server is a class.
const { Server } = require('socket.io');

//import cors library
const cors = require("cors");

//allow our project to accept cors 
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});