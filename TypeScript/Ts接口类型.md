# Ts接口

## 介绍

- 是对象属性和方法的描述
- 是一种规范，约束
- 可作为类型来使用

### 可选属性

- 在定义的属性名后跟？来表示
```ts
interface student{
    name:string,
    age:number,
    sex:string,
    score:number,
    phonenumber?:number
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

