# 初识webpack

## 介绍

- 前端工程化工具
- 将前端所有的资源文件都作为模块处理
- 根据模块的依赖关系进行静态分析，生成对应的静态资源
- 将源代码，经过编译，压缩，语法检查，兼容性处理，生成浏览器可以高效，稳定运行的代码

### 安装

- 安装Node.js / Macos——》brew install node
- 安装webpack / npm i webpack webpack-cli -D
- 安装全局webpack npm i webpack webpack-cli -g
- webpack必须借助webpack-cli，全局和本地都必须安装
- 全局作为指令使用，本地作为项目依赖使用

### 运行

- 在需要打包的目录下运行cmd命令 npx webpack
- 如果是全局安装的webpack，则可直接使用 webpack
- 局部安装需要使用npx来查找webpack的安装位置
- 默认安装的webpack只能够识别转换es6的模块化语法，对于es6的其他语法（如let，箭头函数，剩余参数等）全部不做处理
- 默认只能编译打包js和json文件，生产环境能够压缩代码

### 配置

- 必须创建webpack.config.js文件
- 在内部暴露配置对象
- 对象中必须的配置有entry，output，mode
