const fs = require('fs')
const path = require('path')

console.log('脚本开始')

setTimeout(() => {
    console.log('定时器')
    Promise.resolve().then(()=> {
        console.log('我是定时器内的微任务');
    })
}, 100);

Promise.resolve().then(()=> {
    console.log('我是微任务');
    setTimeout(() => {
        console.log('我是微任务中的宏任务');
    }, 100);
})
// 异步队列最先执行
process.nextTick(()=> {
    console.log('process.nextTick');
})

setImmediate(() => {
    console.log('我是setImmediate任务');
});

fs.readFile(path.join(__dirname + '/a.txt'), 'utf-8', (err, data) => {
    if (err) { return }
    console.log(data);
    setTimeout(() => {
        console.log('我是异步读取文件中的定时器任务');
    }, 1);
    setImmediate(() => {
        console.log('我是读取文件中setImmediate任务');
    });
})

console.log('脚本结束')
// 打印结果

// 脚本开始
// 脚本结束
// process.nextTick
// 我是微任务
// 我是setImmediate任务
// 我是异步读取文本
// 我是读取文件中setImmediate任务
// 我是异步读取文件中的定时器任务
// 定时器
// 我是定时器内的微任务
// 我是微任务中的宏任务