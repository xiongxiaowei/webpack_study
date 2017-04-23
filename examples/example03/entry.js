var a=require('./a')
var oApp=document.getElementById('app')

require('style-loader!css-loader!./style.css')
oApp.innerHTML="<h3>welcome to webpack</h3>"+a
