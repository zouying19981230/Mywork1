// 第一节 ES6开发环境搭建
// var a = 1;
let a = 4;
console.log(a);
// import {a} from './temp.js';
// import {a,add} from './temp';
// console.log(a);

// 第2节 新的声明方式
// var a="zy";
// console.log(a);

//如何理解var声明全局变量
// 用匿名函数对它进行包裹，然后在匿名函数中调用这个a变量，看是否可以调用。
// let a="lj520";
// window.onload = function(){
//     console.log(a);
// }


//区块的方式测试var是全局声明
// var a = 2;
// // // {
// // //     let a = 3;
// // // }
// // // console.log(a);


// 测试let局部申明
//只在区块里面申明，看控制台显示什么
// var a = 2
// {
//     let a = 3
// }
// console.log(a)

// for(var i = 0; i < 10; i++){
//     console.log('循环体内：' + i)
// }
// console.log('循环体外：' + i)

// const a = 'zy'
// var a = 'bgwd'
// console.log(a)

// let a = 0;
// let b = 1;
// let c = 2;
// // 数组的解构赋值
// let [a,b,c,d] = [1,2,3];
// console.log(a);
// console.log(d)

// let [a,b='bg'] = ['wd',undefined];
// console.log(a+b)

// let [a,b='bg'] = ['wd',null];
// console.log(a+b)

// 对象的赋值解构
// let {foo,bar} = {bar:'邹映',foo:'渣渣'}
// console.log(foo+bar)

// let foo;
// // {foo} = {foo:'错误'}
// ({foo} = {foo:'正确'}) // 一定要加个括号
// console.log(foo)

// const [a,b,c,d,e] = 'boge1'
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// 扩展运算符...
// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3)

// let arr1 = ['BOGE','WUDI','YYDS'];
// let arr2 = arr1; // 更改arr2时，会污染arr1
// let arr2 = [...arr1] // 保护arr1数组
// arr2.push('TXDY');
// console.log('arr1 = ' + arr1);
// console.log('arr2 = ' + arr2);

// 剩余运算符 rest ...
// function taiji(first,...arg){
//     console.log(arg.length);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

// 如何循环输出rest运算符
// function taiji(first,two,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6,7);

// ES5字符串拼接的例子
// let a = '邹映';
// let b = '我们这边很多人都相信';
// document.write(b)

// ES的写法
// let a = '邹映';
// let b = `<b>哈哈哈哈</b>${a}就是个渣渣`;
// document.write(b)

// let i = 'i';
// let blog = "abcdefghijklmn";
// document.write(blog.indexOf(i));

// // ES6直接用includes就可以判断，不再返回索引值
// document.write(blog.includes(i));

// // 判断开头是否存在
// document.write(blog.startsWith(i));

// // 判断结尾是否存在
// document.write(blog.endsWith(i));

// // 复制字符串
// document.write('*'.repeat(3)); // 复制3个*

// ES6数字操作
// ES6数字验证
// let a = 11/4
// console.log(Number.isFinite(a));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// ES5数字验证  区别:ES6更加严谨,只有NaN
// let a = 11/4
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('TAIJI'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100 + '2'));

// let a = 918.1
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

// // 整数取值范围 2的53次方
// let a = Math.pow(2,53)-1;
// console.log(a);


// // 最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);

// // 最小安全整数
// console.log(Number.MIN_SAFE_INTEGER);

// // 安全整数判断
// console.log(Number.isSafeInteger(a));


// // ES新增的数组知识
// // find()实例方法
// let arr = [1,2,3,4,5,6,7,8];
// // 箭头函数 
// // find(参数：1.值 2.索引 3.数组)
// // value:表示当前查找的值
// // index:表示当前查找的数组索引
// // arr:表示当前数组
// var v = arr.find((value,index,arr)=>{
//     // 返回索引大于4的
//     return index > 4;
// });
// console.log(v);

// // findIndex()方法:返回索引
// let arr1 = [1,2,3,4,5,6,7,8];
// var i = arr1.findIndex((value) => value>4);
// console.log(i);

// // fill()实例方法:填充(可能覆盖)，参数1.内容 2.开始位 3.结束位
// // 注意点：左闭右开
// let arr = ['csm','邹映','fw','hello'];
// arr.fill('web',1,3);
// console.log(arr);

// filter()数组去重?(过滤!)

// var myArr = [1,3,4,5,6,3,7,4];
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

// let json = {
//     '0':'csm',
//     '1':'邹映',
//     '2':'fw',
//     length:3
//     // length必须写
// }
// // 把json数组转成array Array.from方法
// let arr = Array.from(json)
// console.log(arr);

// // Array.of方法
// let arr = Array.of(3,4,5,6);
// console.log(arr);

// // 数组循环for of
// let arr = ['c','s','m'];
// for(let item of arr){
//     console.log(item);
// }

// // for of索引
// let arr = ['c','s','m'];
// for(let index of arr.keys()){
//     console.log(index);
// }

// // for of内容加索引
// // entrie()实例方法:同时输出数组的内容和索引
// let arr = ['c','s','m'];
// for(let [index,val] of arr.entries()){
//     console.log(index + ':' + val);
// }


// // 剖析
// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

// ES6箭头函数
// 'use strict' ES5必须在最上面
// ES6如果在里面用严谨模式不能用默认值例:b=1
// function add(a,b=1){
//     // 'use strict'
//     if(a === 0){
//         throw new Error('This is error');
//     }
//     return a+b;
// }
// console.log(add(1,2));
// console.log(add.length); // 必须要传的参数


// // 改成箭头函数
// var add = (a,b=2) => a+b;
// // 一句话可以不写方法体，超过一句就要写
// var add = (a,b=2) => {
//     console.log('test');
//     return a+b;
// }
// console.log(add(1));

// 对象的函数解构
// let json = {
//     a:'csm',
//     b:undefined
// }
// function fun({a,b='web'}){
//     console.log(a,b);
// }
// fun(json);

// 数组的函数解构
// let arr = ['csm','邹映','fw'];
// function fun(a,b,c,d){
//     console.log(a,b,c,d);
// }
// fun(...arr);

// in的用法
// let json = {
//     a:'csm',
//     b:'邹映'
// }
// // 'a' 指的是key(key-value)
// console.log('a' in json);

// const moduleA = {
//   state: () => ({ ... }),
//   mutations: { ... },
//   actions: { ... },
//   getters: { ... }
// }

// const moduleB = {
//   state: () => ({ ... }),
//   mutations: { ... },
//   actions: { ... }
// }

// const store = new Vuex.Store({
//   modules: {
//     a: moduleA,
//     b: moduleB
//   }
// })

// store.state.a // -> moduleA 的状态
// store.state.b // -> moduleB 的状态

// 数组判断
// let arr = [,,,];
// console.log(arr.length); // 输出3,所以ES5不太行
// // 注意：这里的0指的是数组下标位置是否为空
// console.log(0 in arr); // 输出false
// let arr1 = ['csm',];
// console.log(0 in arr1); //输出的是true

// // 数组遍历 forEach
// let arr = ['csm','邹映','fw'];
// arr.forEach((val,index) => console.log(index,val))
// // 数组遍历 filter
// arr.filter(x => console.log(x))
// // 数组遍历 some
// arr.some(x => console.log(x))
// // 数组遍历 map替换
// console.log(arr.map(x => 'web'));

// 数组转成字符串
// let arr = ['csm','邹映','fw'];
// console.log(arr.toString());
// console.log(arr.join('|'));

// //对象
// let name ='li';
// let skill= 'web';
// var obj ={name,skill};
// console.log(obj);

//key值的构建
// let key ='skill';
// var obj ={
//     [key]:'web'
// }
// console.log(obj.skill);

//自定义对象的方法
// let obj ={
//     add:function(a,b){
//         return a+b;
//     }
// }
// consle.log(obj.add(1,2));

// Object.is()对象对比
// is()
// let obj1={name:'li'};
// let obj2={name:'li'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name));

// //===同值相等，is严格相等
// console.log(+0===-0);
// console.log(NAN===NAN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NAN,NAN));

// //assign
// let a={a:'li'};
// let b={b:'is'};
// let c={c:'zz'};
// let d=Object.assign(a,b,c);
// console.log(d);

//SYmbol ES6新增的
// let a=new String;
// let b=new Number;
// let c=new Boolean;
// let d=new Array;
// let e=new Object;
// let f=Symbol();
// console.log(typeof(f));

//symbol打印
// let li=Symbol('DIDI');
// console.log(li);
// console.log(li.toString);


//Symbol在对象中的应用
// let li=Symbol();
// let obj={
//     [li]:'DiDi'
// }
// console.log(obj[li]);

// obj[li]='zhazha'
// console.log(obj[li]);

//Symbol对元素的保护作用
// let obj={name:'DiDi',skill:'web',age:18};
// for(let item in obj){
//     console.log(obj[item]);
// }


// let obj={name:'li',skill:'web'};
// let age=Symbol();
// obj[age]=18;
// console.log(obj);
// for(let item in obj){
//     console.log(obj[item]);
// }
// console.log(obj[age]);

// //set声明
// Set和Array的区别 Set不允许有重复的值，如果有只显示一个，Set不是数组 
// let setArr =new Set(['li','DiDi','web','DiDi',]);
// setArr.add('前端技术');
// console.log(setArr);

//eg
// const s=new Set();

// [2,3,4,5,6,2,2].forEach(x => s.add(x));

// for(let i of s){
//     console.log(i);
// }

//has 查找set中的值
// console.log(setArr.has('li'));

//set值的删除
// setArr.clear();//删除全部

//删除一个
// setArr.delete('web');
// console.log(setArr);

//循环输出
//for...of
// for(let item of setArr){
//     console.log(item);
// }

// forEach
// setArr.forEach((value)=>console.log(value)); 


//size属性 size属性可以获取set的数量
// console.log(setArr.size);

//weakSet的声明 会输出两遍obj的值
// let weakObj =new WeakSet();
// let obj={a:'li',b:'zy'};
// //let obj1=obj;
// let obj1={a:'li',b:'zy'};
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

// const moduleA = {
//   state: () => ({
//     count: 0
//   }),
//   mutations: {
//     increment (state) {
//       // 这里的 `state` 对象是模块的局部状态
//       state.count++
//     }
//   },

//   getters: {
//     doubleCount (state) {
//       return state.count * 2
//     }
//   }
// }

//map数据类型
//json
// let json={
//     name:'li',
//     skill:'web'
// };
// console.log(json.name);

//
// // =>
// var map=new Map();
// map.set(json,'I am');
// console.log(map);
// map.set('li',json);
// console.log(map);

//map 增删查
//get 取值
// console.log(map.get(json));
// // //delete 删除特定的值
// map.delete(json);
// //clear删除全部
// map.clear();
// //size
// console.log(Map.size);
// //has
// console.log(map.has('li'));

// var pro = new Proxy({
//   add:function(val) {
//     return val+100
//   },
//   name:'I am csm',
// },{
//   get:function(target,key,property) {
//     console.log('come in get');
//     return target[key];
//   },
//   set:function(target,key,value,reciver){
//     console.log(`setting ${key} = ${value}`);
//     return target[key] = value + '222';
//   }
// });

// console.log(pro.name);
// pro.name = '邹映';
// console.log(pro.name);
// console.log(pro.add(6));


// //map转成数组
// const myMap =new map()
// .set(true,7)
// .set({foo:3},['abc']);
// const arr=[...myMap]
// console.log(arr)

// const employee={
//     fristName:'DiDi',
//     lastName:'shisuizi'
// }

// const validator = {
//     set: function(obj, prop, value) {
//         if (prop === 'age') {
//             if(!Number.isInteger(value)) {
//                 throw new TypeError('Age is always an Integer, Please Correct it!');
//             }
//             if(value < 0) {
//                 throw new TypeError('This is insane, a negative age?');
//             }
//         }
//     }
// }; 
// let pr =new Proxy(employee,validator);

// pr.age=-2;

// var pro = new Proxy({
//     add:function(val) {
//       return val+100
//     },
//     name:'I am csm',
//   },{
//     get:function(target,key,property) {
//       console.log('come in get');
//       return target[key];
//     },
//     set:function(target,key,value,reciver){
//       console.log(`setting ${key} = ${value}`);
//       return target[key] = value + '222';
//     }
//   });
  
  // console.log(pro.name);
  // pro.name = '邹映';
  // console.log(pro.name);
  // console.log(pro.add(6));

//   let state = 1;
// function step1(resolve,reject){
//   console.log('1.开始-洗菜做饭');
//   if(state==1){
//     resolve('洗菜做饭')
//   }else{
//     reject('洗菜做饭-错误')
//   }
// }
// function step2(resolve,reject){
//   console.log('2.开始-坐下来吃饭');
//   if(state==2){
//     resolve('坐下来吃饭')
//   }else{
//     reject('坐下来吃饭-错误')
//   }
// }
// function step3(resolve,reject){
//   console.log('3.开始-收拾桌子');
//   if(state==3){
//     resolve('收拾桌子')
//   }else{
//     reject('收拾桌子-错误')
//   }
// }

// new Promise(step1).then(function(val){
//   console.log(val);
//   return new Promise(step2);
// }).then(function(val){
//   console.log(val);
//   return new Promise(step3);
// }).then(function(val){
//   console.log(val);
// });
