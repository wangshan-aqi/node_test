# node应用运行在单个进程中
一个进程当中包含多个线程
# 非阻塞I/O利用异步模块和事件循环实现

【Node.js标准课程：2.非阻塞】 https://www.bilibili.com/video/BV13v4y1K7JG/?share_source=copy_web&vd_source=44b8db51c990726b2b7b7274419cd368
异步编程在nodejs中是一种常态
# 事件循环
setTimeout
setInterval

文件读写
数据库操作
网络请求

process.nextTick
setImmediate

# 异常处理

参考链接
- https://www.ruanyifeng.com/blog/2018/02/node-event-loop.html
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/