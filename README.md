## js函数传参是按值传递还是按引用传递的？

1 js分**基本数据类型**和**引用数据类型**

2 可以把形参理解为是一个变量

3 当函数调用时传递的是基本数据类型，是按值传递

4 当函数调用时传递的是引用数据类型，传递的是一个地址指针，如果改变这个指针对应的对象的值，函数外面的数据会被改变

5 当函数调用时直接改变传递的引用数据的指针，形参变量会指向一个新的指针，不会对函数外面的数据有所改变

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
