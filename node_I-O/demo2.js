const fs = require('fs')
const path = require('path')
console.log('脚本开始')

setTimeout(() => {
    console.log('定时器')
}, 1);
Promise.resolve().then(()=> {
    console.log('我是微任务');
})
process.nextTick(()=> {
    console.log('process.nextTick');
})
fs.readFile(path.join(__dirname + '/a.txt'), 'utf-8', (err, data) => {
    if (err) { return }
    console.log(data);
})

console.log('脚本结束')
// 打印结果
// 脚本开始
// 脚本结束
// process.nextTick
// 我是微任务
// 定时器
// 我是异步读取文本
