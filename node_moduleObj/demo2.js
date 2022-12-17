// 导出模块
const str = "我是一个字符串"
const test = () => {
    console.log("我是测试函数");
}

// module.exports = {
//     str,
//     test
// }

// console.log(module);

// 另一种方式 不可以混用

exports.str = str;
exports.test = test;

// console.log(module。exports === exports);