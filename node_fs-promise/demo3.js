// 需求1: 读取a,b,c三个文件的内容
// 需求2: 依次读取a,b,c三个文件的内容
// 需求3: 同时读取三个文件的内容，全部读取后一次性打印到控制台

const fs = require('fs');
const path = require('path');
const pathDir = path.join(__dirname)

// async 处理异步读取
async function taskAsync() {
    try {
        const a = await fs.promises.readFile(pathDir + '/a.txt', 'utf-8')
        console.log(a);
        const b = await fs.promises.readFile(pathDir + '/b.txt', 'utf-8')
        console.log(b);
        const c = await fs.promises.readFile(pathDir + '/c.txt', 'utf-8')
        console.log(c);
    } catch (error) {
        console.log(error);
    }
}
taskAsync()
// async 处理同步打印
async function taskSync() {
    try {
        let taskContent = []
        const a = await fs.promises.readFile(pathDir + '/a.txt', 'utf-8')
        const b = await fs.promises.readFile(pathDir + '/b.txt', 'utf-8')
        const c = await fs.promises.readFile(pathDir + '/c.txt', 'utf-8')
        taskContent.push(a, b, c)
        console.log(taskContent);
    } catch (error) {
        console.log(error);
    }
}   

taskSync()

