# 初识TypeScript

## 介绍

- 由微软开发
- 是javascript的超集

### 特点

- 强大的类型系统
- 支持运行在浏览器中和Node.js环境中的任何javascript 
- 支持最新的javascript

### 安装

- npm Install -g typescript

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

