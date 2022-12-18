// 需求 工具函数，字符串参数，匹配文件，把匹配情况通知所有的监听器

const {search} = require('./utils')

search('小阿七').on('found', () => {
    console.log('找到了');
}).on('unfound', () => {
    console.log('没有找到');
}).on('error', (err) => {
    console.log(err);
})
