const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.get("/", (req, res) => res.send("From server Hello World!"));
// acecpt JSON
app.use(express.json());
// static file route
app.use(express.static(__dirname));
//  send file or image
app.get("/getFile", (req, res) => {
  res.sendFile(path.join(__dirname, "upload", "sc.jpg"));
});

// const port = 8000;
// app.listen(port, () => console.log(`App listening on port ${port}!`));

// const url = "mongodb://127.0.0.1:27017/";
const url = 'mongodb+srv://sajedul:test-12345@express.fqblq.mongodb.net/Test?retryWrites=true&w=majority&connectTimeoutMS=30000';

mongoose
  .connect(url, { connectTimeoutMS: 30000 })
  .then(() => {
    console.log("Database connected...");
    app.listen(8000, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });


// API Route 
const userRouter = require("./router/userRouter");
const authRouter = require("./router/authRouter");
const postRouter = require("./router/postRouter");
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);