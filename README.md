# node_test
node_api   Study
# node  每个模块学习 
# nodejs
NodeJs 是一个开源的跨平台的JavaScript运行时环境。它几乎是任何类型项目的流行工具。
NodeJs 在浏览器之外运行V8 JavaScript 引擎（Goole Chrome 的内核）。这使得Nodejs的性能非常好。
NodeJs应用程序在单个进程中运行。无需为每个请求创建新的线程。NodJjs在其标准库中提供了一组异步的I/O原语，以防止JavaScript代码阻塞，通常，NodeJs中的库时使用非阻塞范式编写的，使得阻塞的行为成为异常而不是常态。
当NodeJs执行I/O操作时（比如从网络读取、访问数据库和操作系统），NodeJs将在响应返回时恢复操作（而不是阻塞线程和浪费CPU周期等待）。这允许NodeJs使用单个服务器处理数千个并发连接，而不会引入管理线程并发（这可能是错误的重要来源）的负担。
NodeJs具有独特的优势，因为数百万为浏览器编写JavaScript的前端开发者现在无需学习完全不同的语言，就可以编写除客户之外的服务端代码。
在NodeJS中可以毫无疑问的是使用新的ECMAScript标准，因为你不许等待所有用户更新他们的浏览器，你负责通过更改NodeJs版本来决定哪个ECMA Script版本，你可以通过运行带有标志的NodeJs来启用特定的实验性能。