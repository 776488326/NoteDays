# Ts模块化

- 支持es6模块化和commonjs模块化
- 但是两者不可混用

## ES6的模块化

- 命名导入全部使用{}来解构对应的模块。
- 匿名导入则使用变量来接收单个模块。
- 分别暴露使用*来接收全部模块。

```ts
// 导出接口 
export interface P{
    x:number;
    y:number;
}
// 导入接口
import { P } from "/a";


// 导出函数 
export function a(){};
// 导入函数
import { a } from "/a";


// 默认导出，不需要函数名 
export default function (){};
// 导入匿名函数
import a from "/a";


// 命名导出 
function a(){};
export {a as b};
// 命名导入
import {b as c} from "/a";


// 引入再导出 
export {a as c} from "/b";
// 导入模块的所有成员
import * as All from "/a"
```

## common.js模块化

- 整体导出module.exports
- 导入使用关键字require

```ts
// 整体导出
module.exports = {
    a,
    b,
    c
}

// 整体导入
const {a,b,c} = require("/a");


// 分别导出
exports.a = a;
exports.b = b;

// 全部导入

const all = require("/a");
console.log(all.a , all.b);

```