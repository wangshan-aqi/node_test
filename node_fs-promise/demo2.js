// 需求1: 读取a,b,c三个文件的内容
// 需求2: 依次读取a,b,c三个文件的内容
// 需求3: 同时读取三个文件的内容，全部读取后一次性打印到控制台

const fs = require('fs');
const path = require('path');
const pathDir = path.join(__dirname)
// fs.promise异步读取

fs.promises.readFile(pathDir + '/a.txt', 'utf-8')
    .then((data) => {
        console.log(data);
        return fs.promises.readFile(pathDir + '/b.txt', 'utf-8')
    })
    .then((data) => {
        console.log(data);
        return fs.promises.readFile(pathDir + '/c.txt', 'utf-8')
    })
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })

// fs.promise同步打印

const a = fs.promises.readFile(pathDir + '/a.txt', 'utf-8')
const b = fs.promises.readFile(pathDir + '/b.txt', 'utf-8')
const c = fs.promises.readFile(pathDir + '/c.txt', 'utf-8')

Promise.all([a, b, c])
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
