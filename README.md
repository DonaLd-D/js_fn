## 1.js函数传参是`按值`传递还是`按引用`传递的？

1. js分**基本数据类型**和**引用数据类型**

2. 可以把形参理解为是一个变量

3. 当函数调用时传递的是基本数据类型，是按值传递

4. 当函数调用时传递的是引用数据类型，传递的是一个地址指针，如果改变这个指针对应的对象的值，函数外面的数据会被改变

5. 当函数调用时直接改变传递的引用数据的指针，形参变量会指向一个新的指针，不会对函数外面的数据有所改变

```
//基本数据类型按值传递
let a=1

function changeA(arg){
    arg=2
}
changeA(a)
console.log(a) // 1

//引用数据类型传递的是一个指针
let obj={
    a:1,
    b:2
}

function changeObj(arg){
    arg.a=2
    arg.b={
        a:3
    }
}
changeObj(obj)
console.log(obj) //{a:2,b:{a:3}}


//当直接改变引用的数据时，会把形参指向一个新的指针，外面的引用数据不会被改变
let _obj={
    a:1,
    b:2
}

function changeValue(arg){
    arg=3
}
changeValue(_obj)
console.log(_obj)//{a:1,b:2}
```

## 2.箭头函数

1. 箭头函数**可省略function单词**

2. 箭头函数**可省略return单词**

3. 箭头函数**可省略()**

4. 箭头函数**可省略{}**

5. 箭头函数**没有自己的this，arguments，super**

```
//es3 普通函数
function f1(){
    console.log('I am f1')
}

let f2=function(){
    console.log('I am f2')
}

//es6 箭头函数，括号可省略，花括号可省略，function单词可省略，return单词可省略
let f3=a=>a*3 
let f4=(a,b)=>a+b 
let f5=(a,b)=>{
    console.log(a+b)
    return 2
}

//箭头函数在数组使用
let arr=[1,3,5]
arr.map(i=>i+1)
    .map(i=>i*2)
    .map(i=>i*i)
//this是call的第一个参数
//把this理解为一个特殊的变量，每次函数调用时都会声明，指向调用函数的对象，类似python的self
let obj={
    a:1
}
let f6=function(){
    console.log(this)
}
let f7=()=>{
    console.log(this)
}

f6.call(obj) //{a:1}
f7.call(obj) //window
```

阮一峰对箭头函数的讲解，[点击直达](https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)

## 3.函数柯里化
```
let fn=function(n){
    let i=n;
    return function(m){
        let sum=m+(++i);
        console.log(m+"+"+i+"="+sum)
    }
}

let f=fn(10)
f(10)
f(20)
fn(10)(10)
fn(20)(10)
f(30)
f(40)

//实例的继承
let con=function(){
    this.a=1;
    this.b=function(){
        console.log("this is b")
    }
}

let newCon=new con();
console.log(newCon.a);
console.log(newCon.b);

let c=newCon.b;
c();
```
## 3.apply call bind用法区别

`apply` 第二个参数可以是数组或类数组
```
function sum(num1,num2){
return num1+num2
}

function callSum1(num1,num2){
  return sum.apply(this,arguments)
}

function callSum2(num1,num2){
  return sum.apply(this,[num1,num2])
}

console.log(callSum1(10,20))
console.log(callSum2(20,30))
```

`call` 参数列表必须展开
```
function callSum3(num1,num2){
  return sum.call(this,num1,num2)
}

console.log(callSum3(30,40))
```

`bind` 会返回一个函数实例
```
const _sum={num1:50,num2:60}

function callSum4(){
  return this.num1+this.num2
}

const _callSum4=callSum4.bind(_sum)

console.log(_callSum4())
```
