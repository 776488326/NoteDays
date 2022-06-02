# SourceMap

## 介绍

- 用于映射打包后的文件
- 配置devtool选项
- 设置为fasle可以关闭映射

### eval模式（默认）

- 将所有模块包裹在eval中，在末尾注释@sourceURL
- 不会生成map文件
- 可以实现资源的映射

### source-map（生产推荐）

- 不通过eval包裹，在末尾注释sourceMapURL值为生成的map文件的路径
- 会生成map文件
- 可以实现资源的映射

### hidden-source-map

- 不通过eval包裹，在末尾没有注释
- 会生成map文件
- 存在map文件，但是没有注释关联，所以无法映射

### inline-source-map

- 不通过eval包裹，在末尾注释sourceDataUrl
- 不会生成map文件，以DataUrl的形式内嵌了
- 可以实现资源映射

### eval-source-map

- 通过eval包裹，在末尾注释sourceUrl
- 不会生成map文件，以sourceUrl形式内嵌
- 可以实现映射

### cheap-source-map

- 与source-map的区别是map不包含列记录

### cheap-module-source-map（开发推荐）

- 与cheap-module-source-map的区别是loader的sourcemap也只被映射为对应行
