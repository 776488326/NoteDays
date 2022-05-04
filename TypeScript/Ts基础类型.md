## 基础类型

### 布尔类型
```ts
let flag:Boolean = true;
```

### 数字类型
```ts
let num:number = 1;
```

### 字符串类型
```ts
let char:string = "哈哈！";
```

### undefined
```ts
let uni:undefiend = undefined;
```
### null
```ts
let obj:null = null;
```
***null和undefined可以赋值给其他类型的变量***

### 数组
```ts
// 一般写法
let arr:number[] = [10];
// 泛型写法
let arr:Array<number> = [10];
```

### 元组
```ts
// 数组中的类型，大小，位置都是一一对应的
let arr:[number,string,boolean]= [10,"haha",false];
```

### 枚举
```ts
// 枚举中的每个值都有编号，从0开始
enum color{
    red,
    green,
    blue
}
```

### any
```ts
// 不限制类型，个数
let val:any = "任意类型";
let arr:any[] = ["",0,true];
```

### void
```ts
// 但是可以返回undefined和null
let function say():void{
    console.log("声明没有返回值");
}
```

### object
```ts
let obj:object = {
    name:"xiaoli",
    age:18
} 
```

### 联合类型
```ts
// 通过 | 分隔类型，值可以从这些类型中取一个
// 内部对不同类型进行逻辑处理时，可以使用类型断言来针对不同类型进行处理
function say(str:string|number){}
```

### 类型断言
```ts
// (<变量类型>变量名) <——断言格式1
function say(str:string|number){
    if((<string>str).length){
        // 变量名 as 变量类型 <——断言格式2
        return (str as string).length;
    }else{
        return str.toString().length;
    }
}
```

### 类型
```ts
 name：string
```

### 接口
```ts
interface persion{
    first:string,
    last:string
}
```

### 类
```ts
class persion{
    constructor(first:string,last:string){

    }
}
```