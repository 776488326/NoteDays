# Ts函数类型

## 介绍

- 模块化代码，提高复用率

### 函数的声明
```ts
// 函数声明定义
function add(a:number,b:number):number {
    return a+b;
}

// 函数表达式定义
// =>左侧用括号包起来指定输入类型，右侧是输出类型
const add: (a:number,b:number) => number = function(a:number,b:number):number{
    return a+b;
}

// 接口函数形状定义
interface Iadd{
    (a:number,b:number):number
}
let add:Iadd;
```

### 默认参数，可选参数，剩余参数
- 默认参数：函数定义时形参被赋值，则为默认参数
- 可选参数：函数定义时形参有？，放在确定参数之后。
- 剩余参数：放在函数形参的最后，调用时传入的多余参数均在此处
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
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 对于重复定义的函数，typesripot会从前到后一次匹配，因此对于精确定义的函数重载优先写在前边。
// 函数重载是为了精确表达每种情况，即便不使用重载定义也依旧可以使用
```