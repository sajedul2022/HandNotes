const http = require('http');

const users = [
    {name: 'John', age: 30},
    {name: 'Dew', age: 25},
]
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : "*"} )
    res.end(JSON.stringify(users))
})

server.listen(3000, ()=>{
    console.log('Server Running Successfully')
})