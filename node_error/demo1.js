const http = require("http");

// 同步代码捕获异常

const server = http.createServer((req, res) => {
    try {
        if (req.url === '/data') {
           throw new Error('我是一个错误')
        }
        res.end('服务器正常')
    } catch (error) {
        console.log(error)
        res.end('服务器异常，请稍后重试')
    }
})

server.listen(5050, () => {
    console.log('服务被监听，开始运行')
})