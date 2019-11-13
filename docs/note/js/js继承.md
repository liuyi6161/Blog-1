---
title: JS继承
tags:
 - js
categories:
 - 笔记
date: 2019-11-12
---

## JS中继承的概念

通过某种方式让一个对象访问到另一个对象中的属性和方法，我们把这种方法称之为继承  
并不是所谓的xxx extends yyy

## 使用继承的意义

有些对象会有方法(动作、行为)，而这些方法都是函数，如果把这些方法和函数都放在构造函数中声明就会导致内存的浪费

```js
  function Person () {
    this.say=function(){
      console.log("你好")
    }
  }
  var p1 = new Person();
  var p2 = new Person();
  // false
  console.log(p1.say === p2.say);
```

## 继承的实现方式