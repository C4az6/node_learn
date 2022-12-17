var net = require('net');
// 创建socket连接
var socket = net.connect(12306, '127.0.0.1');
// 服务器成功后的回调
socket.on('connect', () => {
  console.log('已经连接到服务器')
})

// 写入数据
socket.write('hello server');
socket.on('data', data => {
  console.log(data.toString());
})