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
