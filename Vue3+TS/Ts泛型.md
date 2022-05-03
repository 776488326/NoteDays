# Ts泛型

## 介绍

- 在定义函数，接口，类时，不能预先确定要使用的数据类型。
```ts
function add<T>(a:T,b:number):T{
    return a+b;
}

console.log(add<string>("a",3)); ————》T为string
console.log(add<number>(3,3));———————》T为number

```

### 多个泛型参数的函数

```ts
function add<K,V>(a:K,b:V):K{
    return a+b;
}

console.log(add<string,number>("1",2))
```

### 泛型接口
- 在定义接口的时候为接口中的属性和方法指定泛型类型，使用接口时再具体指定

```ts
// 定义泛型接口
interface persion<T>{
    info:T,
    add(name:string,age:number):T
}
// 定义Info类型
class Info{
    name:string,
    age:number;
}
// 定义泛型的实现类
class student implements persion<Info>{
    info:Info,
    add(name:string,age:number):Info{
        this.info.name = name;
        this.info.age = age;
        return this.info;
    }
}

```

### 泛型类
- 类中的属性值的类型时不确定的，方法的参数及返回值的类型也是不确定的，在实例化时才能确定。
```ts
class Persion<T,V>{
    info:T
    say(name:T,age:V):T
}
const p:Persion = new Persion<string,number>();
p.say = function (x,y){return x+y};

// 调用
console.log(p.say("xiaoming",23));

```

### 泛型约束
- 用于约束泛型的结构，比如，我们使用泛型时，要求泛型必须有length属性
```ts
function len<T>(arr:T):T{
    return arr.length;
}
// 以上会报错,因为T为泛型，并不具有length属性
interface Ilength{
    lenght:number
}
// 让泛型去继承Ilenght接口即可
function len<T extends Ilength>(arr:T):T{
    return arr.length;
}
```