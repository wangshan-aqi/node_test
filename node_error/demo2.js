const http = require("http");

// Promise异步代码捕获异常

const server = http.createServer((req, res) => {
    new Promise(() => {
        throw new Error('我是一个错误')
    }).catch((error) => {
        console.log(error)
        res.end('服务器异常，请稍后重试')
    })
})

server.listen(5050, () => {
    console.log('服务被监听，开始运行')
})