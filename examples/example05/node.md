### webpack爬坑之路--2017-04-23更新
之前学习vue.js时候学了下webpack的配置，现在开始学angular.js，虽然官方有2.0的angular-cli（type.js写的）感觉自己有必要吧webpack再爬坑一遍
### 作用
一切都是模块化（就是、css、图片等）
一个模块加载器、打包工具
前身browserify：缺陷--》只能打包js
### 安装webpack命令环境
`cnpm install webpack -g`
验证OK？
`webpack --version`   
### 生成package.json
工程文件（库描述、版本、作者、依赖项、启动脚本）
`npm init` 一路回车即可
### 安装本地的webpack
`cnpm install webpack -D`
### webpack的一个小例子
-  index.html  页面
-  entry.js    入口文件,编写咱需要的代码  
-  终端：`webpack entry.js bundle.js`

```
//index.html
<!DOCTYPE html>
<html ng-app='test'>
  <head>
     <meta charset="utf-8">
     <title>webpack-demo</title>
     <meta name="viewport" content="width=device-width,initial-scale=1.0,
     maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
     <!-- <link rel="stylesheet" type="text/css" href="static/css/reset.css"> -->
 </head>
 <body>
     <div id="app">

     </div>
     <script src='bundle.js'>

     </script>
 </body>
</html>

```
```
//bundle.js
var oApp=document.getElementById('app')
oApp.innerHTML=`<h3>welcome to webpack</h3>`

```
接着终端 `webpack entry.js bundle.js`
然后用浏览器打开index.html 你会惊奇的发现 `welcome to webpack`
### 自动解决依赖
- 默认支持common.js规范
- 默认支持javascript文件
需要loader加载器
### loader
loader类似一种转化器，它可以一个东西转化为另一个东西
- css文件:style-loader css-loader  `cnpm install style-loader css-loader -D`
注意：！用于连接多个loader
2.0之前 `require('style!css!./style.css')`
2.0之后不可以省略loader了`require('style-loader!css-loader!./style.css')`
可以看出这样很麻烦
### 配置webpack.config.js
作用：配置一些webpack需要的入口、出口
最好用这个
```
module.exports={
  entry:'./entry.js',//入口文件
  output:{
    filename:'bundle.js'//出口文件
  }
}
等价于在终端输入webpack entry.js bundle.js
此时只要在终端输入 webpack即可

```
每次引入css都要是不是很麻烦
```
module:{
  loaders:[{
    test:/\.css$/,
    loader:'sryle-loader!css-loader' //style-loader 要写前面
  }]
}
等价于require('style-loader!css-loader!./style.css')
```
但是这样还是很麻烦。每次更新都得在终端启动
下面介绍webpack自带的几个参数

### webpack自带参数
- webpack 开发环境下编译（打包）
- webpack -p 生产环境下编译（压缩）会自动吧bundle.js压缩成一行min版如jquery.min.js
- webpack -w 监听文件改动，自动更新，但是他不会刷新浏览器，所以还需要手动刷新
- webpack -d 开启生成source maps（用来调试）
