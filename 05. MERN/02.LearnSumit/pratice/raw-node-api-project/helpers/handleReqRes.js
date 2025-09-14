// dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const { notFound } = require("../handlers/routeHandlers/notFoundHandler");
// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handling
  // 1.get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const method = req.method.toLowerCase();
  const headers = req.headers;
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const queryStringObject = parsedUrl.query;
  const requestProperties = {
    parsedUrl,
    method,
    headers,
    path,
    trimmedPath,
    queryStringObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFound;
  
  chosenHandler(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};
    const payloadString = JSON.stringify(payload);
    // return final response
    res.writeHead(statusCode);
    res.end(payloadString);
  });

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  
  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    // response handle
    res.end("Hello Programmers!");
  });
};

module.exports = handler;
