// 需求： 把前端上传的图片保存到服务器端
// http模块req， res流对象
// req=可读流 fs.createWriteStream
// res=可写流 利用可写流的write写入req的data

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const w = fs.createWriteStream(__dirname + '/a.jpg')
    req.on('data', (chunk) => {
        w.write(chunk)
    })
    req.on('end', () => {
        w.end()
        res.end('图片上传成功')
    })
    // w.on('finish', (err) => {
    //     console.log('我写完了');
    // })
    w.on('error', (err) => {
        console.log(err);
        res.end('图片上传失败')
    })
})

server.listen(5050, () => {
    console.log('可写流服务已启动');
})
