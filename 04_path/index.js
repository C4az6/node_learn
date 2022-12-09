/* 
  笔记：
    path的组成部分:
      path.basename: 文件名;
      path.dirname: 文件名的路径;
      path.extname: 文件的后缀;

    path.sep：提供平台特定的路径片段分隔符
      windows：\
      POSIX：/

    path.normalize: 路径规范化

    path.join: 拼接路径

    path.isAbsolute: 是否是绝对路径
    
    path.resolve: 将路径或路径片段解析成绝对路径
*/

const { dirname, basename, extname, sep, normalize, join, isAbsolute, resolve } = require('path');
// 尾部的目录分隔符会被忽略
/* console.log(dirname('/foo/bar/baz/asdf/quux'));
// 打印文件名称
console.log(basename('/foo/bar/baz/asdf/quux'))
// 文件后缀
console.log(extname('test.html'));
// 当前平台的分隔符
console.log(sep);
// 打印当前node的环境变量
console.log(process.env.PATH);
// normalize 路径规范化
console.log(normalize('/foo//////baz/test/..')) */

// path.join拼接路径
console.log(join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

// 是否是绝对路径
console.log(isAbsolute('/foo/bar'));

console.log(resolve('/foo/bar', '/baz'));
console.log('/foo/bar', '/tmp/file/')