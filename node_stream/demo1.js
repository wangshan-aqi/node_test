// 可读流

const { Readable } = require('stream')

new Readable({
    // 可读流到缓冲区的最大子结束
    highWaterMark: 16* 1024,
    // 编码格式
    encoding: null,
    // 处理JS对象要把值改为true 默认处理 字符串，buffer
    objectMode: false,
    // 将数据push到缓冲区,内部调用
    read: function() {}
})

class myReadStream extends Readable {
    constructor(options, data) {
        super(options)
        this.data = data
    }
    _read() {
        this.push(this.data)
        // 结束往缓冲区push内容
        this.push(null)
    }
}

const r = new myReadStream({ encoding: 'utf-8'}, '我是阿七')
// 非流动模式
r.on('readable', () => {
    console.log(r.read())
    // 一个一个读取buffer数据
    // let chunk
    // while((chunk = r.read(1))) {
    //     console.log(chunk);
    // }
})
// 流动模式
r.on('data', (chunk) => {
    console.log(chunk);
    // console.log(`Received ${chunk.length} bytes of data.`);
    // r.pause();
    // console.log('There will be no additional data for 1 second.');
    // setTimeout(() => {
    //     console.log('Now data will start flowing again.');
    //     r.resume();
    // }, 1000);
})

// r.on('end', () => {
//     console.log('读取结束');
// })
// r.on('error', (err) => {
//     console.log(err);
// })
