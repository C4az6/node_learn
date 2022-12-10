/* 
  event 事件触发器模块：
  前后端事件绑定的方式：
    前端：通过 click，mouseMove(协议)给DOM元素绑定；通过UI操作来触发；
    后端：继承自EventEmitter的实例；通过emit('name')的触发


    API：
      .on(事件名称,回调函数)          # 用来注册事件
      .emit(事件名称,参数)            # 用来触发事件，也叫发射事件
      .removeListener(事件名称,事件对应回调函数)    # 移除事件
      .off(事件名称,事件对应回调函数)      # 移除事件，和removeListener一样
      .removeAllListeners(事件名称,不传默认移除所有事件)    #移除所有事件,注意有参数和没有参数的细节
      .getMaxListeners()      # 返回当前监听器最大限制数的值
      .listenerCount(eventName)        # 返回监听器的总数量

      细节：
        1.不要使用 newListener作为事件名称来注册事件，因为这个是内置的事件名！
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
ce.on('test2', foo2);

setInterval(() => {
  ce.emit('test');
  ce.emit('test2')
}, 1000);


setTimeout(() => {
  // ce.removeListener('test', foo);
  // ce.off('test', foo);
  // ce.off('test2', foo2);
  ce.removeAllListeners('test');
}, 3000)

// 执行结果：每隔2s执行一次foo和foo2的函数