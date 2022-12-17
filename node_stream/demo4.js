// 转换流
// 需求： 把前端上传的图片保存到服务器端
// http模块req， res流对象
// req=可读流 fs.createWriteStream
// res=可写流 利用可写流的write写入req的data
const http = require('http');
const fs = require('fs');
const { pipeline } = require('stream');

const server = http.createServer((req, res) => {
    const w = fs.createWriteStream(__dirname + '/a.jpg')
    // 这样写容易漏掉捕获错误
    // req
    // .on((error) => { console.log(error) })
    // .pipe(w)
    // .on((error) => { console.log(error) })

    // 可以使用pipeline
    pipeline(req, w, (err) => {
        console.log(error)
    })
    res.end('图片上传失败')
})

server.listen(5050, () => {
    console.log('可写流服务已启动');
})

// pipe管道
// 可读流.pipe(可写流)
// 数据的读取用pipe管道来处理，不用在手动的调用read和write方法
// 捕获错误，要分别监听可读流和可写流的error事件