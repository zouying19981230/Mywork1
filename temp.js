export var a = 'xx';
// export var b = 'DiDi';
// export var c = 'web';

// 包装成对象
var a = 'xx';
var b = 'DiDi';
var c = 'web';
export {a,b,c};
// 函数的模块化包装
export function add(a,b){
    return a+b;
}


// 只能有一个export default，可以有多个export

// export{
//     name as a,
//     cname as b,
//     skill as c
// }
