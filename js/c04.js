var noteInput, noteName, textEntered, target;

//noteName:标题2初始内容为Audio Note
//noteInput：输入框
noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

function writeLabel (e) {
  //针对IE5-IE8，检查事件对象
  if(!e) {
    e = window.target;
  }

  //获取属性
  target = e.target || e.srcElement;

  textEntered = target.value;
  noteName.textContent = textEntered;
}

function record(target) {
  target.setAttribute('data-state', 'stop');
  target.textContent = 'stop';
}

function stop(target) {
  target.setAttribute('data-state', 'record');
  target.textContent = 'record';
}

function recorderControls(e) {
  if(!e) {
    e = window.event;
  }

  target = e.target || e.srcElement;

  //撤销事件的默认行为
  if(e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }

  switch(target.getAttribute('data-state')) {
    case 'record':
      record(target);
      break;
    case 'stop':
      stop(target);
      break;
  }
}



//可以判断浏览器是否支持addEventListener
if(document.addEventListener) {
  //click鼠标点击事件,匿名函数用于传入参数
  document.addEventListener('click', function(e) { recorderControls(e); }, false);
  //（输入框）表单输入事件
  noteInput.addEventListener('input', writeLabel , false);
}
else {
  noteInput.attachEvent('onkeyup', writeLabel);
}