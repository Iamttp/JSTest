var msg = "你好吗";
//函数定义  替换.html文件中id=message的元素
function updateMessage() {
  var e1 = document.getElementById('message');
  e1.textContent = msg;
}
updateMessage();

