const { EventEmitter } = require('events')

const events = new EventEmitter()

events.on('event', function a() {
    console.log(111);
})
events.on('event', function b() {
    console.log(222);
})

// prependListener类似于数字的unshift方法 在监听器数组顶部插入
events.prependListener('event', function c() {
    console.log(333);
})
// 事件的注册顺序就是事件的执行顺序
events.emit('event')
// emit方法会同步的执行每一个监听器
console.log(events.listeners('event'));
// 打印结果
// [ [Function: a], [Function: b] ]


/**  因为emit方法是同步方法，所以必须先注册on方法，在调用emit方法
 *   因为异步的存在，  可以把emit方法放到异步方法中调用,然后再注册监听器
 *   例如process.nextTick(() => {
 *      events.emit('event') 
 *   }) 
 */