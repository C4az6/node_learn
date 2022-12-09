/*
  2种场景：
    CPU密集的操作：压缩、解压、加密、解密（图形计算）；
    I/O密集：文件操作、http的网络操作、数据库操作；


  后端分层：
    1.web层（controller）：权限校验，封装，用户提示
    2.业务逻辑层（server层，LoginService）
    3.DAO（data access object）数据操作；
    4.持久层，数据库：（关系型：mysql、oracle，DB2），(非关系：MongoDB, redis,HBase)


  commonjs:
    1.一个文件是一个模块，拥有单独的作用域；
    2.普通方式定义的变量，函数，对象，都属于模块内部；
    3.require()引入模块
    4.exports，module.exports方式导出
  
  node中的顶层对象是：global
  web中的顶层对象是：window

  node中一个文件就是一个函数，一个函数就是一个模块。

*/
