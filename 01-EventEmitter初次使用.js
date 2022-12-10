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

// 通过on的方式注册事件
ce.on('test', (data) => {
  console.log('test事件被手动触发 ', data);
});


setTimeout(() => {
  ce.emit('test', 'alexander');
}, 2000)