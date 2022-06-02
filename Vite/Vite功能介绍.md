# 功能点

## npm依赖解析和预构建

- 如：我们在导入node-module中的模块时，可能会找不到路径。vite会自动进行以下操作。
- 基于esbuild来构建，将CommonJs，UMD转换为ESM
- 重写URL为合法的URL

## 支持引入ts文件

- 只对ts文件进行编译，不会在编译时进行语法检查
- 通过tsc --noEmit命令，可以在编译时检查语法

## 隔离语法提示

- 由于vite采用esbuild来转译，只支持没有类型系统的转译，和单个模块的转译
- 为了在编写代码时可以提示此类错误，通过配置tsconfig.json文件来解决。
```json
{
    "compilerOptions":{
        "isolatedModules":true
    }   
}
```

## 支持Vue

- Vue3 单文件组件支持：@vitejs/plugin-vue  官方插件
- Vue3 JSX支持：@vitejs/plugin-vue-jsx  官方插件
- Vue2支持：@inderfin/vite-plugin-vue2  社区插件

## 支持css

- 支持原生的css：如原生的一些css变量
- 集成了postCSS：会自动处理兼容问题
- 支持CSS Module：将css转为js，以js方式进行使用
- 支持CSS预处理器，sass，less，stylus等。需要安装相应的依赖。（npm i sass）

## 别名配置

- 配置vite.config.js
```js
export default defineConfig({
    resolve:{
        alias:{
            "@styles": "/src/assets/styles";
        }
    }
})
```
## 支持静态资源

## 支持WebWorker

## 支持WebAssembly

## 支持JSON和Glob多模块导入

## 
