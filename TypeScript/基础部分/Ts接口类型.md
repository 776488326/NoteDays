# Ts接口

## 介绍

- 是对象属性和方法的描述
- 是一种规范，约束
- 可作为类型来使用
- 要求对象的”形状“必须与接口定义完全一致，不可少实现或多定义

### 可选属性

- 在定义的属性名后跟？来表示可选
```ts
interface student{
    name:string,
    age:number,
    sex:string,
    score:number,
    phonenumber?:number
}
```

### 任意属性

- 在接口中，通过【propName：string】来定义一个任意的属性
```ts
// 定义任意属性，指定类型为any
// 可选属性和确定属性的类型都必须是任意属性的类型的子集
// 一个接口中只能有一个任意属性
// 如果需要定义多个类型的属性，可以指定任意属性为联合类型
interface persion{
    name: string,
    age？: number,
    [propName:string]:string
    // 此处会报错，因为任意属性类型为string，而可选属性类型为number（建议将任意属性类型指定为联合类型或any）
}
```

### 只读属性

- 在定义的属性名前加readonly 来表示
```ts
interface student{
    name:string,
    age:number,
    sex:string,
    readonly score:number,
    phonenumber?:number
}
```

### 定义函数类型

- 如要表示函数类型，则需要给接口定义调用签名
```ts
// 定义方式：在接口内部书写类似于只有参数列表和返回值类型的函数定义
interface student{
    (name:string,score:number):boolean
}
// 使用该类型作为函数类型
const xiaoming:student = function (name:string,score:number){
    return fasle;
}
```

### 类类型

- 定义接口，接口中的方法只有声明没有实现
- 接口继承接口 extends
- 类实现接口 implements
```ts
interface say{
    say()
}
class persion implements say{
    say(){
        console.log("666")
    }
}
//实现多个接口
class persion implements say,do{
    say(){
        console.log("666")
    },
    do(){
        console.log("666")
    }
}
//接口可以继承其他的接口用于汇总接口便于类的一次性实现
interface thing extends say,do{

}

class persion implements thing{
    say(){
        console.log("888")
    },
    do(){
        console.log("888")
    }
}
```

### 接口继承类

- 定义类，接口使用extends继承

```ts
class persion{
    name:string = 'fengliang'
}
interface Ipersion extends persion{

}
class p extends Ipersion{
    name = "liang"
}
```

