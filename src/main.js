// const api =jQuery('.test')//jQuery是一个全局变量
// api.addClass('red').addClass('blue')//链式操作
// //遍历所有刚才获取的元素，添加.red
// const x1=jQuery('.test1').find('.child')
// console.log(x1)
const api1=jQuery('.test')
api1.addClass('blue')
const api2=api1.find('.child').addClass('red')
api1.addClass('green')







// obj.fn(p1)//函数里的this就是obj
// obj.fn.call(obj,p1)