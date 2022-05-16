# Ts配置文件

## tsconfig.json
```json
{
    // 与文件相关的选项
    "files": [
        // 编译的文件
    ],
    "include": [
        // 编译的文件夹
    ],
    "exclude": [
        // 排除编译的文件
    ],

    // 继承其他配置文件
    "extends": "",
    // 保存时自动编译
    "complieOnSave": true,



    // 与编译相关的选项
    // 增量编译
    "incremental": true,
    // 打印诊断信息
    "diagnostics": true,
    // 目标语言的版本
    "target": "es5",
    // 生成代码的模块标准
    "module": "amd",
    // 将多个相互依赖的文件合成一个文件
    "outFile": "path",
    // ts引用的库
    "lib": [],
    // 允许编译js文件
    "allowJs": true,
    // 允许检查js文件，并报错
    "checkJs": true,
    // 指定输出目录
    "outDir": "path",
    // 指定输出文件根目录
    "rootDir": "path",
    // 生成声明文件
    "declaration": true,
    // 声明文件路径
    "declarationDir": "path",
    // 只生成声明文件
    "emitDecalrationOnly": true,
    ""
}
```

