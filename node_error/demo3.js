const http = require("http");

// async await异步代码捕获异常

const server = http.createServer(async (req, res) => {
    try {
        await asyncFun()
    } catch (error) {
        console.log(error)
        res.end('服务器异常，请稍后重试')
    }
})
function asyncFun() {
    new Promise(() => {
        throw new Error('我是一个错误')
    })
}

server.listen(5050, () => {
    console.log('服务被监听，开始运行')
})