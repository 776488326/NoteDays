# Ts类

## 介绍

- 与js中类的定义与使用是一致的

### 定义类
```ts
// 定义
class persion{
    name:string,
    age:number,
    constructor (name:string,age:number){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log("我是"+this.name!);
    }
}

// 使用
const xiaoming  = new persion("xiaoming",18);
```

### 类继承
```ts
// 调用父类中的构造函数和方法，使用super即可
class persion{
    name:string,
    age:number,
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    sayhi(){
        console.log("666");
    }
}

class student extends persion{
    constructor(name:string,age:number){
        super(name,age)
    }
    sayhi(){
        console.log("888");    
        super.sayhi();
    }
}
```

### 多态

- 多个子类继承父类时，对于父类的实例方法有不同的实现

### 修饰符

- 默认父类中的修饰符为public，外部及其子类均可访问。
- 修饰符为private 则只能在父类中使用。
- 修饰符protected 则能在父类和子类中使用。
- 修饰符readonly 表明其不可被外部修改。
```ts
// 只能在构造函数中进行readonly属性的修改
class persion{
    readonly name:string = "liangliang"
    age:number
    constructor(name:string){
        this.name = name;
    }
}
// 构造函数中的参数，一旦使用readonly修饰，则会自动在类内部创建该参数属性，只能在构造函数中修改
class persion{
    constructor(readonly:name:string){
    }
}
// 同理如果使用public修饰参数，则自动创建该参数属性，可被外部及其子类修改
// 同理如果使用protected修饰参数，则自动创建该参数属性，不可被外部修改

```
### 存取器

- 对于类中的属性，可以通过get，set方法对属性的访问修改进行控制
```ts
class persion{
    constructor(public name:string="xiaoming"){}
    get vname(){
        return this.name;
    },
    set vname(vname:string){
        this.name = vname;
    }
}

const p:perison = new persion("xiaohong");
console.log(p.vname);

// 如果只存在get，则为只读，如果只存在set则为只写，都存在才可读可写
```

### 静态属性

- 通过static修饰的类属性
- 只能通过类名来访问与修改，在类内部无法访问

### 抽象类

- 不可被实例化
- 内部的抽象方法没有具体的实现
- 主要用于子类的继承和对抽象方法的实现
```ts
abstract class persion{
    abstract name:string, //一般没有用
    abstract ability()
}
```