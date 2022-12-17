const net = require('net');
var server = net.createServer();
server.listen(12306, '127.0.0.1');

server.on('listening', () => {
  console.log('服务已经启动了');
})

server.on('connection', socket => {
  console.log('有新的链接');
  socket.on('data', data => {
    console.log("data: ", data.toString());
  })
})