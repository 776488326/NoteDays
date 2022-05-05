# eslint配置

## 介绍

- 语法检查

### 安装

- npm i eslint-loader -D

### 配置一个rules规则
```js
module{
    rules:[
        {
            test:/\.js$/,
            use:["babel-loader","eslint-loader"]
        }
    ]
}

```
