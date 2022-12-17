

// Buffer.alloc(size, fill, encoding)
// size: buffer长度 
// fill: 初始buffer文本内容
// size: buffer编码格式 默认值 utf-8

const buffer = Buffer.alloc(5)

console.log(buffer);
// 如果write的长度超过了 size的大小，则后面的内容会被忽略
buffer.write('hello')
console.log(buffer);
console.log(buffer.toString());

// 类数组
console.log(buffer.length); // length获取buffer的长度
console.log(buffer[0])// 可以通过下标获取buffer的某个值
buffer[0] = 72 // 可以通过下标修改buffer的某个值
console.log(buffer.toString());
// 类数组 可以对buffer进行遍历
const arr1 = ['49','20','4c','6f','76','65','20','5a','68']
const buf1 = []
for (const iterator of arr1) {
    buf1.push(`0x${iterator}`)
}
const bufToString = Buffer.from(buf1).toString()
console.log(bufToString);

// buffer转换ascii码
function BufferToAscii(buffer, isUpperCase = false, isReverse = false) {
    const newBuffer = Buffer.from(buffer);
    if (isReverse) {
        newBuffer.reverse()
    }
    let Ascii = newBuffer
    for(let index = 0; index < newBuffer.length; index++ ) {
        let bufferItem = newBuffer[index];
        let ascii = String.fromCharCode(bufferItem)
        Ascii += ascii
    }
    if (isUpperCase) {
        Ascii.toUpperCase()
    } else {
        return Ascii
    }
}

console.log(BufferToAscii('hello'));