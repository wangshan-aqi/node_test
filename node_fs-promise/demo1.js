// 需求1: 读取a,b,c三个文件的内容
// 需求2: 依次读取a,b,c三个文件的内容
// 需求3: 同时读取三个文件的内容
const fs = require('fs');
const path = require('path');
const pathDir = path.join(__dirname)
// 层层嵌套不容易阅读，写法麻烦

fs.readFile(pathDir + '/a.txt', 'utf-8', (err, data) => {
    if (err) return
    console.log(data);
    fs.readFile(pathDir + '/b.txt', 'utf-8', (err, data) => {
        if (err) return
        console.log(data);
        fs.readFile(pathDir + '/c.txt', 'utf-8', (err, data) => {
            if (err) return
            console.log(data);
        })
    })
})