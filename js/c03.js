//向<ul>元素添加新的列表项
var list = document.getElementById('myul');

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

