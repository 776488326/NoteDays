# devServe

## 介绍

- 搭建客户端服务器模拟真实环境

### 安装

- npm i webpack-dev-serve
```js
devServer:{
    static: path.resolve(__dirname,"./目录")
}
```

### 配置项

- static：指向当前服务的物理路径
- compress：是否压缩代码
- port：配置服务端口号
- headers：配置响应头
- proxy：配置代理
- https：配置https服务
- historyApiFallback：配置404时默认访问的页面
- host：配置为0.0.0.0，则局域网内用户均可访问
- hot：配置为true，则为模块热替换
- liveReload：配置为true，则为模块热更新

