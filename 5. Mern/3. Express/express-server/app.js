const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.get("/", (req, res) => res.send("From server Hello World!"));
// acecpt JSON
app.use(express.json());
// static file route
app.use(express.static(__dirname));

const userRouter = require("./router/userRouter");
app.use("/api/user", userRouter);

//  send file or image
app.get("/getFile", (req, res) => {
  res.sendFile(path.join(__dirname, "upload", "sc.jpg"));
});

const port = 8000;
app.listen(port, () => console.log(`App listening on port ${port}!`));

// const url = 'mongodb+srv://sajedul:test-12345@express.fqblq.mongodb.net/?retryWrites=true&w=majority&appName=express/';
// mongoose.connect(url, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Database connected...");
//     app.listen(8000, () => {
//       I;
//       console.log("Server is running...");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });



