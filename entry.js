import a from './a'
import b from './b'
var oApp=document.getElementById('app')

require('./style.css')
oApp.innerHTML="<h3>welcome to webpack</h3>"+(a.a+b.b)
