# 初识TypeScript

## 介绍

- 由微软开发 FaceBook团队
- 是一套用于构建用户界面的javascript库
- 是JavaScript的超集

### 特点

- 拥有强大的类型系统，增强了编辑器的功能，比如代码补全，接口提示，跳转定义，代码重构等。
- 支持运行在浏览器中和Node.js环境中的任何javascript ，与ECMAScript同步更新。
- 核心理念是保留JavaScript的运行时行为，通过引入静态类型检查系统来提高代码的可维护性。
- ts为静态类型，在编译为js文件时进行类型检查，报类型错误提示。
- js为动态类型，没有编译过程，直接解释运行，报运行时错误提示。

### 安装

- npm Install -g typescript
- 在全局环境中添加了tsc命令

### 版本

- tsc -V

### 引用

- 直接引入ts会无法识别
- 在终端中使用tsc (ts文件) 进行编译生成对应的js文件

### 编译

- 除了手动tsc编译，还可在vscode中自动编译
- tsc --init 进行ts初始化————》生成tsconfig.json    
- 在该文件中可进行配置 outdir strict
- 在vscode中————》按以下顺序查找选项————〉 终端——运行任务——显示所有任务——tsc监视

### 第三方库

- 引入第三方库后，如果需要智能提示
- 需要安装第三方库的声明文件

### 内置对象

- 除了常见的基本类型的包装对象外
- JS对象中的Math，Date，RegExp也都支持
- Windows，Documents等DOM，BOM对象也支持