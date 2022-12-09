/* 
  笔记：
    网络中的数据都是按照二进制进行传输的！
    字符集（unicode）、字符编码（UTF-32）
*/


const buf = Buffer.from('test');
// 输出结果是按照16进制的方式表示的
// console.log(buf)


// 打印出74 16禁止对应的ascii,这里输出的是116,116对应的ascii是t。
console.log(parseInt(74, 16));

