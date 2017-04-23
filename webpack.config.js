module.exports={
  entry:'./entry.js',//入口文件
  output:{
    filename:'bundle.js'//出口文件
  },
  devtool:'source-map',//直接生成source-map,f12打开source选项就可以看到跑过哪些文件,
  module:{
    loaders:[{
      test:/\.css$/,
      loader:'style-loader!css-loader'
    },{
      test:/\.js$/,
      loader:'babel-loader',
      exclude:/node_modules/ //排除哪些目录
    }]
  },
  resolve:{
    'extensions':['.js','.css','.vue','.json','.jsx'] //配置可以省略的后缀名,别名
  }

}
