---
title: Vue.js基础笔记
date: 2019-01-09
tags:
 - js
 - Vue
categories:
 - 笔记
publish: false
---

## Vue模板语法

### 插值

> vue的模板语法{{}}双大括号插值 react{}

数据绑定最常见的形式就是使用 `Mustache` 语法 (双大括号) 的文本插值

```javascript
插入属性值 {{ msg }}
插入运算 {{ num + 1 }}
插入布尔值 {{ isTrue }}
插入JS表达式 {{ str.split('').reverse().join('') }}
插入三元运算符 {{ 1 > 2 ? '真的' : '假的' }}
插入字符串 {{ 'hahahahah' }}
插入对象 {{ {name:'zhangsan'} }}
```

### 指令

- 指令的介绍：指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。
- 指令 attribute 的值预期是单个 JavaScript 表达式（ `v-for` 例外）
- 指令的职责：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
- 指令的演示
  - `v-text`：元素的 `innerText` 属性，必须是双标签 跟 `{{}}` 效果是一样的 使用较少
  - `v-once`：一次性插值 `<span v-once>这个将不会改变: {{ msg }}</span>`
  - `v-html`：元素的 `innerHtml`
  - `v-if`：数据属性对应的值为假则不渲染，反之渲染 `appendChild()/removeChild()`
  - `v-else-if`
  - `v-else`
  - `v-show`：控制dom元素的显示隐藏 `display:none/block;`
    >**v-if 和 v-show的区别（官网解释）**  
    >
    >v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。  
    >v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做，直到条件第一次变为真时，才会渲染条件块。  
    >相比之下，v-show 就简单的多，不管初始条件是什么，元素总是会被渲染，并且只是简单的基于CSS进行切换。  
    >一般来说，v-if 有更高的切换开销，而v-show有更高的初始渲染开销。  
    >因此，如果需要非常频繁地切换，则使用v-show较好；如果在运行时条件甚少改变，则使用v-if较好
  - `v-bind`：绑定标签上的属性（内置属性和自定义属性）简写为 `:`
  - `v-on`:原生事件名 = '函数名'  简写为 `@`  
    `Vue.js` 为 `v-on` 提供了事件修饰符
    ```html
    <!-- 阻止单击事件继续传播 -->
    <a v-on:click.stop="doThis"></a>
    
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>
    
    <!-- 修饰符可以串联 -->
    <!--v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。-->
    <a v-on:click.stop.prevent="doThat"></a>
    v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
    
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    
    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis">...</div>
    
    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是从内部元素触发的 -->
    <div v-on:click.self="doThat">...</div>
    
    <!-- 点击事件将只会触发一次 -->
    <a v-on:click.once="doThis"></a>
    
    <!-- Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符。
    滚动事件的默认行为 (即滚动行为) 将会立即触发 
    而不会等待 `onScroll` 完成  
    这其中包含 `event.preventDefault()` 的情况  -->
    <div v-on:scroll.passive="onScroll">...</div>
    ```

## Vue计算属性

### 使用场景
模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。  
所以，对于任何复杂逻辑，你都应当使用计算属性。

### 与方法的比较

- 将同一函数定义为一个方法或者一个计算属性的最终结果确实是完全相同的
- 不同的是计算属性是基于它们的响应式依赖进行缓存的
- 只在相关响应式依赖发生改变时它们才会重新求值
- 每当触发重新渲染时，调用方法将总会再次执行函数
- 缓存的目的是避免多次执行性能开销比较大的计算属性

### 与侦听属性的比较
- `Vue` 提供了一种更通用的方式来观察和响应 `Vue` 实例上的数据变动：侦听属性
- 当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 `watch`
- 例子
  ```javascript
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
  ```

### 计算属性的setter
