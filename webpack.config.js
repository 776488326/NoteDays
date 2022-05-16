const htmlwebpackplugin = require("html-webpack-plugin");
module.exports = {
    entry: "入口文件",
    output:{
        filename: "打包生成的文件名",
        path:path.resolve(__dirname,"./dist"),
        clean: true, //打包前删除上次生成的打包文件
        assetModuleFilename: "images/[contenthash][ext]" // 设置导入的资源文件夹，文件名，扩展名
    },
    mode: "development",//开发模式

    devtool: "inline-source-map",//精准定位源文件错误位置

    plugins: [
        new htmlwebpackplugin({
            template: "入口文件",
            filename: "打包生成的文件名",
            inject: "打包的js文件引入的位置"
        })
    ],

    devServer: {  //实时更新
        static: "./dist"
    },

    module:{
        rules: [
            {
                test: /\.png$/,         //导出url
                type: "asset/resource",
                generator:{
                    filename: "images/[contenthash][ext]" // 设置导入的资源文件夹，文件名，扩展名。优先级更高
                }
            },
            {
                test: /\.svg$/,         //导出data.url
                type: "asset/inline",
            },
            {   
                test: /\.txt$/,         //导出源代码
                type: "asset/source",
            },
            {
                test: /\.jpg$/,         //导出url或data.url
                type: "asset"
            },
            {
                test: /\.css$/,         //解析css
                use: ["style-loader","css-loader"] //从右往左依次执行
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:"file-loader",
                    options:{
                        publicPath:"../dist/images",   // 决定图片的url路径
                        outputPath:"images",           // 决定文件本地输出路径
                        name:"[hash:5].[ext]"          // 修改文件名，扩展名
                    }
                }]
            }
        ]
    },
    resolve:{
        alias:{
            "&":path.resolve(__dirname,"./src")
        },
        extensions: [".json",".js",".vue"]
    },
    externalsType: "扩展模块的类型（此处为script）",
    externals:{
        jquery:[
            "cdn链接",
            "第三方模块暴露的标识符"
        ]
    }
}