// 可写流

const { Writable } = require('stream')
const fs = require('fs')
const path = require('path')
const obj =  {
    path: path.join(__dirname, '/test.txt'),
    content: '我是被写入的可写流文本'
}
class myWriteStream extends Writable {
    constructor(options) {
        super({...options, objectMode: true})
    }
    _write(chunk, encoding, callback) {
        fs.writeFile(chunk.path, chunk.content, { encoding }, (err) => {
            callback()
        })
    }
}

const w = new myWriteStream()

w.on('finish', () => {
    // 写入完内容调用
    console.log('写完了');
})
w.on('error', (err) => {
    console.log(err);
})
// 写入
w.write(obj)
// 结束可写流
w.end()