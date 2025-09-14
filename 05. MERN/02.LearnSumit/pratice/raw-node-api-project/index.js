/*
 * Tile: Raw-node-api-project
 * Description: A simple Node.js project using only the built-in HTTP module to create a web server.
 * Author: Sajedul Islam
 * Date: 2024-06-20
 */

// dependencies
const { log } = require("console");
const http = require("http");
const {handleReqRes} = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// configaration
app.config = {
  port: 6000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listening to port ${app.config.port}`);
  });
};

// hanlde request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
