const fs = require('fs');
const path = require('path');


const file = path.join(__dirname + '/test1.txt')
fs.readFile(file, (err, data)  => {
    if  (err) {
        return
    }
    console.log(data.toString())
});

