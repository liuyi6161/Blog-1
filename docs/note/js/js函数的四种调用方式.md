---
title: JS函数的四种调用方式
tags:
 - js
categories:
 - 笔记
date: 2019-11-27
publish: false
---

> 在ES6之前，函数内部的this是由该函数的调用方式决定的，跟大小写和书写位置无关

## 函数调用

直接调用函数时函数内部中的this指向window

```javascript
let age = 18
let name = '张三'
let p = {
  age: 15,
  name: '李四',
  say:function(){
    console.log(this.age, this.name)
  }
}
let f1 = p.say;
f1() // 输出：18 张三
```

## 方法调用

通过对象里的方法调用函数，函数内部中的this指向调用该方法的对象

```javascript
let age = 18
let name = '张三'
let p = {
  age: 15,
  name: '李四',
  say:function(){
    console.log(this.age, this.name)
  }
}
p.say() // 输出：15 李四
```

## 构造函数调用

通过new关键字来调用函数即为构造函数调用方式，函数内部的this指向该构造函数的实例

1. 首先查看本身有没有length属性
2. 如果本身没有该属性，那么去它的原型对象中查找
3. 如果原型对象中没有，那么就去原型对象的原型对象中查找，最终一直找到根对象（Object.prototype）
4. 最终都没有找到的话，我们认为该对象并没有该属性，如果获取该属性的值：undefined

```javascript
let age = 18
let name = '张三'
let p = {
  age: 15,
  name: '李四',
  say:function(){
    console.log(this.age, this.name)
  }
}
let s1 = new p.say()
// 输出：undefined undefined
```