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
