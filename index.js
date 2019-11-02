const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server connected to PORT: 3000");
});
