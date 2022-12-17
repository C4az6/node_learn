var net = require('net');
// 创建服务器
var server = net.createServer();
server.listen(12306, '127.0.0.1');

server.on('listening', () => {
  console.log('服务已经启动')
  console.log(server.address())
})

server.on('connection', socket => {
  console.log('有新连接了');
  // 接收客户端发送过来的数据
  socket.on('data', data => {
    console.log(data.toString());
  })
})