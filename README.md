# web前端快速笔记(javascript)

## 开发环境：

* ubuntu vscode Firefox

## html css笔记

* [HTML CSS](/README2.md)

### javascript的document

> #### 对象类型：document
>
> #### 属性：
>
> 如title
>
> #### 事件：
>
> 什么时候发生，如页面和页面上的元素完成加载时
>
> #### 方法：
>
> 用来做什么，如使用元素ID访问一个元素
>

### javascript的内置对象

> #### 浏览器对象模型：
>
>
> |_window
>
> |_____document
>
> |_____history
>
> |_____location
>
> |_____navigator
>
> |_____screen
>
> #### 文档对象模型：
> ![avatar](ct_htmltree.gif)
> #### 全局javascript对象：
> `String`
>
> `Number`
>
> `Boolean`
>
> `Date`
>
> `Math`
>
> `RegEx`
>

```javascript
//浏览器对象模型 example:
//产生一个浏览器对话框
window.print();
//设备像素宽度
window.screen.width;

//DOM example:
//通过id获取元素
document.getElementById('one');
//当前页的上次修改日期
document.lastModified;

//全局对象 example:
//转换为大写
var hotel = "abC";
hotel.toUpperCase();
//返回PI
Math.PI();
```

### javascript DOM

#### 访问并更新DOM树

1. 定位到与需要操作的元素所对应的节点。
2. 使用它的文本内容、子元素或属性。

##### 一、访问元素

单个元素：
&emsp;&emsp; `getElementById`
&emsp;&emsp; `querySelector`
多个元素：
&emsp;&emsp; `getElementsByClassName`
&emsp;&emsp; `getElementsByTagName`
&emsp;&emsp; `querySelectorAll`
元素间遍历：
&emsp;&emsp; `parentNode`
&emsp;&emsp; `previousSibling`、`nextSibling`
&emsp;&emsp; `firstChild`、`lastChild`

##### 二、操作这些元素

访问、更新文本节点
&emsp;&emsp; `nodeValue`
操作HTML内容
&emsp;&emsp; `innerHTML`
&emsp;&emsp; `textContent`
&emsp;&emsp; `createElement`、`createTextNode`
访问或更新属性
&emsp;&emsp; `className`、`id`
