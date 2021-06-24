## js函数传参是`按值`传递还是`按引用`传递的？

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

## 箭头函数

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
