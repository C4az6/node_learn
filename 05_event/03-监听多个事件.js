/* 
  event 事件触发器模块：
  前后端事件绑定的方式：
    前端：通过 click，mouseMove(协议)给DOM元素绑定；通过UI操作来触发；
    后端：继承自EventEmitter的实例；通过emit('name')的触发
*/

const EventEmitter = require('events');
class CustomEvent extends EventEmitter { };

// 创建一个自定义事件触发器的实例
const ce = new CustomEvent();
// 下面注册了2个事件，待会一起触发，看看不会不会执行2次回调函数。
function foo() {
  console.log('running foo...');
}

function foo2() {
  console.log('running foo2...');
}

ce.on('test', foo);
ce.on('test', foo2);

setInterval(() => {
  ce.emit('test');
}, 2000);

// 执行结果：每隔2s执行一次foo和foo2的函数