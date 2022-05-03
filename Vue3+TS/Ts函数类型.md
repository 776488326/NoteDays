# Ts函数类型

## 介绍

- 模块化代码，提高复用率

### 函数的声明
```ts
function add(a:number,b:number):number {
    return a+b;
}
const add:number = function(a:number,b:number){
    return a+b;
}
```

### 可选参数和默认参数，剩余参数
- 函数定义时形参有默认值则为默认参数
- 函数定义时形参有？则为可选参数
- 放在函数形参的最后，在调用时传入的多余参数均放在此处
```ts
function add(a:number=3,b?:number,...a:number[]):number{
    console.log(a);
    return a+b;
}
```

### 函数重载
- 函数名相同，但是参数不同
- 当函数参数的类型不确定，产生的结果也不确定时，如果只想要其中的某几种情况，我们可以使用函数重载声明来规定形参可能的情况
```ts
function add(a:number|string,b:number|string):string|number{
    if(typeof a == "string" && typeof b == "string"){
        return a+b;
    }else if(typeof a == "number" && typeof b == "number"){
        return a+b;
    }
}
// 很明显函数内部只处理了a，b全为string，和number的情况，对于另外两种情况没有处理也不会报错

// 这时可以通过函数重载声明来规定形参的情况
function add(a:number,b:number){}
function add(a:string,b:string){}

console.log(add(3,1));

```