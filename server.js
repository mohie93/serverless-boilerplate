// packages
require('dotenv').config({});
const express = require('express');
const cors = require('cors');
const httpServerless = require('serverless-http');

// const
const app = express();
const port = process.env.PORT || 3000;

// handle and manage cross-origin calls
app.use(cors());

// handle and manage json requests
app.use(express.json());

// handle routes
app.use('/api/v1/health_check', async (req, res) => {
  res.status(200).json({ message: "OK", version: require("./package.json").version });
});

// you can add your endpoints here or calling from routes folder under src/routes

// running the app localy
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

// export express server as a serverlss http app
exports.handler = httpServerless(app);

// export express server as an app
exports.app = app;