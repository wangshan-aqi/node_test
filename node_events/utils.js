const { EventEmitter } = require('events');
const fs = require('fs');

function search(params) {
    const EvE = new EventEmitter()
    // 流文件 chunk被分块
    const a = fs.createReadStream('./a.txt', { encoding: 'utf-8' })

    a.on('data', (chunk) => {
        tail = chunk.slice() 
        console.log(chunk);
        if (chunk.match(new RegExp(params))) {
            EvE.emit('found')
        } else {
            EvE.emit('unfound')
        }
    }).on('error', (error) => {
        EvE.emit('error', error)
    })
    return EvE
}

exports.search = search