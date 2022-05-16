# 命名空间

- 防止全局变量的污染

## 定义
```ts
namespace Space{
    export let a = "1";
    export function b (){
        console.log("");
    }
}
```

# 声明合并

- 将重复声明的变量成员合并

## 定义
```ts
// 接口的声明合并
interface a{
    x:string
}
interface a{
    y:number
}
// 所有的属性成员必须都实现，否则报错
let c:a = {
    x:"1",
    y:1
}

// 命名空间和函数，类，都可进行声明合并，但是命名空间必须位于函数和类的后边来声明
// 命名空间也可和枚举来进行声明合并。

```

# 安装声明文件

- 对于非ts的外部类库引入，需要借助声明文件
```ts
// 一般的外部js类库都会有类型声明包
通过cmd命令 @type/jquery i 即可安装 
```
