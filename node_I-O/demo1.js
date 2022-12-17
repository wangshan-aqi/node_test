const fs = require('fs')
console.log('脚本开始')

setTimeout(() => {
    console.log('定时器')
}, 1);

fs.readFile('./README.md', 'utf-8', (err, data) => {
    console.log(data);
})

console.log('脚本结束')