const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("From server Hello World!"));
// acecpt JSON
app.use(express.json());
// static file route
app.use(express.static(__dirname));

const userRouter = require('./router/userRouter');
app.use('/api/user', userRouter);

//  send file or image
app.get('/getFile', (req, res) => {
    res.sendFile(path.join(__dirname, 'upload', 'sc.jpg'))
    })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
