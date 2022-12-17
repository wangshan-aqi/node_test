// 需求： 把文件test的内容拷贝到B文件，同时把字母变成大写
// 除了transform方法 还有flush方法
const { Transform, pipeline } = require('stream');
const fs = require('fs');
// const { pipeline } = require('stream');

class myTransformStream extends Transform {
    constructor(options) {
        super(options)
    }
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
        callback()
    }
}
const a = fs.createReadStream(__dirname + '/test.txt')
const b = fs.createWriteStream(__dirname + '/test_copy.txt')
const trans = new myTransformStream()

pipeline(a, trans, b, (error) => {
   if (error) console.log(error)
})

