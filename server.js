const http = require('http')
const app = require('./app')
const port = process.env.PORT || 4500;
const server = http.createServer(app);

server.listen(port, () => console.log("App is running  " + port));