# Ts高级类型

## 交叉类型

- 将多个类型合并为一个类型，新的类型具有所有类型的特性
```ts
interface persion{
    say():string
}
interface dog{
    run():void
}
// 声明为交叉类型，&
let animal:persion & dog = {
    say(){}
    run(){}
}
```

## 联合类型

- 取值为多个类型中的一个
```ts
let p: number | string = "1";
// 字符串字面量联合类型
let p: "1" | "a" | "c" = "1";
// 数字字面量联合类型
let p: 0 | 1 | 2 = 1;
// 对象的联合类型
class persion ():void{
    say(){},
    eat(){},
}
class dog ():void{
    run(){},
    eat(){},
}
// 此时ani类型未确定，为persion和dog的联合类型
let ani = 1? new persion() : new dog();
// ani只能取两种类型中共有的属性方法
ani.eat()
```

## 索引类型

- 通过对象的属性名来获取对应的类型
```ts
interface Obj{
    a:number,
    b:string,
}
// T[K]
let c:Obj["a"]

// 通过T约束o的类型，通过K来继承T类型的所有key属性类型。
function obj<T,K extends keyof T>(o:T,v:K[]):T[K][]{
    return v.map(k=>o[k]);
}
```

## 映射类型

- 修改一个旧类型为新的类型
```ts
// 修改T类型中的所有属性为readonly
type Readonly<T> 
```

## 条件类型

- 判断条件是否满足来确定对应类型
```ts
// 三元表达式
type TypeName<T> = T extends string ? "string" : "object";
```

