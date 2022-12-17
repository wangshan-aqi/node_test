/** 除了transform方法 
 * 还有flush方法 它会在整个读写流结束之前被调用，
 * 这样就提供了一个接口，
 * 让我们可以在可读流结束时向可写流返回一个额外的数据*/ 
// 需求： 过滤数据，把符合条件的数据写入指定文件， 并计算通过率

const { Transform, pipeline, Readable } = require('stream');
const fs = require('fs');
// const { pipeline } = require('stream');
const obj = [
    { name: '基利安·姆巴佩', age: 23 },
    { name: '梅西', age: 35 },
    { name: 'C罗', age: 37 },
    { name: '内马尔', age: 30 },
    { name: '莫德里奇', age: 37 },
    { name: '库尔图瓦', age: 30 },
    { name: '马内', age: 30 },
    { name: '凯恩', age: 29 },
    { name: '范戴克', age: 31 },
    { name: '孙兴慜', age: 30 },
    { name: '巴尔韦德', age: 24 },
    { name: '基米希', age: 27 },
    { name: '坎塞洛', age: 23 },
    { name: '福登', age: 22 },
    { name: '佩德里', age: 20 },
]
class myTransformStream extends Transform {
    constructor(options) {
        super({options, objectMode: true})
        this.counter = 0
        this.total = 0
    }
    _transform(chunk, encoding, callback) {
        this.total += chunk.length
        for (let item of chunk) {
            if (item.age > 30) {
                this.push(JSON.stringify(item))
                this.push('\n')
                this.counter++
            }
        }
        callback()
    }
    _flush(callback) {
        this.push('---------------')
        this.push('\n')
        this.push(`通过率：${this.counter}/${this.total}`)
    }
}

// 可读流
const r = new Readable({
    objectMode: true,
    read() {
        this.push(obj)
        this.push(null)
    }
})

// 转换流
const trans = new myTransformStream()

// 可读流
const b = fs.createWriteStream(__dirname + '/transform_flush_copy.txt')

pipeline(r, trans, b, (error) => {
   if (error) console.log(error)
})

